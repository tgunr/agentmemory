---
type: Fact
title: # Local agentmemory plugin status check

source: hermes
session_id: 20260725_111
description: # Local agentmemory plugin status check

source: hermes
session_id: 20260725_111430_873a56
resource: hermes://session/20260725_111430_873a56

# Conversation

- **Session ID:** `20260725_111430_873a56`
resource: agentmemory://memory/mem_mspcmicj_9433c07a5cdb
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260725_111430_873a56"]
timestamp: 2026-08-12T00:26:15.511Z
source: agentmemory
strength: 7
---
# Content

# Local agentmemory plugin status check

source: hermes
session_id: 20260725_111430_873a56
resource: hermes://session/20260725_111430_873a56

# Conversation

- **Session ID:** `20260725_111430_873a56`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-07-25T16:19:47Z
- **Ended:** 2026-07-25T19:31:52Z
- **Messages:** 110
- **Tokens:** 101992 in / 34769 out

---

### 👤 User — 2026-07-25T16:19:47Z

Why is agentmemory being reported as not running? 

### 🤖 Assistant — 2026-07-25T16:19:55Z

<details><summary>Reasoning</summary>

The user is asking why agentmemory is being reported as not running. Let me investigate. According to my memory, AgentMemory is a native memory service backed by AgentMemory service on :3111. Let me check the actual state.

Let me check if the service is running, what the livez endpoint returns, etc.

Let me start by checking the service

</details>

**Tool call: terminal**

```json
{
  "command": "echo \"=== livez ===\" ; curl -s -m 5 http://127.0.0.1:3111/agentmemory/livez ; echo ; echo \"=== exit: $? ===\" ; echo \"=== listening sockets on 3111 ===\" ; lsof -nP -iTCP:3111 -sTCP:LISTEN 2>/dev/null || echo \"nothing listening on 3111\""
}
```

**Tool call: terminal**

```json
{
  "command": "echo \"=== agentmemory processes ===\" ; ps aux | grep -i agentmemory | grep -v grep || echo \"no agentmemory process\" ; echo \"=== where is it launched ===\" ; search_files 2>/dev/null ; launchctl list 2>/dev/null | grep -i agentmem || echo \"no launchctl agent\""
}
```

### 🤖 Assistant — 2026-07-25T16:20:10Z

<details><summary>Reasoning</summary>

Interesting. The livez endpoint returns ok, and there are processes listening on 3111. So the service IS running. The question is "Why is agentmemory being reported as not running?" — so somewhere something reports it as not running even though it is.

Let me figure out who reports it as not running. The `iii` process (PID 1406) is the one listening on 3111, with `--config /Volumes/AI/agentmemory/dist/iii-config.yaml`. There's a launchctl item `com.github.agentmemory`.

The question might be about the AgentMemory integration skill's health check, or the Hermes MCP client reporting it down. Let me look more carefully.

Actually, the user asks "Why is agentmemory being reported as not running?" — they are seeing a report somewhere that it's not running. I need to figure out what's reporting that. Possibilities:
1. The Hermes MCP client can't connect to it (but it's an HTTP service on 3111, not MCP stdio — wait, there are agentmemory-mcp processes which are MCP servers).
2. The livez returns ok but maybe a deeper health check fails.

Let me look at the agentmemory-hermes-integration skill since memory says it's SEPARATE instance. Also there are TWO things here: the `iii` HTTP viewer on 3111, and several `agentmemory-mcp` stdio MCP server processes.

The phrase "reported as not running" — let me check how Hermes checks agentmemory. Maybe there's a health check that pings `http://127.0.0.1:3111/agentmemory/health` or similar that returns not-ok. Let me check the skill.

Let me load the skill and also check various

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
  "command": "echo \"=== try /health ===\" ; curl -s -m 5 http://127.0.0.1:3111/agentmemory/health ; echo ; echo \"=== try /agentmemory/healthz ===\" ; curl -s -m 5 http://127.0.0.1:3111/agentmemory/healthz ; echo ; echo \"=== root ===\" ; curl -s -m 5 http://127.0.0.1:3111/ ; echo ; echo \"=== /api/status ===\" ; curl -s -m 5 http://127.0.0.1:3111/api/status ; echo"
}
```

### 🤖 Assistant — 2026-07-25T16:20:34Z

<details><summary>Reasoning</summary>

So `/agentmemory/livez` returns `ok` (no auth needed), `/agentmemory/health` returns `unauthorized` (needs Bearer), and no other routes exist. This is the standard healthy state per the skill.

So the service IS running. The question is: "Why is agentmemory being reported as not running?" — meaning something/somewhere reports it as not running. I need to find what's reporting that. Likely the Hermes TUI status,
