---
type: CommandRun
title: Fetch move Busy text from Hermes Agent
description: Executing grep command on Hermes Agent
resource: agentmemory://observation/obs_mvxv76q9_5efde8bc1c30
tags: ["file search", "i18n translations", "error handling", "commandrun"]
timestamp: 2026-11-01T13:27:29.741252+00:00
source: agentmemory
session_id: local-c798b807ec45a329e5ddb492ad026a476129607487a7ecffa7d8b7c930295a82
importance: 7
confidence: 1
---
# Summary

The command to fetch move Busy text from Hermes Agent executed successfully.

## Facts
- Tool: terminal
- Command: cd ~/.hermes/hermes-agent && grep -rn &quot;moveBusy&quot; --include=*.{ts,tsx} apps/desktop/src | head -20
- Output: multiple I18N translations for "moveBusy"
- Output: exit code 0, no error
- CWD: /Users/davec/.hermes/hermes-agent

## Concepts
- file search
- i18n translations
- error handling

## Files
- `/Users/davec/.hermes/hermes-agent`

_Importance: 7 · Confidence: 1_
