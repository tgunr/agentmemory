---
type: file_edit
title: Document root cause of BlueBubbles echo loop in SKILL.md
description: Replace bare-handle fix docs with actual root cause (any;- pseudo-chat resolution)
resource: agentmemory://observation/obs_mrrpxcbj_8097ec55af67
tags: ["BlueBubbles webhook echo loop", "chat guid resolution", "pseudo-chat addressing (any;- vs iMessage;-)", "self-webhook prevention", "regression testing", "file_edit"]
timestamp: 2026-07-19T11:34:25.946405+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 7
confidence: 1
---
# Summary

Updated SKILL.md documentation to reflect the true root cause of the BlueBubbles echo loop. The issue was that `_resolve_chat_guid()` resolved addresses to `any;-` pseudo-chats, causing BlueBubbles to fire self-webhooks on every reply chunk. The fix synthesizes proper `iMessage;-;` guids so replies route as real DMs and stop echoing.

## Facts
- Root cause: BlueBubbles stores 1:1 iMessage conversations as `any;-;+1…` pseudo-chat not `iMessage;-;+1…`
- `_resolve_chat_guid()` matched `identifier == +1…` and returned `any;-;+1…` as SEND target
- Sending to `any;-` chat triggers BlueBubbles self-webhook per chunk causing Hermes to answer itself
- Fix: `_resolve_chat_guid()` must synthesize `iMessage;-;&lt;addr&gt;` instead of resolving to `any;-` pseudo-chat
- Secondary guards retained: drops `any;-` webhooks, `_sent_guids` matching, (chat, normalized-text) 120s window
- Regression test added: `test_resolve_chat_guid_refuses_any_pseudochat`
- Verification: BB main.log should show replies to `iMessage;-;+1…` not `any;-;+1…` with no webhook storm

## Concepts
- BlueBubbles webhook echo loop
- chat guid resolution
- pseudo-chat addressing (any;- vs iMessage;-)
- self-webhook prevention
- regression testing

## Files
- `/Users/davec/.hermes/skills/integrations/bluebubbles-gateway/SKILL.md`

_Importance: 7 · Confidence: 1_
