---
type: FileRead
title: Terminal output
description: Lookup pve.local and search for "docker pct"
resource: agentmemory://observation/obs_mvxn6jp2_3e40de6a98cf
tags: ["SSH", "fileread"]
timestamp: 2026-11-01T09:43:02.963723+00:00
source: agentmemory
session_id: local-0d7f2c764086a9aea06abb3f72b0b99f17f46f390e6fd02f93edf51349b195a2
importance: 5
confidence: 1
---
# Summary

A terminal command was executed, and its output was examined for specific information.

## Facts
- Tool: terminal
- Command: timeout 12 ssh -o BatchMode=yes -o ConnectTimeout=8 pve.local 'hostname; which docker pct 2>/dev/null; ls /' 2>&1 | head -20
- Output: pve\ndocker not found\n/usr/sbin/pct\nalpha\nbeta\nbin\nboot\ndata\ndev\ndpool\netc\nhome\nlib\nlib32\nlib64\nmedia\nmnt\nnix\nopool\nopt

## Concepts
- SSH

_Importance: 5 · Confidence: 1_
