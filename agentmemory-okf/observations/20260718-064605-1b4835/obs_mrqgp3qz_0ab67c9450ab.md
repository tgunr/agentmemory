---
type: CommandRun
title: Check gateway process, port 8645, and bluebubbles logs
description: Diagnosing gateway status and bluebubbles 401 errors
resource: agentmemory://observation/obs_mrqgp3qz_0ab67c9450ab
tags: ["Hermes gateway", "Bluebubbles API", "IMAP email adapter", "Process diagnostics", "Webhook listener", "commandrun"]
timestamp: 2026-07-18T14:28:18.869750+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Diagnostic command checked the status of the Hermes gateway process, port 8645 webhook listener, and recent logs. The gateway is running but failing to connect to Bluebubbles due to a 401 Unauthorized error, and the email plugin is encountering non-bytes IMAP payload warnings.

## Facts
- Gateway process PID 17546 is running hermes_cli.main gateway run --replace
- No webhook listener is active on port 8645
- Bluebubbles reconnect attempts (372-377) failing with HTTP 401 Unauthorized to 192.168.88.7:1234
- Email plugin skipping non-bytes IMAP payloads for UIDs 357743-357746

## Concepts
- Hermes gateway
- Bluebubbles API
- IMAP email adapter
- Process diagnostics
- Webhook listener

_Importance: 5 · Confidence: 1_
