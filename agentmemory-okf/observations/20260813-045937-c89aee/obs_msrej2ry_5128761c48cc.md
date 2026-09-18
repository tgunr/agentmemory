---
type: file_edit
title: Patch operation failed due to security restrictions
description: No permission to edit Hermes config file.
resource: agentmemory://observation/obs_msrej2ry_5128761c48cc
tags: ["security restrictions", "file_edit"]
timestamp: 2026-08-13T10:55:06.954999+00:00
source: agentmemory
session_id: 20260813_045937_c89aee
importance: 7
confidence: 0.9
---
# Summary

The tool patch operation failed because the agent cannot modify the security-sensitive configuration at the specified path. Instead, consider editing the ~/.hermes/config.yaml file directly or using the 'hermes config' command.

## Facts
- Error message: Refusing to write to Hermes config file: /Users/davec/.hermes/config.yaml

## Concepts
- security restrictions

_Importance: 7 · Confidence: 0.9_
