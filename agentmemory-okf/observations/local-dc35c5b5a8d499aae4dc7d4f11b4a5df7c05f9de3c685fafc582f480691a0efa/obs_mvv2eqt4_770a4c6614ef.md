---
type: file_edit
title: store.py analysis
description: File contents and structure of warden/store.py
resource: agentmemory://observation/obs_mvv2eqt4_770a4c6614ef
tags: ["SQLite persistence", "Serialization of access to the store", "Database query execution", "file_edit"]
timestamp: 2026-10-30T14:26:01.139541+00:00
source: agentmemory
session_id: local-dc35c5b5a8d499aae4dc7d4f11b4a5df7c05f9de3c685fafc582f480691a0efa
importance: 8
confidence: 1
---
# Summary

The warden/store.py file contains SQLite persistence structures for contacts, turns, and per-day reply counts.
    It defines classes for serializing access to the store and executing database queries.

## Facts
- SQLite persistence: contacts, turns, per-day reply counts.
- Importing from __future__ import annotations.
- Using Path for path manipulation.

## Concepts
- SQLite persistence
- Serialization of access to the store
- Database query execution

## Files
- `/Users/davec/Desktop/telegram-warden/warden/store.py`

_Importance: 8 · Confidence: 1_
