---
type: file_edit
title: openscad-cad: scoop port edit
description: User modified scoop profile in gridfinity-scoop-port.md
resource: agentmemory://observation/obs_msula281_2728ce8fe89c
tags: ["scoop port customization", "file_edit"]
timestamp: 2026-08-15T16:27:22.169048+00:00
source: agentmemory
session_id: 20260815_103622_30a5a9
importance: 7
confidence: 0.9
---
# Summary

User modified the scoop port profile to improve placement in gridfinity-scoop-port.md. The modification resolved an "upside down" issue caused by a reference solid spanning the local Z = -size_mm.z .. -size_mm.z/2 range.

## Facts
- The extended fork has NO scoop (or tab) parameter.
- Solid lands below and behind the cavity → invisible cut ("upside down").

## Concepts
- scoop port customization

## Files
- `references/gridfinity-scoop-port.md`

_Importance: 7 · Confidence: 0.9_
