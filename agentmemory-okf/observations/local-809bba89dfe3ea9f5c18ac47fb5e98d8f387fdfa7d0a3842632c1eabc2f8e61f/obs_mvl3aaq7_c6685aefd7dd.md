---
type: Error
title: Gateway restart fails
description: Blocked: command or referenced script cannot restart, stop, or uninstall the gateway
resource: agentmemory://observation/obs_mvl3aaq7_c6685aefd7dd
tags: ["hermes gateway restart", "error"]
timestamp: 2026-10-23T14:52:51.532790+00:00
source: agentmemory
session_id: local-809bba89dfe3ea9f5c18ac47fb5e98d8f387fdfa7d0a3842632c1eabc2f8e61f
importance: 7
confidence: 0.9
---
# Summary

The hermes gateway restart command failed due to internal blocking, citing a process-level SIGTERM issue.

## Facts
- HERMES_HOME=~/jo hermes gateway restart 2>&1 | tail -60; echo \"EXIT=${PIPESTATUS[0]}\"

## Concepts
- hermes gateway restart

_Importance: 7 · Confidence: 0.9_
