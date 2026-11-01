---
type: file_edit
title: sed -n 105,118p hermes_cli/commands.py
description: executing command in terminal
resource: agentmemory://observation/obs_mvwcpx89_95faa3812b18
tags: ["sed", "file_edit"]
timestamp: 2026-10-31T12:02:25.012642+00:00
source: agentmemory
session_id: local-afb6403797bc02f9ec96f2658cc21ca41d2ed03d9c675693830e4d14e0ef3844
importance: 7
confidence: 0.9
---
# Summary

The command hermes_cli/commands.py was executed using the command cd /Users/davec/.hermes/hermes-agent && sed -n 105,118p hermes_cli/commands.py || python -c "from hermes_cli.commands import resolve_command; print(resolve_command('proj')); print(resolve_command('projects'));"

## Facts
- CommandDef(name='projects', description='List Project workspaces, or move this session into one', category='Session', aliases=('proj',), args_hint='[name|slug]', subcommands=(), cli_only=True, gateway_only=False, gateway_config_gate=None, busy_policy='reject', busy_handler=None, execute=None, argument_mode=None, desktop='terminal', desktop_subcommands=None)
- Python exit_code: 0, error: null

## Concepts
- sed

## Files
- `/Users/davec/.hermes/hermes-agent/hermes_cli/commands.py`

_Importance: 7 · Confidence: 0.9_
