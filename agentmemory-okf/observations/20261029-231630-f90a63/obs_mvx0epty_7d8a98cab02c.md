---
type: file_edit
title: Terminial
description: Listening ports
resource: agentmemory://observation/obs_mvx0epty_7d8a98cab02c
tags: ["listening ports", "file_edit"]
timestamp: 2026-10-31T23:05:32.993298+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 7
confidence: 0.9
---
# Summary

The terminal tool was used to list listening ports.

## Facts
- command: ps -Ao pid,command | grep -E \"hermes Cli.main\" | grep -v grep | cut -c1-130; echo \"=== listen posts\":
- output: \"=== listen posts:\nBetterTou 127.0.0.1:64832\nBetterTou 127.0.0.1:8002\nControlCe *:5000\nControlCe *:7000\nDropshare 127.0.0.1:34344\nDropshare [::1]:34344\nGoogle [::1]:7679\nKilo 127.0.0.1:50155\nPopClip *:58906\nPython 127.0.0.1:22222\"\n

## Concepts
- listening ports

_Importance: 7 · Confidence: 0.9_
