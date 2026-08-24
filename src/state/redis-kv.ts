import { createClient, type RedisClientType } from 'redis';
import type { IKVStore } from './kv.js';

export class RedisKV implements IKVStore {
  private client: RedisClientType;
  private connected = false;

  constructor(redisUrl: string) {
    this.client = createClient({ url: redisUrl });
    this.client.on('error', (err) => console.error('[agentmemory] Redis Client Error:', err));
  }

  private async ensureConnected(): Promise<void> {
    if (!this.connected) {
      await this.client.connect();
      this.connected = true;
    }
  }

  async get<T = unknown>(scope: string, key: string): Promise<T | null> {
    await this.ensureConnected();
    const data = await this.client.get(`${scope}:${key}`);
    return data ? JSON.parse(data) : null;
  }

  async set<T = unknown>(scope: string, key: string, value: T): Promise<T> {
    await this.ensureConnected();
    await this.client.set(`${scope}:${key}`, JSON.stringify(value));
    return value;
  }

  async update<T = unknown>(
    scope: string,
    key: string,
    ops: Array<{ type: string; path: string; value?: unknown }>,
  ): Promise<T> {
    await this.ensureConnected();
    const current = (await this.get<T>(scope, key)) || ({} as Record<string, unknown>);
    
    for (const op of ops) {
      if (op.type === 'set') {
        const keys = op.path.split('.');
        let obj: Record<string, unknown> = current as Record<string, unknown>;
        for (let i = 0; i < keys.length - 1; i++) {
          if (!obj[keys[i]] || typeof obj[keys[i]] !== 'object') {
            obj[keys[i]] = {};
          }
          obj = obj[keys[i]] as Record<string, unknown>;
        }
        obj[keys[keys.length - 1]] = op.value;
      }
    }
    
    await this.set(scope, key, current);
    return current as T;
  }

  async delete(scope: string, key: string): Promise<void> {
    await this.ensureConnected();
    await this.client.del(`${scope}:${key}`);
  }

  async list<T = unknown>(scope: string): Promise<T[]> {
    await this.ensureConnected();
    const pattern = `${scope}:*`;
    const results: T[] = [];
    let cursor = '0';
    
    do {
      const reply = await this.client.scan(cursor, { MATCH: pattern, COUNT: 100 });
      cursor = reply.cursor;
      if (reply.keys && reply.keys.length > 0) {
        const values = await this.client.mGet(reply.keys);
        for (const val of values) {
          if (val) {
            results.push(JSON.parse(val));
          }
        }
      }
    } while (cursor !== '0');
    
    return results;
  }

  async disconnect(): Promise<void> {
    if (this.connected) {
      await this.client.disconnect();
      this.connected = false;
    }
  }
}
