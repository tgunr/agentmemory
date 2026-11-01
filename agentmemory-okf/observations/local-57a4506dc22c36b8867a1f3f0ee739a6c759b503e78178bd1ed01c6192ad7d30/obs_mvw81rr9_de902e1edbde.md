---
type: file_edit
title: Find and print kilo model versions
description: Used command from Hermes agent
resource: agentmemory://observation/obs_mvw81rr9_de902e1edbde
tags: ["model versioning in kilo", "file_edit"]
timestamp: 2026-10-31T09:51:39.714809+00:00
source: agentmemory
session_id: local-57a4506dc22c36b8867a1f3f0ee739a6c759b503e78178bd1ed01c6192ad7d30
importance: 5
confidence: 0.9
---
# Summary

The agent executed a command to find the kilo model versions in the config file and printed the relevant output.

## Facts
- Last modified: 2026-10-31T09:51:39.714809+00:00
- Command executed: 'cd ~/.hermes/hermes-agent && ls ~/.hermes/cache/scratch 2>/dev/null | head; grep -rn "kilo" ~/.hermes/config.yaml | grep -i "model:\" | head -30'

## Concepts
- model versioning in kilo

## Files
- `/Users/davec/.hermes/config.yaml`

_Importance: 5 · Confidence: 0.9_
