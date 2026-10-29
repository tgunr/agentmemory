---
type: FileRead
title: MCP server registration check
description: Checking Hermes config for MCP servers
resource: agentmemory://observation/obs_mvqj6dh3_883b72a0c395
tags: ["MCP (Multi-Cloud Platform)", "Hermes", "YAML config files", "fileread"]
timestamp: 2026-10-27T10:16:33.203171+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 8
confidence: 0.9
---
# Summary

The script checked if there are any MCP servers registered in Hermes config and the results are as expected. It ran the `python3` command with a heredoc script to parse the YAML config files and extract MCP server information.

## Facts
- Checking if there are any MCP servers registered in Hermes config

## Concepts
- MCP (Multi-Cloud Platform)
- Hermes
- YAML config files

## Files
- `/Users/davec/.hermes/config.yaml`
- `/Users/davec/.hermes/profiles/systems/config.yaml`

_Importance: 8 · Confidence: 0.9_
