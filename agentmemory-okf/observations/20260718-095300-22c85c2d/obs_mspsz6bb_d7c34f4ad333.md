---
type: Observation
title: Patched Hermes service issues
description: Authentication and authorization with worker registry
resource: agentmemory://observation/obs_mspsz6bb_d7c34f4ad333
tags: ["worker-registry", "auth middleware", "observation"]
timestamp: 2026-08-12T08:04:00.305758+00:00
source: agentmemory
session_id: 20260718_095300_22c85c2d
importance: 5
confidence: 0.9
---
# Summary

The Hermes service encountered issues with authentication and authorization after deploying the `okf_mirror.sh` script, which was triggering a worker death due to an invocation-timeout condition.

## Facts
- a background review denied non-whitelisted tool: patch. Only memory/skill tools are allowed.

## Concepts
- worker-registry
- auth middleware

_Importance: 5 · Confidence: 0.9_
