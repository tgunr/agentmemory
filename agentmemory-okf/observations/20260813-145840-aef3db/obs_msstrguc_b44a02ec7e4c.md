---
type: file_edit
title: Memory at 1,918/2,200 chars
description: Add entry to memory exceeds limit, propose consolidation or removal
resource: agentmemory://observation/obs_msstrguc_b44a02ec7e4c
tags: ["TERMINAL_CWD", "Race conditions in memory", "file_edit"]
timestamp: 2026-08-14T10:49:18.848500+00:00
source: agentmemory
session_id: 20260813_145840_aef3db
importance: 8
confidence: 0.9
---
# Summary

Add entry to memory exceeds limit, propose consolidation or removal — all in this turn. Also mentioned: Hermes desktop app vs AgentMemory are SEPARATE, Samba served by pve.local.

## Facts
- TERMINAL_CWD leak (PR#49153)
- re-injects at reboot: `launchctl unsetenv TERMINAL_CWD` + gateway restart clears it, but it comes back after next login/reboot.

## Concepts
- TERMINAL_CWD
- Race conditions in memory

_Importance: 8 · Confidence: 0.9_
