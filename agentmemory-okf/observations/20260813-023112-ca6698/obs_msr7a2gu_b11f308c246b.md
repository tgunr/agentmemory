---
type: Error
title: _tool_call to mcp__desktop_commander__start_process failed
description: mcp__desktop_commander__start_process is missing required argument(s): timeout_ms.
resource: agentmemory://observation/obs_msr7a2gu_b11f308c246b
tags: ["error"]
timestamp: 2026-08-13T07:32:09.339405+00:00
source: agentmemory
session_id: 20260813_023112_ca6698
importance: 4
confidence: 0.75
---
# Summary

The tool_call to mcp__desktop_commander__start_process executed with the arguments provided. The command failed due to missing required argument timeouts_ms. A retry should be attempted.

## Facts
- Tool call with faulty arguments: { &quot;command&quot; : &quot;echo &#39;=== log: user msg + drop ===&#39;; grep -n -i \\&quot;tickets are still open|dropping inbound on any\\&quot; ~/.hermes/logs/gateway.log | tail -20; echo &#39;=== handler fields ===&#39;; grep -n -i \\&quot;isFromMe|def _handle_webhook|chat_guid|chat_identifier|_resolve_chat_guid|dropping inbound\\&quot; ~/.hermes/hermes-agent/gateway/platforms/bluebubbles.py&quot;, &quot;name&quot; : &quot;mcp__desktop_commander__start_process&quot;}
- Parameters schema: {\"type\": \"object\", \"properties\": {\"command\": {\"type\": \"string\"}, \"timeout_ms\": {\"type\": \"number\"}, \"shell\": {\"type\": \"string\"}, \"verbose_timing\": {\"type\": \"boolean\"}, \"origin\": {\"type\": \"string\", \\\"enum\\\" : [\"ui\", \"llm\"]}}, \"required\": [\"command\", \"timeout_ms\"], \"additionalProperties\": false, \"$schema\": \"http://json-schema.org/draft-07/schema#\"}

_Importance: 4 · Confidence: 0.75_
