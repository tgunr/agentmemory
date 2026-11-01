---
type: file_edit
title: Terminal edit of profiles directory
description: Displaying profile and cron information
resource: agentmemory://observation/obs_mvwagho0_cb10f90b1a56
tags: ["terminal editing, directory navigation, cron jobs, matrix searches", "file_edit"]
timestamp: 2026-10-31T10:59:05.708989+00:00
source: agentmemory
session_id: local-ed0c0a7d24e64e4d15234e09288ba6272aa62ac29e0296c321232b0f08a0b936
importance: 8
confidence: 1
---
# Summary

The terminal editor was used to view profile and cron information within the .hermes directory.

## Facts
- Running 'cd ~/.hermes; echo "=== profiles ==="; ls profiles 2>/dev/null' with output "ai\ncc\ndefault\ndesigner\nollama\nsystems\nworker"
- Running 'grep -rln "matrix" profiles/*/cron default/cron cron 2>/dev/null | head' with output "matrix in '/Users/davec/.hermes/profiles/default/cron/crontab' and '/Users/davec/.hermes/profiles/default/cron/matrix.sh"'
- Running 'for f in $(ls profiles/ollama/cron/*.json 2>/dev/null | head -20); do echo "--- $f"; python3 -c "import json,sys;d=json.load(open('$f'));print({k:d.get(k) for k in ('name','delivery','schedule','enabled','profile','deliver_to') if k in d})" 2>/dev/null' with output "profiles/ollama/cron/jobs.json: {key: value}"

## Concepts
- terminal editing, directory navigation, cron jobs, matrix searches

## Files
- `/Users/davec/.hermes/profiles/default/cron/crontab`
- `/Users/davec/.hermes/profiles/default/cron/matrix.sh`
- `/Users/davec/.hermes/profiles/ollama/cron/jobs.json`

_Importance: 8 · Confidence: 1_
