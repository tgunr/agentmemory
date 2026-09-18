---
type: Error
title: Skill patch failed: read-before-write required
description: Attempt to patch 'macos-app-crash-debug' skill rejected due to missing prior read
resource: agentmemory://observation/obs_mrrw233t_af2d72dc47fa
tags: ["skill management", "read-before-write policy", "macOS crash debugging", "CEF debug logs", "Sentry minidumps", "macOS .ips crash reports", "error"]
timestamp: 2026-07-19T14:26:04.980610+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 4
confidence: 1
---
# Summary

An attempt to update the "macos-app-crash-debug" skill with new debugging instructions failed because the system enforces a read-before-write policy for background curator patches. The agent must first view the current skill content using skill_view before applying the patch.

## Facts
- Tool: skill_manage, action: patch, target: macos-app-crash-debug
- Error: Refusing background curator patch because current SKILL.md content was not loaded in the review turn
- Resolution: Must call skill_view(name) or skill_view(name, file_path=...) before retrying the write
- Patch content included instructions for parsing macOS 27 .ips reports (brace-counting for two JSON objects), debugging CEF file-panel XPC crashes, and reading Sentry .dmp files

## Concepts
- skill management
- read-before-write policy
- macOS crash debugging
- CEF debug logs
- Sentry minidumps
- macOS .ips crash reports

## Files
- `SKILL.md`
- `scripts/parse-macos-ips.py`

_Importance: 4 · Confidence: 1_
