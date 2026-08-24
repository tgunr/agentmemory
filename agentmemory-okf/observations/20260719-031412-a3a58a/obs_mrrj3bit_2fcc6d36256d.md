---
type: FileRead
title: BlueBubbles sender allowlist lockdown guide
description: Documents environment-based authorization without code changes
resource: agentmemory://observation/obs_mrrj3bit_2fcc6d36256d
tags: ["BlueBubbles allowlist", "default-deny authorization", "environment variable configuration", "E.164 phone normalization", "webhook echo suppression", "fileread"]
timestamp: 2026-07-19T08:23:07.538866+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 5
confidence: 1
---
# Summary

The reference explains how to restrict BlueBubbles inbound messages to specific phone numbers using existing environment variables. It also clarifies sender normalization, default-deny semantics, and why the independent echo guard remains unaffected.

## Facts
- BlueBubbles authorization uses BLUEBUBBLES_ALLOW_ALL_USERS and BLUEBUBBLES_ALLOWED_USERS in gateway/authz_mixin.py::_is_user_authorized, with default-deny behavior unless allow-all, wildcard, or an allowed sender ID matches.
- The inbound user ID comes from record["handle"]["address"] in gateway/platforms/bluebubbles.py::_handle_webhook, with chatIdentifier/chat_guid fallbacks, and is normally E.164 formatted.
- The allowlist should include the permitted E.164 number plus digit-only formatting variants to avoid accidental lockout.
- The authorization layer is separate from the BlueBubbles self-loop echo guard, so restricting senders does not disable echo suppression.
- Changes require setting BLUEBUBBLES_ALLOW_ALL_USERS=false, defining BLUEBUBBLES_ALLOWED_USERS, and running hermes gateway restart from Terminal.app because the in-chat shell cannot edit .env or restart the gateway.

## Concepts
- BlueBubbles allowlist
- default-deny authorization
- environment variable configuration
- E.164 phone normalization
- webhook echo suppression

## Files
- `/Users/davec/.hermes/skills/integrations/bluebubbles-gateway/references/bluebubbles-allowlist.md`
- `gateway/authz_mixin.py`
- `gateway/platforms/bluebubbles.py`
- `~/.hermes/.env`

_Importance: 5 · Confidence: 1_
