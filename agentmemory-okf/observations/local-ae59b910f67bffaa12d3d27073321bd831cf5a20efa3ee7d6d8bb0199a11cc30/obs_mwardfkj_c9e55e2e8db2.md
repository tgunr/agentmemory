---
type: file_edit
title: himalaya account and envelope list
description: Usage error after specifying date
resource: agentmemory://observation/obs_mwardfkj_c9e55e2e8db2
tags: ["usage error", "file_edit"]
timestamp: 2026-11-10T14:01:22.959416+00:00
source: agentmemory
session_id: local-ae59b910f67bffaa12d3d27073321bd831cf5a20efa3ee7d6d8bb0199a11cc30
importance: 6
confidence: 0.9
---
# Summary

Attempt to list and manage Himalaya envelopes failed due to invalid date argument.

## Facts
- Command issued: himalaya account list; himalaya envelope list --account default --page-size 40 'after 2026-11-08'
- Error occurred: unexpected argument 'after 2026-11-08' found

## Concepts
- usage error

_Importance: 6 · Confidence: 0.9_
