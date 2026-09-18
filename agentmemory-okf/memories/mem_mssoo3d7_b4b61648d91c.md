---
type: Fact
title: # Reset user and passwortd docmost pve.root

source: hermes
session_id: 20260813
description: # Reset user and passwortd docmost pve.root

source: hermes
session_id: 20260813_060234_69d0f6
resource: hermes://session/20260813_060234_69d0f6

# Conversation

- **Session ID:** `20260813_060234_69d
resource: agentmemory://memory/mem_mssoo3d7_b4b61648d91c
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-08-14T08:26:43.264Z
source: agentmemory
strength: 7
---
# Content

# Reset user and passwortd docmost pve.root

source: hermes
session_id: 20260813_060234_69d0f6
resource: hermes://session/20260813_060234_69d0f6

# Conversation

- **Session ID:** `20260813_060234_69d0f6`
- **Source:** desktop
- **Model:** tencent/hy3:free
- **Started:** 2026-08-13T11:03:01Z
- **Messages:** 186
- **CWD:** `/Volumes/davec`
- **Tokens:** 152989 in / 51909 out

---

### 👤 User — 2026-08-13T11:03:01Z

make a plan on examining the mcp servers and fix the ones that are not running

### 🤖 Assistant — 2026-08-13T11:03:01Z

I'll load the relevant skill and check your current MCP configuration to ground the plan in reality.Let me pull the actual configured servers and their live status before writing the plan.The catalog only reports "enabled" (configured), not "running/healthy" — that's exactly the gap. Let me gather real connectivity data to ground the plan.Strong signal already: **all 6 probed servers fail**, and logs show `ClosedResourceError` keepalive drops on zen/basic-memory/apple-mcp/puppeteer plus a client-side `JSONRPC message ... json_invalid` parse error. That pattern could mean either "servers are down" or "the test harness/SDK can't parse responses." Let me distinguish before writing the plan.I've gathered enough real data to make this plan grounded rather than generic. Here's what the evidence shows before I touch anything.

## What the diagnostics already reveal

**The catalog lies (in a useful way).** `hermes mcp list` shows all 18 custom servers as `✓ enabled` — but "enabled" only means *configured in config.yaml*, not *running/healthy*. The real state is worse:

- **Live probe** (`hermes mcp test` on 6 servers) → **all 6 fail** with `Connection closed`: `agentmemory`, `comfyui`, `ollama-router`, `docmost`, `zen`, `basic-memory`.
- **Logs (last 2h)** show two distinct failure modes:
  1. `mcp.client.stdio: Failed to parse JSONRPC message from server … ValidationError json_invalid` — a server is emitting **non-JSON on stdout**, which poisons the stdio JSON-RPC stream.
  2. `MCP server 'X' keepalive failed … ClosedResourceError` on **zen, basic-memory, apple-mcp, puppeteer** — these *connect then drop*.

**Key inference:** failures span completely different launchers (bunx/apple-mcp, npx/zen/puppeteer, python-venv/basic-memory/zen, node/docmost). 18 individually-broken servers is unlikely — this smells **systemic**, and the `json_invalid` parse error is the prime suspect (a server or the Hermes MCP client emitting a stdout banner that breaks the protocol).

One concrete lead: my manual launch of the `zen` venv python threw `PermissionError … pyvenv.cfg` — its path is `/Users/davec/AI/Servers/MCP/zen-mcp-server/.zen_venv`, which may sit on a volume where the venv can't self-touch. That's a per-server cause worth confirming.

---

## Plan: Examine → Classify → Fix

### Phase 0 — Baseline the environment (do first)
1. Get the Hermes MCP SDK version: `hermes-agent/venv/bin/pip show mcp` (the `?` above means the import path needs the venv's pip, not system pip).
2. Snapshot `config.yaml` `mcp_servers:` block → know exact launchers (stdio command/args) for all 18.
3. Note "breakage timestamp" from logs: did all 18 fail at one moment (systemic event) or trickle in?

### Phase 1 — Classify each of the 18 servers into buckets
For each, run its **exact** launcher in a raw terminal and watch stdout:
- **Bucket A — "Slow cold start"** (npx/uvx/bunx `@latest`, network fetch > test timeout): not down, just needs a warm cache or longer timeout. Fix: pin versions / pre-warm.
- **Bucket B — "Stdout noise breaks protocol"** (emits a warning/banner before/around JSON-RPC): matches the `json_invalid` log. Fix: wrap launcher to discard/redirect the offending stdout, or downgrade the package.
- **Bucket C — "Hard crash / missing dep / permission"** (exit immediately, PermissionError like zen, missing binary): Fix per-server (venv perms, `bunx`/`npx` availability, path on a bad volume).
- **Bucket D — "Connects then drops"** (keepalive `ClosedResourceError`): likely the client-side parse error cascading. Fix after B.

### Phase 2 — Fix by bucket (least disruption first
