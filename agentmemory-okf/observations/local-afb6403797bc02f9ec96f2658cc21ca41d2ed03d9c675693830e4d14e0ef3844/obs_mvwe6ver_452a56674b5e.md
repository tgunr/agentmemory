---
type: file_edit
title: Terminal edit
description: hermes-agent usage
resource: agentmemory://observation/obs_mvwe6ver_452a56674b5e
tags: ["slash_completions", "file_edit"]
timestamp: 2026-10-31T12:43:35.418933+00:00
source: agentmemory
session_id: local-afb6403797bc02f9ec96f2658cc21ca41d2ed03d9c675693830e4d14e0ef3844
importance: 4
confidence: 0.9
---
# Summary

The terminal edit command used the shell to create an interactive command-line interface for discovering and testing tui-gateway commands. The output shows the results of the command execution.

## Facts
- Command: cd /Users/davec/.hermes/hermes-agent && .venv/bin/python -c \"\nfrom tui_gateway.command_discovery import slash_completions, _SLASH_COMPLETION_LIMIT\nfrom hermes_cli.commands import GATEWAY_KNOWN_COMMANDS\nprint('limit', _SLASH_COMPLETION_LIMIT, '| projects in GATEWAY_KNOWN_COMMANDS:', 'projects' in GATEWAY_KNOWN_COMMANDS, '| worktree:', 'worktree' in GATEWAY_KNOWN_COMMANDS)\nfor t in ['/pr','/pro','/proj','/projects','/projects ','/']:\n    r = slash_completions(t, scope=None)\n    items = (r or {}).get('items') if isinstance(r, dict) else None\n    print(repr(t), '->', [i['display'] for i in (items or [])][:8], 'n=', len(items or []))\n\" 2>&1 | grep -v \"^Skill \"
- Output: limit 30 | projects in GATEWAY_KNOWN_COMMANDS: False | worktree: False\n'/pr' -> ['/prompt', '/projects', '/proj', '/proactive', '/profile', '/compress', '/approvals', '/autoprune'] n= 60\n'/pro' -> ['/prompt', '/projects', '/proj', '/proactive', '/profile', '/approvals', '/compose', '/undo'] n= 60\n'/proj' -> ['/proj', '/projects', '/init', '/project-workspace-setup', '/project-context', '/project-name-master', '/project-cnc', '/hermes-workspace-context'] n= 13\n'/projects' -> ['/projects', '/proj', '/name-assistant'] n= 3\n'/projects ' -> ['name', 'slug'] n= 2\n'/' -> ['/new', '/reset', '/save', '/retry', '/undo', '/title', '/branch', '/fork'] n= 140

## Concepts
- slash_completions

_Importance: 4 · Confidence: 0.9_
