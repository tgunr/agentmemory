---
type: FileRead
title: Hermes project list sidebar files
description: No sidebar in desktop GUI projects list but entry exists in hermes/projects.db
resource: agentmemory://observation/obs_ms5z7eoz_0ac76d5f4e9d
tags: ["Hermes project list", "fileread"]
timestamp: 2026-07-29T11:02:58.592730+00:00
source: agentmemory
session_id: 20260728_172854_00df48
importance: 8
confidence: 0.9
---
# Summary

User investigates issue with Desktop GUI sidebar and finds entry in hermes/projects.db but it's not displayed accordingly. They run a `find` command to search for relevant files.

## Facts
- The user is unsure why the Desktop GUI doesn't display their project list in the sidebar
- The project IS visible in the project list now, according to the command output

## Concepts
- Hermes project list

## Files
- `/Users/davec/.hermes/hermes-agent/website/sidebars.ts`

_Importance: 8 · Confidence: 0.9_
