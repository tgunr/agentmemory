---
type: Observation
title: terminal
description: {"command":"ENV=~/.agentmemory/.env\necho \"### AgentMemory .env: compression + LLM key presence (values masked) ###\"\…
resource: agentmemory://observation/obs_mrtgghnp_488ed28553ba
tags: ["observation"]
timestamp: 2026-07-20T16:44:55.521833+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 0.3
---
# Summary

{"command":"ENV=~/.agentmemory/.env\necho \"### AgentMemory .env: compression + LLM key presence (values masked) ###\"\ngrep -niE '(AGENTMEMORY_AUTO_COMPRESS|OPENAI_API_KEY|OPENAI_BASE_URL|OPENAI_API_BASE|ANTHROPIC_API_KEY|AGENTMEMORY_LLM)' \"$ENV\" 2>/dev/null \\\n | awk -F= '{n=$1; sub(/^#/,\"COMMENTED \",n); v=$2; print n\" = <len \"length(v)\" chars>\"}'\necho\necho \"### is the REST service …

_Importance: 5 · Confidence: 0.3_
