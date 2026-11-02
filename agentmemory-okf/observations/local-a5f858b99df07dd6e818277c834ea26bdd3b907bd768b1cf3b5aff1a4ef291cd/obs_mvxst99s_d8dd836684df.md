---
type: file_edit
title: SAS disk triage
description: Analyze and diagnose storage issues with Broadcom SAS3008 + SMC expander
resource: agentmemory://observation/obs_mvxst99s_d8dd836684df
tags: ["SAS controller and expander management", "file_edit"]
timestamp: 2026-11-01T12:20:40.618348+00:00
source: agentmemory
session_id: local-a5f858b99df07dd6e818277c834ea26bdd3b907bd768b1cf3b5aff1a4ef291cd
importance: 8
confidence: 0.9
---
# Summary

Tool skill_view analyzed a SAS disk behind a SAS HBA + expander, providing steps for triage and diagnosis of storage issues.

## Facts
- Applies to the fleet's storage hosts (onboard Broadcom SAS3008 + SMC expander, ZFS on every pool)
- a flapping drive is re-discovered under a different target within the same boot

## Concepts
- SAS controller and expander management

## Files
- `references/sas-disk-triage.md`

_Importance: 8 · Confidence: 0.9_
