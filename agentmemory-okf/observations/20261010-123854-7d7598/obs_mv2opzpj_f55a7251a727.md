---
type: file_edit
title: Unzip and parse PrusaSlicer project JSON
description: PrusaSlicer project configuration
resource: agentmemory://observation/obs_mv2opzpj_f55a7251a727
tags: ["PrusaSlicer configuration", "file_edit"]
timestamp: 2026-10-10T17:45:18.338656+00:00
source: agentmemory
session_id: 20261010_123854_7d7598
importance: 8
confidence: 0.9
---
# Summary

Unzipped a PrusaSlicer project JSON file and extracted its configuration details.

## Facts
- Command used: python3 -c "import json; d=json.load(open('/tmp/ps_alpha12/PrusaSlicer3_project.json')); print(list(d.keys())); print(str(d)[:4000])"

## Concepts
- PrusaSlicer configuration

## Files
- `/Users/davec/Library/Application Support/PrusaSlicer3-dev/backup_projects/em54fk_mlccx8_unnamed_project.3mf`

_Importance: 8 · Confidence: 0.9_
