---
type: file_write
title: Write inspection script for state_store.db bin format
description: Script to analyze binary observation files in state store database
resource: agentmemory://observation/obs_mroq7eyc_c2f1b39abfa5
tags: ["binary file format inspection", "state store database", "observation bin files", "JSON serialization format", "memory compression storage", "file_write"]
timestamp: 2026-07-17T09:18:57.392539+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 4
confidence: 1
---
# Summary

A diagnostic Python script was written to inspect the binary format of observation bin files in the agentmemory state store database. The script analyzes file framing, null byte separators, and JSON content to understand the storage format.

## Facts
- Script written to /tmp/inspect_format.py (1090 bytes)
- Targets state_store.db at /Users/davec/data/agentmemory/data/state_store.db
- Looks for files matching pattern mem:obs:*.bin
- Inspects binary format: checks for null bytes, JSON parsing, chunk splitting
- Script finds smallest bin file, reads raw bytes, attempts JSON decode, splits on \x00 bytes

## Concepts
- binary file format inspection
- state store database
- observation bin files
- JSON serialization format
- memory compression storage

## Files
- `/tmp/inspect_format.py`
- `/Users/davec/data/agentmemory/data/state_store.db`

_Importance: 4 · Confidence: 1_
