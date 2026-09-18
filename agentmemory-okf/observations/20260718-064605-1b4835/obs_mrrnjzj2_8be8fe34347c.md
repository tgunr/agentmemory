---
type: Error
title: Failed skill file patch due to missing prior read
description: Background curator patch rejected because target file wasn't loaded in current turn
resource: agentmemory://observation/obs_mrrnjzj2_8be8fe34347c
tags: ["read-before-write constraint", "skill management", "iMessage self-loop prevention", "chat key normalization", "prefix stripping", "webhook echo deduplication", "error"]
timestamp: 2026-07-19T10:28:03.611220+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

The agent attempted to patch a skill reference file documenting the resolution of an iMessage self-loop bug caused by chat key prefix mismatches between outbound sends and inbound webhooks. The operation failed because the system enforces a read-before-write constraint, requiring the file to be loaded via `skill_view` first.

## Facts
- Tool `skill_manage` with action `patch` failed on `references/bluebubbles-self-loop.md` for skill `bluebubbles-gateway`
- Error: `_read_before_write_required` is true; file must be loaded via `skill_view` before patching
- Intended patch updates documentation of 4 attempts to fix an iMessage self-loop
- Key technical detail documented: 3rd attempt failed in production because `send()` recorded prefixed chat keys (e.g., `iMessage;-;+1...`) while BlueBubbles webhooks returned bare handles (`+1...`), bypassing deduplication
- 4th attempt fixed this by recording prefix-stripped keys in `send()` via `_chat_keys` adding `c.split(";-;",1)[-1]`

## Concepts
- read-before-write constraint
- skill management
- iMessage self-loop prevention
- chat key normalization
- prefix stripping
- webhook echo deduplication

## Files
- `references/bluebubbles-self-loop.md`

_Importance: 5 · Confidence: 1_
