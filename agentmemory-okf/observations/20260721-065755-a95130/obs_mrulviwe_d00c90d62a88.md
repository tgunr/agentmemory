---
type: Observation
title: Error: Foreground command uses '&' backgrounding
description: Use terminal(background=true) for long-lived processes
resource: agentmemory://observation/obs_mrulviwe_d00c90d62a88
tags: ["observation"]
timestamp: 2026-07-21T12:04:21.225329+00:00
source: agentmemory
session_id: 20260721_065755_a95130
importance: 4
confidence: 0.75
---
# Summary

The command execution resulted in an error due to incorrect use of '&' for backgrounding in the foreground command.

## Facts
- Foreground command uses '&' backgrounding. Use terminal(background=true) for long-lived processes, then run health checks and tests in follow-up terminal calls.

_Importance: 4 · Confidence: 0.75_
