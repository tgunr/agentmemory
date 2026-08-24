---
type: file_edit
title: ACP end-to-end probe result validation
description: No validation fails, but some methods are not implemented correctly.
resource: agentmemory://observation/obs_mryxp6yc_2e18b5736d7e
tags: ["kilo_login", "ACP agentInfo version 7.4.15", "jsonrpc", "mercury", "file_edit"]
timestamp: 2026-07-24T12:46:25.898281+00:00
source: agentmemory
session_id: 20260724_062931_d84b69
importance: 5
confidence: 1
---
# Summary

Tool ran the KAPI probe Python script using mercury and successfully gathered results indicating that Kilo Auth is properly logged in. The tool's terminal output included information on method implementations.

## Facts
- Command ran successfully (exit code: 0)
- Kilo auth method identified ({kilo_login})
- Acp agentInfo version: 7.4.15

## Concepts
- kilo_login
- ACP agentInfo version 7.4.15
- jsonrpc
- mercury

## Files
- `/tmp/hermes-verify-acp.py`

_Importance: 5 · Confidence: 1_
