---
type: CommandRun
title: Shared skills update
description: Synching skills from knowledge base
resource: agentmemory://observation/obs_mvwlted2_64493acfcba2
tags: ["sync shared skills", "commandrun"]
timestamp: 2026-10-31T16:17:03.727479+00:00
source: agentmemory
session_id: local-f2e524bd5d3cfd4334c418b91ffebb661855b4cf3e42d35c11951a4633bce792
importance: 4
confidence: 1
---
# Summary

The terminal tool was used to update shared skills, involving sleep and bash utilities. The output log lines indicate successful skill pushes and pulls.

## Facts
- Tool: terminal
- Command line:
- &quot;M=\"$HOME/.hermes/shared-skills\"; S=\"$HOME/sources/hermes-knowledge/skills\">\necho \&quot;counts test\&quot; > \"$M/.synctest-local.txt\"; sleep 1; bash ~/.hermes/scripts/sync-shared-skills.sh\; rm -f \"$M/.synctest-local.txt\" \"$S/.synctest-local.txt\"; sleep 1; bash ~/.hermes/scripts/sync-shared-skills.sh\echno \&quot;=== last 3 log lines ===\"; tail -3 ~/.hermes/logs/shared-skills-sync.log\&quot;

## Concepts
- sync shared skills

## Files
- `/home/hermes/.hermes/shared-skills/ .hermes/sources/hermes-knowledge/skills/.synctest-local.txt`
- `/home/hermes/logs/shared-skills-sync.log`

_Importance: 4 · Confidence: 1_
