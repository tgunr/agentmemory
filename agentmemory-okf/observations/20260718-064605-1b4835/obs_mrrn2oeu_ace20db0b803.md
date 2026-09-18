---
type: FileRead
title: Read Hermes Gateway LaunchAgent plist configuration
description: macOS LaunchAgent config for ai.hermes.gateway service
resource: agentmemory://observation/obs_mrrn2oeu_ace20db0b803
tags: ["macOS LaunchAgent", "plist configuration", "service daemon", "KeepAlive", "RunAtLoad", "Python virtual environment", "hermes gateway", "fileread"]
timestamp: 2026-07-19T10:14:36.050104+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Read the macOS LaunchAgent plist configuration for the Hermes gateway service. This defines how the gateway process is launched at login, kept alive, and where its logs are written. The service runs a Python module (hermes_cli.main gateway run --replace) within a virtual environment.

## Facts
- File is a macOS LaunchAgent plist at /Users/davec/Library/LaunchAgents/ai.hermes.gateway.plist
- Label: ai.hermes.gateway
- Program: /Users/davec/.hermes/hermes-agent/venv/bin/python -m hermes_cli.main gateway run --replace
- WorkingDirectory: /Users/davec/.hermes
- Environment: VIRTUAL_ENV=/Users/davec/.hermes/hermes-agent/venv, HERMES_HOME=/Users/davec/.hermes
- RunAtLoad: true, KeepAlive: true
- LimitLoadToSessionType: Aqua, Background
- Stdout log: /Users/davec/.hermes/logs/gateway.log
- Stderr log: /Users/davec/.hermes/logs/gateway.error.log

## Concepts
- macOS LaunchAgent
- plist configuration
- service daemon
- KeepAlive
- RunAtLoad
- Python virtual environment
- hermes gateway

## Files
- `/Users/davec/Library/LaunchAgents/ai.hermes.gateway.plist`

_Importance: 5 · Confidence: 1_
