---
type: Error
title: Failed to patch slash.ts: duplicate import matches
description: Attempted to remove $petScale from import but found 2 matches
resource: agentmemory://observation/obs_mrp8cis6_e7f82862ab86
tags: ["TypeScript imports", "file patching", "string matching", "error"]
timestamp: 2026-07-17T17:46:48.722473+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 4
confidence: 1
---
# Summary

An attempt to edit slash.ts to remove the $petScale import failed because the provided context string was not unique and matched two separate locations in the file. More context or replace_all=True is required to resolve the ambiguity.

## Facts
- Target file: /tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts
- Attempted to remove $petScale from the @/store/pet-gallery import
- Operation failed because the provided old_string matched 2 separate locations in the file

## Concepts
- TypeScript imports
- file patching
- string matching

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 4 · Confidence: 1_
