---
type: FileRead
title: Tails of test failure
description: failing desktop slash command curation tests
resource: agentmemory://observation/obs_mrxfjx70_34debb48e61a
tags: ["Testing and QA", "fileread"]
timestamp: 2026-07-23T11:30:40.711216+00:00
source: agentmemory
session_id: 20260722_161423_6e28d6
importance: 6
confidence: 0.9
---
# Summary

The test script ran into issues with desktop slash command curation, failing tests due to incorrect filtering of commands.

## Facts
- Command ran on terminal with timeout of 180 seconds, using npx vitest
- Error output: [1/2] FAIL src/lib/desktop-slash-commands.test.ts > desktop slash command curation > filters built-in catalog noise but keeps skill / quick-command extensions\nAssertionError: expected [ [ '/new', …(1) ], …(1) ] to deeply equal [ [ '/new', …(1) ], …(2) ]\n

## Concepts
- Testing and QA

_Importance: 6 · Confidence: 0.9_
