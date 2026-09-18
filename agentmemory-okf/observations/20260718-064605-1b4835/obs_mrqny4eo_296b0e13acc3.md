---
type: FileRead
title: Read authorization logic in authz_mixin.py
description: Examining _is_user_authorized method implementation
resource: agentmemory://observation/obs_mrqny4eo_296b0e13acc3
tags: ["authorization", "allowlist", "platform-specific auth", "upstream delegation", "session source", "relay authentication", "fileread"]
timestamp: 2026-07-18T17:51:16.940673+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

Read the authorization logic implementation in authz_mixin.py, specifically the _is_user_authorized method. This method implements a multi-tier authorization system with special handling for system platforms (Home Assistant, Webhook) and upstream relay delegation. The relay authorization uses defensive checks (is True not truthiness) to prevent accidental fail-open scenarios.

## Facts
- File contains _is_user_authorized method with multi-tier authorization system
- Authorization checks in order: per-platform allow-all, env allowlists, DM pairing, global allow-all, default deny
- Special bypass for HOMEASSISTANT and WEBHOOK platforms (always authorized)
- Relay platform uses upstream delegation via delivered_via_upstream_relay flag or adapter authorization_is_upstream
- File is 710 lines total, 36178 bytes
- Reading lines 260-319, truncated at line 319

## Concepts
- authorization
- allowlist
- platform-specific auth
- upstream delegation
- session source
- relay authentication

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/authz_mixin.py`

_Importance: 4 · Confidence: 1_
