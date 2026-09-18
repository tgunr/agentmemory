---
type: FileRead
title: Comparing Homebrew kilo binary versions
description: No difference found in local bin versus system path
resource: agentmemory://observation/obs_mrywzh9n_c32b8d8a2e8d
tags: ["file versioning", "austin", "fileread"]
timestamp: 2026-07-24T12:26:26.214021+00:00
source: agentmemory
session_id: 20260724_062931_d84b69
importance: 7
confidence: 0.9
---
# Summary

The kilo tool has two versions, one in system directories (homebrew) and another in the user's local bin folder. Their paths differ, but both point to the same file.

## Facts
- /opt/homebrew/lib/node_modules/@kilocode/cli/bin/kilo exists on PATH (.local/bin)
- /Users/davec/.local/lib/node_modules/@kilocode/cli/bin/kilo path differs from homebrew binary

## Concepts
- file versioning
- austin

## Files
- `/opt/homebrew/lib/node_modules/@kilocode/cli/bin/kilo`
- `/Users/davec/.local/lib/node_modules/@kilocode/cli/bin/kilo`

_Importance: 7 · Confidence: 0.9_
