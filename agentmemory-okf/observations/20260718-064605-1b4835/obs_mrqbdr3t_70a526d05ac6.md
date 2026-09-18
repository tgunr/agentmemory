---
type: discovery
title: ASAR archive route paths extracted for BlueBubbles app
description: API router and validator endpoints discovered from Electron archive
resource: agentmemory://observation/obs_mrqbdr3t_70a526d05ac6
tags: ["Electron ASAR archive", "API route discovery", "BlueBubbles messaging API", "discovery"]
timestamp: 2026-07-18T11:59:31.189541+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Extracted API route paths from the BlueBubbles Electron application archive to understand available endpoints for chat and messaging functionality. This reveals the backend API structure including routers for attachments, chats, handles, messages, and scheduled messages, along with their corresponding validators.

## Facts
- Found 4 router endpoints: attachmentRouter, chatRouter, handleRouter, messageRouter, scheduledMessageRouter
- Found 5 validator endpoints matching same naming pattern
- ASAR path: /Applications/BlueBubbles.app/Contents/Resources/app.asar
- All routes follow /api/v1/ structure

## Concepts
- Electron ASAR archive
- API route discovery
- BlueBubbles messaging API

## Files
- `/Applications/BlueBubbles.app/Contents/Resources/app.asar`

_Importance: 5 · Confidence: 1_
