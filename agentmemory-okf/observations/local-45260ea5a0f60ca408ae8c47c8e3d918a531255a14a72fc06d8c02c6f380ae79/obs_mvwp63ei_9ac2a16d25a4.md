---
type: file_edit
title: Updated Hermes Agent UI Project
description: LSP detection skipped, tsc reported an issue
resource: agentmemory://observation/obs_mvwp63ei_9ac2a16d25a4
tags: ["verbal evaluation", "Missing Verb", "file_edit"]
timestamp: 2026-10-31T17:50:54.902805+00:00
source: agentmemory
session_id: local-45260ea5a0f60ca408ae8c47c8e3d918a531255a14a72fc06d8c02c6f380ae79
importance: 7
confidence: 0.9
---
# Summary

This change introduces missing verb evaluation to prevent a backend from answering the local ones. The updated file is in /Users/davec/.hermes/hermes-agent/ui-tui/src/domain/projects.ts

## Facts
- Modified file at /Users/davec/.hermes/hermes-agent/ui-tui/src/domain/projects.ts
- Only reach for the owner's verb when the local ones were MISSING (not refused)

## Concepts
- verbal evaluation
- Missing Verb

## Files
- `/Users/davec/.hermes/hermes-agent/ui-tui/src/domain/projects.ts`

_Importance: 7 · Confidence: 0.9_
