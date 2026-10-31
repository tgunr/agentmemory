---
type: file_edit
title: Update project workspace
description: Update project workspace before starting work
resource: agentmemory://observation/obs_mvv32js3_9e3eda2c50e7
tags: ["file_edit"]
timestamp: 2026-10-30T14:44:31.776072+00:00
source: agentmemory
session_id: local-dc35c5b5a8d499aae4dc7d4f11b4a5df7c05f9de3c685fafc582f480691a0efa
importance: 7
confidence: 0.75
---
# Summary

The skill writes to the active Hermes profile before starting any work. The skill determines the active profile and uses it to resolve the project folder from the registry. The skill then updates the projects.yaml map with the project name and description.

## Facts
- Register project in projects.yaml map
- Path registry gap

_Importance: 7 · Confidence: 0.75_
