---
type: FileRead
title: Read README.md API section header
description: Reading lines 1501-1506 of agentmemory README for API documentation
resource: agentmemory://observation/obs_mroq5hk9_e4fe558f4d27
tags: ["REST API configuration", "Bearer token authentication", "mesh sync", "environment variable secrets", "fileread"]
timestamp: 2026-07-17T09:17:27.461798+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 3
confidence: 1
---
# Summary

Read the beginning of the API section of the agentmemory README. The API exposes 128 endpoints on port 3111, bound to localhost by default, with authentication via AGENTMEMORY_SECRET for protected and mesh sync endpoints.

## Facts
- File has 1546 total lines and is 85583 bytes
- API section starts at line 1502 with 128 endpoints on port 3111
- REST API binds to 127.0.0.1 by default
- Protected endpoints require Authorization: Bearer token when AGENTMEMORY_SECRET is set
- Mesh sync endpoints require AGENTMEMORY_SECRET on both peers
- File was truncated; remaining content starts at offset 1507

## Concepts
- REST API configuration
- Bearer token authentication
- mesh sync
- environment variable secrets

## Files
- `/Volumes/AI/agentmemory/README.md`

_Importance: 3 · Confidence: 1_
