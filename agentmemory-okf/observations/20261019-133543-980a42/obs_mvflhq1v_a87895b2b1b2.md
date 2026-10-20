---
type: file_edit
title: git status, diff, and submodules on hermes-agent
description: Running tool commands on the hermes-agent
resource: agentmemory://observation/obs_mvflhq1v_a87895b2b1b2
tags: ["submodule", "file_edit"]
timestamp: 2026-10-19T18:35:54.016876+00:00
source: agentmemory
session_id: 20261019_133543_980a42
importance: 4
confidence: 0.9
---
# Summary

The script ran git commands to update status, show differences, and check submodules in the hermes-agent environment.

## Facts
- Running commands on the hermes-agent: git -C ~/.hermes status --short; echo ； git -C ~/.hermes diff --stat； echo ； git -C ~/.hermes diff -- hermes-agent | head -n 100； echo ； git -C ~/.hermes submodule status 2>&1 | head -n 20

## Concepts
- submodule

## Files
- `~/.hermes/hermes-agent`

_Importance: 4 · Confidence: 0.9_
