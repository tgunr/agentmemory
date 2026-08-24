---
type: Error
title: Memory update failed due to 2200 char limit
description: Expanding single-source cleanup entry exceeded memory capacity
resource: agentmemory://observation/obs_mrq9ef7k_47ba0ea1991f
tags: ["Hermes memory limits", "macOS sandbox workarounds", "Memory consolidation", "error"]
timestamp: 2026-07-18T11:04:03.198583+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 5
confidence: 1
---
# Summary

The agent attempted to update a memory entry regarding single-source-of-truth cleanup requests to include a macOS-specific workaround (using /tmp instead of /var/folders to avoid sandbox guards) and reference hermes-workspace-context. The operation failed because the new text would push the total memory usage to 2,227 characters, exceeding the 2,200-character limit.

## Facts
- Memory update failed: proposed size 2227 chars exceeds 2200 char limit (current 2185)
- Attempted to add rule: use /tmp for temp/verify files, not macOS /var/folders (avoids sandbox guard)
- Single-source cleanup knowledge intended to be folded into hermes-workspace-context
- Resolution requires shortening or removing other existing memory entries to make space

## Concepts
- Hermes memory limits
- macOS sandbox workarounds
- Memory consolidation

## Files
- `hermes-workspace-context`

_Importance: 5 · Confidence: 1_
