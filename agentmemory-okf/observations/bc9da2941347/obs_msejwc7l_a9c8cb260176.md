---
type: file_write
title: nftables-connectivity-debug Skill Creation
description: Created a new skill to diagnose and fix Linux/Debian connectivity failures using nftables.
resource: agentmemory://observation/obs_msejwc7l_a9c8cb260176
tags: ["nftables mid-chain c", "file_write"]
timestamp: 2026-08-04T11:04:23.500162+00:00
source: agentmemory
session_id: bc9da2941347
importance: 7
confidence: 0.9
---
# Summary

The skill 'nftables-connectivity-debug' was successfully created to help diagnose and fix connectivity failures on Linux/Debian systems using nftables. The creation process included creating a file with the necessary logic, including steps to identify mid-chain catch-all drops, prove packet silencing, check for ruleset duplication, apply safely with auto-rollback, and syntax checking.

## Facts
- NFTAPPLY_OK file created for auto-rollback feature.
- Created a backup of the original nftables configuration for safe rollback.

## Concepts
- nftables mid-chain c

## Files
- `/Users/davec/.hermes/skills/productivity/nftables-connectivity-debug/SKILL.md`

_Importance: 7 · Confidence: 0.9_
