---
type: file_edit
title: CD and execute bash script
description: Tool: terminal, command: bash -n tq_switch.sh && ...
resource: agentmemory://observation/obs_mvhvpbtn_0f772b9bc1a1
tags: ["launchd, bash, gateway, provider", "file_edit"]
timestamp: 2026-10-21T08:57:17.218224+00:00
source: agentmemory
session_id: 20261021_033005_284670
importance: 9
confidence: 0.9
---
# Summary

The command executed a bash script with syntax checks. The bash script used launchd to set up a gateway and then printed the domain and job pid. Additionally, a Python script ensured provider idempotency.

## Facts
- Command: cd /Users/davec/MCP_Local/turboquant-mlx-work; bash -n tq_switch.sh && echo \"SYNTAX OK\"\necho \"=== helpers (sourced in a subshell) ===\"\nbash -c '\nGW=\"ai.hermes.gateway\"\nlaunchd_domain() {\n  local d\n  for d in \"gui/$(id -u)\" \"user/$(id -u)\"; do\n    launchctl print \"${d}/${1}\" >/dev/null 2>&1 && { echo \"$d\"; return; }\n  done\n  echo \"gui/$(id -u)\"\n}\necho \"domain: $(launchd_domain \"$GW\")\"\necho \"job pid: $(launchctl print \"$(launchd_domain \"$GW\")/$GW\" 2>/dev/null | awk \"/pid =/{print \\$3; exit}\")\"\necho \"=== provider script idempotency ===\"\n
- Command: /Users/davec/.hermes/hermes-agent/.venv/bin/python tq_ensure_provider.py /Users/davec/.hermes/config.yaml http://127.0.0.1:8000/v1

## Concepts
- launchd, bash, gateway, provider

## Files
- `/Users/davec/MCP_Local/turboquant-mlx-work/tq_switch.sh`

_Importance: 9 · Confidence: 0.9_
