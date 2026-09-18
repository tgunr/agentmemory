---
type: file_edit
title: [Script Injection Vulnerability Detection]
description: The terminal command injected malicious code into the Hermes agent.
resource: agentmemory://observation/obs_mrump4ec_302b66b55626
tags: ["Script Injection Vulnerability Detection", "file_edit"]
timestamp: 2026-07-21T12:27:22.104325+00:00
source: agentmemory
session_id: 20260721_065755_a95130
importance: 6
confidence: 0.9
---
# Summary

The user employed an unorthodox approach, injecting malicious Python script into the agent via the terminal command.

## Facts
- Used `sed` to execute user-defined Python code in a Hermes agent
- a time delay and output capture were used to track the code execution

## Concepts
- Script Injection Vulnerability Detection

## Files
- `/Users/davec/.hermes/hermes-agent/cli.py`

_Importance: 6 · Confidence: 0.9_
