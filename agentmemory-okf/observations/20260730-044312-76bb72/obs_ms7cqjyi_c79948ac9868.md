---
type: CommandRun
title: Load Hermes Desktop Skill View App
description: 
resource: agentmemory://observation/obs_ms7cqjyi_c79948ac9868
tags: ["React hooks", "commandrun"]
timestamp: 2026-07-30T10:09:33.062513+00:00
source: agentmemory
session_id: 20260730_044312_76bb72
importance: 7
confidence: 0.9
---
# Summary

When investigating desktop UI bugs, loading the Hermes Desktop Skill View App can help confirm the correct surface. If the renderer needs to know what data the running app receives from the gateway, this skill view app is useful. Additionally, when building or shipping a renderer fix without a full `electron-builder` run, using the skill view app can provide valuable information.

## Facts
- `asar` is often not installed globally. Use `npx --yes @electron/asar` rather than a bare `asar` command.

## Concepts
- React hooks

## Files
- `hermes-agent/apps/desktop/`

_Importance: 7 · Confidence: 0.9_
