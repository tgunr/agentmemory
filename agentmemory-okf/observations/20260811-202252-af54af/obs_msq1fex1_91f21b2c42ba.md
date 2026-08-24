---
type: file_write
title: Tool usage observation for terminal-tool-selection
description: The error occurred while updating skill description.
resource: agentmemory://observation/obs_msq1fex1_91f21b2c42ba
tags: ["skill management and description length", "file_write"]
timestamp: 2026-08-12T12:00:34.881890+00:00
source: agentmemory
session_id: 20260811_202252_af54af
importance: 8
confidence: 0.9
---
# Summary

The tool usage observation provided an error message due to description length exceeding the limit for a system prompt budget. This limits the functionality of the terminal-tool-selection skill.

## Facts
- Description is 107 chars — new skills must fit the 60-char system-prompt budget (one sentence, trigger first, ends with a period). The skill index truncates longer descriptions to 57 chars + '...', destroying the routing signal. Move detail into the skill body.

## Concepts
- skill management and description length

_Importance: 8 · Confidence: 0.9_
