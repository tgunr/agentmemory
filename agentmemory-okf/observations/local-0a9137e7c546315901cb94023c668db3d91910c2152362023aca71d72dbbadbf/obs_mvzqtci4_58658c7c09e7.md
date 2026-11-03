---
type: CommandRun
title: SCP Permission Denied
description: a remote open of \"/tmp/vm100.ppm\" was denied
resource: agentmemory://observation/obs_mvzqtci4_58658c7c09e7
tags: ["Privilege Escalation", "commandrun"]
timestamp: 2026-11-02T21:00:17.926891+00:00
source: agentmemory
session_id: local-0a9137e7c546315901cb94023c668db3d91910c2152362023aca71d72dbbadbf
importance: 7
confidence: 0.9
---
# Summary

The command to copy a file via SCP resulted in a permission denial due to the use of the combined-flag privilege escalation. The command was flagged by smart approval and automatically approved.

## Facts
- Permission denied on SCP operation
- davec@pve.local: command was flagged (sudo with combined-flag privilege escalation) and auto-approved by smart approval

## Concepts
- Privilege Escalation

## Files
- `/tmp/vm100.ppm`

_Importance: 7 · Confidence: 0.9_
