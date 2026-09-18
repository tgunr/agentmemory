---
type: Fact
title: # Fixing agentmemory function registry corruption

source: hermes
session_id: 20
description: # Fixing agentmemory function registry corruption

source: hermes
session_id: 20260723_154828_b709fb
resource: hermes://session/20260723_154828_b709fb

# Conversation

- **Session ID:** `20260723_1548
resource: agentmemory://memory/mem_mspdzwhf_05fe04f5c219
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:04:39.931Z
source: agentmemory
strength: 7
---
# Content

# Fixing agentmemory function registry corruption

source: hermes
session_id: 20260723_154828_b709fb
resource: hermes://session/20260723_154828_b709fb

# Conversation

- **Session ID:** `20260723_154828_b709fb`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-07-23T20:48:29Z
- **Messages:** 9
- **CWD:** `/Users/davec`
- **Tokens:** 36372 in / 1092 out
- **Est. cost:** $0.0158

---

### 👤 User — 2026-07-23T20:48:29Z

agentmemory is not running

### 🤖 Assistant — 2026-07-23T20:48:38Z

<details><summary>Reasoning</summary>

The user says AgentMemory is not running. I need to load the relevant skill first since memory mentions the skill `agentmemory-hermes-integration`. Also check if it's running.

Memory says:
- AgentMemory: native memory backed by AgentMemory service on :3111 (memory.provider=agentmemory). SEPARATE instance — do NOT strip wiring. Register sessions via /session/start; title-sync reads state.db. Skill: agentmemory-hermes-integration. Livez: http://127.0.0.1:3111/agentmemory/livez.

I should load the skill and then diagnose.

</details>

**Tool call: skill_view**

```json
{
  "name": "agentmemory-hermes-integration"
}
```

**Tool call: terminal**

```json
{
  "command": "curl -s -o /dev/null -w \"%{http_code}\" http://127.0.0.1:3111/agentmemory/livez"
}
```

### 🤖 Assistant — 2026-07-23T20:48:50Z

<details><summary>Reasoning</summary>

The livez check returned 404, not a connection error. So the service is responding but the `/agentmemory/livez` route is missing. Per the skill, this is likely engine function-registry corruption (Case B). I need to diagnose more carefully.

Let me gather info: check ports, processes, logs, and run the decisive `iii trigger --function-id api::health` diagnostic.

</details>

**Tool call: terminal**

```json
{
  "command": "pgrep -fla 'iii --config|dist/index.mjs'"
}
```

**Tool call: terminal**

```json
{
  "command": "SECRET=\"$(grep '^AGENTMEMORY_SECRET=' ~/.agentmemory/.env | head -1 | cut -d= -f2-)\"; echo \"secret len=${#SECRET}\"; /Users/davec/.local/bin/iii trigger --function-id api::health --address localhost --port 49134 --timeout-ms 8000 2>&1 | tail -20"
}
```

**Tool call: terminal**

```json
{
  "command": "grep -nE '311[0-9]|49134|Viewer:|API listening|Engine listening|Worker registered|Function not found|Worker unregistered' /tmp/agentmemory.stdout.log 2>/dev/null | tail -30"
}
```

### 🤖 Assistant — 2026-07-23T20:49:02Z

<details><summary>Reasoning</summary>

Confirmed: engine function-registry corruption. The boot log shows multiple overlapping worker registrations, "Function not found", then unregistered. Need to give the user the Terminal.app fix block from §11.9, comment-free. Do NOT run it from chat because pkill/launchctl/rm are blocked by write-guard.

</details>

Confirmed — this is the **engine function-registry corruption** pattern (skill §11.9). The worker processes are alive, but the engine can't resolve any `api::*` functions, so every `/agentmemory/*` route returns 404. Boot log shows the classic overlap signature: multiple `Worker registered`, then `Function not found`, then `Worker unregistered`.

The fix requires stopping the old processes, clearing the poisoned worker cache, and doing a clean single-worker restart. The chat terminal is write-guarded for `pkill`/`launchctl`/`rm`, so run this block in **Terminal.app**:

```bash
launchctl unload ~/Library/LaunchAgents/com.github.agentmemory.plist 2>/dev/null
pkill -f 'iii --config'
pkill -f 'dist/index.mjs'
c=0
while pgrep -f 'iii --config|dist/index.mjs' >/dev/null; do
  sleep 1
  c=$((c+1))
  if [ $c -gt 20 ]; then pkill -9 -f 'dist/index.mjs'; pkill -9 -f 'iii --config'; break; fi
done
echo "all stopped after ${c}s"
rm -rf ~/.iii/workers
rm -f ~/.agentmemory/iii.pid ~/.agentmemory/iii-engine.pid ~/.agentmemory/agentmemory-service.pid
launchctl load ~/Library/LaunchAgents/com.github.agentmemory.plist
sleep 18
grep -E 'Worker registered|Function not found|Worker unregistered|Viewer:' /tmp/agentmemory.stdout.log | tail -12
pgrep -fl 'iii --config|dist/index.mjs'
SECRET=*** '^AGENTMEMORY_SECRET=*** ~/.agentmemory/.env | head -1 | cu
