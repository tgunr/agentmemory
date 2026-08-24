---
type: file_write
title: Write verification script for post_tool_call hook testing
description: End-to-end test that agentmemory extracts tool I/O for Hermes post_tool_call hook
resource: agentmemory://observation/obs_mropptb4_d7f52ed5172f
tags: ["agentmemory observation pipeline", "post_tool_call hook verification", "state_store.db persistence", "Hermes skill management", "end-to-end integration testing", "observation compression validation", "file_write"]
timestamp: 2026-07-17T09:05:16.189078+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 6
confidence: 1
---
# Summary

A bash verification script was written to the hermes-service-debugging skill to test that the agentmemory service correctly processes post_tool_call hook observations. The script posts a synthetic observation to the live service, then reads the on-disk state file to verify the compression engine populated the observation with a valid type and file list, ensuring the hook pipeline works end-to-end.

## Facts
- Script written to skill 'hermes-service-debugging' at /Users/davec/.hermes/profiles/ai/skills/hermes-service-debugging/scripts/verify-observe-hooktype.sh
- Script tests POST /observe endpoint with hookType=post_tool_call on localhost:3111/agentmemory
- Verification reads state_store.db from /Users/davec/data/agentmemory/data/state_store.db/ to confirm observation persistence
- Asserts compressed observation has type != "notification" and non-empty files array
- Script creates synthetic session, posts observation, sleeps 4s, then reads on-disk state and cleans up via DELETE
- Uses PlistBuddy to read AGENTMEMORY_SECRET from ~/Library/LaunchAgents/com.github.agentmemory.plist

## Concepts
- agentmemory observation pipeline
- post_tool_call hook verification
- state_store.db persistence
- Hermes skill management
- end-to-end integration testing
- observation compression validation

## Files
- `/Users/davec/.hermes/profiles/ai/skills/hermes-service-debugging/scripts/verify-observe-hooktype.sh`

_Importance: 6 · Confidence: 1_
