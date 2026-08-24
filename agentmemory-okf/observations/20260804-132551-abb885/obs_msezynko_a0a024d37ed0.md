---
type: file_edit
title: Editing prompt builder script
description: Edit of system-prompt line and cross-profile write guard message.
resource: agentmemory://observation/obs_msezynko_a0a024d37ed0
tags: ["prompt builder", "system-prompt", "file_edit"]
timestamp: 2026-08-04T18:34:05.395106+00:00
source: agentmemory
session_id: 20260804_132551_abb885
importance: 5
confidence: 1
---
# Summary

Edited the prompt builder script in the terminal, modified system-prompt line and cross-profile write guard message.

## Facts
- Tool used: terminal
- User invoked command: echo \"=== where does the 'reads and writes' system-prompt line come from? ===\"; grep -rn \"reads and writes\\|Active Hermes profile\\|profile.*data lives\\|profiles/\" ~/.hermes/hermes-agent/agent/prompt_builder.py 2>/dev/null | head;
- User invoked command: echo \"=== cross-profile write guard message ===\"; grep -rn \"different profile\\|cross_profile\\|cross-profile\" ~/.hermes/hermes-agent/agent/prompt_builder.py 2>/dev/null | head

## Concepts
- prompt builder
- system-prompt

## Files
- `/home/user/.hermes/hermes-agent/agent/prompt_builder.py`
- `/dev/null tmpfile`
- `/dev/null tmpfile2`

_Importance: 5 · Confidence: 1_
