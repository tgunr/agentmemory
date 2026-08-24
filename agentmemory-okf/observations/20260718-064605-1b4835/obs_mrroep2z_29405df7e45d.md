---
type: FileRead
title: Reviewed gateway allowlist authorization logic
description: Inspected adapter policies and Telegram group compatibility handling.
resource: agentmemory://observation/obs_mrroep2z_29405df7e45d
tags: ["authorization allowlists", "Telegram group access control", "backward compatibility shim", "fail-open configuration", "fileread"]
timestamp: 2026-07-19T10:51:56.407510+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

The authorization mixin separates group chat-ID authorization from sender user-ID authorization. It also retains a compatibility shim for legacy Telegram configurations that placed negative chat IDs in the user allowlist.

## Facts
- Adapters enforcing their own access policy authorize configured allowlist modes; group, forum, and channel traffic also checks for a sender allowlist.
- If no allowlist applies, GATEWAY_ALLOW_ALL_USERS accepts true, 1, or yes case-insensitively.
- Group and forum chat IDs may be authorized through a comma-separated group_chat_allowlist, including wildcard *.
- Telegram preserves backward compatibility by treating negative values in TELEGRAM_GROUP_ALLOWED_USERS as chat IDs while warning users to move them to TELEGRAM_GROUP_ALLOWED_CHATS.

## Concepts
- authorization allowlists
- Telegram group access control
- backward compatibility shim
- fail-open configuration

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/authz_mixin.py`

_Importance: 3 · Confidence: 1_
