---
type: file_edit
title: lsof output parsing in terminal
description: No notable context provided
resource: agentmemory://observation/obs_ms7e3rb5_85f79f2478ee
tags: ["Lsof", "Linux networking", "file_edit"]
timestamp: 2026-07-30T10:47:48.727935+00:00
source: agentmemory
session_id: 20260730_052105_b2cb06
importance: 6
confidence: 1
---
# Summary

The lsof command was executed in the terminal to retrieve network connection details, and a summary of the output is provided.

## Facts
- Tool: terminal, Command: lsof -Pan -p 48947 -iTCP 2>/dev/null | head -20
- Fd: python3.1 (PID: 48947)
- Network connections: TCP, IPv4

## Concepts
- Lsof
- Linux networking

_Importance: 6 · Confidence: 1_
