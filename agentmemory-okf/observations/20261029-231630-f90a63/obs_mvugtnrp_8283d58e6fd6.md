---
type: file_edit
title: Update pro-index.js
description: Run command using Hermes-agent
resource: agentmemory://observation/obs_mvugtnrp_8283d58e6fd6
tags: ["Hermes-agent", "SCP", "Python 3", "file_edit"]
timestamp: 2026-10-30T04:21:45.490620+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 5
confidence: 1
---
# Summary

The Hermes-agent was used to edit the pro-index.js file in /tmp by running a custom command.

## Facts
- Timestamp: 2026-10-30T04:21:45.490620+00:00
- Tool: terminal
- Command: cd /tmp && scp -q pro.local:'~/.hermes/hermes-agent/apps/desktop/release/mac-arm64/Hermes.app/Contents/Resources/app.asar.unpacked/dist/assets/index-BJ03Otcy.js' /tmp/pro-index.js && ls -l /tmp/pro-index.js && python3 - <<'EOF' ...

## Concepts
- Hermes-agent
- SCP
- Python 3

## Files
- `/tmp/pro-index.js`

_Importance: 5 · Confidence: 1_
