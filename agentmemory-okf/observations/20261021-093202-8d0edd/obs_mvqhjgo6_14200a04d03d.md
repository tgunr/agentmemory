---
type: file_edit
title: Nextcloud database schema extracted
description: Querying MySQL to retrieve `nextcloud.oc_mcp_policy_state` and `nextcloud.oc_mcp_policy_events` schemas
resource: agentmemory://observation/obs_mvqhjgo6_14200a04d03d
tags: ["MySQL schema inspection", "Policy state and events", "file_edit"]
timestamp: 2026-10-27T09:30:44.641870+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 7
confidence: 1
---
# Summary

The tool call to Nextcloud's database retrieved the schemas for the policy state and events, providing insight into how the controller extracts revisions and how grants are managed, making it crucial for understanding the policy structure.

## Facts
- Revision accessor functions found in lib/Controller/GrantsController.php.
- Poll parameters and global enablement available in grant policy.
- Database schema structure for policy state and events.

## Concepts
- MySQL schema inspection
- Policy state and events

_Importance: 7 · Confidence: 1_
