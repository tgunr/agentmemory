---
type: task
title: Todo list updated: store hardening plan in progress
description: 4-item plan: investigate → harden → bridge → verify
resource: agentmemory://observation/obs_mrtcpj09_82c3a52d93aa
tags: ["OKF export bridge", "native /export endpoint", "AUTO_COMPRESS configuration", "zombie session cleanup", "file store backend", "Hermes memory ingestion", "task"]
timestamp: 2026-07-20T14:59:58.710426+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 6
confidence: 1
---
# Summary

Todo list reflects a 4-phase plan to address a store backend issue. Investigation phase is complete, having identified file store, all LLM flags ON, and zombie sessions as root causes. The hardening phase is now active, focused on native /export-based snapshots, potentially disabling AUTO_COMPRESS, and closing zombie sessions. Subsequent phases will build an OKF markdown export bridge and verify Hermes ingestion of the OKF bundle.

## Facts
- Item 1 (Investigate store backend + confirm root causes) is completed; root causes identified as file store, all LLM flags ON, sessions never close
- Item 2 (Harden via snapshot/backup native /export, tame compression, close zombie sessions) is currently in_progress; considering disabling AUTO_COMPRESS
- Item 3 (Build OKF export bridge on top of native /export - observations+memories → OKF markdown bundle in git) is pending
- Item 4 (End-to-end verification: bridge runs, OKF bundle valid, Hermes can ingest OKF) is pending
- Summary: 4 total, 2 pending, 1 in_progress, 1 completed, 0 cancelled

## Concepts
- OKF export bridge
- native /export endpoint
- AUTO_COMPRESS configuration
- zombie session cleanup
- file store backend
- Hermes memory ingestion

_Importance: 6 · Confidence: 1_
