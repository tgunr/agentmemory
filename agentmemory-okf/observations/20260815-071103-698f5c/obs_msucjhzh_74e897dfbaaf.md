---
type: file_write
title: Clean up duplicate Hermes instances
description: No TUI windows or launchd messaging gateway touched.
resource: agentmemory://observation/obs_msucjhzh_74e897dfbaaf
tags: ["file_write"]
timestamp: 2026-08-15T12:22:45.958396+00:00
source: agentmemory
session_id: 20260815_071103_698f5c
importance: 7
confidence: 0.75
---
# Summary

A necessary fix for hermes-related issues, ensuring no TUI windows or the launchd messaging gateway are touched.

## Facts
- Wrote script to remove non-TUI duplicate Hermes instances ONLY:
- The script was generated from a template and verified as correct;

## Files
- `/tmp/clean_strays.sh`

_Importance: 7 · Confidence: 0.75_
