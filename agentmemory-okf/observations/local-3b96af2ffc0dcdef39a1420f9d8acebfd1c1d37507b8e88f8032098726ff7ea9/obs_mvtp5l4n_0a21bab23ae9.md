---
type: file_edit
title: Update Hermes config files
description: Update command allowlist and approvals for each profile
resource: agentmemory://observation/obs_mvtp5l4n_0a21bab23ae9
tags: ["Regular expressions in shell scripting", "file_edit"]
timestamp: 2026-10-29T15:27:12.671915+00:00
source: agentmemory
session_id: local-3b96af2ffc0dcdef39a1420f9d8acebfd1c1d37507b8e88f8032098726ff7ea9
importance: 8
confidence: 0.9
---
# Summary

The tool terminal executed a bash script that updated the command allowlist and approvals for each config file in the ~/.hermes directory. The script used regular expressions to strip out unwanted lines and only kept the ones that matched the allowed commands. The updated files were then echoed to the console.

## Facts
- Output command allowlist and approvals for each config file

## Concepts
- Regular expressions in shell scripting

## Files
- `/Users/davec/.hermes/config.yaml`
- `/Users/davec/.hermes/profiles/ai/config.yaml`
- `/Users/davec/.hermes/profiles/cc/config.yaml`
- `/Users/davec/.hermes/profiles/default/config.yaml`
- `/Users/davec/.hermes/profiles/designer/config.yaml`
- `/Users/davec/.hermes/profiles/ollama/config.yaml`
- `/Users/davec/.hermes/profiles/systems/config.yaml`
- `/Users/davec/.hermes/profiles/worker/config.yaml`

_Importance: 8 · Confidence: 0.9_
