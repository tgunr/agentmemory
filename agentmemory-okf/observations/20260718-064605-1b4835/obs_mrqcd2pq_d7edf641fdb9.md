---
type: Error
title: BlueBubbles memory addition failed - over character limit
description: Attempted to add 2 entries about BlueBubbles server issues but exceeded 2,200 char limit
resource: agentmemory://observation/obs_mrqcd2pq_d7edf641fdb9
tags: ["BlueBubbles server configuration", "macOS Tahoe compatibility", "password authentication", "private API helper dylib", "System Integrity Protection (SIP)", "error"]
timestamp: 2026-07-18T12:26:59.193354+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 8
confidence: 1
---
# Summary

Memory addition failed due to exceeding character limit. BlueBubbles has two critical issues: password configuration mismatch causing authentication failures, and broken private API on macOS Tahoe requiring SIP disable and special dylib. Both issues affect message delivery and advanced features.

## Facts
- BlueBubbles server running on macOS at /Applications/BlueBubbles.app v1.9.9 port 1234
- Password mismatch: config.db has 'PMN222130pmn!' with trailing ! but .env missing it causing 401 errors
- AppleScript fallback works for basic send/receive but helper_connected stays false
- Private API broken on macOS Tahoe due to SIP enabled and crashing dylib
- Private API crash: _newChatItems IMMessageAcknowledgmentChatItem lacks -index property
- Fix requires SIP disabled and willsigmon/bluebubbles-helper v0.0.22-tahoe dylib
- BlueBubbles issue #776 references the Tahoe compatibility problem

## Concepts
- BlueBubbles server configuration
- macOS Tahoe compatibility
- password authentication
- private API helper dylib
- System Integrity Protection (SIP)

## Files
- `/Applications/BlueBubbles.app`
- `config.db`
- `.env`
- `private-api/macos11/`

_Importance: 8 · Confidence: 1_
