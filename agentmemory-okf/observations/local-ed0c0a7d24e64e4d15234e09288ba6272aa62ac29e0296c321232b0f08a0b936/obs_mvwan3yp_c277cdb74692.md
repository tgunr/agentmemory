---
type: FileRead
title: Herimes Agent v0.22.5+3092.g525d989
description: Multi-profile, unscoped secret error
resource: agentmemory://observation/obs_mvwan3yp_c277cdb74692
tags: ["fileread"]
timestamp: 2026-10-31T11:04:14.540050+00:00
source: agentmemory
session_id: local-ed0c0a7d24e64e4d15234e09288ba6272aa62ac29e0296c321232b0f08a0b936
importance: 7
confidence: 0.85
---
# Summary

The output contains the Hermes Agent version and several UnscopedSecretError incidents. The incidents relate to multiplexed profiles and error handling. This is important because it indicates potential security vulnerabilities.

## Facts
- UnscopedSecretError: Fallback to X failed: provider not configured
- UnscopedSecretError: cron run wedges permanently and silently when the delivery lane raises UnscopedSecretError resolving a home-target (multiplexed profiles)
- UnscopedSecretError: shell.exec fails with UnscopedSecretError after a skill registers an env passthrough on a multi-profile dashboard backend

## Files
- `/Users/davec/.hermes/hermes-agent`

_Importance: 7 · Confidence: 0.85_
