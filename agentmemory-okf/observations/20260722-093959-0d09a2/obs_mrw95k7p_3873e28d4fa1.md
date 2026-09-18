---
type: file_edit
title: Export Hermes session conversations
description: Exporting from state.db into plain-text OKF v0.1 markdown bundles
resource: agentmemory://observation/obs_mrw95k7p_3873e28d4fa1
tags: ["file_edit"]
timestamp: 2026-07-22T15:43:46.829859+00:00
source: agentmemory
session_id: 20260722_093959_0d09a2
importance: 8
confidence: 0.75
---
# Summary

The skill view tool exports Hermes session conversations from state.db into plain-text OKF v0.1 markdown bundles — compressible, archivable, and corruption-resistant.

## Facts
- Nightly wrapper: exports, logs, creates dated .tar.gz archive
- Duplicate of the conversation database that can be gzipped, archived, or version-controlled without SQLite corruption risk

## Files
- ``~/.hermes/scripts/hermes_conversation_export.py`, `~/.hermes/scripts/hermes-okf-mirror.sh``

_Importance: 8 · Confidence: 0.75_
