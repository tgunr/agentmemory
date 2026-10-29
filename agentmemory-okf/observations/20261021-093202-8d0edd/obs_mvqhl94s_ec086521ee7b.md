---
type: file_edit
title: NC Nextcloud Apps MCP Policy State Mapper
description: SSH timeout detection
resource: agentmemory://observation/obs_mvqhl94s_ec086521ee7b
tags: ["Nextcloud Apps MCP", "file_edit"]
timestamp: 2026-10-27T09:32:08.183102+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 7
confidence: 0.9
---
# Summary

The tool call to NC Nextcloud Apps MCP Policy State Mapper involved an SSH timeout detection, where the tool executed a command with a timeout of 300ms and checked for the presence of specific classes (PolicyStateMapper, PolicyWriter, GrantPolicy) and imported necessary modules (GrantsController, PolicyStateMapper, GrantPolicy). The execution resulted in an exit code of 0 with no errors.

## Facts
- Total timeout: 300ms
- Minimum SSH timeout: 15ms

## Concepts
- Nextcloud Apps MCP

## Files
- `/var/www/nextcloud/apps/mcp/lib/Db/PolicyStateMapper.php`

_Importance: 7 · Confidence: 0.9_
