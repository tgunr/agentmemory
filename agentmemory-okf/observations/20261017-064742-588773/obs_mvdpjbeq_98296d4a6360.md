---
type: file_edit
title: Syncoid help output
description: Querying for specific options
resource: agentmemory://observation/obs_mvdpjbeq_98296d4a6360
tags: ["Syncoid options", "file_edit"]
timestamp: 2026-10-18T10:53:34.464155+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 9
confidence: 0.9
---
# Summary

The command "syncoid --help 2>&1 | grep -iA4 \"exclude\\|skip-parent\\|recursive\" | head -40" was run to retrieve specific options from the Syncoid help output.

## Facts
- Command executed: ssh pve.root 'syncoid --help 2>&1 | grep -iA4 \"exclude\\|skip-parent\\|recursive\" | head -40'

## Concepts
- Syncoid options

_Importance: 9 · Confidence: 0.9_
