---
type: Fact
title: # Integrate MacMLX into kilocode with timeout fix

source: hermes
session_id: 20
description: # Integrate MacMLX into kilocode with timeout fix

source: hermes
session_id: 20260819_073736_abd742
resource: hermes://session/20260819_073736_abd742

# Conversation

- **Session ID:** `20260819_0737
resource: agentmemory://memory/mem_mt5jauoo_edb6df93c829
tags: ["okf", "okf-hermes", "hermes", "/Volumes/AI"]
timestamp: 2026-08-23T08:17:27.703Z
source: agentmemory
strength: 7
---
# Content

# Integrate MacMLX into kilocode with timeout fix

source: hermes
session_id: 20260819_073736_abd742
resource: hermes://session/20260819_073736_abd742

# Conversation

- **Session ID:** `20260819_073736_abd742`
- **Source:** desktop
- **Model:** upstage/solar-pro4:free
- **Started:** 2026-08-19T12:37:36Z
- **Messages:** 128
- **CWD:** `/Volumes/AI`
- **Tokens:** 1737048 in / 27142 out

---

### 👤 User — 2026-08-19T12:37:38Z

How to integrate MacMLX into kilocode? I thougt I have it setup but it keeps timing out. Access is via @url:`http://localhost:8000/v1` and works fine in the MacMLX chat window. It currently has Qwen3-14B-4bit loaded.

--- Context Warnings ---
- @url:`http://localhost:8000/v1`: no content extracted

### 🤖 Assistant — 2026-08-19T12:37:50Z

<details><summary>Reasoning</summary>

The user wants to integrate MacMLX into Kilo Code, but it's timing out. They have MacMLX running at `http://localhost:8000/v1` with Qwen3-14B-4bit loaded.

Let me think about what's going on:

1. MacMLX is a macOS MLX-based LLM serving platform
2. Kilo Code is their coding agent
3. They need to configure the LLM provider in Kilo Code to point to localhost:8000/v1

Let me first check the existing Kilo Code configuration and then look at how the MacMLX integration should work. Let me load the relevant skills and check the current configuration.

First, let me check:
1. What's in the kilocode directory
2. The current Kilo Code config (kilocode/rules/kilo-source.md mentions ~/.kilocode/)
3. The MacMLX integration skill if it exists

Let me also check the kilocode source to understand how it integrates with external LLM providers.

Let me start by exploring both the kilocode setup and the MacMLX integration.

</details>

**Tool call: search_files**

```json
{
  "pattern": "kilocode",
  "path": "/Users/davec",
  "target": "files"
}
```

**Tool call: search_files**

```json
{
  "pattern": "macmlx",
  "path": "/Users/davec",
  "target": "files"
}
```

**Tool call: skill_view**

```json
{
  "name": "kilo-code-integration"
}
```

### 🤖 Assistant — 2026-08-19T12:39:28Z

<details><summary>Reasoning</summary>

Let me look at the Kilo config to see how it's currently set up for MacMLX, and also check the MacMLX API endpoint directly.

The skill is about AgentMemory integration, not about MacMLX provider setup. Let me look at the actual Kilo config files and test the MacMLX endpoint.

I should check the Kilo config for provider settings and also test the MacMLX endpoint.

</details>

**Tool call: search_files**

```json
{
  "path": "/Users/davec/Library/Application Support/Code/User",
  "pattern": "kilocode",
  "target": "files"
}
```

**Tool call: terminal**

```json
{
  "command": "curl -s -o /dev/null -w \"HTTP %{http_code} | time_total: %{time_total}s\\n\" http://localhost:8000/v1/models 2>&1",
  "timeout": 15
}
```

### 🤖 Assistant — 2026-08-19T12:39:47Z

<details><summary>Reasoning</summary>

The curl hit HTTP 000 (connection refused) — MacMLX isn't currently listening on localhost:8000, or a firewall/port issue is blocking it. Let me check more carefully.

</details>

**Tool call: terminal**

```json
{
  "command": "# Check if MacMLX is running / listening\nlsof -i :8000 2>/dev/null || echo \"No listener on :8000\"\n# Check for any MLX-related processes\nps aux | grep -i \"mlx\\|macmlx\\|swift\" | grep -v grep | head -20\necho \"---\"\n# Find all Kilo / VS Code config dirs\nfind /Users/davec -name \"kilocode*\" -o -name \"kilo.code*\" 2>/dev/null | head -20",
  "timeout": 15
}
```

**Tool call: terminal**

```json
{
  "command": "ls -la /Users/davec/.vscode/extensions/kilocode.kilo-code-7.4.21-darwin-arm64/ 2>/dev/null && echo \"---\" && ls /Users/davec/.vscode/extensions/kilocode.kilo-code-7.4.21-darwin-arm64/dist/ 2>/dev/null | head -30",
  "timeout": 10
}
```

### 🤖 Assistant — 2026-08-19T12:40:17Z

<details><summary>Reasoning</summary>

MacMLX is running (PID 72311). The issue is that `curl` got connection refused — maybe the server binds to a different host/port or only listens on a specific interface. Let me check what ports MacMLX is actually listening on, and also look for the Kilo c
