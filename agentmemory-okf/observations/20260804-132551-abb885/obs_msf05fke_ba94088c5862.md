---
type: CommandRun
title: TUI backend spawn command analysis
description: Search for profile handling in ui-tui dist
resource: agentmemory://observation/obs_msf05fke_ba94088c5862
tags: ["React symbols", "commandrun"]
timestamp: 2026-08-04T18:39:21.612240+00:00
source: agentmemory
session_id: 20260804_132551_abb885
importance: 5
confidence: 0.9
---
# Summary

The terminal tool executed a command to search for profile handling in the ui-tui dist directory. The output included symbols and log entries from a JavaScript file.

## Facts
- The command executed was 'echo \"=== TUI backend spawn: does it read -p or active profile? ===\"; ...;
- The grep command found 3 matches in the .hermes-agent/ui-tui/dist entry.js file.

## Concepts
- React symbols

## Files
- `/Users/davec/.hermes/hermes-agent/ui-tui/dist/entry.js`

_Importance: 5 · Confidence: 0.9_
