---
type: FileRead
title: Core type definitions for agent memory system
description: Defines Session, Observation, Memory, and Provider interfaces
resource: agentmemory://observation/obs_mrox9rfu_8901fddb66da
tags: ["TypeScript interfaces", "agent memory architecture", "observation compression pipeline", "session lifecycle tracking", "LLM provider abstraction", "hook system lifecycle", "git commit linking", "memory versioning", "fileread"]
timestamp: 2026-07-17T12:36:44.186520+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 8
confidence: 1
---
# Summary

Read the core TypeScript type definitions for the agent memory compression system. This file establishes the fundamental data model including Session tracking, Observation compression pipeline (raw → compressed), long-term Memory storage with versioning, and the Provider abstraction for multiple LLM backends. These types form the architectural backbone for the entire memory system.

## Facts
- Session interface tracks status (active/completed/abandoned), observationCount, commitShas, and agentId
- RawObservation stores hookType, toolName, toolInput/Output, and supports text/image/mixed modality
- CompressedObservation contains type, title, facts[], narrative, concepts[], files[], importance score
- ObservationType enum: file_read, file_write, file_edit, command_run, search, web_fetch, conversation, error, decision, discovery, subagent, notification, task, image, other
- Memory types: pattern, preference, architecture, bug, workflow, fact with strength, version, and supersedes tracking
- HookType includes 12 lifecycle hooks: session_start, prompt_submit, pre_tool_use, post_tool_use, post_tool_call, post_tool_failure, pre_compact, subagent_start/stop, notification, task_completed, stop, session_end
- ProviderType supports: agent-sdk, anthropic, gemini, openrouter, minimax, openai, noop
- MemoryProvider interface defines compress(systemPrompt, userPrompt) contract
- CommitLink interface connects git commits to sessions with sha, branch, repo, files, and sessionIds

## Concepts
- TypeScript interfaces
- agent memory architecture
- observation compression pipeline
- session lifecycle tracking
- LLM provider abstraction
- hook system lifecycle
- git commit linking
- memory versioning

## Files
- `/Volumes/AI/agentmemory/src/types.ts`

_Importance: 8 · Confidence: 1_
