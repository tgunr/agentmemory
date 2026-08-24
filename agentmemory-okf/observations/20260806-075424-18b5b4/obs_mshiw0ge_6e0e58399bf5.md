---
type: file_edit
title: embedding config loads
description: Loading embedding configurations from env variables;
resource: agentmemory://observation/obs_mshiw0ge_6e0e58399bf5
tags: ["React hooks", "file_edit"]
timestamp: 2026-08-06T12:59:27.178097+00:00
source: agentmemory
session_id: 20260806_075424_18b5b4
importance: 5
confidence: 0.9
---
# Summary

The tool loaded an embedding configuration file, reading environment variables for the provider and weighing factors. The function checks for unset or invalid value errors, including undefined EMBEDDING_PROVIDE and NaN values in BM25 and vector weights.

## Facts
- Environment variable EMBEDDING_PROVIDER not set, defaulting to undefined.
- BM25 weight parsed correctly from env variable BM25_WEIGHT.

## Concepts
- React hooks

## Files
- `/Volumes/AI/agentmemory/src/config.ts`

_Importance: 5 · Confidence: 0.9_
