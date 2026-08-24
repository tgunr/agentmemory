---
type: file_edit
title: Restore profile default cwd
description: Mitigate PR #49153 profile leak
resource: agentmemory://observation/obs_msf3o0k9_f936967c0fba
tags: ["PR #49153 profile leak mitigation", "file_edit"]
timestamp: 2026-08-04T20:17:47.477116+00:00
source: agentmemory
session_id: 20260804_142737_5ff3c4
importance: 5
confidence: 0.9
---
# Summary

The tool execute_code executed the provided code to restore a profile default cwd, mitigating the known PR #49153 profile leak.

## Facts
- Profile-local default overrides launch profile's.cwd
- /Users/davec/.hermes/profiles/systems/workspace used as BASE

## Concepts
- PR #49153 profile leak mitigation

## Files
- `/Users/davec/.hermes/profiles/systems/config.yaml`

_Importance: 5 · Confidence: 0.9_
