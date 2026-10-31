---
type: file_edit
title: Update Warden token and run bot
description: Running warden in Telegram bot mode
resource: agentmemory://observation/obs_mvv2hwp2_efbb1c316a1b
tags: ["API token management", "file_edit"]
timestamp: 2026-10-30T14:28:28.737461+00:00
source: agentmemory
session_id: local-dc35c5b5a8d499aae4dc7d4f11b4a5df7c05f9de3c685fafc582f480691a0efa
importance: 5
confidence: 1
---
# Summary

The bot token was set and the service was run without errors. The bot had previously been unable to authenticate.

## Facts
- Cmd executed: chmod +x bin/warden
- Cmd executed: env -u WARDEN_BOT_TOKEN ./bin/warden --db /tmp/wserve.db serve
- Cmd executed: timeout 40 ./bin/warden --db /tmp/wserve.db serve --token 123:bogus

## Concepts
- API token management

## Files
- `/Users/davec/Desktop/telegram-warden`
- `/tmp/wserve.db`

_Importance: 5 · Confidence: 1_
