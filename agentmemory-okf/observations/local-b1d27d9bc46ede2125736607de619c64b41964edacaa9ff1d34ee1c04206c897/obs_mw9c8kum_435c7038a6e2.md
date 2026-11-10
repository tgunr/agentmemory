---
type: file_edit
title: Error with skill_manage tool
description: Failed to patch skill_manage with operations
resource: agentmemory://observation/obs_mw9c8kum_435c7038a6e2
tags: ["batch aborted", "skill_manage tool issue", "file_edit"]
timestamp: 2026-11-09T14:09:56.104267+00:00
source: agentmemory
session_id: local-b1d27d9bc46ede2125736607de619c64b41964edacaa9ff1d34ee1c04206c897
importance: 8
confidence: 0.9
---
# Summary

The skill_manage tool failed to patch the 'macos-finder' skill due to an error in the operations sent to the tool, resulting in the failed revision and rolling back of all touched skills.

## Facts
- Hook post_tool_call triggered
- Tool skill_manage used with input JSON

## Concepts
- batch aborted
- skill_manage tool issue

_Importance: 8 · Confidence: 0.9_
