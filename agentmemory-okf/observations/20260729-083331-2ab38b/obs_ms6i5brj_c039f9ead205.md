---
type: Error
title: Audit Result Failed for Tool Terminal
description: Noise from an unexpected invocation of the terminal
resource: agentmemory://observation/obs_ms6i5brj_c039f9ead205
tags: ["error"]
timestamp: 2026-07-29T19:53:14.188450+00:00
source: agentmemory
session_id: 20260729_083331_2ab38b
importance: 8
confidence: 0.75
---
# Summary

Tool "terminal" was invoked incorrectly when it should be a skill or memory tool, causing an audit result failure, according to our guidelines which prevent such non-standard use cases and alert for potential security concerns.

## Facts
- Background review denied non-whitelisted tool: terminal. Only memory/skill tools are allowed.

_Importance: 8 · Confidence: 0.75_
