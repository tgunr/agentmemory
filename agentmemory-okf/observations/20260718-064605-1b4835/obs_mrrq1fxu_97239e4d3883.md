---
type: file_edit
title: Documented BlueBubbles self-loop root cause and fix
description: Patched skill documentation with root cause analysis of gateway self-webhook loop
resource: agentmemory://observation/obs_mrrq1fxu_97239e4d3883
tags: ["BlueBubbles gateway", "self-webhook loop", "chat GUID resolution", "pseudo-chat vs real chat", "webhook dispatch storm", "defense-in-depth guards", "file_edit"]
timestamp: 2026-07-19T11:37:37.262621+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 8
confidence: 1
---
# Summary

Documented the true root cause of the BlueBubbles gateway self-loop bug: the send path was resolving to `any;-` pseudo-chats which triggered per-reply webhook dispatch storms. The fix ensures `_resolve_chat_guid` synthesizes proper `iMessage;-` GUIDs instead of returning `any;-` pseudo-chats as send targets.

## Facts
- Root cause: `_resolve_chat_guid("+1...")` returned `any;-;+1...` pseudo-chat instead of real `iMessage;-;+1...` guid
- Sending to `any;-` causes BlueBubbles to fire self-webhook per reply chunk, re-entering gateway as inbound
- Fix: never return `any;-` pseudo-chat as send target; synthesize `iMessage;-;&lt;addr&gt;` for real DM routing
- Regression test added: `test_resolve_chat_guid_refuses_any_pseudochat`
- Decisive diagnostic: grep BB server log at `~/Library/Logs/bluebubbles-server/main.log` for `any;-;` + "Dispatching event to webhook"
- Previous inbound guards (attempts 1-4) retained as defense-in-depth with 120s text window + guid-echo check

## Concepts
- BlueBubbles gateway
- self-webhook loop
- chat GUID resolution
- pseudo-chat vs real chat
- webhook dispatch storm
- defense-in-depth guards

## Files
- `references/bluebubbles-self-loop.md`
- `references/bluebubbles-diagnostics.md`

_Importance: 8 · Confidence: 1_
