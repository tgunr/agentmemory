---
type: FileRead
title: Read agentmemory plugin hooks configuration
description: Examining hook definitions for the agentmemory plugin lifecycle
resource: agentmemory://observation/obs_mroxegt6_15dba3f4c2eb
tags: ["plugin hooks lifecycle", "agent session hooks", "PreToolUse matcher pattern", "CLAUDE_PLUGIN_ROOT environment variable", "Node.js ESM scripts (.mjs)", "fileread"]
timestamp: 2026-07-17T12:40:23.667068+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 7
confidence: 1
---
# Summary

The agentmemory plugin defines a comprehensive set of lifecycle hooks covering the entire agent session. Each hook delegates to a corresponding Node.js script in the scripts/ directory. The PreToolUse hook is selectively applied to file-related tools (Edit, Write, Read, Glob, Grep) via a matcher pattern, while other hooks fire unconditionally.

## Facts
- File is located at /Volumes/AI/agentmemory/plugin/hooks/hooks.json
- File size is 2588 bytes, 125 lines
- Defines 12 lifecycle hooks: SessionStart, UserPromptSubmit, PreToolUse, PostToolUse, PostToolUseFailure, PreCompact, SubagentStart, SubagentStop, Notification, TaskCompleted, Stop, SessionEnd
- All hooks execute Node.js scripts via ${CLAUDE_PLUGIN_ROOT}/scripts/*.mjs
- PreToolUse hook has a matcher pattern: "Edit|Write|Read|Glob|Grep" to filter which tools trigger it
- All hooks are of type "command"

## Concepts
- plugin hooks lifecycle
- agent session hooks
- PreToolUse matcher pattern
- CLAUDE_PLUGIN_ROOT environment variable
- Node.js ESM scripts (.mjs)

## Files
- `/Volumes/AI/agentmemory/plugin/hooks/hooks.json`

_Importance: 7 · Confidence: 1_
