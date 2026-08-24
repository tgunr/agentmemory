---
type: file_edit
title: Grep search with regular expressions in Hermes Agent
description: Searching for specific keywords in source code
resource: agentmemory://observation/obs_ms60xlt5_b5f6bb152082
tags: ["grep command with regex patterns", "file_edit"]
timestamp: 2026-07-29T11:51:20.486525+00:00
source: agentmemory
session_id: 20260729_063034_d5fbde
importance: 5
confidence: 0.9
---
# Summary

The command grep was executed in the Hermes Agent to find specific keywords in the source code.

## Facts
- Search command: grep -r \"group\|tree\|hierarch\|nested\|parent\|folder\" /Users/davec/.hermes/hermes-agent/web/src/pages/ --include="*.tsx" 2>/dev/null
- Excluded files: test, spec, node_modules, website

## Concepts
- grep command with regex patterns

## Files
- `/Users/davec/.hermes/hermes-agent/web/src/pages/`

_Importance: 5 · Confidence: 0.9_
