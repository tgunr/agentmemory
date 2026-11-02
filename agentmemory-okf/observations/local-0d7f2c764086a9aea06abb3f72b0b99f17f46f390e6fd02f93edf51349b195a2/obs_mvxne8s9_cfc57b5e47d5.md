---
type: file_edit
title: Review config layering architecture change
description: Refactor Hermes to inherit global base from user profile configs
resource: agentmemory://observation/obs_mvxne8s9_cfc57b5e47d5
tags: ["global base profile configs", "config merging", "overriding values", "file_edit"]
timestamp: 2026-11-01T09:49:02.068508+00:00
source: agentmemory
session_id: local-0d7f2c764086a9aea06abb3f72b0b99f17f46f390e6fd02f93edf51349b195a2
importance: 7
confidence: 0.9
---
# Summary

The current architecture of Hermes has a root config and separate profiles, each duplicating the global. This should be refactored to use the global as a base for profiles.

## Facts
- Profile configs should overlay a global base, not fork it.
- Review of current architecture shows only profile's config, not global.

## Concepts
- global base profile configs
- config merging
- overriding values

## Files
- `hermes-cli/config.py`

_Importance: 7 · Confidence: 0.9_
