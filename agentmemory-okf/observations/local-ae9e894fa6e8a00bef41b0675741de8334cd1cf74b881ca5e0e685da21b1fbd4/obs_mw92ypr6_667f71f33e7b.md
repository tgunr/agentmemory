---
type: Error
title: Skilled tool skill creation failed
description: Failed to trigger creation of "cloud-tree-alignment": description too long
resource: agentmemory://observation/obs_mw92ypr6_667f71f33e7b
tags: ["skill creation invalid description", "error"]
timestamp: 2026-11-09T09:50:19.357486+00:00
source: agentmemory
session_id: local-ae9e894fa6e8a00bef41b0675741de8334cd1cf74b881ca5e0e685da21b1fbd4
importance: 4
confidence: 1
---
# Summary

The attempt to create a new skill, "cloud-tree-alignment", failed due to an invalid description. The issue causes triggering first in the skill index.

## Facts
- Tool: skill_manage
- Operation: create on "cloud-tree-alignment"
- The tool's description is too long, exceeding the 60-character limit for the skill index.
- The error is due to a description that repeats the category name and ends in a period, requiring expansion into the skill body.

## Concepts
- skill creation invalid description

## Files
- `N/A`

_Importance: 4 · Confidence: 1_
