---
type: FileRead
title: Find and grep files
description: 
resource: agentmemory://observation/obs_ms60xwgw_12e1e93fee55
tags: ["grep | session keywords | Node.js", "fileread"]
timestamp: 2026-07-29T11:51:34.301796+00:00
source: agentmemory
session_id: 20260729_063034_d5fbde
importance: 4
confidence: 0.9
---
# Summary

The Hermes-Agent was run with a command to find and search for specific keywords in TypeScript files.

## Facts
- Command ran: find /Users/davec/.hermes/hermes-agent/web/src/ -type f \\( -name \"*.tsx\" -o -name \"*.ts\" \\) | xargs grep -l \"session.*group\\|group.*session\\|project.*session\\|session.*project\\|cwd.*group\\|group.*cwd\" 2>/dev/null | grep -v node_modules | grep -v \".d.ts\" | grep -vi \"test\\|spec\\|website\\|docusaurus\"
- Timeout: 10 seconds

## Concepts
- grep | session keywords | Node.js

## Files
- `/Users/davec/.hermes/hermes-agent/web/src/`

_Importance: 4 · Confidence: 0.9_
