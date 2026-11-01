---
type: file_edit
title: Detailed Output of sync-external.sh
description: A bash script used to sync Hermes knowledge with external repositories
resource: agentmemory://observation/obs_mvwk6d5b_21eb7f779d28
tags: ["repo synchronization", "command-line scripting", "file_edit"]
timestamp: 2026-10-31T15:31:09.451418+00:00
source: agentmemory
session_id: local-f2e524bd5d3cfd4334c418b91ffebb661855b4cf3e42d35c11951a4633bce792
importance: 8
confidence: 0.9
---
# Summary

The script syncs shared slash commands from the hermes-knowledge repo into the local Hermes config, and then pushes those changes to the repo after updating the shared commands file.

## Facts
- Path to shared slash commands YAML: ~/sources/hermes-knowledge/config/quick-commands.yaml
- Path to hermes configuration YAML: ~/sources/hermes-knowledge/../.hermes/config.yaml

## Concepts
- repo synchronization
- command-line scripting

## Files
- `/home/davec/sources/hermes-knowledge/config/quick-commands.yaml`
- `/home/davec/.hermes/config.yaml`

_Importance: 8 · Confidence: 0.9_
