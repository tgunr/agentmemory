---
type: file_edit
title: Hermes WebUI self-heal
description: No webui running ( diagnosis done )
resource: agentmemory://observation/obs_msfzxaiw_c785de4b40e6
tags: ["file_edit"]
timestamp: 2026-08-05T11:20:48.004211+00:00
source: agentmemory
session_id: 20260805_055554_5fae0e
importance: 5
confidence: 0.75
---
# Summary

The self-heal configuration had not been loaded yet; now it's loaded.

## Facts
- Add Hermes WebUI self-heal configuration to chain DNS CNAME->hermes.polymicro.net->98.96.55.218
- Run `/Users/davec/.hermes/scripts/webui-watchdog.sh` to probe webui health at 127.0.0.1:8787/health and bootstrap if down

## Files
- `/Users/davec/.hermes/scripts/webui-watchdog.sh`

_Importance: 5 · Confidence: 0.75_
