---
type: file_edit
title: Patch SKILL.md in skill 'okf-agentmemory-index'
description: No context specified, edit to correct outdated information.
resource: agentmemory://observation/obs_mspce0yn_45892d0cc5a6
tags: ["skill management", "file_edit"]
timestamp: 2026-08-12T00:19:39.741142+00:00
source: agentmemory
session_id: 20260811_112343_dffd4c
importance: 8
confidence: 0.9
---
# Summary

Patched SKILL MD, a reference points towards the tools' updated versioning strategy. The change was made via post_tool_call and confirms readiness for production use.

## Facts
- Patch was successful with 1 replacement of existing content.
- The patched file is the only changed item.

## Concepts
- skill management

## Files
- `/a…scripts/okf_to_agentmemory.py — run script — limit 5 first; full run is idempotent. It takes the LAST /agentmemories/.env secret line and retries 3x on errors.`

_Importance: 8 · Confidence: 0.9_
