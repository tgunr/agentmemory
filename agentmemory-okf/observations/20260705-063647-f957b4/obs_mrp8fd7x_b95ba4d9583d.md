---
type: FileRead
title: Reviewed desktop slash-command picker dispatch
description: Picker commands resolve model and session arguments locally or via backend execution.
resource: agentmemory://observation/obs_mrp8fd7x_b95ba4d9583d
tags: ["slash command dispatch", "desktop picker overlay", "session resume", "React callback dependencies", "project working directory resolution", "fileread"]
timestamp: 2026-07-17T17:49:01.481683+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

The desktop slash-command handler prevents picker commands from falling through or dead-ending by resolving them through desktop overlays or explicit backend actions. It also supports direct typed model and session selection for power users.

## Facts
- Model picker commands without arguments open the model picker; `/model &lt;name&gt;` delegates to backend execution via runExec.
- Session picker commands `/resume`, `/sessions`, and `/switch` open the session picker when no query is provided.
- Typed session queries match by exact ID, case-insensitive title, or case-insensitive ID, then call `session.resume` with the matched session ID.
- Resolved action and exec commands call runSlash, while picker commands construct SlashActionCtx and call openPicker.
- projectPrimaryCwd returns the trimmed `primary_path`, falls back to `path`, and otherwise returns null.

## Concepts
- slash command dispatch
- desktop picker overlay
- session resume
- React callback dependencies
- project working directory resolution

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 3 · Confidence: 1_
