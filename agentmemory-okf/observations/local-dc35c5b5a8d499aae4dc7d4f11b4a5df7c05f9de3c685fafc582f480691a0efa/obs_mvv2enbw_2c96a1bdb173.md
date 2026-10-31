---
type: FileRead
title: Telegram Business adapter analysis
description: Contact and message mapping
resource: agentmemory://observation/obs_mvv2enbw_2c96a1bdb173
tags: ["Telegram Bot API", "fileread"]
timestamp: 2026-10-30T14:25:56.631339+00:00
source: agentmemory
session_id: local-dc35c5b5a8d499aae4dc7d4f11b4a5df7c05f9de3c685fafc582f480691a0efa
importance: 8
confidence: 0.9
---
# Summary

Post-tool call for reading the business adapter file. The analysis revealed the importance of the Bot API version for secretary mode and the need to grant reply in the Telegram app settings.

## Facts
- Bot API version >= 7.2 required for secretary mode
- Telegram app settings: Business -> Chatbots -> Connect bot grant reply

## Concepts
- Telegram Bot API

## Files
- `/Users/davec/Desktop/telegram-warden/warden/adapters/business.py`

_Importance: 8 · Confidence: 0.9_
