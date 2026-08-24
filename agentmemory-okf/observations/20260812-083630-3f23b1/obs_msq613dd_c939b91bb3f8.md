---
type: file_edit
title: Edit Hermes SSH Terminal Backend configuration
description: Configure and debug Hermes's SSH terminal backend for in-chat terminal functionality.
resource: agentmemory://observation/obs_msq613dd_c939b91bb3f8
tags: ["Python environment variables", "Zsh-only init error", "Shell check", "file_edit"]
timestamp: 2026-08-12T14:09:24.807727+00:00
source: agentmemory
session_id: 20260812_083630_3f23b1
importance: 5
confidence: 0.9
---
# Summary

Hermes's SSH terminal backend configuration has been revised to fix issues with SSH environment requires and zsh-only init errors. The updated .env file now contains environment variables for SSH host and user, and the terminal.backend: ssh backend is correctly configured. A restart of Hermes is required to pick up the new changes. Furthermore, a shell check has been added to the script to ensure that the ~/.bashrc file does not contain zsh-only syntax.

## Facts
- Revised `~/.hermes/.env` contains updated environment variables for SSH host and user.
- The `terminal.backend: ssh` backend is now correctly configured with the specified hostname, username, and port.

## Concepts
- Python environment variables
- Zsh-only init error
- Shell check

_Importance: 5 · Confidence: 0.9_
