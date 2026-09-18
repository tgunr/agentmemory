---
type: CommandRun
title: Skill View: hermes-ssh-terminal
description: Showcasing Hermes SSH Terminal Backend
resource: agentmemory://observation/obs_msr7flwx_563c6821a7d0
tags: ["SSH configuration", "Zsh initiation", "commandrun"]
timestamp: 2026-08-13T07:36:27.822223+00:00
source: agentmemory
session_id: 20260813_023354_0f3faf
importance: 7
confidence: 0.9
---
# Summary

The `hermes-ssh-terminal` skill showcases a critical component of Hermes' SSH functionality. When set up correctly, it enables remote terminal access without syntax errors or environment issues. However, it's essential to ensure proper configuration and handling of zsh-only init files in `.bashrc`. A restart of the running process is necessary after editing `.env` files.

## Facts
- The terminal tool or `execute_code`'s `terminal()` helper errors require ssh_host and ssh_user configuration.
- Setting up the SSH backend can have two non-obvious traps: SSH environment requires ssh_host and ssh_user not configured, or Zsh-only init in `.bashrc` breaks the bash login shell.

## Concepts
- SSH configuration
- Zsh initiation

_Importance: 7 · Confidence: 0.9_
