---
type: file_edit
title: Quick Command arguments
description: No-line context
resource: agentmemory://observation/obs_mvuizu1y_1c0f9d961430
tags: ["Shell scripting", "Argument substitution", "file_edit"]
timestamp: 2026-10-30T05:22:32.801468+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 9
confidence: 0.9
---
# Summary

Modified the ``hermes_cli/quick_command_args.py`` to support user-authored shell snippets for quick commands with positional arguments. Updated the dispatcher to invoke the user's typed arguments before running the snippet. Added documentation for the ``substitute_args`` function including details on quoted forms and shell-quoted command parts.

## Facts
- Argument substitution for ``type: exec`` quick commands
- Shell-quoted command parts to handle $1/$@ placeholders

## Concepts
- Shell scripting
- Argument substitution

## Files
- `gateway/run_inbound.py`
- `hermes_cli/quick_command_args.py`
- `tests/hermes_cli/test_quick_command_args.py`
- `tui_gateway/methods_tools.py`

_Importance: 9 · Confidence: 0.9_
