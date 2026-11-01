---
type: file_edit
title: Manual run of sync-shared-skills.sh
description: Command execution within gateway resulted in a launchctl error.
resource: agentmemory://observation/obs_mvwk8cqj_2a516ceb8617
tags: ["launchctl security restrictions", "file_edit"]
timestamp: 2026-10-31T15:32:42.228813+00:00
source: agentmemory
session_id: local-f2e524bd5d3cfd4334c418b91ffebb661855b4cf3e42d35c11951a4633bce792
importance: 7
confidence: 0.9
---
# Summary

The manual run of sync-shared-skills.sh within the gateway resulted in a launchctl error due to a restriction on submitting bootstrap jobs.

## Facts
- Tool used: terminal
- Command: chmod +x /Users/davec/bin/sync-shared-skills.sh\necho \"=== manual run ===\"; bash /Users/davec/bin/sync-shared-skills.sh; echo \"exit=$?\"; tail -3 ~/.hermes/logs/shared-skills-sync.log\necho \"=== load agent ===\"; launchctl bootout gui/$(id -u)/com.davec.hermes-shared-skills-sync 2>/dev/null; launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.davec.hermes-shared-skills-sync.plist 2>&1 || launchctl load -w ~/Library/LaunchAgents/com.davec.hermes-shared-skills-sync.plist 2>&1\nlaunchctl list | grep shared-skills

## Concepts
- launchctl security restrictions

## Files
- `/Users/davec/bin/sync-shared-skills.sh`

_Importance: 7 · Confidence: 0.9_
