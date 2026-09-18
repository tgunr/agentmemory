---
type: decision
title: User decides to preserve skill knowledge as reference doc then retire
description: Architectural decision on projects skill consolidation strategy
resource: agentmemory://observation/obs_mrq86v7j_ba920ec96053
tags: ["skill retirement", "projects.db consolidation", "CLI sidebar alignment", "reference documentation", "quick_commands removal", "decision"]
timestamp: 2026-07-18T10:30:11.067637+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 7
confidence: 1
---
# Summary

The agent presented the user with four architectural scenarios for consolidating project management. The user chose to preserve the existing skill's knowledge as a reference document before retiring it, allowing projects.db to become the sole project management system while maintaining historical knowledge for reference.

## Facts
- Agent offered 4 options for handling the projects skill and broken quick_commands
- Options included: retire skill + remove quick_commands, repoint commands to projects.db, continue discussion, or preserve as reference doc then retire
- User selected: "Preserve the skill's knowledge as a reference doc, then retire it"
- Native projects.db will become the primary system for project management
- CLI and sidebar need to agree on project management approach

## Concepts
- skill retirement
- projects.db consolidation
- CLI sidebar alignment
- reference documentation
- quick_commands removal

## Files
- `projects.db`

_Importance: 7 · Confidence: 1_
