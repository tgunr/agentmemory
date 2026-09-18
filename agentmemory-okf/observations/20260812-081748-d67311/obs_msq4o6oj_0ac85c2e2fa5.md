---
type: file_edit
title: Troubleshooting cua-driver and type_text issues
description: Making sure SSH terminal backend is used for shell typing in AgentMemory
resource: agentmemory://observation/obs_msq4o6oj_0ac85c2e2fa5
tags: ["SSH environment configuration", "file_edit"]
timestamp: 2026-08-12T13:31:22.960543+00:00
source: agentmemory
session_id: 20260812_081748_d67311
importance: 5
confidence: 0.9
---
# Summary

The post_tool_call hook triggered an edit action for memory, highlighting the issue with cua-driver and type_text, which has been resolved by switching to the SSH terminal backend. The current_entries list provides additional context on how to consolidate overlapping entries and address stale or less important entries.

## Facts
- The issue with using GUI typing to drive shells was causing garbled characters in terminal PTYs, which has been fixed by switching to the native SSH terminal backend.
- Using `hermes config set terminal.ssh.host/user` does not take effect until Hermes is restarted.

## Concepts
- SSH environment configuration

_Importance: 5 · Confidence: 0.9_
