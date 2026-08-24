---
type: Fact
title: # Debugging AgentMemory UI not updating

source: hermes
session_id: 20260717_190
description: # Debugging AgentMemory UI not updating

source: hermes
session_id: 20260717_190757_299949
resource: hermes://session/20260717_190757_299949

# Conversation

- **Session ID:** `20260717_190757_299949`
resource: agentmemory://memory/mem_mspdzpji_851e8d757a29
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:04:30.938Z
source: agentmemory
strength: 7
---
# Content

# Debugging AgentMemory UI not updating

source: hermes
session_id: 20260717_190757_299949
resource: hermes://session/20260717_190757_299949

# Conversation

- **Session ID:** `20260717_190757_299949`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-07-18T00:07:57Z
- **Messages:** 186
- **CWD:** `/Users/davec`
- **Tokens:** 157827 in / 79302 out

---

### 👤 User — 2026-07-18T00:07:57Z

I don't think agentmemory is working properly.I don't see a lot of changes in the user interface.

### 👤 User — 2026-07-18T00:07:57Z

I don't think agentmemory is working properly.I don't see a lot of changes in the user interface.

### 🤖 Assistant — 2026-07-18T00:08:03Z

<details><summary>Reasoning</summary>

The user says agentmemory isn't working properly and they don't see changes in the UI. Let me investigate. There's a skill `agentmemory-hermes-integration` referenced in memory. Let me load that skill first to understand how it's supposed to work, and also check the state.

Let me start by loading the skill and checking the agentmemory setup

</details>

**Tool call: skill_view**

```json
{
  "name": "agentmemory-hermes-integration"
}
```

**Tool call: search_files**

```json
{
  "pattern": "agentmemory",
  "target": "files"
}
```

### 🤖 Assistant — 2026-07-18T00:08:03Z

<details><summary>Reasoning</summary>

The user says agentmemory isn't working properly and they don't see changes in the UI. Let me investigate. There's a skill `agentmemory-hermes-integration` referenced in memory. Let me load that skill first to understand how it's supposed to work, and also check the state.

Let me start by loading the skill and checking the agentmemory setup

</details>

**Tool call: skill_view**

```json
{
  "name": "agentmemory-hermes-integration"
}
```

**Tool call: search_files**

```json
{
  "pattern": "agentmemory",
  "target": "files"
}
```

### 🤖 Assistant — 2026-07-18T00:09:18Z

<details><summary>Reasoning</summary>

The user says "I don't think agentmemory is working properly. I don't see a lot of changes in the user interface."

Let me understand the situation. AgentMemory is a system that records sessions and memories and displays them in a UI on port 3113. The skill talks about the `agentmemory` profile.

Let me gather diagnostic info:
1. Is the AgentMemory service running? (ports 3111, 3113)
2. Is the MCP server configured and connected in the current profile?
3. Is the agentmemory profile set up correctly?

The user is in the `default` profile currently (per system prompt). The skill is about the `agentmemory` profile. Let me check what's happening.

The user says "I don't see a lot of changes in the user interface." This could mean:
- They're using some UI to view agentmemory and it's not updating
- The integration isn't recording sessions

Let me check:
1. What profiles exist and their config
2. Is agentmemory service running (curl the livez / UI)
3. The MCP server status in the current profile

Let me run a bunch of diagnostics in parallel. Let me check:
- `hermes mcp list` in current profile
- The agentmemory service ports
- The agentmemory config

Actually, the current session is in `default` profile. The agentmemory MCP server is configured in the `agentmemory` profile per the skill, but also might be configured in the default profile. Let me check where the MCP server is configured and whether it's running.

Let me run diagnostics. I'll use the terminal tool for several independent checks.

Let me think about what "the user interface" means. AgentMemory has a UI on port 3113. So the user is likely viewing http://localhost:3113 and not seeing changes.

Let me check:
1. Is port 3111 (agentmemory API) up?
2. Is port 3113 (UI) up?
3. Is the III engine / agentmemory service running?
4. Is the MCP server connected in the current profile?

Let me run these.

</details>

**Tool call: terminal**

```json
{
  "command": "echo \"=== port 3111 (agentmemory API) ===\"; curl -s --connect-timeout 3 http://localhost:3111/agentmemory/livez; echo; echo \"=== port 3113 (UI) ===\"; curl -s --connect-timeout 3 -o /dev/null -w \"%{http_code}\\n\" http://localhost:3113/; e
