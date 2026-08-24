---
type: CommandRun
title: Compare git state of two hermes-agent repos
description: Checking remotes, fix branches, and commit sync status
resource: agentmemory://observation/obs_mrp2sy0t_804d07d99f6e
tags: ["git repository comparison", "branch tracking", "fork vs upstream", "commandrun"]
timestamp: 2026-07-17T15:11:37.272773+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 4
confidence: 1
---
# Summary

Executed a shell loop to compare the git state of two local hermes-agent repositories. The .hermes clone tracks a fork (tgunr) and holds multiple fix branches, while the .hermes-fresh clone tracks upstream (NousResearch) and lacks these branches.

## Facts
- /Users/davec/.hermes/hermes-agent uses remote tgunr/hermes-agent.git and contains 3 fix branches (discovered-repos-cross-profile-leak, profile-cwd-config-bridge-order)
- /Users/davec/.hermes-fresh/hermes-agent uses remote NousResearch/hermes-agent.git and has no fix branches
- Last commit in fresh repo is beaa1a0 fix(config): guard xai migration writer + drop gratuitous annotation
- .hermes repo is fully synced with upstream (0 ahead, 0 behind)

## Concepts
- git repository comparison
- branch tracking
- fork vs upstream

## Files
- `/Users/davec/.hermes/hermes-agent`
- `/Users/davec/.hermes-fresh/hermes-agent`

_Importance: 4 · Confidence: 1_
