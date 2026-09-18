---
type: file_write
title: Bypassing Hermes SSH terminal setup issues
description: Solving environment variable and .bashrc zsh-only init issues
resource: agentmemory://observation/obs_msq61ql2_aa14920d3dc5
tags: ["Environment variable configuration", "Bash login shell traps for zsh-only init", "file_write"]
timestamp: 2026-08-12T14:09:54.897349+00:00
source: agentmemory
session_id: 20260812_083630_3f23b1
importance: 8
confidence: 0.9
---
# Summary

The tool manage skill fixes Hermes SSH terminal setup when terminal won't connect. The key fix involves using environment variables in the .env file instead of config.yaml, and restarting Hermes after editing the .env file to apply the changes.

## Facts
- .env configuration file is used for Hermes config, not config.yaml
- SSH environment requires ssh_host and ssh_user to be configured

## Concepts
- Environment variable configuration
- Bash login shell traps for zsh-only init

## Files
- `~/.hermes/config.yaml`
- `~/.hermes/.env`

_Importance: 8 · Confidence: 0.9_
