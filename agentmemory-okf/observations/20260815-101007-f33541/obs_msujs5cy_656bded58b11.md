---
type: file_edit
title: externalize secrets from Hermes's config
description: purge leaked tokens and git history
resource: agentmemory://observation/obs_msujs5cy_656bded58b11
tags: ["file_edit"]
timestamp: 2026-08-15T15:45:26.806327+00:00
source: agentmemory
session_id: 20260815_101007_f33541
importance: 7
confidence: 0.75
---
# Summary

The skill manages to convert literal secrets to ${VAR} references.

## Facts
- nested-scalar pitfall in rewritingconfig.yaml

## Files
- `~/.hermes/config.yaml`

_Importance: 7 · Confidence: 0.75_
