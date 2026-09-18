---
type: Error
title: Terminal command rejected for using setsid background wrapper
description: Restart script for ai.hermes.gateway blocked by Hermes terminal policy
resource: agentmemory://observation/obs_mrqh2yeu_64775dd82807
tags: ["launchctl service restart", "Hermes terminal background policy", "setsid rejected", "gateway readiness check", "port 8645 listener verification", "error"]
timestamp: 2026-07-18T14:39:05.138159+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Attempted to restart the Hermes gateway service (ai.hermes.gateway) via launchctl in a detached background process. Hermes blocked the command because it uses setsid, a shell-level background wrapper. The restart was not performed; the approach must be reworked to use terminal(background=true) with separate follow-up commands for readiness checks and log inspection.

## Facts
- Command used `setsid bash -c '...'` to schedule a detached launchctl restart of ai.hermes.gateway
- Service management: launchctl stop/start ai.hermes.gateway with 1s+3s sleeps
- Readiness check planned: lsof -nP -iTCP:8645 -sTCP:LISTEN
- Log inspection planned: tail -14 ~/.hermes/logs/gateway.log
- Redirected output to /tmp/bb_restart.log
- Hermes policy rejects foreground terminal commands using nohup/disown/setsid
- Recommended fix: use terminal(background=true) then run readiness checks and tests in separate commands
- Exit code: -1, status: error

## Concepts
- launchctl service restart
- Hermes terminal background policy
- setsid rejected
- gateway readiness check
- port 8645 listener verification

## Files
- `/tmp/bb_restart.log`
- `~/.hermes/logs/gateway.log`

_Importance: 5 · Confidence: 1_
