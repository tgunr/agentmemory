---
type: file_edit
title: jgit error on hermes-agent
description: No whitelisted terminal usage allowed for security reasons
resource: agentmemory://observation/obs_mry2cias_b0d7efc67342
tags: ["file_edit"]
timestamp: 2026-07-23T22:08:45.963990+00:00
source: agentmemory
session_id: 20260723_164941_fa586b
importance: 5
confidence: 0.85
---
# Summary

A user attempted to utilize the terminal within a controlled environment to fetch Git diff results, but was met with an inoperable response due to security constraints implemented by the developer.

## Facts
- Hook: post_tool_call triggered
- Tool: terminal used for Git diff output
- Error message from hermes-agent: Background review denied non-whitelisted tool: terminal. Only memory/skill tools are allowed.

_Importance: 5 · Confidence: 0.85_
