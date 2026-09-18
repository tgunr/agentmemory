---
type: FileRead
title: Reviewed Hermes AgentMemory observer plugin
description: Plugin captures completed tool calls and forwards truncated observations locally
resource: agentmemory://observation/obs_mrq8k5al_a1d4600c2909
tags: ["Hermes plugin hooks", "post_tool_call observation", "AgentMemory REST API", "tool-call deduplication", "payload truncation", "fileread"]
timestamp: 2026-07-18T10:40:30.665697+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 3
confidence: 1
---
# Summary

The file implements a Hermes observer that records post-tool-call metadata and sends it to a local AgentMemory service. It includes duplicate suppression, bounded session tracking, safe serialization, payload truncation, and optional secret-based authentication configuration.

## Facts
- The plugin registers on_post_tool_call for the Hermes post_tool_call hook.
- AgentMemory defaults to http://127.0.0.1:3111 and can be configured with AGENTMEMORY_URL and AGENTMEMORY_SECRET.
- Observations include session, project, timestamp, tool and task IDs, status, error information, duration, and truncated argument/result previews.
- Argument previews are limited to 500 characters and result previews to 1000 characters.
- Tool call IDs are deduplicated per session, with tracking limited to 50 sessions to reduce memory growth.
- The payload is sent to the /agentmemory/observe REST endpoint; the remainder of the file output was truncated during reading.

## Concepts
- Hermes plugin hooks
- post_tool_call observation
- AgentMemory REST API
- tool-call deduplication
- payload truncation

## Files
- `~/.hermes/plugins/agentmemory_observer.py`

_Importance: 3 · Confidence: 1_
