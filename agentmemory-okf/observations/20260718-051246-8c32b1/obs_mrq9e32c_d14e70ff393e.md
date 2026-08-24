---
type: Observation
title: Memory update failed - consolidation cleanup guidance replacement exceeds limit
description: Attempting to update single-source-of-truth cleanup procedure in Hermes memory
resource: agentmemory://observation/obs_mrq9e32c_d14e70ff393e
tags: ["memory management", "single-source-of-truth", "consolidation audit", "hermes workspace", "observation"]
timestamp: 2026-07-18T11:03:47.457440+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 5
confidence: 1
---
# Summary

Attempted to update Hermes memory with revised consolidation cleanup guidance but the replacement text exceeded the 2,200 character limit. The update aimed to specify /tmp for temp files instead of macOS /var/folders and point to hermes-workspace-context skill for consolidation procedures. Need to reduce other memory entries or shorten before retrying.

## Facts
- Memory replace operation failed due to character limit (projected 2,337/2,200 chars)
- Target change: update temp file guidance from /var/folders to /tmp and consolidation checklist reference to hermes-workspace-context skill
- Current memory entries include ComfyUI setup, git repos (.hermes/, .startup/), AgentMemory integration, CNC/CC profile merge, profile CWD sync bug, desktop GUI workaround, and SSH aliases
- Old guidance referenced 'projects skill consolidation checklist'

## Concepts
- memory management
- single-source-of-truth
- consolidation audit
- hermes workspace

## Files
- `memory`

_Importance: 5 · Confidence: 1_
