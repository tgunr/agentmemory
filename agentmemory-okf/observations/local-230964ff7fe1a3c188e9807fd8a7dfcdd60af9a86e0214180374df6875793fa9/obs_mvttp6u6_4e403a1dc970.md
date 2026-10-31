---
type: file_edit
title: Auxiliary Tool Usage
description: Tool usage for sending messages
resource: agentmemory://observation/obs_mvttp6u6_4e403a1dc970
tags: ["auth middleware", "credential encryption", "file_edit"]
timestamp: 2026-10-29T17:34:25.753711+00:00
source: agentmemory
session_id: local-230964ff7fe1a3c188e9807fd8a7dfcdd60af9a86e0214180374df6875793fa9
importance: 6
confidence: 0.9
---
# Summary

Tool usage revealed credential-related configuration patterns across multiple Hermes CLI files. The usage is related to sending messages.

## Facts
- Credential-related configuration found in multiple Hermes CLI files
- grep command used to locate occurrences of ENABLE_CREDENTIALS

## Concepts
- auth middleware
- credential encryption

## Files
- `/hermes_cli/profile_channels.py`
- `./tools/send_message_tool.py`

_Importance: 6 · Confidence: 0.9_
