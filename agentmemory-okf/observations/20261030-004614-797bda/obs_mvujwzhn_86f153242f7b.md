---
type: file_edit
title: Bootstrap failed
description: Command execution failed
resource: agentmemory://observation/obs_mvujwzhn_86f153242f7b
tags: ["launchctl error handling", "file_edit"]
timestamp: 2026-10-30T05:48:19.496538+00:00
source: agentmemory
session_id: 20261030_004614_797bda
importance: 6
confidence: 0.9
---
# Summary

Bootstrap failed due to input/output error, command re-run as root recommended.

## Facts
- Command executed: chmod +x /tmp/stop-hermes-stack.sh; : > /tmp/stop-hermes-stack.log; launchctl bootout user/$(id -u)/tmp.hermes.stopstack 2>/dev/null; launchctl bootstrap user/$(id -u) /tmp/tmp.hermes.stopstack.plist && echo BOOTSTRAPPED
- Output: Bootstrap failed: 5: Input/output error\nTry re-running the command as root for richer errors.

## Concepts
- launchctl error handling

## Files
- `/tmp/stop-hermes-stack.sh`
- `/tmp/stop-hermes-stack.log`
- `/tmp/tmp.hermes.stopstack.plist`

_Importance: 6 · Confidence: 0.9_
