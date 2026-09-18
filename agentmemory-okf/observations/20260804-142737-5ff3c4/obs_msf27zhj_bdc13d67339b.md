---
type: FileRead
title: Cron job issues
description: cron jobs have script not found errors due to path discrepancies between mac and pve.root
resource: agentmemory://observation/obs_msf27zhj_bdc13d67339b
tags: ["cron maintenance", "script deployment", "fileread"]
timestamp: 2026-08-04T19:37:19.973050+00:00
source: agentmemory
session_id: 20260804_142737_5ff3c4
importance: 7
confidence: 0.9
---
# Summary

Cron job invocation of `python3 /Users/davec/.hermes/profiles/pveroot/scripts/backup-check-monthly.py` fails due to script not found error, likely due to path discrepancies between macOS and pve.root. Solution: deploy script to pve.root and keep cron remote.

## Facts
- The `backup-check-monthly.py` script lives on the **mac** at `/Users/davec/.hermes/profiles/pveroot/scripts/backup-check-monthly.py`, but its wrapper invokes a non-existent script on `pve.root`.
- The cron jobs expect an absolute path, which is then passed through `ssh pve.root` and results in a "script not found" error.

## Concepts
- cron maintenance
- script deployment

## Files
- `/Users/davec/.hermes/profiles/pveroot/scripts/backup-check-monthly.py`
- `/Users/davec/.hermes/profiles/pveroot/scripts/`

_Importance: 7 · Confidence: 0.9_
