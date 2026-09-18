---
type: file_edit
title: Tools: hermes web cli command checking
description: No CLI command found for 'hermes dashboard' and 'hermes web'
resource: agentmemory://observation/obs_msf1o6jz_ac4bb7015fba
tags: ["CLI command existence check", "file_edit"]
timestamp: 2026-08-04T19:21:56.011678+00:00
source: agentmemory
session_id: 20260804_141612_969e2e
importance: 6
confidence: 1
---
# Summary

The tool executed a series of commands to investigate if the 'hermes dashboard' and 'hermes web' CLI commands exist.

## Facts
- Tool usage timestamp: 2026-08-04T19:21:56.011678+00:00
- Tool invoked: terminal
- Command run: echo "=== does 'hermes dashboard' / 'hermes web' exist as a CLI command? ==="\ngrep -rniE \"add_parser\\(['\\\"](dashboard|web)['\\\"]|'dashboard'|\\\"dashboard\\\"|'web'|\\\"web\\\"\" --include=*.py hermes_cli/ 2>/dev/null | grep -iE \"add_parser|subparser\" | head\necho\necho \"=== search CLI commands list ===\"\ngrep -rnoE \"(dashboard|web|serve)[^a-z]\" --include=*.py hermes_cli/ 2>/dev/null | grep -iE \"add_parser|command\" | head\necho\necho \"=== README says: 'hermes dashboard' port 9119, 'hermes_cli.main web' ===\"\ngrep -rniE \"dashboard|web\\b\" hermes_cli/main.py 2>/dev/null | head"

## Concepts
- CLI command existence check

_Importance: 6 · Confidence: 1_
