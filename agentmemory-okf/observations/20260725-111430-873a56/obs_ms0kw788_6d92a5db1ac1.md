---
type: file_edit
title: Memory provider plugin discovery
description: a series of grep commands reveal memory.provider usage and routing
resource: agentmemory://observation/obs_ms0kw788_6d92a5db1ac1
tags: ["memory provider plugin discovery", "file_edit"]
timestamp: 2026-07-25T16:23:30.197454+00:00
source: agentmemory
session_id: 20260725_111430_873a56
importance: 6
confidence: 0.9
---
# Summary

The agent loads the memory provider plugin, which manages agent memory. The grep command reveals details of the plugin's functionality.

## Facts
- Bundled providers scan two directories for memory provider plugins
- User-installed providers import under a synthetic package name

## Concepts
- memory provider plugin discovery

## Files
- `/hermes-agent/plugins/memory/__init__.py`
- `/hermes-agent/heres_cli/plugins.py`

_Importance: 6 · Confidence: 0.9_
