---
type: file_edit
title: Mismatched string in configuration file
description: No match for old_string found in /Users/davec/.hermes/skills/configuration/hermes-gateway-control/SKILL.md
resource: agentmemory://observation/obs_msstsjln_e92d290b2b1c
tags: ["regex pattern mismatch", "file_edit"]
timestamp: 2026-08-14T10:50:09.075651+00:00
source: agentmemory
session_id: 20260813_145840_aef3db
importance: 5
confidence: 0.9
---
# Summary

The patch tool updated the file incorrectly, causing confusion regarding the behavior of orphaned Herme's CLI processes. This issue is not critical and can be resolved by quitting the application.

## Facts
- Failed to update configuration file due to a missing pattern matching.

## Concepts
- regex pattern mismatch

## Files
- `/Users/davec/.hermes/skills/configuration/hermes-gateway-control/SKILL.md`

_Importance: 5 · Confidence: 0.9_
