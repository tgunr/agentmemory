---
type: file_edit
title: Failed tests in src/__tests__/projectsSlashCommand.test.ts
description: 
resource: agentmemory://observation/obs_mvwcrzix_d6c09b4a9775
tags: ["session busy error", "file_edit"]
timestamp: 2026-10-31T12:04:01.298555+00:00
source: agentmemory
session_id: local-afb6403797bc02f9ec96f2658cc21ca41d2ed03d9c675693830e4d14e0ef3844
importance: 7
confidence: 0.9
---
# Summary

The Hermes agent's TUI UI executed a command in the ui-tui environment, but multiple tests failed due to a "session busy" error.

## Facts
- Command executed successfully
- Tests failed with error message containing "session busy"

## Concepts
- session busy error

## Files
- `/Users/davec/.hermes/hermes-agent/ui-tui/src/__tests__/projectsSlashCommand.test.ts`

_Importance: 7 · Confidence: 0.9_
