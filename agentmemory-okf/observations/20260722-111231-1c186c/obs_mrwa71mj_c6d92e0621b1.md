---
type: decision
title: Error occurred during session_search tool call
description: Around message ID 1 is missing from the session ID.
resource: agentmemory://observation/obs_mrwa71mj_c6d92e0621b1
tags: ["session_id_formatting", "decision"]
timestamp: 2026-07-22T16:12:55.670943+00:00
source: agentmemory
session_id: 20260722_111231_1c186c
importance: 5
confidence: 0.9
---
# Summary

The post_tool_call hook executed with a success value of false due to an error during the session_search tool call. The around message ID was missing from the session ID, resulting in this particular outcome.

## Facts
- Session search tool attempted to access around message ID 1 but it was not found in the session ID <file>20260721_065755_a95130</file>.
- The error returned by the tool is: error: around_message_id 1 not in session_id 20260721_065755_a95130.

## Concepts
- session_id_formatting

_Importance: 5 · Confidence: 0.9_
