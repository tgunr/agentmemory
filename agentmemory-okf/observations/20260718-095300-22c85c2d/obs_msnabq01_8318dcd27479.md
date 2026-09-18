---
type: Observation
title: Liquidation bugfix
description: solving macOS mktemp misbehavior
resource: agentmemory://observation/obs_msnabq01_8318dcd27479
tags: ["macOS mktemp misbehavior", "observation"]
timestamp: 2026-08-10T13:46:20.511767+00:00
source: agentmemory
session_id: 20260718_095300_22c85c2d
importance: 6
confidence: 0.9
---
# Summary

The agentmemory-hermes-integration skill failed to export due to a bug in the okf_mirror.sh script. The issue was resolved by changing the line with hardcoded credentials and confirming the fix via three probe steps.

## Facts
- A blind launchctl unload/load would not fix the issue.
- The problem was that the script sent a dead token in the auth header.

## Concepts
- macOS mktemp misbehavior

_Importance: 6 · Confidence: 0.9_
