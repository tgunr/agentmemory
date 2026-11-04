---
type: file_edit
title: Executing MySQL Command
description: Login to remote server via SSH
resource: agentmemory://observation/obs_mw0q6bzt_17ccdfc3afd1
tags: ["MySQL", "file_edit"]
timestamp: 2026-11-03T13:30:10.356366+00:00
source: agentmemory
session_id: local-6e9812324396b2091d17e9810b88c985c73260ca4c7357481846e1475ddcc7c9
importance: 5
confidence: 0.9
---
# Summary

Executed a MySQL command via SSH terminal to retrieve table structure information.

## Facts
- Tool used: terminal
- Command executed: mysql -N asterisk -e \"describe announcement\" | cut -f1,2 | tr \"\\n\" \" \"'

## Concepts
- MySQL

_Importance: 5 · Confidence: 0.9_
