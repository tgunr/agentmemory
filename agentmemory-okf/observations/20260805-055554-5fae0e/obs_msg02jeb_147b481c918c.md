---
type: file_write
title: Skinny Hermes terminal guard guide
description: Guarding restart scripts with shell checks
resource: agentmemory://observation/obs_msg02jeb_147b481c918c
tags: [""asyncio" hooks", "terminal guards", "Cron guard issues", "file_write"]
timestamp: 2026-08-05T11:24:52.785205+00:00
source: agentmemory
session_id: 20260805_055554_5fae0e
importance: 6
confidence: 0.9
---
# Summary

This observation was triggered by a file read error in skill manage, a utility for Hermes tasks. It highlights a false positive in the terminal guard, which was fixed using a workaround: using search_files/read_file for readonly checks and verifying script safety outside of gateway processes. The issue occurs when certain paths or tokens trigger the guard's reference scanner mistakenly.

## Facts
- "asyncio" and "launchctl bootout" are mis-fire false positives
- Use search_files/read_file for readonly checks and verify script safety outside the gateway

## Concepts
- "asyncio" hooks
- terminal guards
- Cron guard issues

## Files
- `/Users/davec/.hermes/skills/devops/reverse-proxy-debug/references/hermes-terminal-guard.md`

_Importance: 6 · Confidence: 0.9_
