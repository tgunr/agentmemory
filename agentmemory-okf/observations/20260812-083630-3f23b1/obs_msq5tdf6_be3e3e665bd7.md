---
type: CommandRun
title: Blocklist Command Error
description: Command blocked by hermes, save to cache for manual review and retry
resource: agentmemory://observation/obs_msq5tdf6_be3e3e665bd7
tags: ["pyenv", "commandrun"]
timestamp: 2026-08-12T14:03:24.588747+00:00
source: agentmemory
session_id: 20260812_083630_3f23b1
importance: 9
confidence: 0.9
---
# Summary

The command was blocked by hermes due to limit or malformed payload, saved to cache for manual review and retry.

## Facts
- Command: grep -n \"precmd_functions\\|pyenv virtualenv\\|_pyenv_virtualenv_hook\\|eval \\\"\\$(pyenv\" /Users/davec/.bashrc"
- Output: No output, exit_code: -1

## Concepts
- pyenv

## Files
- `/Users/davec/.hermes/cache/blocked-scripts/blocked-1786543404-8b86f7f3.sh`

_Importance: 9 · Confidence: 0.9_
