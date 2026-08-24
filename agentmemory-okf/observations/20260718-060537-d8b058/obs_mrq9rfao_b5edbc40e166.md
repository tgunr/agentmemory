---
type: CommandRun
title: Audit session placement across Hermes SQLite profile stores
description: Python script queries state.db for misplaced sessions and cross-store duplicates
resource: agentmemory://observation/obs_mrq9rfao_b5edbc40e166
tags: ["SQLite session management", "Hermes profile stores", "Session placement audit", "Cross-store duplicate detection", "Domain-specific vs global state", "agentmemory REDIS integration", "BlueBubbles iMessage integration", "MCP Router", "commandrun"]
timestamp: 2026-07-18T11:14:09.837231+00:00
source: agentmemory
session_id: 20260718_060537_d8b058
importance: 6
confidence: 1
---
# Summary

A Python audit script was run against the Hermes session management system to identify 63 sessions in the global state.db that appear misplaced based on keyword matching. The script also performs cross-store duplicate title detection across default and domain-specific profile databases. This reveals a significant session organization issue where many topic-specific sessions (REDIS, BlueBubbles, MCP Router, CNC, Jo profile, etc.) are stored in the global store rather than their appropriate domain profiles.

## Facts
- Working directory: ~/.hermes
- Database: state.db (SQLite) with sessions table (id, title, message_count)
- Found 63 candidate misplacement sessions in global state.db matching keywords like agentmemory, REDIS, BlueBubbles, MCP Router, ComfyUI, CNC Profile, Jo profile, SillyTavern, Kilo Gateway, BetterTouchTool, Apple Foundation, Desktop, UV Print, Love State
- Top sessions by message_count: "Change iMessage Sender Name to Hermes" (277), "Using REDIS for agentmemory #3" (274), "Using REDIS for agentmemory #4" (269), "ComfyUI Process Status and Next Steps" (244)
- Script also scans profiles/*/state.db for cross-store duplicate session titles between default and domain profiles
- Multiple profile stores exist: default (state.db) plus domain-specific profiles under profiles/ directory
- Sessions span topics: REDIS agentmemory, BlueBubbles/iMessage integration, MCP Router, Telegram, ComfyUI, git submodules, CNC Profile consolidation, Jo profile Ollama connection, Kilo Gateway, BetterTouchTool, Apple Foundation Models, Hermes Desktop, UV Print, Love State

## Concepts
- SQLite session management
- Hermes profile stores
- Session placement audit
- Cross-store duplicate detection
- Domain-specific vs global state
- agentmemory REDIS integration
- BlueBubbles iMessage integration
- MCP Router
- ComfyUI workflow
- Kilo Gateway plugin

## Files
- `~/.hermes/state.db`
- `~/.hermes/profiles/*/state.db`

_Importance: 6 · Confidence: 1_
