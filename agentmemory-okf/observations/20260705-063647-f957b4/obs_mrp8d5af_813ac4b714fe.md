---
type: FileRead
title: Read desktop slash commands definition
description: Lines 113-132 of desktop-slash-commands.ts
resource: agentmemory://observation/obs_mrp8d5af_813ac4b714fe
tags: ["slash commands", "command registry", "desktop application", "command aliases", "action handlers", "fileread"]
timestamp: 2026-07-17T17:47:17.891612+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 2
confidence: 1
---
# Summary

Reading the desktop slash commands configuration file to understand the command structure and available commands. This shows how slash commands are defined with their metadata including descriptions, actions, and argument requirements.

## Facts
- File has 451 total lines, 15910 bytes
- Defines slash commands with name, description, surface (action), args, and aliases properties
- Commands include: handoff, profile, skin, title, help, browser, journey
- Commands use action() function to define surface behavior
- Some commands have multiple aliases (e.g., /journey -> /learning, /memory-graph)

## Concepts
- slash commands
- command registry
- desktop application
- command aliases
- action handlers

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/lib/desktop-slash-commands.ts`

_Importance: 2 · Confidence: 1_
