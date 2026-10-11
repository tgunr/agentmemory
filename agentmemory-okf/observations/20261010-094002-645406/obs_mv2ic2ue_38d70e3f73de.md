---
type: FileRead
title: "Tests for user-defined quick commands that bypass the agent loop."
description: A test suite for validating quick command dispatch.
resource: agentmemory://observation/obs_mv2ic2ue_38d70e3f73de
tags: ["React hooks", "SQL migration", "fileread"]
timestamp: 2026-10-10T14:46:31.522533+00:00
source: agentmemory
session_id: 20261010_094002_645406
importance: 6
confidence: 0.9
---
# Summary

The tool retrieved a test file with a sample Python script. The file contains multiple test cases for quick command dispatch in HermesCLI and GatewayRunner.

## Facts
- Quick commands must be checked before skill slash commands.
- Test quick command dispatch in HermesCLI.process_command.

## Concepts
- React hooks
- SQL migration

## Files
- `/tests/hermes_cli/test_quick_commands.py`

_Importance: 6 · Confidence: 0.9_
