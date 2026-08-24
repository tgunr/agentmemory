---
type: FileRead
title: Inspected Hermes gateway LaunchAgent configuration
description: macOS launchd runs and continuously maintains the Hermes gateway process.
resource: agentmemory://observation/obs_mrqgqfbd_1ebd90aa0a1c
tags: ["macOS LaunchAgent", "launchd KeepAlive", "Python virtual environment", "Hermes gateway", "process logging", "fileread"]
timestamp: 2026-07-18T14:29:20.519424+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

The plist configures the Hermes gateway as a persistent macOS LaunchAgent that starts automatically and is restarted by launchd. It uses the Hermes virtual environment and dedicated home, working, and log paths.

## Facts
- LaunchAgent label ai.hermes.gateway invokes /Users/davec/.hermes/hermes-agent/venv/bin/python -m hermes_cli.main gateway run --replace.
- WorkingDirectory and HERMES_HOME are /Users/davec/.hermes, while VIRTUAL_ENV is /Users/davec/.hermes/hermes-agent/venv.
- RunAtLoad and KeepAlive are enabled, with Aqua and Background session types permitted.
- Standard output and error are written to /Users/davec/.hermes/logs/gateway.log and /Users/davec/.hermes/logs/gateway.error.log.
- The configured PATH includes the Hermes Python virtual environment, Hermes node_modules binaries, Homebrew Node 25.2.1, and standard user/system tool locations.

## Concepts
- macOS LaunchAgent
- launchd KeepAlive
- Python virtual environment
- Hermes gateway
- process logging

## Files
- `/Users/davec/Library/LaunchAgents/ai.hermes.gateway.plist`

_Importance: 3 · Confidence: 1_
