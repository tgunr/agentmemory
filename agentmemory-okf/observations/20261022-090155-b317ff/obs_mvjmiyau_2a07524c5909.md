---
type: CommandRun
title: System Path Logic
description: No Hermes Bootstrap Directory Found
resource: agentmemory://observation/obs_mvjmiyau_2a07524c5909
tags: ["HERMES_BOOTSTRAP", "Python sys.path", "commandrun"]
timestamp: 2026-10-22T14:15:55.680363+00:00
source: agentmemory
session_id: 20261022_090155_b317ff
importance: 6
confidence: 1
---
# Summary

The system attempted to execute a command that searched for the Hermes Bootstrap directory. However, no such directory was found, and an error message was returned.

## Facts
- Command executed: ps eww -o command= -p 85598 | tr ' ' '\\n' | grep -E \"^PYTHONPATH=|^HERMES_WEBUI_PYTHON=|^VIRTUAL_ENV=|^HERMES_HOME=\" ; echo \"=== hermes_bootstrap sys.path logic ===\"; grep -rn \"site-packages\" ~/.hermes/hermes-agent/hermes_bootstrap/*.py | head -20
- Returned exit code: 0
- Error message: grep /Users/davec/.hermes/hermes-agent/hermes_bootstrap/*.py: No such file or directory

## Concepts
- HERMES_BOOTSTRAP
- Python sys.path

## Files
- `/Users/davec/.venv/bin/python3`
- `/Users/davec/.hermes/home`
- `/Users/davec/.hermes/hermes-agent/hermes_bootstrap/*.py`

_Importance: 6 · Confidence: 1_
