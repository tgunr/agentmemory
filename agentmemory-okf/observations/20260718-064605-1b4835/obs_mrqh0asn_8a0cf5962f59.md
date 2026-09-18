---
type: FileRead
title: Read Hermes Gateway startup/shutdown log
description: Examining gateway.log for configuration and lifecycle details
resource: agentmemory://observation/obs_mrqh0asn_8a0cf5962f59
tags: ["Hermes Gateway", "gateway lifecycle management", "secret redaction", "cron job execution", "graceful shutdown", "agent max_iterations budget", "user allowlist configuration", "kanban dispatcher", "fileread"]
timestamp: 2026-07-18T14:37:01.221168+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

Read the Hermes Gateway log to understand its startup configuration and lifecycle. The gateway runs with secret redaction enabled, a 60-iteration agent budget, cron-only mode (no messaging platforms), and no user allowlists. It demonstrated clean startup and shutdown with graceful SIGTERM/SIGINT handling.

## Facts
- Log file: /Users/davec/.hermes/logs/gateway.log
- Session storage path: /Users/davec/.hermes/sessions
- Agent budget: max_iterations=60 (from config.yaml agent.max_turns, env HERMES_MAX_ITERATIONS, or default 90)
- Secret redaction is ENABLED for tool output, logs, and chat responses
- No user allowlists configured — all unauthorized users denied; GATEWAY_ALLOW_ALL_USERS=true or platform allowlists needed
- No messaging platforms enabled; gateway runs for cron job execution only
- Cron ticker runs at 60s interval; kanban dispatcher embedded at 60s interval
- First run started 2026-06-10 11:39:10, received SIGTERM at 11:51:39, clean shutdown in 0.18s
- Second run started 2026-06-10 11:51:48, received SIGINT at 11:55:10
- Shutdown phases: notify_active_sessions, drain, adapter disconnect, final-cleanup tool kill, SessionDB close

## Concepts
- Hermes Gateway
- gateway lifecycle management
- secret redaction
- cron job execution
- graceful shutdown
- agent max_iterations budget
- user allowlist configuration
- kanban dispatcher

## Files
- `/Users/davec/.hermes/logs/gateway.log`

_Importance: 4 · Confidence: 1_
