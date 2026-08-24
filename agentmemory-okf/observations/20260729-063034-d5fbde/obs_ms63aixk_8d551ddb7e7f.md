---
type: file_edit
title: Terminal command to show hermes profile and output
description: The hermes-agent uses the cc2 shell profile
resource: agentmemory://observation/obs_ms63aixk_8d551ddb7e7f
tags: ["hermes-shell-profiles", "file_edit"]
timestamp: 2026-07-29T12:57:22.517205+00:00
source: agentmemory
session_id: 20260729_063034_d5fbde
importance: 4
confidence: 1
---
# Summary

The hermes-agent ran a command to show the cc shell profile and outputted relevant information about it.

## Facts
- hermes-agent command: cd /Users/davec/.hermes/hermes-agent && hermes profile show cc 2>/dev/null | head -20
- Command executed successfully (exit code: 0)
- Profile details matched (Model: kilo-auto/efficient, Gateway: stopped, etc.)

## Concepts
- hermes-shell-profiles

## Files
- `/Users/davec/.hermes/hermes-agent`

_Importance: 4 · Confidence: 1_
