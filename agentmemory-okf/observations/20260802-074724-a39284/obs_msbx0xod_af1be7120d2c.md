---
type: file_edit
title: Hermes serve backend already running and desktop persisted tiles in Electron storage
description: No new tiles found, looking for localised storage files.
resource: agentmemory://observation/obs_msbx0xod_af1be7120d2c
tags: ["file_edit"]
timestamp: 2026-08-02T14:48:34.425963+00:00
source: agentmemory
session_id: 20260802_074724_a39284
importance: 4
confidence: 0.75
---
# Summary

The Hermes serve backend is already running, but no new tiles were found in Electron storage. Local storage files like hermes-preview(Local Storage) and hermes-embed(LOCAL STORAGe) seem to exist which likely stores persisted data.

## Facts
- Process tui_gateway was using Python3.13 from /opt/homebrew/Caskroom/miniconda/base/bin
- Possibly sensitive info in process output

## Files
- `/Users/davec/Library/Application Support/Hermes/zoom-state.json`
- `/Users/davec/Library/Application Support/Hermes/project-dir.json`
- `/Users/davec/Library/Application Support/Hermes/native-theme.json`
- `/Users/davec/Library/Application Support/Hermes/connection.json`

_Importance: 4 · Confidence: 0.75_
