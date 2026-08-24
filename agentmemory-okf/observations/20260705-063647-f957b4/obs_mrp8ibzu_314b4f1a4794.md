---
type: FileRead
title: Read desktop slash command definitions
description: Inspected action commands around branching, profiles, projects, themes, and browser CDP.
resource: agentmemory://observation/obs_mrp8ibzu_314b4f1a4794
tags: ["slash command registry", "desktop command actions", "Chrome DevTools Protocol", "session management", "fileread"]
timestamp: 2026-07-17T17:51:19.863861+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

The desktop slash-command registry maps user-facing command names and aliases to action surfaces. This section defines session management, profile/project movement, theme switching, help, and local browser connection controls.

## Facts
- /branch aliases /fork and branches the latest message into a new chat.
- /yolo toggles automatic approval of dangerous commands.
- /handoff, /project, /skin, and /browser accept arguments.
- /project re-homes the session cwd and scopes the sidebar; /browser manages local-gateway CDP connection state.
- /help aliases /commands; /profile, /title, and /journey definitions are also present or begin in this section.
- The file has 457 lines and the read covered lines 105-134.

## Concepts
- slash command registry
- desktop command actions
- Chrome DevTools Protocol
- session management

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/lib/desktop-slash-commands.ts`

_Importance: 3 · Confidence: 1_
