---
type: FileRead
title: Read BlueBubbles sender allowlist lockdown guide
description: Reference documents configuration, restart, and verification steps
resource: agentmemory://observation/obs_mrrjuqp1_a245a4ea8858
tags: ["BlueBubbles allowlist", "default-deny authorization", "environment configuration", "E.164 phone numbers", "webhook authorization", "self-loop echo guard", "fileread"]
timestamp: 2026-07-19T08:44:26.914192+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

The reference explains how to restrict BlueBubbles inbound messages to specific sender numbers without changing code. It emphasizes restarting the gateway so the updated environment is loaded and validating denial through the webhook's LAN address.

## Facts
- Inbound authorization uses gateway/authz_mixin.py::_is_user_authorized with BLUEBUBBLES_ALLOW_ALL_USERS and BLUEBUBBLES_ALLOWED_USERS; it defaults to deny unless allow-all, wildcard, or sender matching succeeds.
- BlueBubbles sender IDs come from record["handle"]["address"], with chatIdentifier/chat_guid fallbacks, and commonly use E.164 formatting.
- Lockdown requires setting BLUEBUBBLES_ALLOW_ALL_USERS=false, adding permitted number variants to BLUEBUBBLES_ALLOWED_USERS, and restarting via hermes gateway restart from Terminal.app.
- The authorization layer is separate from the self-loop echo guard in gateway/platforms/bluebubbles.py::_handle_webhook.
- Verification checks .env values, the running gateway environment, BlueBubbles availability, and denial of a synthetic non-allowed webhook through the LAN-bound listener rather than localhost.

## Concepts
- BlueBubbles allowlist
- default-deny authorization
- environment configuration
- E.164 phone numbers
- webhook authorization
- self-loop echo guard

## Files
- `/Users/davec/.hermes/skills/integrations/bluebubbles-gateway/references/bluebubbles-allowlist.md`

_Importance: 3 · Confidence: 1_
