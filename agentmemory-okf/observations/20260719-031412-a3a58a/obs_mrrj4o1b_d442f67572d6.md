---
type: Error
title: Patch tool denied by background review security
description: Non-whitelisted tool blocked; only memory/skill tools allowed
resource: agentmemory://observation/obs_mrrj4o1b_d442f67572d6
tags: ["Background review security", "Tool whitelisting", "BlueBubbles gateway", "Allowlist verification", "Synthetic blocked-sender probe", "error"]
timestamp: 2026-07-19T08:24:10.413265+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 5
confidence: 1
---
# Summary

An attempt to edit the BlueBubbles gateway SKILL.md using the patch tool was blocked by a background review security mechanism. The system restricts tool execution during background reviews to only memory and skill tools, preventing direct file edits. An alternative approach using an allowed tool will be needed to update the documentation.

## Facts
- Tool attempted: patch (replace mode) on SKILL.md
- Target file: /Users/davec/.hermes/skills/integrations/bluebubbles-gateway/SKILL.md
- Intended change: Append reference to post-lockdown verification playbook and synthetic blocked-sender probe
- Error message: "Background review denied non-whitelisted tool: patch. Only memory/skill tools are allowed."
- Background review enforces strict tool whitelisting limiting operations to memory/skill tools

## Concepts
- Background review security
- Tool whitelisting
- BlueBubbles gateway
- Allowlist verification
- Synthetic blocked-sender probe

## Files
- `/Users/davec/.hermes/skills/integrations/bluebubbles-gateway/SKILL.md`

_Importance: 5 · Confidence: 1_
