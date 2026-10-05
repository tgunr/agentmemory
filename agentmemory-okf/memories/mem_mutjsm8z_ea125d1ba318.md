---
type: Fact
title: # Minimize session token usage

source: hermes
session_id: 20261001_235916_a57f6
description: # Minimize session token usage

source: hermes
session_id: 20261001_235916_a57f67
resource: hermes://session/20261001_235916_a57f67

# Conversation

- **Session ID:** `20261001_235916_a57f67`
- **Sour
resource: agentmemory://memory/mem_mutjsm8z_ea125d1ba318
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20261001_235916_a57f67"]
timestamp: 2026-10-04T08:17:27.095Z
source: agentmemory
strength: 7
---
# Content

# Minimize session token usage

source: hermes
session_id: 20261001_235916_a57f67
resource: hermes://session/20261001_235916_a57f67

# Conversation

- **Session ID:** `20261001_235916_a57f67`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-10-02T04:59:16Z
- **Ended:** 2026-10-03T23:03:11Z
- **Messages:** 435
- **Tokens:** 630266 in / 49807 out

---

### 👤 User — 2026-10-02T04:59:16Z

What is the best way to make the session more efficeint? Need to minimize the amount of tokens getting used as I have gone thru $50 in two days.

### 👤 User — 2026-10-02T04:59:16Z

What is the best way to make the session more efficeint? Need to minimize the amount of tokens getting used as I have gone thru $50 in two days.

### 🤖 Assistant — 2026-10-02T04:59:20Z

<details><summary>Reasoning</summary>

The user wants to reduce token usage in Hermes sessions. I should load the hermes-agent skill to give accurate advice about config options (compaction, context trimming, model routing, MCP tool counts).

Let me check the skill and current config.

Memory says user wants measured savings. Let me load hermes-agent skill and check config.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

**Tool call: terminal**

```json
{
  "command": "hermes config get 2>/dev/null | head -60; echo \"---MCP---\"; hermes mcp list 2>/dev/null | tail -30"
}
```

### 🤖 Assistant — 2026-10-02T04:59:20Z

<details><summary>Reasoning</summary>

The user wants to reduce token usage in Hermes sessions. I should load the hermes-agent skill to give accurate advice about config options (compaction, context trimming, model routing, MCP tool counts).

Let me check the skill and current config.

Memory says user wants measured savings. Let me load hermes-agent skill and check config.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

**Tool call: terminal**

```json
{
  "command": "hermes config get 2>/dev/null | head -60; echo \"---MCP---\"; hermes mcp list 2>/dev/null | tail -30"
}
```

### 🤖 Assistant — 2026-10-02T04:59:28Z

<details><summary>Reasoning</summary>

Let me measure the actual token usage and where it goes. Let's run hermes insights and check the tool schema size. The big cost: system prompt (skills list is huge — ~250 skills!), MCP tool schemas (274 deferred tools described in system prompt).

Let me get real numbers.

</details>

**Tool call: terminal**

```json
{
  "command": "hermes insights --days 3 2>/dev/null | head -50"
}
```

**Tool call: terminal**

```json
{
  "command": "hermes config get model --json 2>/dev/null; echo \"---AGENT---\"; hermes config get agent --json 2>/dev/null; echo \"---COMPRESSION---\"; hermes config get compression --json 2>/dev/null"
}
```

### 🤖 Assistant — 2026-10-02T04:59:47Z

<details><summary>Reasoning</summary>

Real numbers: 196M total tokens over 3 days, $50. Breakdown:
- Input: 28.9M, Output 4.3M — but Total 196M. That gap is cached/re-read tokens. So the bulk is repeated input re-sends = huge system prompt + tool schemas.
- 41 kanban sessions (43M), desktop 119M, tui 23M, cron 35 sessions / 2.2M.

Biggest lever: the system prompt size. Memory is at 99% (4057/4096 chars memory + 1365/1375 user profile) — that's injected every single request. Plus 274 deferred tools catalog + ~28 MCP servers with tools.

Let me measure the actual system prompt size and count tools. That's the real diagnostic.

Compression threshold is 1.5 — that's very high (compresses at 150% of context). Lower it to like 0.6 to keep contexts small. That's a huge win: 1.5x means contexts grow to 1.5x before compression.

Let me measure systemprompt and tool count.

</details>

**Tool call: terminal**

```json
{
  "command": "cd /tmp && hermes mcp test Homebrew 2>/dev/null | head -5; echo \"=== TOOL COUNT ===\"; python3 -c \"\nimport subprocess\n\" ; hermes tools list 2>/dev/null | tail -40"
}
```

**Tool call: terminal**

```json
{
  "command": "ls -la ~/.hermes/sessions/*.jsonl 2>/dev/null | tail -3; echo \"=== memory chars ===\"; python3 - <<'EOF'\nimport os,glob\ntot=0\nfor p in glob.glob(os.path.expandus
