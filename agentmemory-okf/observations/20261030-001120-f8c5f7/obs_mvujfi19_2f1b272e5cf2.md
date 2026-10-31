---
type: CommandRun
title: hermes skills list
description: Lists work skills with session renaming status
resource: agentmemory://observation/obs_mvujfi19_2f1b272e5cf2
tags: ["commandrun"]
timestamp: 2026-10-30T05:34:43.721836+00:00
source: agentmemory
session_id: 20261030_001120_f8c5f7
importance: 8
confidence: 0.75
---
# Summary

The developer ran the `hermes --profile worker skills list` command, which listed work skills with session renaming status. The command also included an external count and executed successfully with an exit code of 0.

## Facts
- Command: cd ~ && hermes --profile worker skills list 2>&1 | grep -i \"session-rename\"; echo \"--- external count:\"; hermes --profile worker skills list 2>&1 | grep -c \"external\"",<fact>Output: 「 session-rename        │ productivity         │ external │ local    │ enabled │\n--- external count:\n12」,<fact>Exit code: 0, No error;<fact>CWD: /Users/davec

_Importance: 8 · Confidence: 0.75_
