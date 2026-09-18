---
type: Error
title: Background curator patch rejected due to skill not being curator-managed
description: User-owned skills are off-limits to autonomous curation
resource: agentmemory://observation/obs_mspt3t3o_7c13b955b70a
tags: ["error"]
timestamp: 2026-08-12T08:07:36.463991+00:00
source: agentmemory
session_id: 20260718_095300_22c85c2d
importance: 4
confidence: 0.75
---
# Summary

When attempting to apply a background patch to skill 'agentmemory-hermes-integration', this error was encountered due to the skill's unauthorized nature for active curation. To resolve, use the command 'hermes curator adopt agentmemory-hermes-integration' to enable it.

## Facts
- The background curator patch for the 'agentmemory-hermes-integration' skill was refused.
- The reason is that the skill is not curator-managed and user-owned skills are restricted from being updated by an autonomous curator.

_Importance: 4 · Confidence: 0.75_
