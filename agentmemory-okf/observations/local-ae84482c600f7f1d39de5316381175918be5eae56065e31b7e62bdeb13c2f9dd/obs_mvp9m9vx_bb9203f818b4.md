---
type: FileRead
title: use apple-mail for searching and reading Apple Mail messages on disk
description: fallback method when other routes fail
resource: agentmemory://observation/obs_mvp9m9vx_bb9203f818b4
tags: ["AppleScript", "Mail.app", "Spotlight", "fileread"]
timestamp: 2026-10-26T13:01:12.714619+00:00
source: agentmemory
session_id: local-ae84482c600f7f1d39de5316381175918be5eae56065e31b7e62bdeb13c2f9dd
importance: 8
confidence: 1
---
# Summary

The tool was used to read Apple Mail messages on disk. The method is reliable but slower than other alternatives, such as using the `himalaya` CLI or AppleScript. The tool returned a list of possible routes to avoid this method: `himalaya` CLI, AppleScript (`tell application "Mail" …`), `mcp__apple_mcp__mail`, and `mdfind` / Spotlight.

## Facts
- Use when searching or reading Apple Mail messages on disk
- Connection can drop mid-search
- Multi-term loops over `V10` die with exit 255

## Concepts
- AppleScript
- Mail.app
- Spotlight

## Files
- `~/Library/Mail/V10/`
- `~/Library/Mail/V10/<ACCOUNT-UUID>/`
- `~/Library/Mail/V10/Data/<a>/<b>/<c>/Messages/<id>.emlx`

_Importance: 8 · Confidence: 1_
