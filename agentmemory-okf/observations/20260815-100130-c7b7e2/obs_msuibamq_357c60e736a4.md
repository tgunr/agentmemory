---
type: file_edit
title: Gateway port config output
description: No specific context provided.
resource: agentmemory://observation/obs_msuibamq_357c60e736a4
tags: ["UDP listening ports", "file_edit"]
timestamp: 2026-08-15T15:04:20.872749+00:00
source: agentmemory
session_id: 20260815_100130_c7b7e2
importance: 6
confidence: 0.9
---
# Summary

The command ran successfully, printing the gateway port config. The output indicates that PID 77463 is listening on UDP and TCP.

## Facts
- grep pattern found in ~/.hermes/config.yaml
- PID 77463 holds gateway/TUI listen port via UDP

## Concepts
- UDP listening ports

## Files
- `.hermes/config.yaml`

_Importance: 6 · Confidence: 0.9_
