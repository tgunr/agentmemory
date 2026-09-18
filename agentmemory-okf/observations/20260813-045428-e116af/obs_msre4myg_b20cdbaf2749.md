---
type: file_edit
title: Determine if a local docmost directory exists and its status
description: 
resource: agentmemory://observation/obs_msre4myg_b20cdbaf2749
tags: ["file existence checks, dir listing and human-readable size output", "bash scripting and terminal tool usage", "file_edit"]
timestamp: 2026-08-13T10:43:53.266964+00:00
source: agentmemory
session_id: 20260813_045428_e116af
importance: 5
confidence: 1
---
# Summary

The script runs the specified shell commands to investigate if a local docmost directory exists and what is their status.

## Facts
- The script searches for the following paths: /Volumes/*, ~/AI/Servers/MCP/docmost-mcp
- (directory not found) /Users/davec/AI/Servers/MCP/docmost-mcp does not exist
- (directory listed with size information) /Volumes/* and ~/docmost* directories have been printed to console

## Concepts
- file existence checks, dir listing and human-readable size output
- bash scripting and terminal tool usage

## Files
- `/Volumes/*
    <file>/Users/davec.AI/Servers/MCP/docmost-mcp
    <file>/Volumes/*/AI/Servers/MCP`

_Importance: 5 · Confidence: 1_
