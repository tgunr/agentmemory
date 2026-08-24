---
type: file_write
title: write Hermes profile provider config
description: 
resource: agentmemory://observation/obs_msaxxhsa_6a75ebdf48bf
tags: ["YAML encoding", "Ruamel.yaml library", "Profile management", "file_write"]
timestamp: 2026-08-01T22:26:07.302326+00:00
source: agentmemory
session_id: 20260801_110155_a90f10
importance: 8
confidence: 0.9
---
# Summary

This tool updated the Hermes profile providers configuration, handling active vs. inactive profiles, scripting a batch process to update each profile's config file while maintaining file integrity, and observing some notable gotchas such as inconsistent indentation and certain profiles' behavior with `hermes config set`.

## Facts
- The script preserves comments and indentation in YAML files.

## Concepts
- YAML encoding
- Ruamel.yaml library
- Profile management

## Files
- `/Users/davec/.hermes/profiles/ai/skills/autonomous-ai-agents/local-model-providers/references/hermes-multi-profile-provider.md`

_Importance: 8 · Confidence: 0.9_
