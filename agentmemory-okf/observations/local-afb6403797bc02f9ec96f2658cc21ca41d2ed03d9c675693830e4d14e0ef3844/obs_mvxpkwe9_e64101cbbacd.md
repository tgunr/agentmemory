---
type: CommandRun
title: Testing Hermes agent with git diff command
description: Running command ``cd /Users/davec/.hermes/hermes-agent && git diff tests/agent/test_ollama_num_ctx.py``
resource: agentmemory://observation/obs_mvxpkwe9_e64101cbbacd
tags: ["ollama_num_ctx", "git diff", "test_hosted_route_ignores_num_ctx_override", "commandrun"]
timestamp: 2026-11-01T10:50:11.837244+00:00
source: agentmemory
session_id: local-afb6403797bc02f9ec96f2658cc21ca41d2ed03d9c675693830e4d14e0ef3844
importance: 5
confidence: 0.9
---
# Summary

The Hermes agent was tested with a `git diff` command to verify the functionality of the `ollama_num_ctx` patch. The test case indicates that the patch has no effect on the test, which is a positive outcome.

## Facts
- The `ollama_num_ctx` patch was added to `test_ollama_num_ctx.py`
- The `test_hosted_route_ignores_num_ctx_override` test passed

## Concepts
- ollama_num_ctx
- git diff
- test_hosted_route_ignores_num_ctx_override

_Importance: 5 · Confidence: 0.9_
