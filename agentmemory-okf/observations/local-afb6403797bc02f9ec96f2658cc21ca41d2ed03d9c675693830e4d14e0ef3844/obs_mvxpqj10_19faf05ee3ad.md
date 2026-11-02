---
type: file_edit
title: Error loading Python script
description: No module named 'ruamel'
resource: agentmemory://observation/obs_mvxpqj10_19faf05ee3ad
tags: ["Python import error</question>  
    <concept>hu", "file_edit"]
timestamp: 2026-11-01T10:54:34.448443+00:00
source: agentmemory
session_id: local-afb6403797bc02f9ec96f2658cc21ca41d2ed03d9c675693830e4d14e0ef3844
importance: 8
confidence: 1
---
# Summary

Importing hermes_yaml library failed due to missing ruamel module, resulting in Python script execution failure.

## Facts
- import hermes_yaml as yaml
- from ruamel.yaml import YAML
- ModuleNotFoundError: No module named 'ruamel'
- exit_code: 0
- error: null

## Concepts
- Python import error</question>  
    <concept>hu

## Files
- `/Users/davec/.hermes/hermes-agent/utils.py`
- `/Users/davec/.hermes/hermes-agent/hermes_yaml.py`

_Importance: 8 · Confidence: 1_
