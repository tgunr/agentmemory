---
type: Observation
title: warden execution errors
description: Multiple imports failed due to missing warden module
resource: agentmemory://observation/obs_mvtugzla_eda5a8485f7b
tags: ["ModuleNotFoundError for missing package", "CLI import failures", "Environment setup issues", "observation"]
timestamp: 2026-10-29T17:56:02.706026+00:00
source: agentmemory
session_id: local-dc35c5b5a8d499aae4dc7d4f11b4a5df7c05f9de3c685fafc582f480691a0efa
importance: 6
confidence: 0.9
---
# Summary

A clean environment and the warden CLI import ok, but the main line fails with a module not found error.

## Facts
- Total exit_code: 0, error: null
- A_clean=1, B_env=1, import ok

## Concepts
- ModuleNotFoundError for missing package
- CLI import failures
- Environment setup issues

## Files
- `/Users/davec/Desktop/telegram-warden/.venv/bin/warden`
- `/Users/davec/Desktop/telegram-warden/.venv`
- `/Users/davec/Desktop/telegram-warden`
- `/Users/davec/Desktop/telegram-warden/.hermes/.env`

_Importance: 6 · Confidence: 0.9_
