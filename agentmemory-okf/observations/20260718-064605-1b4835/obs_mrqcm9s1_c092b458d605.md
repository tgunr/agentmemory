---
type: file_write
title: Created BlueBubbles server diagnostic bash script
description: Diagnostic script for BlueBubbles server and Hermes gateway health checks
resource: agentmemory://observation/obs_mrqcm9s1_c092b458d605
tags: ["BlueBubbles server API", "Hermes gateway", "SQLite password verification", "health check script", "file_write"]
timestamp: 2026-07-18T12:34:08.254913+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Created a comprehensive diagnostic bash script that probes BlueBubbles server health and Hermes gateway status. The script performs API pings, checks server connection state, validates password consistency between config and environment, and verifies gateway port availability. This enables quick troubleshooting of the BlueBubbles-Hermes integration setup.

## Facts
- Script checks BlueBubbles server ping endpoint at /api/v1/ping
- Retrieves server info including helper_connected, os_version, and detected_imessage status
- Compares password in config.db against .env file to detect drift
- Verifies Hermes gateway webhook listener is active on TCP port 8645
- Environment variables loaded from ~/.hermes/.env with fallback defaults
- Written to skill 'macos-integrations' at /Users/davec/.hermes/skills/apple/macos-integrations/scripts/bluebubbles-diag.sh

## Concepts
- BlueBubbles server API
- Hermes gateway
- SQLite password verification
- health check script

## Files
- `scripts/bluebubbles-diag.sh`
- `/Users/davec/.hermes/skills/apple/macos-integrations/scripts/bluebubbles-diag.sh`

_Importance: 5 · Confidence: 1_
