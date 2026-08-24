---
type: file_edit
title: xcode-agents skill patching
description: Patching Critical Auth Gotcha in SKILL MD
resource: agentmemory://observation/obs_mryy7947_6fd8cf31f137
tags: ["OAuth", "Auth Methods", "Kilo ACP", "Nginx Auth Redirect", "file_edit"]
timestamp: 2026-07-24T13:00:28.513985+00:00
source: agentmemory
session_id: 20260724_062931_d84b69
importance: 8
confidence: 0.9
---
# Summary

A critical authentication issue has been patched in the `xcode-agents` skill, ensuring proper OAuth session handling and agent-authentication. This affects users who rely on dynamic authentication based on `.auth.json`. It is recommended to ensure that valid `KILO_API_KEY` values are set as environment variables.

## Facts
- The `kilo acp` server does **NOT** reuse the interactive CLI's OAuth session stored in `~/.local/share/kilo/auth.json`. Even when `kilo auth list` shows \"Kilo Gateway oauth\" logged in, launching `kilo acp` makes the agent advertise only `authMethods: [{name:\"Login with Kilo\", id:\"kilo-login\", description(\"Run \\`kilo auth login\\` in the terminal\").

## Concepts
- OAuth
- Auth Methods
- Kilo ACP
- Nginx Auth Redirect

## Files
- `SKILL.md`

_Importance: 8 · Confidence: 0.9_
