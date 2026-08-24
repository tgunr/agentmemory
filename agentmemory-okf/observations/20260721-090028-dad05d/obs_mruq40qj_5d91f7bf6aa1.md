---
type: FileRead
title: Audit Hermes global/default profile configuration against known recommended defaults.
description: Populates values with default configurations using Yaml safe_load.
resource: agentmemory://observation/obs_mruq40qj_5d91f7bf6aa1
tags: ["Yaml configuration", "Agent configurations", "Audit profiles", "fileread"]
timestamp: 2026-07-21T14:02:56.052435+00:00
source: agentmemory
session_id: 20260721_090028_dad05d
importance: 7
confidence: 0.9
---
# Summary

The tool calls post_tool_call Hook with a read_file action on the provided script to populate values defined in RECOMMENDED_DEFAULTS. 
    These defaults are then used with various other functions.

## Facts
- Defined RECOMMENDED_DEFAULTS dictionary for audit configuration parameters
- Loaded default `config.yaml` file contents into cfg dict using yaml.safe_load

## Concepts
- Yaml configuration
- Agent configurations
- Audit profiles

## Files
- `/Users/davec/.hermes/scripts/audit_profile_defaults.py`

_Importance: 7 · Confidence: 0.9_
