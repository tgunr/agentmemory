---
type: file_write
title: Agent Memory env-file leak in env-aware testing skill
description: User detected env file leaks in various tests, impacting test reproducibility.
resource: agentmemory://observation/obs_mshkcq1m_436524a55ee7
tags: ["file_write"]
timestamp: 2026-08-06T13:40:26.452829+00:00
source: agentmemory
session_id: 20260806_075424_18b5b4
importance: 7
confidence: 0.75
---
# Summary

The issue was detected when testing for agent memory env-file leaks. A fix was implemented to create a global home sandbox using vitest `globalSetup`, ensuring that the file environment is empty for every test run.

## Facts
- Critical security issue discovered in `~/.agentmemory/.env` files.
- Persistent environment variables are leaked from user's `.env` file across multiple tests.

## Files
- `/Users/davec/.hermes/profiles/ai/skills/software-development/env-aware-testing/references/agentmemory-env-leak.md`

_Importance: 7 · Confidence: 0.75_
