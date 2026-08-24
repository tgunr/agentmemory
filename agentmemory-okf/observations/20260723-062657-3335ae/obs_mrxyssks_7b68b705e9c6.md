---
type: file_edit
title: Patch failed to update file contents
description: No match found for old_string in the file
resource: agentmemory://observation/obs_mrxyssks_7b68b705e9c6
tags: ["file_edit"]
timestamp: 2026-07-23T20:29:27.337221+00:00
source: agentmemory
session_id: 20260723_062657_3335ae
importance: 5
confidence: 0.75
---
# Summary

The patch operation failed to update the file contents because it couldn't find a match for the old string in the new string.

## Facts
- old_string: // Stored session ids that just finished a turn (working → idle edge). The ...
- new_string: // Stored session ids that just finished a turn (working → idle edge). The ...

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/session.ts`

_Importance: 5 · Confidence: 0.75_
