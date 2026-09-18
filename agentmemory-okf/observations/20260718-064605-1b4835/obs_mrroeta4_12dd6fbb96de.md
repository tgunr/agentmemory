---
type: FileRead
title: Authorization logic for multi-platform messaging gateway
description: Reading authz_mixin.py lines 550-609 showing Telegram/WhatsApp/SimpleX allowlist handling
resource: agentmemory://observation/obs_mrroeta4_12dd6fbb96de
tags: ["authorization middleware", "platform-specific user ID normalization", "allowlist pattern", "WhatsApp LID aliases", "SimpleX contact identification", "fileread"]
timestamp: 2026-07-19T10:52:01.849855+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 8
confidence: 1
---
# Summary

Read authorization mixin implementation showing how the gateway handles platform-specific user identification for access control. The code combines multiple allowlists, supports wildcard access, and implements platform-specific alias resolution for WhatsApp and SimpleX to normalize user identifiers before checking against the allowlist.

## Facts
- File: /Users/davec/.hermes/hermes-agent/gateway/authz_mixin.py (710 lines, 36KB)
- Handles legacy Telegram group chat IDs with warning mechanism (lines 552-554)
- Merges platform allowlist, group user allowlist, and global allowlist into allowed_ids set (lines 560-567)
- "*" in any allowlist grants universal access (lines 568-571)
- WhatsApp: expands phone↔LID aliases via _expand_whatsapp_auth_aliases (lines 577-588)
- SimpleX: matches both numeric contactId and display name for allowlist entries (lines 598-603)
- Returns True if user_id (or aliases) intersect with allowed_ids (line 605)

## Concepts
- authorization middleware
- platform-specific user ID normalization
- allowlist pattern
- WhatsApp LID aliases
- SimpleX contact identification

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/authz_mixin.py`

_Importance: 8 · Confidence: 1_
