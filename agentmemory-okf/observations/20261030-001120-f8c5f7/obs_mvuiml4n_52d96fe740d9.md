---
type: file_edit
title: hermes_cli skills config loading
description: loading skills config from config.yaml
resource: agentmemory://observation/obs_mvuiml4n_52d96fe740d9
tags: ["config loading", "file_edit"]
timestamp: 2026-10-30T05:12:14.706108+00:00
source: agentmemory
session_id: 20261030_001120_f8c5f7
importance: 5
confidence: 0.9
---
# Summary

loading skills config from config.yaml without any issues

## Facts
- using hermes_cli.config.load_config_readonly
- hermes_cli.config.load_config_readonly returns an empty dictionary

## Concepts
- config loading

## Files
- `agent/skill_preprocessing.py`
- `hermes_cli/sessions_cmd.py`
- `config.yaml`

_Importance: 5 · Confidence: 0.9_
