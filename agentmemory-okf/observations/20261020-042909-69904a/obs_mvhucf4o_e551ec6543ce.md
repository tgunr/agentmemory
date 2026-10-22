---
type: Observation
title: Fix Hermes slash command dispatch bugs
description: Empty-arg dispatch and commands running in popoverview
resource: agentmemory://observation/obs_mvhucf4o_e551ec6543ce
tags: ["observation"]
timestamp: 2026-10-21T08:19:15.467136+00:00
source: agentmemory
session_id: 20261020_042909_69904a
importance: 6
confidence: 0.85
---
# Summary

A Hermes slash command returns an error when the config entry has an invalid type or when quick_commands are not defined in the active profile.
  Additionally, a command runs fine but is not offered in the popover due to visibility issues. Fixing these problems involves setting the type to exec or alias and adding quick_commands to the active profile.

## Facts
- Root cause #1: type: slash is invalid
- Root cause #2: quick_commands not defined in the active profile
- Root cause #3: command runs but is absent from autocomplete popover

## Files
- `/hermes-slash-command-dispatch`

_Importance: 6 · Confidence: 0.85_
