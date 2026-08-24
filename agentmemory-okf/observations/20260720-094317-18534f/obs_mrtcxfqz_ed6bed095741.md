---
type: decision
title: Clarification on LLM feature flags causing latency and failures
description: Agent asks user to choose mitigation strategy for 19s latency and 6% failure rate
resource: agentmemory://observation/obs_mrtcxfqz_ed6bed095741
tags: ["LLM feature flags", "Environment configuration", "Performance tuning", "Service restart", "decision"]
timestamp: 2026-07-20T15:06:07.734900+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 7
confidence: 1
---
# Summary

The agent identified that four LLM feature flags are explicitly enabled in .env, contradicting documentation and causing 19s latency and 6% failures. It paused to ask the user to choose a mitigation strategy, offering four options ranging from targeted disabling to a complete flag shutdown.

## Facts
- Four LLM flags (AUTO_COMPRESS, CONSOLIDATION, GRAPH_EXTRACTION, INJECT_CONTEXT) are ON in .env
- Documentation states these flags default to OFF
- Current configuration causes 19s latency and 6% failure rate
- Four mitigation options presented: disable AUTO_COMPRESS only, disable all 4, leave as-is, or disable AUTO_COMPRESS + CONSOLIDATION
- REST service requires restart after changes; iii-engine does not
- Full /export backup is available

## Concepts
- LLM feature flags
- Environment configuration
- Performance tuning
- Service restart

## Files
- `.env`

_Importance: 7 · Confidence: 1_
