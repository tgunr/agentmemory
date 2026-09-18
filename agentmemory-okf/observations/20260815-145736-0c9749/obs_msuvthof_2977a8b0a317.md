---
type: file_edit
title: Determine Hermes Config Layering
description: About overlaying a global base and profile configs.
resource: agentmemory://observation/obs_msuvthof_2977a8b0a317
tags: ["Hermes Config Layering", "file_edit"]
timestamp: 2026-08-15T21:22:24.824197+00:00
source: agentmemory
session_id: 20260815_145736_0c9749
importance: 8
confidence: 0.9
---
# Summary

The current architecture resolves `config.yaml` for named profiles by inheriting from a global config, rather than duplicating it. The proposed design promotes the root `~/.hermes/config.yaml` as a genuine base layer for named profiles to deep-merge on top of.

## Facts
- Profile configs should overlay a global base, not fork it.

## Concepts
- Hermes Config Layering

## Files
- `/home/agent hermes-profiles/<name>/config.yaml`
- `/path/to/hermes-proposal.md document`

_Importance: 8 · Confidence: 0.9_
