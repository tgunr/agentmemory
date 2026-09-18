---
type: file_edit
title: Fixed CLIshell quoting issue
description: No impact on user experience, but fix for <a href="#">model selection routing</a>
resource: agentmemory://observation/obs_mrxdnvp3_661beccdfa33
tags: ["CLIshell quoting", "file_edit"]
timestamp: 2026-07-23T10:37:46.163638+00:00
source: agentmemory
session_id: 20260722_161423_6e28d6
importance: 7
confidence: 0.9
---
# Summary

Critical bug fixed, impacting only technical details. The fix won't affect user experience but is an important architectural change.

## Facts
- The `hermes-agent/cli.py::process_command` route branch now passes the prompt as a list argument to subprocess.run without shell=True.

## Concepts
- CLIshell quoting

## Files
- `/Users/davec/.hermes/skills/autonomous-ai-agents/model-selection-routing/SKILL.md`

_Importance: 7 · Confidence: 0.9_
