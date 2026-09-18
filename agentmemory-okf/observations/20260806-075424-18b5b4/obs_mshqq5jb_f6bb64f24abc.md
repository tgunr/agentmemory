---
type: file_edit
title: agentmemory env-file leak fix for auto-start and viewer test scripts
description: Debug session in agentmemory-codebase revealed critical issues with logger, API endpoint regressions and viewer test script updates
resource: agentmemory://observation/obs_mshqq5jb_f6bb64f24abc
tags: ["logging best practices", "API testing", ""stray function calls"", "file_edit"]
timestamp: 2026-08-06T16:38:50.756791+00:00
source: agentmemory
session_id: 20260806_075424_18b5b4
importance: 8
confidence: 0.9
---
# Summary

The fix adds gotchas that surfaced while investigating test failures and are worth knowing for any future debug session. It also reveals critical issues with logger, API endpoint regressions and viewer test script updates.

## Facts
- Last time `pnpm test` reported failures across developer's machine, the issue still didn't reproduce on a clean checkout or in CI.
- Uncommitted WIP feature broke 6 summarize tests when it contained a stray logger.debug call.

## Concepts
- logging best practices
- API testing
- "stray function calls"

## Files
- `/Users/davec/.hermes/profiles/ai/skills/debugging/agentmemory-debugging/references/agentmemory-test-failures-2026-08.md`

_Importance: 8 · Confidence: 0.9_
