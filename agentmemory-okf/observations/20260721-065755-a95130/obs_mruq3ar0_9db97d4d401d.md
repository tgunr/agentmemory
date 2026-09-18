---
type: file_write
title: Verify route profiles
description: Copies /route command to all profiles
resource: agentmemory://observation/obs_mruq3ar0_9db97d4d401d
tags: ["file_write"]
timestamp: 2026-07-21T14:02:22.374314+00:00
source: agentmemory
session_id: 20260721_065755_a95130
importance: 5
confidence: 0.75
---
# Summary

This tool verifies the presence of the /route command in all profile configurations. It runs the router script on a known input to check for missing fields in the output.

## Facts
- The script must exist and be executable at a specific path.
- The expected output of the router script is checked for missing required fields.

## Files
- `/var/folders/hl/ls4hd0dx283_3btyvcf3wgt40000gn/T/hermes-verify-route-profiles.py`

_Importance: 5 · Confidence: 0.75_
