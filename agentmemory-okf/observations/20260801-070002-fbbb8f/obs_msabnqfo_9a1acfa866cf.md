---
type: file_edit
title: SQL table contents retrieved from .hermes/state.db
description: No state.db found else print a message.
resource: agentmemory://observation/obs_msabnqfo_9a1acfa866cf
tags: ["file_edit"]
timestamp: 2026-08-01T12:02:40.400142+00:00
source: agentmemory
session_id: 20260801_070002_fbbb8f
importance: 4
confidence: 0.75
---
# Summary

A terminal tool executed a Python script that queried its own state database, .hermes, for table names and contents.

## Facts
- a sqlite database is connected to .hermes
- db paths include ~ or another path user can use

## Files
- `/home/user/.hermes/state.db`

_Importance: 4 · Confidence: 0.75_
