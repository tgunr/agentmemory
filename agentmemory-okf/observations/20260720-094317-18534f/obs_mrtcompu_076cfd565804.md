---
type: file_write
title: Write agentmemory API investigation script
description: Probes config, compression model, and safe endpoints
resource: agentmemory://observation/obs_mrtcompu_076cfd565804
tags: ["agentmemory API", "bash diagnostic script", "API endpoint probing", "environment variable parsing", "file_write"]
timestamp: 2026-07-20T14:59:16.863172+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 4
confidence: 1
---
# Summary

A bash script was created to investigate the local agentmemory service. It gathers configuration details, checks compression model settings, and probes several diagnostic API endpoints to assess system state without causing mutations.

## Facts
- Script written to /tmp/am_invest3.sh (1464 bytes)
- Targets local agentmemory service at http://127.0.0.1:3111
- Extracts auth secret from ~/.agentmemory/.env
- Queries /agentmemory/config/flags for embedding provider and feature flags
- Greps for COMPRESSION_MODEL in .env and /Volumes/AI/agentmemory/dist/index.mjs
- Defines safe() function to probe read-only endpoints: /export, /obsidian/export, /verify, /diagnostics/heal, /snapshot/create

## Concepts
- agentmemory API
- bash diagnostic script
- API endpoint probing
- environment variable parsing

## Files
- `/tmp/am_invest3.sh`
- `~/.agentmemory/.env`
- `/Volumes/AI/agentmemory/dist/index.mjs`

_Importance: 4 · Confidence: 1_
