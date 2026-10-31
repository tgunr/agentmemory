---
type: FileRead
title: Telegram Business adapter (official Bot API path)
description: Requires: Telegram Premium on your account, and this bot connected as the account's chatbot.
resource: agentmemory://observation/obs_mvtvzcp0_407c02ea59d0
tags: ["React hooks", "fileread"]
timestamp: 2026-10-29T18:38:19.125822+00:00
source: agentmemory
session_id: local-dc35c5b5a8d499aae4dc7d4f11b4a5df7c05f9de3c685fafc582f480691a0efa
importance: 8
confidence: 0.9
---
# Summary

Execute a Telegram API request to read messages in a chatbot.
 
 This allows the bot to receive messages from chatbot (Settings -> Business -> Chatbots in the Telegram app) and reply accordingly.
 
 This code snippet demonstrates the setup of a Telegram Business adapter using the hermes-tools library. The adapter uses the Telegram Bot API to receive and process messages from the business chatbot.

## Facts
- From `hermes_tools` library, imported `read_file` function to read file contents
- The bot receives DMs addressed to you and replies using fully sanctioned by Telegram, no userbot risk.

## Concepts
- React hooks

## Files
- `/Users/davec/Desktop/telegram-warden/warden/adapters/business.py`
- `/Users/davec/Desktop/telegram-warden/warden/engine.py`

_Importance: 8 · Confidence: 0.9_
