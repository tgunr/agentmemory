---
type: file_edit
title: Nextcloud MCP Authorization Validator
description: Validation of authorization request and check against administrator decisions
resource: agentmemory://observation/obs_mvxna2pd_5de912514281
tags: ["OAUTH", "AuthorisationValidator", "GrantScopes", "file_edit"]
timestamp: 2026-11-01T09:45:47.567144+00:00
source: agentmemory
session_id: local-0d7f2c764086a9aea06abb3f72b0b99f17f46f390e6fd02f93edf51349b195a2
importance: 7
confidence: 0.9
---
# Summary

Validation of authorization request and check against administrator decisions

## Facts
- Command executed was 'timeout 40 ssh -o BatchMode=yes pve.local 'sudo -n grep -rln \"class CustomClient\" /var/www/nextcloud/apps/mcp/lib; echo \"=== validator ===\"; sudo -n cat /var/www/nextcloud/apps/mcp/lib/OAuth/AuthorizationValidator.php | head -160' 2>&1 | head -180'

## Concepts
- OAUTH
- AuthorisationValidator
- GrantScopes

## Files
- `/var/www/nextcloud/apps/mcp/lib/OAuth/CustomClient.php`

_Importance: 7 · Confidence: 0.9_
