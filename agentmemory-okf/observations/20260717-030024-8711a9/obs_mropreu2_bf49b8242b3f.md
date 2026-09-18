---
type: Error
title: Cronjob creation failed due to absolute script path
description: Attempted to schedule observation cost check reminder for 2026-07-18
resource: agentmemory://observation/obs_mropreu2_bf49b8242b3f
tags: ["cronjob scheduling", "path validation", "local LLM routing", "Ollama", "Hermes agent framework", "error"]
timestamp: 2026-07-17T09:06:30.742790+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 4
confidence: 1
---
# Summary

Attempted to schedule a cronjob to remind Dave about LLM observation costs and suggest switching to a local Ollama instance. The task failed because the system enforces strict path validation, requiring scripts to reside in ~/.hermes/scripts/ and be referenced by filename only.

## Facts
- Tool cronjob action create failed validation
- Target schedule: 2026-07-18T09:00:00
- Provided path: /Users/davec/.hermes/profiles/ai/scripts/observation-count-report.py
- System requires scripts to be in ~/.hermes/scripts/ and referenced by filename only
- Job intent: Remind Dave to check LLM costs and suggest switching OPENAI_BASE_URL to local Ollama

## Concepts
- cronjob scheduling
- path validation
- local LLM routing
- Ollama
- Hermes agent framework

## Files
- `/Users/davec/.hermes/profiles/ai/scripts/observation-count-report.py`
- `~/.hermes/scripts/`

_Importance: 4 · Confidence: 1_
