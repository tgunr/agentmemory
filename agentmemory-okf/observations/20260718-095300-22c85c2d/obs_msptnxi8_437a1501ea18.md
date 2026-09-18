---
type: Error
title: User error: background curator patch refused for uncurated skill.
description: User-owned skills are off-limits to autonomous curation.
resource: agentmemory://observation/obs_msptnxi8_437a1501ea18
tags: ["autonomous curation", "error"]
timestamp: 2026-08-12T08:23:15.293186+00:00
source: agentmemory
session_id: 20260718_095300_22c85c2d
importance: 6
confidence: 0.9
---
# Summary

Error occurred while attempting to apply a background curator patch to a user-owned skill. Curator management requires explicit adoption.

## Facts
- No curator manager found for skill agentmemory-hermes-integration, a user-owned skill.
- Background curator patch request rejected because the skill is not curator-managed (create_by=None).

## Concepts
- autonomous curation

_Importance: 6 · Confidence: 0.9_
