---
type: file_edit
title: HERMES HOME DIRECTORY RESOLUTION
description: Resolves profile name to HERMES HOME directory
resource: agentmemory://observation/obs_mvuhqmf5_6bbde302dfad
tags: ["SessionDB", "profile resolution", "file_edit"]
timestamp: 2026-10-30T04:47:23.390120+00:00
source: agentmemory
session_id: 20261029_233055_974394
importance: 8
confidence: 0.9
---
# Summary

The code snippet resolves the HERMES HOME directory by using the `get_profile_dir` function to convert a profile name into its corresponding HERMES HOME directory.

## Facts
- Tool: terminal
- Command: cd /Users/davec/.hermes/hermes-agent && grep -rn \"SessionDB(\"

## Concepts
- SessionDB
- profile resolution

## Files
- `/Users/davec/.hermes/hermes-agent/.hermes-agent`

_Importance: 8 · Confidence: 0.9_
