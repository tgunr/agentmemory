---
type: Fact
title: # nightly-okf-index · Aug 15 03:18

source: hermes
session_id: cron_df2ba22a5941
description: # nightly-okf-index · Aug 15 03:18

source: hermes
session_id: cron_df2ba22a5941_20260815_031743
resource: hermes://session/cron_df2ba22a5941_20260815_031743

# Conversation

- **Session ID:** `cron_d
resource: agentmemory://memory/mem_mt5jb12y_b98915cb953b
tags: ["okf", "okf-hermes", "hermes", "hermes://session/cron_df2ba22a5941_20260815_031743"]
timestamp: 2026-08-23T08:17:35.969Z
source: agentmemory
strength: 7
---
# Content

# nightly-okf-index · Aug 15 03:18

source: hermes
session_id: cron_df2ba22a5941_20260815_031743
resource: hermes://session/cron_df2ba22a5941_20260815_031743

# Conversation

- **Session ID:** `cron_df2ba22a5941_20260815_031743`
- **Source:** cron
- **Model:** tencent/hy3:free
- **Started:** 2026-08-15T08:17:43Z
- **Ended:** 2026-08-15T08:18:40Z
- **Messages:** 13
- **Tokens:** 36302 in / 1476 out

---

### 👤 User — 2026-08-15T08:17:43Z

[IMPORTANT: The user has invoked the "kilo-agentmemory-integration" skill, indicating they want you to follow its instructions. The full skill content is loaded below.]

---
name: kilo-agentmemory-integration
description: Repair and wire Kilo Code sessions into AgentMemory.
---

# Kilo ↔ AgentMemory Integration

## Verified facts (2026-08-11)
- Hook scripts: `/Volumes/AI/agentmemory-kilo-hooks/` (MOVED from
  `/Volumes/AI/Servers/agentmemory-kilo-hooks/` in the 2026-08-11 reorg).
  Contains `session-start.sh`, `session-end.sh`, `agentmemory-wrapper.sh`,
  `cleanup-stale-sessions.sh`. They POST `session/start`+`session/end` to AM
  MCP (HTTP `127.0.0.1:3111`).
- **Limitation:** hooks use throwaway IDs (`ses_$(date)_$$`) and capture NO
  transcript content — envelope only, no `remember`/`observe`.
- AM is SOURCE; OKF bundles are read-only mirror (AM→OKF), not reverse.
- History ingestion = OKF→AM indexer: `~/.hermes/scripts/okf_to_agentmemory.py`.
- Reference session: `20260718_061804_159701` (June 18 coexistence design).

## Reorg breakage (2026-08-11)
1. Hooks relocated: `Servers/` prefix dropped.
2. Kilo `mcp_settings.json` is `{"mcpServers": {}}` — NO `agentmemory` entry
   (`.backup` only has generic memory/basic-memory). Kilo can't call AM via MCP.
3. Kilo Code *hook* wiring was NOT preserved (nothing under kilocode settings
   references `agentmemory-wrapper`; `custom_modes.yaml` is unrelated modes).
4. Result: Kilo sessions no longer roll into AM.

## Verify
```bash
ls -ld /Volumes/AI/agentmemory-kilo-hooks
cat "$HOME/Library/Application Support/Code/User/globalStorage/kilocode.kilo-code/settings/mcp_settings.json"
SECRET=$(grep '^AGENTMEMORY_SECRET=' ~/.agentmemory/.env | tail -1 | cut -d= -f2-)
curl -s -X POST http://127.0.0.1:3111/agentmemory/search -H "Authorization: Bearer $SECRET" \
  -H "Content-Type: application/json" -d '{"query":"source:kilo","limit":5}'
pgrep -fl 'dist/index.mjs' || echo "AM REST worker NOT RUNNING"
```

## Repair
1. Re-point any absolute references to `/Volumes/AI/agentmemory-kilo-hooks/`
   (was `Servers/...`).
2. Register the `agentmemory` MCP server in Kilo `mcp_settings.json` pointing
   at `agentmemory-wrapper.sh`; verify wrapper resolves `/Volumes/AI/agentmemory/dist`.
3. Restart Kilo / reload VS Code. Start a Kilo session; confirm `session/start`
   hits AM (`query: source:kilo` sessions, or tail AM logs).
4. For transcript capture (not just envelope) rely on the OKF→AM indexer run
   after every consolidation.

## `/am` slash command (chat-UI search)
Registered as a `quick_command` in config.yaml (NOT a core TUI patch — per
AGENTS.md, capability goes at the edge). Set via:
`hermes config set quick_commands.am "command: python3 ~/.hermes/scripts/am.py \"$@\"\ntype: exec"`
Script: `~/.hermes/scripts/am.py` (stdlib only). Subcommands:
- `/am search <query> [--limit N] [--source kilo|hermes]`
- `/am grep <session-id> [--limit N]` — dump a past session by id (Kilo UUID
  or Hermes id); searches `session_id:<id>` and only keeps hits whose facts
  contain the id (avoids fuzzy false positives on miss).
- `/am recall <query>` (alias for search)
- `/am status` (AM health + vector size)
- `/am remember <text>` (push a note into AM)
Uses AM's real `concepts` filter (not keyword `source:`), so `--source hermes`
returns ONLY hermes-tagged docs. Secret read from LAST AGENTMEMORY_SECRET=
line in ~/.agentmemory/.env.
quick_commands are read per-command by the gateway — no restart needed.

Kilo 7.4.21 has NO hook subsystem (verified: no `kilocode.hooks` setting, no
SessionStart/PreToolUse events, no hook config file). The old
`/Volumes/AI/agentmemory-kilo-hooks/*.sh` are ORPHANED — nothing invokes them.
So live per-message c
