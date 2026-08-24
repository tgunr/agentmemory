---
type: file_write
title: Repair and wire Kilo Code sessions into AgentMemory
description: 
resource: agentmemory://observation/obs_mspd428p_2cfab3d02ef2
tags: ["Hook script relocation and inconsistencies", "file_write"]
timestamp: 2026-08-12T00:39:54.452982+00:00
source: agentmemory
session_id: 20260811_193703_9f57d0
importance: 8
confidence: 0.9
---
# Summary

Please execute the following shell script to repair and wire Kilo Code sessions into AgentMemory:
```
ls -ld /Volumes/AI/agentmemory-kilo-hooks
cat \"$HOME/Library/Application Support/Code/User/globalStorage/kilocode.kilo-code/settings/mcp_settings.json\"
SECRET=$(grep '^AGENTMEMORY_SECRET=' ~/.agentmemory/.env | tail -1 | cut -d= -f2-)
curl -s -X POST http://127.0.0.1:3111/agentmemory/search -H "Authorization: Bearer $SECRET" 
  -H "Content-Type: application/json" -d '{\"query\":\"source:kilo\",\"limit\":5}'
pgrep -fl 'dist/index.mjs' || echo "AM REST worker NOT RUNNING"
```
This script performs the following verifications and reassignments:
1. Re-point absolute references to the new hook path.
2. Register `agentmemory` MCP server in kilo settings, verifying wrapper access.
3. Restart Kilo or reload VS Code and start a Kilo session; check for hits in AM.

## Facts
- Kilo sessions no longer roll into AM due to hook script relocation, 
            MCP settings and kilo code setting inconsistencies.

## Concepts
- Hook script relocation and inconsistencies

## Files
- `/Volumes/AI/agentmemory-kilo-hooks/`

_Importance: 8 · Confidence: 0.9_
