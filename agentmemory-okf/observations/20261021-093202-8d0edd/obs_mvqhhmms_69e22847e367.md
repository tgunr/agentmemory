---
type: file_edit
title: Timeout and MCP auth
description: An error occurred when trying to verify MCP endpoints
resource: agentmemory://observation/obs_mvqhhmms_69e22847e367
tags: ["MCP authentication", "file_edit"]
timestamp: 2026-10-27T09:29:19.053002+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 7
confidence: 0.9
---
# Summary

The code executed a command to verify MCP endpoints using a timeout and Curl. The verification failed due to authentication issues.

## Facts
- Command used to verify MCP endpoints: timeout 360 ssh -o ConnectTimeout=15 pve.root 'set +e\necho "=== /apps/mcp/ unauthenticated ==="'; curl -sk -o /dev/null -w \"%{http_code} -> %{redirect_url}\\n\" --max-time 20 https://cloud.polymicro.net/apps/mcp/\necho "=== likely MCP endpoints ==="\n
- Exit code: 0

## Concepts
- MCP authentication

## Files
- `/var/www/nextcloud/nextcloud.log`

_Importance: 7 · Confidence: 0.9_
