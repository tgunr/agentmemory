---
type: Error
title: Patch tool denied by background review system
description: Non-whitelisted tool blocked during SKILL.md documentation update
resource: agentmemory://observation/obs_mrqomvpv_40fef9e34fdf
tags: ["tool restrictions", "background review", "skill configuration", "BlueBubbles integration", "documentation editing", "error"]
timestamp: 2026-07-18T18:10:32.078112+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

A patch tool call to update documentation comments in a BlueBubbles gateway SKILL.md file was blocked by a background review system. The system only permits memory/skill tools, rejecting the patch tool as non-whitelisted. This indicates a security restriction in the execution environment that limits which tools can be used.

## Facts
- Tool attempted: patch (mode: replace)
- Target file: /Users/davec/.hermes/skills/integrations/bluebubbles-gateway/SKILL.md
- Edit attempted: updating BLUEBUBBLES_ALLOW_ALL_USERS comment to explain lockdown procedure (flip to false + set ALLOWED_USERS)
- Error: "Background review denied non-whitelisted tool: patch. Only memory/skill tools are allowed."
- Context: editing configuration documentation for BlueBubbles gateway integration skill

## Concepts
- tool restrictions
- background review
- skill configuration
- BlueBubbles integration
- documentation editing

## Files
- `/Users/davec/.hermes/skills/integrations/bluebubbles-gateway/SKILL.md`

_Importance: 5 · Confidence: 1_
