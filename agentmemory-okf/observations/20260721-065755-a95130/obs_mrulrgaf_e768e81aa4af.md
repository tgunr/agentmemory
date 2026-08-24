---
type: CommandRun
title: Test session fails due to Slack native slash parity issue
description: 
resource: agentmemory://observation/obs_mrulrgaf_e768e81aa4af
tags: ["Slack native slashes", "Telegram bot commands", "commandrun"]
timestamp: 2026-07-21T12:01:11.218680+00:00
source: agentmemory
session_id: 20260721_065755_a95130
importance: 5
confidence: 0.9
---
# Summary

Hello, running pytest with the given command resulted in failures due to a previously unknown issue regarding native slash parity between Telegram and Slack. Further investigation into slack_native_slashes test is needed.

## Facts
- Python 3.13.2, pytest-8.4.1, pluggy-1.6.0 tested with tests/hermes_cli/test_commands.py and tests/cli/test_shell_command.py
- /hermes <command> on Slack only commands (e.g. /status) are excluded from parity checks

## Concepts
- Slack native slashes
- Telegram bot commands

_Importance: 5 · Confidence: 0.9_
