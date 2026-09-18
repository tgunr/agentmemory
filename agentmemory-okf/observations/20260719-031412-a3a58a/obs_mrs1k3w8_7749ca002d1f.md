---
type: CommandRun
title: Search for python3.11 binaries and check macOS TCC permissions
description: Investigating Python environment and system Reminders access
resource: agentmemory://observation/obs_mrs1k3w8_7749ca002d1f
tags: ["macOS TCC permissions", "Python environment management", "pyenv", "Homebrew", "macOS Reminders API", "commandrun"]
timestamp: 2026-07-19T17:00:03.892194+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 5
confidence: 1
---
# Summary

The agent investigated the system for Python 3.11 installations and checked macOS privacy permissions for Reminders access. It determined that Python 3.11 is not installed as a binary (only 3.12 and 3.13 via pyenv), and the TCC database yielded no Reminders access records, indicating a potential environment or permission blocker.

## Facts
- No python3.11 binary files found in standard system or Homebrew paths
- Homebrew python3.11 library directory exists at /opt/homebrew/lib/python3.11
- pyenv has Python 3.12.3 and 3.13.2 installed
- macOS TCC database query for kTCCServiceReminders returned no results or was inaccessible

## Concepts
- macOS TCC permissions
- Python environment management
- pyenv
- Homebrew
- macOS Reminders API

## Files
- `/opt/homebrew/lib/python3.11`
- `~/Library/Application Support/com.apple.TCC/TCC.db`

_Importance: 5 · Confidence: 1_
