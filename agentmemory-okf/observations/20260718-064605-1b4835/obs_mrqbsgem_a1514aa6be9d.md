---
type: Error
title: skill_manage tool call failed due to malformed action parameter
description: Action parameter contained corrupted XML-like tags instead of valid action string
resource: agentmemory://observation/obs_mrqbsgem_a1514aa6be9d
tags: ["skill management", "XML parameter corruption", "iMessage integration", "error"]
timestamp: 2026-07-18T12:10:57.162111+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

The skill_manage tool call failed because the action parameter contained corrupted XML-like tags embedded within it, preventing the legitimate patch operation on the macos-integrations skill from executing.

## Facts
- Tool: skill_manage attempted to patch skill 'macos-integrations'
- Action parameter was 'patch<tool_sep:6124c78e>\n<arg_key:6124c78e>name</arg_key><arg_value>macos-integrations'</arg_value>
- Error message indicated unknown action format, listing valid actions: create, edit, patch, delete, write_file, remove_file
- The patch intended to update iMessage/BlueBubbles documentation with troubleshooting details

## Concepts
- skill management
- XML parameter corruption
- iMessage integration

## Files
- `references/imessage.md`
- `references/bluebubbles-troubleshooting.md`
- `references/bluebubbles-tahoe.md`

_Importance: 4 · Confidence: 1_
