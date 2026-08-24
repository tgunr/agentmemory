---
type: file_edit
title: Fallback Providers
description: Configure automatic failover to backup LLM providers when your primary model is unavailable.
resource: agentmemory://observation/obs_msubemz7_c4a036a736c4
tags: ["file_edit"]
timestamp: 2026-08-15T11:50:59.533054+00:00
source: agentmemory
session_id: 20260815_064834_4716be
importance: 8
confidence: 0.75
---
# Summary

The tool calls `hermes fallback` command to configure automatic failover to backup LLM providers when the primary model is unavailable. Hermes uses three layers of resilience to keep sessions running even if the providers hit issues.

## Facts
- Automatic failover is enabled for backup LLM providers.
- Credential pools handle same-provider rotation (e.g., multiple OpenRouter keys).

_Importance: 8 · Confidence: 0.75_
