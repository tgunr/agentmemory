---
type: Error
title: Skill write_file failed due to missing content
description: Attempted to write SKILL.md for mcp-router-guide without file_content
resource: agentmemory://observation/obs_mrrr5nsn_2da12f9da1c4
tags: ["skill management", "tool parameter validation", "MCP router", "error"]
timestamp: 2026-07-19T12:08:53.682585+00:00
source: agentmemory
session_id: 20260719_070432_3968d6
importance: 2
confidence: 1
---
# Summary

The agent attempted to use the skill_manage tool to write a file named SKILL.md for a skill called mcp-router-guide. The operation failed because the required file_content parameter was omitted from the tool input.

## Facts
- Tool used: skill_manage
- Action attempted: write_file
- Target file: SKILL.md
- Skill name: mcp-router-guide
- Error message: "file_content is required for 'write_file'."

## Concepts
- skill management
- tool parameter validation
- MCP router

## Files
- `SKILL.md`

_Importance: 2 · Confidence: 1_
