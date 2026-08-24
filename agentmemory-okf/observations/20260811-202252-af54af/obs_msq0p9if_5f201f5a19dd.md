---
type: file_write
title: Background curator refusing write file for skill
description: User-owned skills are off-limits to autonomous curation.
resource: agentmemory://observation/obs_msq0p9if_5f201f5a19dd
tags: ["file_write"]
timestamp: 2026-08-12T11:40:14.820608+00:00
source: agentmemory
session_id: 20260811_202252_af54af
importance: 5
confidence: 0.75
---
# Summary

The background curator refused to write a file for the given skill, because it's user-owned and not curator-managed. To opt it in, run `hermes curator adopt agentmemory-hermes-integration`.

## Facts
- Refusing background curator write_file for skill 'agentmemory-hermes-integration': the skill is not curator-managed (created_by=None).

## Files
- `references/lessons-api.md`

_Importance: 5 · Confidence: 0.75_
