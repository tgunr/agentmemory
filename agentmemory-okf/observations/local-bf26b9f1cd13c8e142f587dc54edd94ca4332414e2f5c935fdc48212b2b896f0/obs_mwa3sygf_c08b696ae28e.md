---
type: Error
title: execute-code blocked by security policy
description: 
resource: agentmemory://observation/obs_mwa3sygf_c08b696ae28e
tags: ["execute_code blocked by security policy", "error"]
timestamp: 2026-11-10T03:01:36.493039+00:00
source: agentmemory
session_id: local-bf26b9f1cd13c8e142f587dc54edd94ca4332414e2f5c935fdc48212b2b896f0
importance: 6
confidence: 0.9
---
# Summary

This code executed in an unattended session and was blocked by the security policy due to bypassing shell-string approval checks. The policy prevents cron jobs from running in such scenarios.

## Facts
- Cron jobs bypass shell-string approval checks without user presence
- Error blocking execute_code due to security policy

## Concepts
- execute_code blocked by security policy

_Importance: 6 · Confidence: 0.9_
