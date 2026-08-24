---
type: file_edit
title: Search for project-related files in terminal
description: find and grep command with xargs
resource: agentmemory://observation/obs_ms5z4tlp_ebf6b911eaef
tags: ["file_edit"]
timestamp: 2026-07-29T11:00:57.946917+00:00
source: agentmemory
session_id: 20260728_172854_00df48
importance: 4
confidence: 0.75
---
# Summary

The tool was used to find project-related files in the Hermes.app application and grep for specific keywords.

## Facts
- Command: find /Applications/Hermes.app -type f \\( -name \"*.js\" -o -name \"*.ts\" -o -name \"*.json\" -o -name \"*.yaml\" \\) 2>/dev/null | xargs grep -l \"project.*list\\|projects.*db\\|sidebar\" 2>/dev/null | head -10
- window timeout: 15 seconds, working directory: /Users/davec/Projects/VoidBreath

## Files
- `/Applications/Hermes.app`

_Importance: 4 · Confidence: 0.75_
