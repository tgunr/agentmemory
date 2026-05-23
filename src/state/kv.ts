import type { ISdk } from 'iii-sdk'
import { createClient, type RedisClientType } from 'redis'

let redisClient: RedisClientType | null = null
let redisConnected = false

async function getRedisClient(): Promise<RedisClientType | null> {
  if (redisClient) return redisClient
  const redisUrl = process.env.REDIS_URL || process.env.REDIS_URI
  if (!redisUrl) return null
  try {
    redisClient = createClient({ url: redisUrl })
    redisClient.on('error', (err) => console.error('[kv-redis] Redis error:', err.message))
    await redisClient.connect()
    redisConnected = true
    console.log(`[kv-redis] Connected to Redis at ${redisUrl}`)
    return redisClient
  } catch (err) {
    console.error('[kv-redis] Failed to connect to Redis:', err)
    redisClient = null
    return null
  }
}

function redisKey(scope: string, key: string): string {
  return `${scope}:${key}`
}

function scopePattern(scope: string): string {
  return `${scope}:*`
}

export class StateKV {
  constructor(private sdk: ISdk) {}

  private async useRedis(): Promise<RedisClientType | null> {
    return getRedisClient()
  }

  async get<T = unknown>(scope: string, key: string): Promise<T | null> {
    const client = await this.useRedis()
    if (client && redisConnected) {
      const raw = await client.get(redisKey(scope, key))
      if (raw === null) return null
      try { return JSON.parse(raw) as T } catch { return raw as unknown as T }
    }
    return this.sdk.trigger<{ scope: string; key: string }, T | null>({
      function_id: 'state::get',
      payload: { scope, key },
    })
  }

  async set<T = unknown>(scope: string, key: string, value: T): Promise<T> {
    const client = await this.useRedis()
    if (client && redisConnected) {
      await client.set(redisKey(scope, key), JSON.stringify(value))
      return value
    }
    return this.sdk.trigger<{ scope: string; key: string; value: T }, T>({
      function_id: 'state::set',
      payload: { scope, key, value },
    })
  }

  async update<T = unknown>(
    scope: string,
    key: string,
    ops: Array<{ type: string; path: string; value?: unknown }>,
  ): Promise<T> {
    // Redis doesn't support path-based ops natively, so do get-modify-set
    const client = await this.useRedis()
    if (client && redisConnected) {
      const rk = redisKey(scope, key)
      const raw = await client.get(rk)
      let obj: Record<string, unknown> = raw ? JSON.parse(raw) : {}
      for (const op of ops) {
        if (op.type === 'set') {
          const parts = op.path.split('.')
          let target: Record<string, unknown> = obj
          for (let i = 0; i < parts.length - 1; i++) {
            if (!(parts[i] in target)) target[parts[i]] = {}
            target = target[parts[i]] as Record<string, unknown>
          }
          target[parts[parts.length - 1]] = op.value
        } else if (op.type === 'delete') {
          const parts = op.path.split('.')
          let target: Record<string, unknown> = obj
          for (let i = 0; i < parts.length - 1; i++) {
            target = target[parts[i]] as Record<string, unknown>
          }
          delete target[parts[parts.length - 1]]
        }
      }
      await client.set(rk, JSON.stringify(obj))
      return obj as unknown as T
    }
    return this.sdk.trigger<
      { scope: string; key: string; ops: Array<{ type: string; path: string; value?: unknown }> },
      T
    >({
      function_id: 'state::update',
      payload: { scope, key, ops },
    })
  }

  async delete(scope: string, key: string): Promise<void> {
    const client = await this.useRedis()
    if (client && redisConnected) {
      await client.del(redisKey(scope, key))
      return
    }
    return this.sdk.trigger<{ scope: string; key: string }, void>({
      function_id: 'state::delete',
      payload: { scope, key },
    })
  }

  async list<T = unknown>(scope: string): Promise<T[]> {
    const client = await this.useRedis()
    if (client && redisConnected) {
      const keys = await client.keys(scopePattern(scope))
      if (keys.length === 0) return []
      const values = await client.mGet(keys)
      return values
        .filter((v): v is string => v !== null)
        .map((v) => {
          try { return JSON.parse(v) as T } catch { return v as unknown as T }
        })
    }
    return this.sdk.trigger<{ scope: string }, T[]>({
      function_id: 'state::list',
      payload: { scope },
    })
  }
}
