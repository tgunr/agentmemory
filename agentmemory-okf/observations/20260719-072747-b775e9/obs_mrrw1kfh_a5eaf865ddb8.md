---
type: file_write
title: Created Python script to parse macOS .ips crash reports
description: Handles dual top-level JSON objects (metadata + crash) in Tahoe crash reports
resource: agentmemory://observation/obs_mrrw1kfh_a5eaf865ddb8
tags: ["macOS crash report parsing", "JSON multi-object handling", "brace-counting parsing algorithm", "file_write"]
timestamp: 2026-07-19T14:25:40.776479+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 5
confidence: 1
---
# Summary

Created a utility script that solves the JSON parsing problem in macOS .ips crash reports where two top-level JSON objects are stored sequentially (metadata on line 1, crash details on subsequent lines). The brace-counting approach properly splits and reassembles the crash object for extraction of key debugging information.

## Facts
- Action: write_file to skill_manage tool
- File path: scripts/parse-macos-ips.py in macos-app-crash-debug skill
- Script parses macOS 27 (Tahoe) .ips crash reports with brace-counting algorithm
- Prints crash reason, exception details, and triggered thread stack (up to 18 frames)
- Supports auto-selection of newest .ips file from ~/Library/Logs/DiagnosticReports

## Concepts
- macOS crash report parsing
- JSON multi-object handling
- brace-counting parsing algorithm

## Files
- `scripts/parse-macos-ips.py`

_Importance: 5 · Confidence: 1_
