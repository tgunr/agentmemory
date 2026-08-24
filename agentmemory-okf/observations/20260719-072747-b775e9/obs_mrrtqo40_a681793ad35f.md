---
type: Error
title: Invalid skill_manage action 'view'
description: Attempted to view skill but action not supported
resource: agentmemory://observation/obs_mrrtqo40_a681793ad35f
tags: ["skill_manage API constraints", "macos-app-crash-debug", "error"]
timestamp: 2026-07-19T13:21:13.098098+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 3
confidence: 1
---
# Summary

Attempted to view details of the 'macos-app-crash-debug' skill using skill_manage, but the 'view' action is not supported by this tool. The tool only supports modifying actions (create, edit, patch, delete, write_file, remove_file). To inspect a skill, a different approach (e.g., reading the skill file directly) would be needed.

## Facts
- skill_manage tool does not support 'view' action
- Valid actions are: create, edit, patch, delete, write_file, remove_file
- Skill name referenced: macos-app-crash-debug

## Concepts
- skill_manage API constraints
- macos-app-crash-debug

## Files
- `macos-app-crash-debug`

_Importance: 3 · Confidence: 1_
