---
type: CommandRun
title: feat(desktop): /project slash command (adapted for argumentMode)
description: Fork Integration Workflow: Cherry-Pick & Adaptation
resource: agentmemory://observation/obs_ms68obz9_7db4f290c702
tags: ["GitHub, Fork, Cherry-Pick, Argument Mode", "Integration & Refactoring", "commandrun"]
timestamp: 2026-07-29T15:28:04.770165+00:00
source: agentmemory
session_id: 20260729_083331_2ab38b
importance: 7
confidence: 1
---
# Summary

The skill 'fo[REDACTED_SECRET]' was created for GitHub using the Fork Integration Workflow with Cherry-Pick & Adaptation. Key adaptations include updating commands from old `args` pattern to new `argumentMode`. The process involved cherry-picking feature commits and adapting to upstream architectural changes, including removing a deleted file and modifying existing imports.

## Facts
- Upstream added `/shell` slash command with new `argumentMode` API.
- Local `/project` and `/model` commands used old `args` pattern.
- Ported to upstream's new slash command API, keeping picker reveal behavior for /model and /project.

## Concepts
- GitHub, Fork, Cherry-Pick, Argument Mode
- Integration & Refactoring

## Files
- `/Users/davec/.hermes/profiles/ai/skills/github/fo[REDACTED_SECRET]/SKILL.md`

_Importance: 7 · Confidence: 1_
