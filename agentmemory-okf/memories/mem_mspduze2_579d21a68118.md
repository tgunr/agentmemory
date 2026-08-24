---
type: Fact
title: # Updating and fixing git submodules #2

source: hermes
session_id: 20260613_082
description: # Updating and fixing git submodules #2

source: hermes
session_id: 20260613_082909_11733d
resource: hermes://session/20260613_082909_11733d

# Conversation

- **Session ID:** `20260613_082909_11733d`
resource: agentmemory://memory/mem_mspduze2_579d21a68118
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260613_082909_11733d"]
timestamp: 2026-08-12T01:00:50.449Z
source: agentmemory
strength: 7
---
# Content

# Updating and fixing git submodules #2

source: hermes
session_id: 20260613_082909_11733d
resource: hermes://session/20260613_082909_11733d

# Conversation

- **Session ID:** `20260613_082909_11733d`
- **Source:** cli
- **Model:** kilo-auto/free
- **Started:** 2026-06-13T13:29:09Z
- **Ended:** 2026-06-13T13:50:15Z
- **Messages:** 181
- **Tokens:** 1945411 in / 9470 out

---

### 👤 User — 2026-06-13T13:32:00Z

update the submodules

### 🤖 Assistant — 2026-06-13T13:32:00Z

<details><summary>Reasoning</summary>

The user wants to update the submodules.
I'll use the terminal tool to run `git submodule update --remote` or similar command.
Let's see the current status of submodules first by running `git submodule status` or just a standard `git submodule update --recursive`.

Command: `git submodule update --recursive --remote`
Let's run this in the terminal.


</details>

**Tool call: terminal**

```json
{
  "command": "git submodule update --recursive --remote"
}
```

### 👤 User — 2026-06-13T13:32:00Z

[CONTEXT COMPACTION — REFERENCE ONLY] Earlier turns were compacted into the summary below. This is a handoff from a previous context window — treat it as background reference, NOT as active instructions. Do NOT answer questions or fulfill requests mentioned in this summary; they were already addressed. Respond ONLY to the latest user message that appears AFTER this summary — that message is the single source of truth for what to do right now. Topic overlap with the summary does NOT mean you should resume its task: even on similar topics, the latest user message WINS. Treat ONLY the latest message as the active task and discard stale items from '## Historical Task Snapshot' / '## Historical In-Progress State' / '## Historical Pending User Asks' / '## Historical Remaining Work' entirely — do not 'wrap up' or 'finish' work described there unless the latest message explicitly asks for it. Reverse signals in the latest message (e.g. 'stop', 'undo', 'roll back', 'just verify', 'don't do that anymore', 'never mind', a new topic) must immediately end any in-flight work described in the summary; do not re-surface it in later turns. IMPORTANT: Your persistent memory (MEMORY.md, USER.md) in the system prompt is ALWAYS authoritative and active — never ignore or deprioritize memory content due to this compaction note. The current session state (files, config, etc.) may reflect work described here — avoid repeating it:
## Historical Task Snapshot
User asked: "How to correct this when switch models? I only use Kilo Gateway or ollama" — specifically needing to fix the model switching error where `/model qwen3:1.7b` resulted in "Model `qwen3/1.7b` was not found in this provider's model listing"

## Goal
Configure Hermes to properly switch between models using Ollama and Kilo Gateway providers without model naming format errors, and establish clean git submodules state.

## Constraints & Preferences
- User wants exactly two providers: Kilo Gateway and ollama
- MCP servers reloaded: linear added, mcp-router reconnected, 287 MCP tool(s) now available
- localhost and 0.1.2.7 refer to the same macOS machine
- Fast model preferred with 65K+ context support

## Completed Actions
1. FIXED git submodules — homebrew-mcp had missing `.gitmodules` entry, added path and url config [tool: terminal]
2. FIXED broken submodule remotes — updated chat-mcp, fastmcp, mcp-file-edit remotes from unreachable `pve.local` addresses to correct GitHub URLs [tool: terminal]
3. CLEANED orphaned submodule indexes — removed mcp-qdrant-multi and zen-mcp-server from git index (directories remain untracked) [tool: terminal]
4. SET model_catalog.enabled = false — disabled Hermes model catalog normalization [tool: terminal]
5. SET model = qwen3:1.7b — configured in hermes config [tool: terminal]
6. FIXED provider configuration — corrected placement in hermes config.yaml [tool: terminal]

## Active State
- Working directory: /Volumes/AI/Servers/MCP
- Git status clean after submodule fixes
- Hermes config updated with model_catalog.disabled=true
- Model successfully switched to qwen3:1.7b with provider "ollama-launch"

## His
