---
type: CommandRun
title: list LSP servers with info
description: List of shared file list servers with details.
resource: agentmemory://observation/obs_mwbcdtxg_b58d19022ccc
tags: ["shell script", "sfltool", "commandrun"]
timestamp: 2026-11-10T23:49:33.504432+00:00
source: agentmemory
session_id: local-d9eecf8dc21f1eaa804b9b2b773b5f33949f86453b392c3dcb593dda672e9310
importance: 4
confidence: 0.9
---
# Summary

Used the terminal tool to execute a command to list recent servers and list-info with head commands. The output shows a list of shared file list servers with details.

## Facts
- sfltool list 2>&1 | head -20; echo "=== list-info ==="; sfltool list-info 2>&1 | head -10

## Concepts
- shell script
- sfltool

_Importance: 4 · Confidence: 0.9_
