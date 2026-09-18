---
type: Observation
title: Hermes SSH Terminal Backend
description: 
resource: agentmemory://observation/obs_msq63ikg_69842eb4c962
tags: ["SSH terminal errors: fix TERMINAL_SSH_* env vars and bashrc", "config lives in .env, not config.yaml", "observation"]
timestamp: 2026-08-12T14:11:17.822588+00:00
source: agentmemory
session_id: 20260812_083630_3f23b1
importance: 7
confidence: 0.9
---
# Summary

The Hermes SSH Terminal Backend requires specific environment variables to be set, which can be tricky to misconfigure. A restart or a Python script over SSH is needed to apply changes.

## Facts
- terminal terminal errors: fix TERMINAL_SSH_* env vars and bashrc
- key config lives in .env, not config.yaml

## Concepts
- SSH terminal errors: fix TERMINAL_SSH_* env vars and bashrc
- config lives in .env, not config.yaml

## Files
- `{~/.hermes/config.yaml}`

_Importance: 7 · Confidence: 0.9_
