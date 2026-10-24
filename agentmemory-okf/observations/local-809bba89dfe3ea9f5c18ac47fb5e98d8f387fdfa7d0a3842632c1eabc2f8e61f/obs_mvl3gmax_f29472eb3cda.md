---
type: file_edit
title: Zsh grep search result
description: Pinned Hermes session alias
resource: agentmemory://observation/obs_mvl3gmax_f29472eb3cda
tags: ["zsh configuration", "Hermes session", "file_edit"]
timestamp: 2026-10-23T14:57:46.469914+00:00
source: agentmemory
session_id: local-809bba89dfe3ea9f5c18ac47fb5e98d8f387fdfa7d0a3842632c1eabc2f8e61f
importance: 8
confidence: 1
---
# Summary

The user executed a grep command to search for specific aliases in their zsh configuration file, highlighting a key finding about the Hermes session.

## Facts
- Current time: 2026-10-23T14:57:46.469914+00:00
- Command executed: grep -rn \"hj\" ~/.config/zsh/ ~/.zshrc 2>/dev/null | grep -v \"^\\s*#\" | head -20
- Output: /Users/davec/.config/zsh/darwin/aliases.zsh:88:# Hermes session pinned to a separate HERMES_HOME. Named `hj`, not `jo`:
- Exit code: 0
- Error: null

## Concepts
- zsh configuration
- Hermes session

## Files
- `/Users/davec/.config/zsh/darwin/aliases.zsh`

_Importance: 8 · Confidence: 1_
