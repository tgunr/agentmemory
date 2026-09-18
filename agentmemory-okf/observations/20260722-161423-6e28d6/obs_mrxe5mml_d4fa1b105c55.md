---
type: file_edit
title: Grep Command on Hermes WebUI Source Files
description: Search for specific keywords in source files
resource: agentmemory://observation/obs_mrxe5mml_d4fa1b105c55
tags: ["grep_command", "file_edit"]
timestamp: 2026-07-23T10:51:34.218162+00:00
source: agentmemory
session_id: 20260722_161423_6e28d6
importance: 5
confidence: 1
---
# Summary

The grep command was executed on the source files of the Hermes WebUI to search for specific keywords. This is a routine read as it involves searching for specific substrings in source code.

## Facts
- Timestamp: 2026-07-23T10:51:34.218162+00:00
- Tool used: terminal
- Command executed: grep -rn \"model\\|setModel\\|model_switch\\|switchModel\" /Users/davec/hermes-webui/src --include=\"*.ts\" --include=\"*.tsx\" 2>/dev/null | grep -i \"slash\\|command\\|/model\" | head -20

## Concepts
- grep_command

## Files
- `/Users/davec/hermes-webui/src`

_Importance: 5 · Confidence: 1_
