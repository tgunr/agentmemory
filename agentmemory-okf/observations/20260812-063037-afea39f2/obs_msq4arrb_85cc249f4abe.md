---
type: file_edit
title: Parked Mode — handling turns with no real instruction
description: This behavior involves detecting no instruction, emitting minimal honest acknowledgment.
resource: agentmemory://observation/obs_msq4arrb_85cc249f4abe
tags: ["scaffolding-patterns", "file_edit"]
timestamp: 2026-08-12T13:20:57.092074+00:00
source: agentmemory
session_id: 20260812_063037_afea39f2
importance: 5
confidence: 0.9
---
# Summary

This behavior involves detecting no instruction in a turn and responding accordingly. It's designed to avoid fabricating tasks or using filler loops.

## Facts
- Description is 206 chars - new skills must fit the 60-char system-prompt budget (one sentence, trigger first, ends with a period)
- The skill index truncates longer descriptions to 57 chars + '...

## Concepts
- scaffolding-patterns

_Importance: 5 · Confidence: 0.9_
