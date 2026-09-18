---
type: file_edit
title: Documented BlueBubbles echo loop root cause + tightened pgrep
description: SKILL.md updated with surviving bug analysis and more specific LaunchAgent PID check
resource: agentmemory://observation/obs_mrrnhxhn_8d2d2d103fd0
tags: ["BlueBubbles webhook echo loop", "chat key prefix mismatch (iMessage;-; prefix)", "prefix-stripping normalization", "LaunchAgent deployment lifecycle", "pgrep PID identification", "regression test naming", "file_edit"]
timestamp: 2026-07-19T10:26:27.656501+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 7
confidence: 1
---
# Summary

Added a new bullet to the BlueBubbles gateway SKILL.md documenting the actual surviving bug: a chat key mismatch where `send()` recorded only the prefixed form (`iMessage;-;+1…`) while the inbound echo arrives as the bare handle (`+1…`). The fix is to also record the prefix-stripped form via `c.split(";-;",1)[-1]`. Also tightened the LaunchAgent PID detection pgrep regex to `hermes_cli.main gateway` so post-patch restart verification is reliable.

## Facts
- Root cause: Hermes sends replies under prefixed form (e.g. `iMessage;-;+1…`) but BlueBubbles re-webhooks the same reply back as the bare handle (`+1…`)
- Inbound guard strips prefixes on inbound side, but `send()` originally recorded only the prefixed key, so the bare echo never matched and the loop survived
- Fix: in `send()`, record the prefix-stripped chat key too — `_chat_keys` must include `c.split(";-;",1)[-1]`
- Regression test added: `test_send_prefixed_then_bare_echo_dropped`
- Debug technique: grep `gateway.log` for inbound `chat=` value of echo and verify it matches what `send()` recorded — they must share the stripped handle
- pgrep pattern tightened from `hermes.*gateway` to `hermes_cli.main gateway` for more accurate LaunchAgent PID identification
- Code patch without `hermes gateway restart` = no change in running behavior (LaunchAgent doesn't auto-reload)

## Concepts
- BlueBubbles webhook echo loop
- chat key prefix mismatch (iMessage;-; prefix)
- prefix-stripping normalization
- LaunchAgent deployment lifecycle
- pgrep PID identification
- regression test naming

## Files
- `/Users/davec/.hermes/skills/integrations/bluebubbles-gateway/SKILL.md`
- `gateway/platforms/bluebubbles.py`

_Importance: 7 · Confidence: 1_
