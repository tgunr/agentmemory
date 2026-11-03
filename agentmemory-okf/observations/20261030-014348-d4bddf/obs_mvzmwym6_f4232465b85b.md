---
type: Observation
title: Re-enabling sanoid prunes replication anchors
description: Around two days ago, sanoid was re-enabled
resource: agentmemory://observation/obs_mvzmwym6_f4232465b85b
tags: ["sanoid", "observation"]
timestamp: 2026-11-02T19:11:08.082104+00:00
source: agentmemory
session_id: 20261030_014348_d4bddf
importance: 8
confidence: 0.9
---
# Summary

The re-enabling of sanoid caused some issues with snapshot management and log noise detection. The necessary fixes are described below.

## Facts
- After re-enabling sanoid, some snapshots could not be destroyed
- Log noises were still present in the system

## Concepts
- sanoid

_Importance: 8 · Confidence: 0.9_
