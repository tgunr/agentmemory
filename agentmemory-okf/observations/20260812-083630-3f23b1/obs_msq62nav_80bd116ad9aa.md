---
type: file_edit
title: Create Hermes SSH Terminal Backend Skill
description: The key file for most Hermes config is `.env`, not `config.yaml`.
resource: agentmemory://observation/obs_msq62nav_80bd116ad9aa
tags: ["KY FACT", "file_edit"]
timestamp: 2026-08-12T14:10:37.298906+00:00
source: agentmemory
session_id: 20260812_083630_3f23b1
importance: 8
confidence: 0.9
---
# Summary

The post-tool_call hook for tool 'skill_manage' observed the creation of a new Hermes skill. The key file for most Hermes config is indeed `~/.hermes/config.yaml` not `config.yaml`. There's an env var in `~/.hermes/.env` that needs to be set, and after editing it, restarting Hermes fixes the issue. The SSH terminal backend triggers several traps when misconfigured.

## Facts
- The terminal backend does **NOT** read nested YAML like `terminal.ssh.host`. It reads environment variables from `~/.hermes/.env`:`
- The env vars are read at process start. After editing `.env`, **restart Hermes** (quit + reopen, or `hermes restart` from a Terminal.app) — the running process won't pick them up and will keep erroring until restart.

## Concepts
- KY FACT

_Importance: 8 · Confidence: 0.9_
