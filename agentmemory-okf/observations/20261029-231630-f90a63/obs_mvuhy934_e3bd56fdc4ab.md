---
type: CommandRun
title: Terminal command interrupt
description: Command interrupted by job timeout.
resource: agentmemory://observation/obs_mvuhy934_e3bd56fdc4ab
tags: ["terminal session", "ssh connection", "commandrun"]
timestamp: 2026-10-30T04:53:19.355156+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 5
confidence: 1
---
# Summary

The command execution was cut short due to a timed out operation.

## Facts
- Command ran: sleep 120; ssh pro.local 'ls ~/.hermes/.hermes-update-in-progress >/dev/null 2>&1 && echo "marker: still present" || echo "marker: cleared"; tail -6 ~/.hermes/logs/update.log | cut -c1-170; echo "--- app pid:|"; pgrep -fl "MacOS/[H]ermes$"'
- Exit code: 130
- Error: null

## Concepts
- terminal session
- ssh connection

_Importance: 5 · Confidence: 1_
