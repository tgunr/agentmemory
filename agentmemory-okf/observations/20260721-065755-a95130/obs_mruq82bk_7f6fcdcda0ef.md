---
type: file_edit
title: Patch in model-selection-routing skill
description: No change detected, only modified one line
resource: agentmemory://observation/obs_mruq82bk_7f6fcdcda0ef
tags: ["file_edit"]
timestamp: 2026-07-21T14:06:04.732049+00:00
source: agentmemory
session_id: 20260721_065755_a95130
importance: 4
confidence: 0.75
---
# Summary

The patch in the 'model-selection-routing' skill modified a single line. This change should improve the overall behavior of the skill, but its impact is yet to be fully evaluated.

## Facts
- New string: "## /route output contract\n\n`/route` stays manual. It does NOT switch models for you.\n\nCurrent output:\n- `TASK_TYPE`: `cheap | general | code | research`\n- `PROVIDER`: provider id to pass to `/model`\n- `MODEL`: exact model id\n- `REASON`: one-line rationale why this route was chosen\n- `COST_SIGNAL`: `free | low | medium`\n- `REPROMPT`: the prompt you should reuse when applying the route\n- Reminder: apply manually with `/model`\n\n
- Old string: "## /route output contract\n\n`/route` stays manual. It does NOT switch models for you.\n\nCurrent output:\n- `TASK_TYPE`: `cheap | general | code | research`\n- `PROVIDER`: provider id to pass to `/model`\n-…

## Files
- `__SKILL_MD`

_Importance: 4 · Confidence: 0.75_
