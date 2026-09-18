---
type: Fact
title: # Diagnose hermes tui 0 mcp servers connected #2

source: hermes
session_id: 202
description: # Diagnose hermes tui 0 mcp servers connected #2

source: hermes
session_id: 20260815_100130_c7b7e2
resource: hermes://session/20260815_100130_c7b7e2

# Conversation

- **Session ID:** `20260815_10013
resource: agentmemory://memory/mem_mt5jap71_c7bdb2403cb4
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-23T08:17:20.565Z
source: agentmemory
strength: 7
---
# Content

# Diagnose hermes tui 0 mcp servers connected #2

source: hermes
session_id: 20260815_100130_c7b7e2
resource: hermes://session/20260815_100130_c7b7e2

# Conversation

- **Session ID:** `20260815_100130_c7b7e2`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-08-15T15:01:30Z
- **Ended:** 2026-08-15T15:22:12Z
- **Messages:** 112
- **CWD:** `/Users/davec`
- **Tokens:** 242988 in / 25204 out

---

### 👤 User — 2026-08-15T12:12:21Z

hermes tui is showing 0 mcp servers connected, why?

### 🤖 Assistant — 2026-08-15T12:12:36Z

<details><summary>Reasoning</summary>

The user is asking why Hermes TUI is showing 0 MCP servers connected. Let me investigate this. There's relevant context in memory about MCP Router being removed, gateway restart issues, etc. Let me actually look at the current state rather than guessing.

Let me check the actual MCP config and the current state. I should use the hermes-agent skill since this is about configuring Hermes itself, but actually the question is diagnostic. Let me check the config and what's happening.

Let me gather real info: check the MCP config, check if the gateway is running, check what `hermes mcp test` or `hermes mcp list` shows.

Let me start by loading the hermes-agent skill and checking the config state in parallel. Actually, let me think about what's most efficient. The memory mentions:
- MCP Router DONE: removed 8 profiles + daemon killed (port 3282) + default agentmemory→/Users/davec/MCP_Local/agentmemory/dist/standalone.mjs
- Gateway restart BLOCKED in-session→ numeric-PID kill + KeepAlive
- TERMINAL_CWD leak

But the user says TUI shows 0 MCP servers connected. Let me check the actual current config and runtime state.

Let me run some diagnostic commands. I'll check:
1. `hermes mcp list` or similar
2. The config.yaml MCP section
3. Whether the gateway is running

Let me do these in parallel.

</details>

I'll investigate the actual state rather than guess. Let me check your MCP config, what the CLI sees, and whether the gateway process is alive.

### 🤖 Assistant — 2026-08-15T12:13:40Z

<details><summary>Reasoning</summary>

Let me analyze what I'm seeing. The key clue here:

- `hermes mcp list` shows 19 servers, all "✓ enabled"
- `hermes status` works
- The process list shows TWO TUI gateway instances running:
  - PID 92170: `tui_gateway.entry` (started 7:11AM) — parent of hermes PID 92070
  - PID 30183: `tui_gateway.entry` (started 6:48AM) — parent of hermes PID 30178

Wait, that's interesting. There are TWO TUI gateways running:
- 92155/92170 — started 7:11AM
- 30178/30183 — started 6:48AM

The MCP stdio watchdog processes are all children of PID 30183 (the 6:48AM gateway). So the 6:48AM gateway (30183) is the one that launched all the MCP servers.

But the currently-active TUI the user is looking at is likely the 7:11AM one (92170) — the most recently started. If the user's current TUI session is the 92170 gateway, but the MCP servers were all spawned by the older 30183 gateway, then the new gateway would show "0 MCP servers connected" because it didn't spawn any.

This is the classic "two gateway instances" problem. The user's current TUI is connected to a gateway whose MCP servers never got launched (or got launched by a different/older gateway).

Actually wait, let me re-examine. The watchdog processes parent is 30183. The hermes CLI serve processes:
- 27120: `hermes_cli.main serve` (6:45AM) — this is probably the dashboard frontend
- 30178: node entry.js + 30183 tui_gateway (6:48AM)
- 92070: hermes + 92170 tui_gateway (7:11AM)

So there are two `hermes` CLI frontends, each with its own gateway:
- 92070 (hermes) → 92155 (node entry) + 92170 (tui_gateway) — 7:11AM
- 30178 (node entry) + 30183 (tui_gateway) — 6:48AM

The MCP watchdogs are all children of 30183. So the 6:48AM gateway has the MCP servers. The 7:11AM gateway (the one the user is probably looking at now, since it's newer) has NO MCP servers — they're all under the old gateway.

So the diagnosis: the user has two overlapping Hermes TUI sessions/gateways running. The MCP servers are connected to the OLD gateway (PID 30183, started 6:48AM). The cu
