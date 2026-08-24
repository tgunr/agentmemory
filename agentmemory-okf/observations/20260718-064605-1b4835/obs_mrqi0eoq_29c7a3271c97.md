---
type: file_edit
title: Document BlueBubbles webhook and loop landmines in SKILL.md
description: Added two critical troubleshooting traps to macos-integrations skill
resource: agentmemory://observation/obs_mrqi0eoq_29c7a3271c97
tags: ["BlueBubbles Gateway", "iMessage integration", "Webhook configuration", "macOS Tahoe SIP", "Troubleshooting landmines", "Hermes gateway", "file_edit"]
timestamp: 2026-07-18T15:05:05.879577+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

The SKILL.md file for the 'macos-integrations' skill was patched to document two critical BlueBubbles gateway landmines. The additions detail an IPv4/IPv6 webhook bind trap that causes silent inbound failures and a Tahoe self-answering loop that occurs when helper_connected is false. These notes serve as crucial troubleshooting references for iMessage integration via Hermes.

## Facts
- Patched SKILL.md in 'macos-integrations' skill using skill_manage tool
- Documented IPv4/IPv6 webhook bind trap requiring BLUEBUBBLES_WEBHOOK_HOST set to LAN IPv4
- Documented Tahoe self-answering loop when helper_connected=false causing infinite replies
- Loop mitigation requires emergency launchctl stop and code-level sent-GUID guard
- BlueBubbles API runs on localhost:1234, webhook on port 8645

## Concepts
- BlueBubbles Gateway
- iMessage integration
- Webhook configuration
- macOS Tahoe SIP
- Troubleshooting landmines
- Hermes gateway

## Files
- `SKILL.md`
- `references/bluebubbles-troubleshooting.md`
- `references/bluebubbles-tahoe.md`
- `references/bluebubbles-gateway.md`
- `scripts/bluebubbles-diag.sh`

_Importance: 5 · Confidence: 1_
