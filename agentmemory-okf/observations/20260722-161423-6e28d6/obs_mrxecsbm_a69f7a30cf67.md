---
type: file_write
title: Mmd file updated incorrectly due to shell metacharacter
description: No alternative solution exists in desktop model, upstream of script.
resource: agentmemory://observation/obs_mrxecsbm_a69f7a30cf67
tags: ["shell metacharacter sanitization", "/model picker command", "file_write"]
timestamp: 2026-07-23T10:57:08.191544+00:00
source: agentmemory
session_id: 20260722_161423_6e28d6
importance: 7
confidence: 0.9
---
# Summary

In a recent fix, "|| `/route` returned nothing / errored\" was changed to correctly represent an empty or badly-formatted prompt which still produces errors. We also updated "/model" picker command behavior when it doesn't take both a name and an endpoint.

## Facts
- A patch was applied to the documentation of "/model".

## Concepts
- shell metacharacter sanitization
- /model picker command

## Files
- `/Users/davec/.hermes/skills/autonomous-ai-agents/model-selection-routing/references/cli-dispatch.md`

_Importance: 7 · Confidence: 0.9_
