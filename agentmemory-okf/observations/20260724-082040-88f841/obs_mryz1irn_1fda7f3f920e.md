---
type: file_edit
title: Error Running Hermes Command
description: No active Hermes profile found.
resource: agentmemory://observation/obs_mryz1irn_1fda7f3f920e
tags: ["HERMES_HOME", "active-profile.json", "gateway environment variable usage", "file_edit"]
timestamp: 2026-07-24T13:24:00.678209+00:00
source: agentmemory
session_id: 20260724_082040_88f841
importance: 7
confidence: 0.9
---
# Summary

The tool executed but encountered an error: no active profile found due to an invalid gateway environment. The command provided HERMES variables, and although the 'ls' command showed its active workspace directory, the script could not locate it.

## Facts
- Failed to run a command that outputs HERMES variables
- Command output contains reference to the missing active profile JSON file

## Concepts
- HERMES_HOME
- active-profile.json
- gateway environment variable usage

## Files
- `/Users/davec/.hermes/active-profile.json`

_Importance: 7 · Confidence: 0.9_
