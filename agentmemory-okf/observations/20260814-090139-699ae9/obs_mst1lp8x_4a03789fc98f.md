---
type: file_write
title: Installing python-telegram-bot and verifying setup for Telegram alerts
description: Create Telegram alert system
resource: agentmemory://observation/obs_mst1lp8x_4a03789fc98f
tags: ["pip install errors", "file_write"]
timestamp: 2026-08-14T14:28:46.733585+00:00
source: agentmemory
session_id: 20260814_090139_699ae9
importance: 8
confidence: 0.9
---
# Summary

The background curator attempted to write the 'post-reboot-checklist' skill file. However, since it's a user-owned skill created_by=None, and can't be curated autonomously, we are refusing the write_file action until the user adopts it with the hermes curator adopt command.

## Facts
- Pip dies with a Samba "Operation not permitted" path when installing python-telegram-bot due to a stale editable-install .pth file.

## Concepts
- pip install errors

## Files
- `/Users/davec/references/telegram-alert-setup.md`

_Importance: 8 · Confidence: 0.9_
