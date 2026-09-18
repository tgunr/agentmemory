---
type: architecture
title: Hermes autocomplete path (complete.slash RPC) reads get_skill_commands()/skill b
description: Hermes autocomplete path (complete.slash RPC) reads get_skill_commands()/skill bundles, NOT quick_commands directly. A command appears in the type-/ popover only if it is: (a) a built-in COMMANDS entr
resource: agentmemory://memory/mem_mtf8r1kn_7b72fe454134
tags: ["hermes", "quick_commands", "skill_commands", "autocomplete", "complete.slash", "get_skill_commands"]
timestamp: 2026-08-30T03:19:49.048Z
source: agentmemory
strength: 7
---
# Content

Hermes autocomplete path (complete.slash RPC) reads get_skill_commands()/skill bundles, NOT quick_commands directly. A command appears in the type-/ popover only if it is: (a) a built-in COMMANDS entry, (b) a registered skill command (SKILL.md name: <cmd>), or (c) a plugin command. quick_commands entries are reached by /command.dispatch and shown in /commands catalog, but NOT auto-added to autocomplete. /classify and /optimize ARE already registered skill commands (skills/autonomous-ai-agents/{classify,optimize}/SKILL.md name:). /route is only a quick_command. So 'missing from autocomplete' for an already-registered command is a runtime/stale-process issue, not a config gap. The 10-profile quick_commands are kept in sync by ~/.hermes/scripts/sync-quick-commands.py (root config.yaml is canonical; dry-run default, --apply writes).

## Files
- `~/.hermes/config.yaml`
- `~/.hermes/scripts/sync-quick-commands.py`
- `~/.hermes/hermes-agent/tui_gateway/methods_complete.py`
- `~/.hermes/skills/autonomous-ai-agents/{classify`
- `optimize}/SKILL.md`
