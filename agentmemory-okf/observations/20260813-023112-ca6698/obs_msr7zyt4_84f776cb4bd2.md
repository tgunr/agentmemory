---
type: FileRead
title: Skills tool returns disabled skill information
description: Processing skills data for Hermes agent
resource: agentmemory://observation/obs_msr7zyt4_84f776cb4bd2
tags: ["fileread"]
timestamp: 2026-08-13T07:52:17.650838+00:00
source: agentmemory
session_id: 20260813_023112_ca6698
importance: 4
confidence: 0.75
---
# Summary

The skills tool in the repository checks if disabled skills are enabled and provides instructions for re-enabling them. This check is necessary before the user can continue using the Hermes agent.

## Facts
- User attempting to use Hermes agent is checking skills status
- Agent is currently running on a repository with installed skills

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/run.py`

_Importance: 4 · Confidence: 0.75_
