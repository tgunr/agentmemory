---
type: file_write
title: Merging lessons into AgentMemory viewer
description: A bug fix to ensure user-owned skills are reflected in the #lessons page
resource: agentmemory://observation/obs_msq156hu_115ae630f8ac
tags: ["REST API integration", "file_write"]
timestamp: 2026-08-12T11:52:37.407088+00:00
source: agentmemory
session_id: 20260811_202252_af54af
importance: 6
confidence: 0.9
---
# Summary

This patch updates the integration to reflect changes to user-owned skills in the `AgentMemory viewer tab`. It ensures that lessons posted by `skill_manage` are properly reflected in the `#lessons` page. This fix aims to improve the user experience and align the `Hermes star-map` with the actual skill inventory.

## Facts
- The `skill_manage` write does not update the `Hermes star-map` instantly.
- Only posting to the REST API via `curl` makes the lesson appear in the expected location.

## Concepts
- REST API integration

_Importance: 6 · Confidence: 0.9_
