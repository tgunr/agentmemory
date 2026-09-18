---
type: file_edit
title: patched send_message_tool.py
description: No changes were made to the live gateway adapter.
resource: agentmemory://observation/obs_msgfgzkc_e6d84de03d50
tags: ["file_edit"]
timestamp: 2026-08-05T18:36:01.162443+00:00
source: agentmemory
session_id: 20260805_131611_e325ef
importance: 7
confidence: 0.75
---
# Summary

The code that handles sending a message from Hermes
 Agent to BlueBubbles has been updated by patching existing code in send_message_tool.py. This update includes disabling the webhook feature without touching the live gateway adapter. This change will prevent potential issues with colliding listeners.

## Facts
- No specific factual detail provided in the output.
Only a file modification flag is present as "files_modified" 
was set, even though no value was included in the data.

## Files
- `/Users/davec/.hermes/hermes-agent/tools/send_message_tool.py`

_Importance: 7 · Confidence: 0.75_
