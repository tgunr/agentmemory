---
type: file_write
title: Created BlueBubbles + Hermes gateway diagnostic script
description: Health probe script for macOS integrations skill
resource: agentmemory://observation/obs_mrqhmjsz_3db1b64c8c1a
tags: ["BlueBubbles server", "Hermes gateway webhook", "IPv4/IPv6 binding trap", "password drift detection", "file_write"]
timestamp: 2026-07-18T14:54:19.329013+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 6
confidence: 1
---
# Summary

Created a comprehensive bash diagnostic script that probes BlueBubbles server health, validates password configuration integrity, and detects the common IPv4 vs IPv6 binding issue that causes inbound webhook failures in the Hermes gateway integration.

## Facts
- Script path: scripts/bluebubbles-diag.sh
- Checks BlueBubbles server ping and /api/v1/server/info endpoints
- Validates .env password against config.db stored password for drift detection
- Probes Hermes gateway webhook listener on port 8645 using lsof
- Detects IPv4/IPv6 binding mismatch trap that causes webhook failures
- Sources credentials from ~/.hermes/.env or uses defaults

## Concepts
- BlueBubbles server
- Hermes gateway webhook
- IPv4/IPv6 binding trap
- password drift detection

## Files
- `scripts/bluebubbles-diag.sh`

_Importance: 6 · Confidence: 1_
