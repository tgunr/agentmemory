---
type: Observation
title: Airflow gateway CLI tool
description: Navigating a gateway restart process
resource: agentmemory://observation/obs_mvl3ao4w_478f2464cfd5
tags: ["asyncio", "observation"]
timestamp: 2026-10-23T14:53:08.909035+00:00
source: agentmemory
session_id: local-809bba89dfe3ea9f5c18ac47fb5e98d8f387fdfa7d0a3842632c1eabc2f8e61f
importance: 7
confidence: 0.9
---
# Summary

The Airflow gateway CLI tool is running a sequence of commands to restart the gateway. The tool is using asyncio to manage concurrency, while also encountering a SystemExit error during execution.

## Facts
- Gateway startup and shutdown sequences involve SystemExit
- Airflow gateway uses asyncio for concurrency

## Concepts
- asyncio

## Files
- `/Users/davec/.hermes/hermes-agent/hermes_cli/main.py`

_Importance: 7 · Confidence: 0.9_
