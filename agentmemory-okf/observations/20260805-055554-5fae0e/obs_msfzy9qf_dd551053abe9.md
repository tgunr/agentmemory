---
type: file_edit
title: Maintenance Update to Hermes Tool
description: No impact on workflow currently.
resource: agentmemory://observation/obs_msfzy9qf_dd551053abe9
tags: ["hermes-tool-config", "update-hermes-repository", "file_edit"]
timestamp: 2026-08-05T11:21:33.633178+00:00
source: agentmemory
session_id: 20260805_055554_5fae0e
importance: 5
confidence: 0.9
---
# Summary

Two operations were executed, with the `remove` operation deleting the erroneous command causing issues, and the `replace` operation updating key settings in the Hermes configuration.

## Facts
- The `hermes update` command was applied in two different ways: once in the agent's repository (`~/.hermes/hermes-agent`) and a separate CLI shim, which did touch the dashboard virtual environment (venv) due to a SyntaxError when restarting the gateway.

## Concepts
- hermes-tool-config
- update-hermes-repository

## Files
- `/Users/davec/hermes-webui`

_Importance: 5 · Confidence: 0.9_
