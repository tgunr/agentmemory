---
type: CommandRun
title: NC30 Apps Availability Check
description: Curl Failed on Apps Next Cloud
resource: agentmemory://observation/obs_mvi89av7_cb7c286f6d59
tags: ["curl", "NextCloud", "commandrun"]
timestamp: 2026-10-21T14:48:44.603415+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 8
confidence: 1
---
# Summary

The command to check for available apps on NC 30.0.16 failed due to a connection error. Despite executing the command, the script could not create the expected output file.

## Facts
- Tool: terminal
- Command: curl --max-time 60 -o nc30_apps.json "https://apps.nextcloud.com/api/v1/platform/30.0.16/apps.json"
- Output: 'curl: (7) Failed to connect to apps.nextcloud.com port 443 after 149 ms: Couldn't connect to server\nhttp=000 bytes=0'
- CWD: /Users/davec/.hermes/profiles/systems/cache/scratch/nc30
- Output Error: FileNotFoundError: [Errno 2] No such file or directory: '/Users/davec/.hermes/profiles/systems/cache/scratch/nc30/nc30_apps.json'
- Exit Code: 1
- Approval: Command was flagged (script execution via heredoc) and auto-approved by smart approval.

## Concepts
- curl
- NextCloud

## Files
- `/Users/davec/.hermes/profiles/systems/cache/scratch/nc30/nc30_apps.json`

_Importance: 8 · Confidence: 1_
