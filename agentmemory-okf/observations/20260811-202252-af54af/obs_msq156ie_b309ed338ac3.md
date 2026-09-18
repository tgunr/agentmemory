---
type: Observation
title: Background curator write_file for skill 'agentmemory-hermes-integration' refused
description: User-owned skills are off-limits to autonomous curation.
resource: agentmemory://observation/obs_msq156ie_b309ed338ac3
tags: ["OKF-->AM indexer", "observation"]
timestamp: 2026-08-12T11:52:37.427331+00:00
source: agentmemory
session_id: 20260811_202252_af54af
importance: 7
confidence: 0.9
---
# Summary

The background curator attempted to write a file but was blocked because the skill is user-owned and not curator-managed. The user needs to adopt the skill using the hermes curator command to enable curation, and then the skill will be allowed to be edited autonomously.

## Facts
- Nightly OKF-->AM indexer, not hooks, recommended instead of Kilo Code 7.4.21 hooks
- Background curator write_file for skill 'agentmemory-hermes-integration' refused due to it not being a curator-managed skill

## Concepts
- OKF-->AM indexer

## Files
- `/home/user/references/lesson-store.md`

_Importance: 7 · Confidence: 0.9_
