---
type: CommandRun
title: Listed skills in "apple" category
description: Discovered macos-computer-use skill for background desktop automation
resource: agentmemory://observation/obs_mrrs9y9h_a671989a7cd6
tags: ["macOS automation", "computer_use", "background desktop control", "skill discovery", "commandrun"]
timestamp: 2026-07-19T12:40:13.489162+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 4
confidence: 1
---
# Summary

The agent queried the skills list for the "apple" category and discovered the "macos-computer-use" skill. This skill enables background macOS desktop automation (screenshots, input control) without interfering with the user's active session, and should be loaded whenever the computer_use tool is available.

## Facts
- Tool skills_list called with category "apple"
- Returned 1 skill: "macos-computer-use"
- Skill drives macOS desktop in background: screenshots, mouse, keyboard, scroll, drag
- Does not steal user's cursor, keyboard focus, or Space
- Works with any tool-capable model; load when computer_use tool is available
- Hint: use skill_view(name) to see full content, tags, and linked files

## Concepts
- macOS automation
- computer_use
- background desktop control
- skill discovery

_Importance: 4 · Confidence: 1_
