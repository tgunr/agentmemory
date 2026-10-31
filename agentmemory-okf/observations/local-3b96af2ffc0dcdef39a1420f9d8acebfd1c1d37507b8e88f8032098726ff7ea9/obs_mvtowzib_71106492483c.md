---
type: file_edit
title: Modify hermes-config-layering
description: Update profile configs to overlay a global base
resource: agentmemory://observation/obs_mvtowzib_71106492483c
tags: ["hermes-config-layering", "global config layering", "file_edit"]
timestamp: 2026-10-29T15:20:31.423045+00:00
source: agentmemory
session_id: local-3b96af2ffc0dcdef39a1420f9d8acebfd1c1d37507b8e88f8032098726ff7ea9
importance: 8
confidence: 0.9
---
# Summary

Update hermes-config-layering to promote root ~/.hermes/config.yaml into a genuine base layer that named profiles deep-merge on top of

## Facts
- Promote root ~/.hermes/config.yaml into a genuine base layer that named profiles deep-merge on top of
- Deep-merged key-by-key; profile wins on conflict

## Concepts
- hermes-config-layering
- global config layering

## Files
- `/project/hermes-config-layering.py`
- `/project/hermes-cli/config.py`

_Importance: 8 · Confidence: 0.9_
