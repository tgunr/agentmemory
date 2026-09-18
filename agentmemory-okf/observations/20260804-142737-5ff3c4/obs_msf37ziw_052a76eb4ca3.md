---
type: file_edit
title: Maintenance Update for Hermes Knowledge Base
description: No operations were applied due to no matching search term.
resource: agentmemory://observation/obs_msf37ziw_052a76eb4ca3
tags: ["repo maintenance", "knowledge base updates", "git best practices", "file_edit"]
timestamp: 2026-08-04T20:05:19.637906+00:00
source: agentmemory
session_id: 20260804_142737_5ff3c4
importance: 7
confidence: 0.9
---
# Summary

The update failed to apply due to a mismatched search term, which resulted in no changes being made. The issue will need to be resolved before proceeding with future updates.

## Facts
- .hermes/ and .startup/ are git repos. Shared KB: `~/sources/hermes-knowledge/skills` via `skills.external_dirs` in each profile that needs cross-profile skills.
- hermes-workspace-context: projects.db is per-profile (not global); sidebar cache needs full restart after DB edits.

## Concepts
- repo maintenance
- knowledge base updates
- git best practices

_Importance: 7 · Confidence: 0.9_
