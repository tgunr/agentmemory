---
type: file_edit
title: Patch failed on config file
description: No match found for old_string in the file
resource: agentmemory://observation/obs_msaxrx59_47012fde63be
tags: ["YAML configuration", "file_edit"]
timestamp: 2026-08-01T22:21:47.273344+00:00
source: agentmemory
session_id: 20260801_110155_a90f10
importance: 7
confidence: 1
---
# Summary

The patch operation failed because the old string content was not found in the file. The file is a config YAML located at /Users/davec/.hermes/profiles/default/config.yaml.

## Facts
- New tool: patch, mode: replace
- New string content:
```yaml
  apple-fm:
    api: http://localhost:8001/v1
    api_key: not-needed
    default_model: system
    discover_models: true
    name: Apple FM
    models:
      - system
    context_length: 65536
    terminal: """
```
- Old string content:
```yaml
  apple-fm:
    api: http://localhost:8001/v1
    api_key: not-needed
    default_model: system
    discover_models: true
    name: Apple FM
    models:
      - system
    terminal:
```
- Path to edited file:/Users/davec/.hermes/profiles/default/config.yaml

## Concepts
- YAML configuration

## Files
- `/Users/davec/.hermes/profiles/default/config.yaml`

_Importance: 7 · Confidence: 1_
