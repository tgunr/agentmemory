---
type: file_edit
title: Output of `timeout 100 ssh pve.root 'bash -s'
description: Command to extract host information from PVE root
resource: agentmemory://observation/obs_mvtngbju_e998e6a908e2
tags: ["shell scripting", "mount table", "file_edit"]
timestamp: 2026-10-29T14:39:34.259434+00:00
source: agentmemory
session_id: local-acc62f81c7e21069368327adf6766769cd20d725b0c6fabd982c9c983dca5531
importance: 5
confidence: 0.9
---
# Summary

The script used a bash one-liner to extract the host information from the PVE root user.
    The output is a sorted list of mounted filesystems.

## Facts
- Tool: terminal
- Command: timeout 100 ssh pve.root 'bash -s'

## Concepts
- shell scripting
- mount table

## Files
- `/proc/[0-9]*/mountinfo`
- `/proc/$p/ns/mnt`
- `/proc/$p/cmdline`

_Importance: 5 · Confidence: 0.9_
