---
type: file_edit
title: Editing Hermes WebUI dependencies
description: Grep and extract dependency info
resource: agentmemory://observation/obs_mvjmpvbj_c99669cb1e61
tags: ["sys.path.insert", "file_edit"]
timestamp: 2026-10-22T14:21:18.402479+00:00
source: agentmemory
session_id: 20261022_090155_b317ff
importance: 8
confidence: 1
---
# Summary

Editing Hermes WebUI dependencies in terminal, extracting specific lines of code.

## Facts
- Tool: terminal
- Command: "cd /Users/davec/hermes-webui && grep -rn \"activate_dependencies\\|pm.environments\\|site_packages\\|addsitedir\\|sys.path.insert\" --include=*.py api/ server.py bootstrap.py | grep -v \"\\.venv/\" | head -25"
- Total output lines: 25

## Concepts
- sys.path.insert

## Files
- `/Users/davec/hermes-webui/server.py`

_Importance: 8 · Confidence: 1_
