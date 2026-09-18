---
type: file_write
title: Skill manage script write
description: 
resource: agentmemory://observation/obs_mrwl7dc4_3ba5aab388d2
tags: ["file_write"]
timestamp: 2026-07-22T21:21:06.624080+00:00
source: agentmemory
session_id: 20260722_161423_6e28d6
importance: 8
confidence: 0.75
---
# Summary

A file was written successfully using the skill manage tool, however due to the shell metacharacters present in the prompt the script doesn’t work as expected.
This is not an issue within the routing logic but rather between user and CLI handling as the CLImetachars are interpreted by shells causing some results issues.

## Facts
- The CLI handler shells out to this skill's scripts/router.py on `shells out to this skill&#39;s router.py` branch for canonical quote canonical route dispatch
- The user passed a prompt with back.tick or unbalanced quotesshell.

## Files
- `/Users/davec/.hermes/skills/autonomous-ai-agents/model-selection-routing/references/cli-dispatch.md`

_Importance: 8 · Confidence: 0.75_
