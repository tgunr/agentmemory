---
type: file_edit
title: Primary auth failed in Hermes CLI
description: An error occurred during CLI command execution
resource: agentmemory://observation/obs_mvhvi8ht_0642bffe0618
tags: ["auth fallback", "Quota exhaustion", "file_edit"]
timestamp: 2026-10-21T08:51:46.401663+00:00
source: agentmemory
session_id: 20261021_033005_284670
importance: 6
confidence: 1
---
# Summary

When executing the `cd ~/.hermes/hermes-agent; grep -rn "Primary auth failed" --include=*.{py,ts,tsx} . | head -5` command in the terminal, an error occurred due to quotas exhaustion. The error message indicates a primary auth failed error.

## Facts
- Prompt for Primary auth failed
- Error type:**quotas exhausted
- Error message:**quotas exhausted

## Concepts
- auth fallback
- Quota exhaustion

## Files
- `.hermes/hermes-agent/auth.py`

_Importance: 6 · Confidence: 1_
