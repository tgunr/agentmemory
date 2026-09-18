---
type: file_edit
title: Save a lesson learned from this session
description: Reinforce confident lessons and decay duplicates
resource: agentmemory://observation/obs_msg1zbw2_7829efb8d81e
tags: ["confidence scoring", "mcp memory compression", "file_edit"]
timestamp: 2026-08-05T12:18:22.318448+00:00
source: agentmemory
session_id: 20260805_055554_5fae0e
importance: 7
confidence: 0.9
---
# Summary

The post_tool_call hook for `tool_describe` saved a lesson learned from the session to mcp agent.

## Facts
- mcp agent memory compressed JSON data size: { "name": "mcp__agentmemory__memory_lesson_save", "description": "Save a lesson learned from this session. Lessons have confidence scores that strengthen when reinforced and decay when not used. Duplicate content auto-strengthens the existing lesson.", "parameters": {"properties": {"confidence": {"description": "Initial confidence 0.0-1.0 (default 0.5)", "type": "number"}, "content": {"description": "The lesson learned (what worked, what to avoid, when to use X approach)", "type": "string"}, "context": {"description": "When/where this lesson applies", "type": "string"}, "project": {"description": "Project this lesson is about", "type": "string"}, "tags": {"description": "Comma-separated tags", "type": "string"}}, "required": ["content"], "type": "object"}} 
    <fact>mcp agent memory tool called `tool_describe

## Concepts
- confidence scoring
- mcp memory compression

_Importance: 7 · Confidence: 0.9_
