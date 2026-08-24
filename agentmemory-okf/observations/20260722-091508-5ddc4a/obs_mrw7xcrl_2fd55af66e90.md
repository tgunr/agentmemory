---
type: file_edit
title: Update memory usage limit warning and suggestions
description: No changes added to commit due to retry thrash loops.
resource: agentmemory://observation/obs_mrw7xcrl_2fd55af66e90
tags: ["retry thrash", "parson", "submodule cleanups", "file_edit"]
timestamp: 2026-07-22T15:09:24.316920+00:00
source: agentmemory
session_id: 20260722_091508_5ddc4a
importance: 7
confidence: 1
---
# Summary

The memory usage limit warning and suggestions will help improve the overall performance of the Hermes instance, reducing the risk of retry thrash loops due to submodule dirty content. The suggested solutions include using porcelain=2 parsing + skip-set to avoid infinite "no changes added to commit" loops.

## Facts
- Submodule dirty content causes high retry thrash if not categorized separately from pointer changes.
- Use porcelain=2 parsing + skip-set (skipped.json with 60-min TTL) to avoid infinite "no changes added to commit" loops.
- User prefers single notification per actual change, not repeated failure messages.

## Concepts
- retry thrash
- parson
- submodule cleanups

_Importance: 7 · Confidence: 1_
