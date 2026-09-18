---
type: file_edit
title: Update webui venv with hermes-agent
description: Install new version and import hermes
resource: agentmemory://observation/obs_msezigu5_50ec28eb88df
tags: ["editable-install", "file_edit"]
timestamp: 2026-08-04T18:21:30.169751+00:00
source: agentmemory
session_id: 209ee33e5682
importance: 7
confidence: 0.9
---
# Summary

The tool terminal was used to update the webui venv by installing a new version of hermes-agent and importing it. The process included uninstalling the previous stale version, then downloading and installing the new version from the local GIT checkout.

## Facts
- Webui venv imports hermes from /Users/davec/.hermes/hermes-agent/__init__.py
- VENV=/Users/davec/.venv; pip uninstall --python $VENV/bin/python3 hermes-agent 2>&1 | tail -5

## Concepts
- editable-install

## Files
- `/Users/davec/.venv/lib/python3.13/site-packages/hermes_cli/__init__.py`

_Importance: 7 · Confidence: 0.9_
