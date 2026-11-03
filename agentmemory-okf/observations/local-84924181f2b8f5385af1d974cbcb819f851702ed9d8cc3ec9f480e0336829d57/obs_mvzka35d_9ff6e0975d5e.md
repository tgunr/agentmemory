---
type: file_edit
title: Check user credentials
description: Running a command on a remote Linux system
resource: agentmemory://observation/obs_mvzka35d_9ff6e0975d5e
tags: ["SSH", "Linux", "LX Brew", "file_edit"]
timestamp: 2026-11-02T17:57:21.643949+00:00
source: agentmemory
session_id: local-84924181f2b8f5385af1d974cbcb819f851702ed9d8cc3ec9f480e0336829d57
importance: 6
confidence: 0.9
---
# Summary

In a terminal session on a remote Linux system, we executed a command to verify user credentials.

## Facts
- Command executed: ssh
- Command parameters: pve.root, 'stat -c \"%U\" /home/linuxbrew/.linuxbrew; id -un; getent passwd linuxbrew'

## Concepts
- SSH
- Linux
- LX Brew

_Importance: 6 · Confidence: 0.9_
