---
type: file_edit
title: Check for hermes config files in user directories
description: No matching files found
resource: agentmemory://observation/obs_msq4mthh_d1d6772aa042
tags: ["config file search", "ssh environment setup", "file_edit"]
timestamp: 2026-08-12T13:30:19.200275+00:00
source: agentmemory
session_id: 20260812_081748_d67311
importance: 8
confidence: 1
---
# Summary

The code checks for the presence of hermes configuration files in user directories, and attempts to run the 'hermes config get terminal.ssh' command with the resulting output being printed.

## Facts
- Prompt: === /home/user ~/.hermes/config.yaml exists:
- Prompt: === /home/user /.hermes/profiles/default/config.yaml exists:
- Prompt: === /home/user /.hermes/profiles/default/.env exists:
- Prompt: === /home/user /.hermes/.env exists:

## Concepts
- config file search
- ssh environment setup

## Files
- `/home/user/.hermes/config.yaml`
- `/home/user/.hermes/profiles/default/config.yaml`
- `/home/user/.hermes/profiles/default/.env`
- `/home/user /.hermes/.env`

_Importance: 8 · Confidence: 1_
