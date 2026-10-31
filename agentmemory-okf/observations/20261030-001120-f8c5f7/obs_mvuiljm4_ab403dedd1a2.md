---
type: CommandRun
title: Fix Hermes slash commands
description: empty-arg dispatch bugs AND commands that run but are missing from the autocomplete popover
resource: agentmemory://observation/obs_mvuiljm4_ab403dedd1a2
tags: ["Quick command registration", "Hermes dispatch layer", "Autocomplete popover", "commandrun"]
timestamp: 2026-10-30T05:11:26.088774+00:00
source: agentmemory
session_id: 20261030_001120_f8c5f7
importance: 7
confidence: 0.9
---
# Summary

Fixing Hermes slash commands involves setting the correct type and adding quick command registration

## Facts
- Hermes dispatch layer exposes an endpoint for dispatching commands
- Quick command registration is needed to add commands to the autocomplete popover

## Concepts
- Quick command registration
- Hermes dispatch layer
- Autocomplete popover

## Files
- `$npm module for hermes-slash-command-dispatch`

_Importance: 7 · Confidence: 0.9_
