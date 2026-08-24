---
type: Observation
title: Invalid request to skill execution
description: Background review failed for non-memory tool usage
resource: agentmemory://observation/obs_ms6q158g_2a9bab37ade0
tags: ["observation"]
timestamp: 2026-07-29T23:33:56.029799+00:00
source: agentmemory
session_id: 20260729_175210_e08bb1
importance: 5
confidence: 0.85
---
# Summary

Background review for terminal tool failed due to its non-memory and non-skill nature. The skill's security protocols were violated when the command was executed.

## Facts
- Non-whitelisted tool used
- Tool usage is not allowed
- Allowed tools are memory and skills only
- Specific command used: cd /Users/davec/.hermes/profiles/ai/skills/github/fo[REDACTED_SECRET] && grep -c \"Session 2026-07-29b\" SKILL.md references/session-2026-07-29-adaptations.md

_Importance: 5 · Confidence: 0.85_
