---
type: file_edit
title: Update Hermes CLI
description: determine the impact of a command change
resource: agentmemory://observation/obs_mvwibt0a_fc15605fc6ba
tags: ["Hermes CLI, Slack integration", "file_edit"]
timestamp: 2026-10-31T14:39:24.055595+00:00
source: agentmemory
session_id: local-afb6403797bc02f9ec96f2658cc21ca41d2ed03d9c675693830e4d14e0ef3844
importance: 7
confidence: 1
---
# Summary

The user ran a command to update their Hermes CLI. However, the update process encountered an error due to an ImportError. The error message indicates that the import of the `slack_native_slashes` function failed. This may indicate a problem with the Hermes CLI's integration with Slack.

## Facts
- The user ran the following command: cd /Users/davec/.hermes/hermes-agent && grep -rn \"_SLACK_VIA_HERMES_ONLY = \" -A 10 hermes_cli/*.py | head -20; echo ===; .venv/bin/python -c \"\nfrom hermes_cli.commands import slack_native_slashes, telegram_bot_commands\nprint('slack', len(slack_native_slashes()), 'telegram', len(telegram_bot_commands()))\"
- The output of this command is: hermes_cli/commands_platforms.py:384:_SLACK_VIA_HERMES_ONLY = frozenset({..., ..., \"autoprune\"})
- Error report: Traceback (most recent call last): ... ImportError: cannot import name 'slack_native_slashes' from 'hermes_cli.commands'

## Concepts
- Hermes CLI, Slack integration

## Files
- `/Users/davec/.hermes/hermes-agent/hermes_cli/commands.py`
- `/Users/davec/.hermes/hermes-agent/hermes_cli/commands_platforms.py`

_Importance: 7 · Confidence: 1_
