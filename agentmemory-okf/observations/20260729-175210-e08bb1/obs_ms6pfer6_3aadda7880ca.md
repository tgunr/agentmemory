---
type: FileRead
title: Reordered skills catalog filtering and command ranking
description: No `skills` map present in older backends; no commands reordered or dropped.
resource: agentmemory://observation/obs_ms6pfer6_3aadda7880ca
tags: ["desktop slash commands", "skill catalog filtering", "fileread"]
timestamp: 2026-07-29T23:17:01.933757+00:00
source: agentmemory
session_id: 20260729_175210_e08bb1
importance: 8
confidence: 0.9
---
# Summary

The Hermes agent is now filtering its command output to only show reordered skills, based on the order of skills in new backends and removing unused built-in commands.

## Facts
- New function rankSkillCommands implemented with skill catalog support
- New function filterDesktopCommandsCatalog refactors desktop slash suggestion logic

## Concepts
- desktop slash commands
- skill catalog filtering

_Importance: 8 · Confidence: 0.9_
