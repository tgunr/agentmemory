---
type: file_edit
title: docmost-password-reset
description: Create Docmost admin/user password reset script in Postgres DB
resource: agentmemory://observation/obs_msrf35lq_8e8edd830379
tags: ["React hooks", "SQL migration", "auth middleware", "file_edit"]
timestamp: 2026-08-13T11:10:43.738367+00:00
source: agentmemory
session_id: 20260813_060234_69d0f6
importance: 6
confidence: 1
---
# Summary

Post tool, create password reset script for Docmost admin/user password in Postgres DB.

## Facts
- Docmost uses bcrypt (native)
- -i option should not be used with node exec to avoid hanging stdin and printing nothing
- - process.argv[1] is script path, NOT arg. Use dummy as argv[1]

## Concepts
- React hooks
- SQL migration
- auth middleware

## Files
- `/opt/docmost/docker-compose.yml`

_Importance: 6 · Confidence: 1_
