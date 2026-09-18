---
type: file_edit
title: Failed to parse JSONRPC message from server using mcp library
description: No solution found for the error in the terminal output
resource: agentmemory://observation/obs_msuibf45_c51c88a20384
tags: ["mcp library issue", "file_edit"]
timestamp: 2026-08-15T15:04:26.688237+00:00
source: agentmemory
session_id: 20260815_100130_c7b7e2
importance: 7
confidence: 0.9
---
# Summary

Due to the high error rate in parsing JSONRPC messages, it is unclear which server failed.

## Facts
- The command used was "echo ...; awk ... | grep -aiE \"mcp|connection|closed|parked|TaskGroup|Failed to parse|initial connection|10:00\"

## Concepts
- mcp library issue

_Importance: 7 · Confidence: 0.9_
