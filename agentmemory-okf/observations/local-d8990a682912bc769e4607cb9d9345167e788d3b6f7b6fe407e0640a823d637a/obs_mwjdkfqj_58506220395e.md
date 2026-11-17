---
type: FileRead
title: Error reading secret-bearing file
description: Access denied
resource: agentmemory://observation/obs_mwjdkfqj_58506220395e
tags: ["credential leakage", "fileread"]
timestamp: 2026-11-16T14:44:50.724107+00:00
source: agentmemory
session_id: local-d8990a682912bc769e4607cb9d9345167e788d3b6f7b6fe407e0640a823d637a
importance: 7
confidence: 0.9
---
# Summary

Failed to read .envrc file due to access denied error, suggesting a security boundary was breached.

## Facts
- Error message: Access denied: /Users/davec/.hermes/hermes-agent/.envrc
- Reason: secret-bearing environment file

## Concepts
- credential leakage

## Files
- `/Users/davec/.hermes/hermes-agent/.envrc`

_Importance: 7 · Confidence: 0.9_
