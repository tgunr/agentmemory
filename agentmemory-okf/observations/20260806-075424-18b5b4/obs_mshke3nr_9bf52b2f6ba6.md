---
type: file_write
title: File 'references/agentmemory-test-failures-2026-08.md' written to skill 'agentmemory-debugging'
description: No one-line context available for this event.
resource: agentmemory://observation/obs_mshke3nr_9bf52b2f6ba6
tags: ["env-leak", "yup errors", "refactoring API endpoints", "file_write"]
timestamp: 2026-08-06T13:41:30.756323+00:00
source: agentmemory
session_id: 20260806_075424_18b5b4
importance: 8
confidence: 0.9
---
# Summary

A critical issue was found with the 'agentmemory-test-failures' skill, where logs from previous commits are leaking environment variables. Additionally, a refactor of certain API endpoints broke their dedicated tests, leading to missed coverage.

## Facts
- The file contains details of test failures in the current project.
- Specifically, the failures were due to env-leaks and API endpoint regressions.

## Concepts
- env-leak
- yup errors
- refactoring API endpoints

## Files
- `/Users/davec/.hermes/profiles/ai/skills/debugging/agentmemory-debugging/references/agentmemory-test-failures-2026-08.md`

_Importance: 8 · Confidence: 0.9_
