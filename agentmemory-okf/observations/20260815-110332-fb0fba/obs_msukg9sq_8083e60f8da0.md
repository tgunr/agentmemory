---
type: file_edit
title: User environment variable exposed
description: Pwd command outputs home directory
resource: agentmemory://observation/obs_msukg9sq_8083e60f8da0
tags: ["alert desertsion", "file_edit"]
timestamp: 2026-08-15T16:04:12.312120+00:00
source: agentmemory
session_id: 20260815_110332_fb0fba
importance: 5
confidence: 0.9
---
# Summary

Thepwd command was run in the terminal, which accidentally exposed the user's HOME environment variable.

## Facts
- user input: pwd && echo "<br>'HOME=$HOME'</br>"
- output: "<br>/Users/davec<br>HOM</br>=/Users/davec"

## Concepts
- alert desertsion

## Files
- `/Users/davec`

_Importance: 5 · Confidence: 0.9_
