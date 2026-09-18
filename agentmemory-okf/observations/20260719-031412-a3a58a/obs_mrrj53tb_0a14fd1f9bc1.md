---
type: CommandRun
title: Listed Hermes profile and session storage layout
description: Diagnostic inspection of ~/.hermes directory structure and session artifacts
resource: agentmemory://observation/obs_mrrj53tb_0a14fd1f9bc1
tags: ["Hermes profile isolation", "session persistence JSON", "Agent memory directory layout", "commandrun"]
timestamp: 2026-07-19T08:24:30.861432+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 5
confidence: 1
---
# Summary

The terminal command enumerated the Hermes home directory and profile subdirectories, confirming multiple isolated profiles and locating session metadata in ~/.hermes/sessions/sessions.json plus supporting session tooling under hermes-agent/. This provides the filesystem map needed to locate per-profile memory and session data.

## Facts
- Profiles in ~/.hermes/profiles/: ai, cc, default, develop, ollama, personal, pveroot, ranch, shop
- Default/top-level ~/.hermes contains .git, .env, auth.json, config.yaml (with several .bak versions), gateway_state.json, .hermes_history, and agentmemory_observer_debug.log
- Session-related files found: /Users/davec/.hermes/sessions/sessions.json, /Users/davec/.hermes/scripts/session_manager.py, /Users/davec/.hermes/hermes-agent/tools/session_search_tool.py, /Users/davec/.hermes/hermes-agent/hermes_cli/session_recap.py, /Users/davec/.hermes/hermes-agent/hermes_cli/session_export.py
- Command output was truncated near the end of the session search results

## Concepts
- Hermes profile isolation
- session persistence JSON
- Agent memory directory layout

## Files
- `/Users/davec/.hermes/profiles/ai`
- `/Users/davec/.hermes/profiles/cc`
- `/Users/davec/.hermes/profiles/default`
- `/Users/davec/.hermes/profiles/develop`
- `/Users/davec/.hermes/profiles/ollama`
- `/Users/davec/.hermes/profiles/personal`
- `/Users/davec/.hermes/profiles/pveroot`
- `/Users/davec/.hermes/profiles/ranch`
- `/Users/davec/.hermes/profiles/shop`
- `/Users/davec/.hermes/config.yaml`
- `/Users/davec/.hermes/.env`
- `/Users/davec/.hermes/auth.json`
- `/Users/davec/.hermes/sessions/sessions.json`
- `/Users/davec/.hermes/scripts/session_manager.py`
- `/Users/davec/.hermes/hermes-agent/tools/session_search_tool.py`
- `/Users/davec/.hermes/hermes-agent/hermes_cli/session_recap.py`
- `/Users/davec/.hermes/hermes-agent/hermes_cli/session_export.py`

_Importance: 5 · Confidence: 1_
