---
type: CommandRun
title: TypeScript syntax errors in slash.ts after edit
description: npx tsc --noEmit reveals broken syntax in use-prompt-actions/slash.ts
resource: agentmemory://observation/obs_mrp8gis2_40cf6ff84fe8
tags: ["TypeScript syntax errors", "tsc --noEmit type checking", "use-prompt-actions hook", "slash command parsing", "regression from file edit", "commandrun"]
timestamp: 2026-07-17T17:49:55.337305+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 8
confidence: 1
---
# Summary

A recent edit to slash.ts in the use-prompt-actions hook introduced widespread syntax errors spanning from line 411 to the end of the file. The errors (missing identifiers, semicolons, and declarations) suggest a broken or incomplete code block was inserted or that closing syntax was removed. This blocks TypeScript compilation and needs to be fixed before any further work can proceed.

## Facts
- File: apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts
- First error at line 411: TS1003 Identifier expected
- Line 417: multiple TS1003, TS1005, TS1138 errors (likely an inline type/function declaration broken)
- Lines 459, 480, 486, 495, 529: TS1005 ';' expected
- Lines 599, 655, 673, 674: TS1128 Declaration or statement expected
- Error count shown is first 20 — likely many more throughout the file
- Pattern suggests an incomplete or malformed edit (e.g., partial replacement or missing closing brace/comment)

## Concepts
- TypeScript syntax errors
- tsc --noEmit type checking
- use-prompt-actions hook
- slash command parsing
- regression from file edit

## Files
- `apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 8 · Confidence: 1_
