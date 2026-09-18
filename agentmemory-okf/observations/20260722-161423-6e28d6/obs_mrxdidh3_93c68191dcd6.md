---
type: FileRead
title: Hermes Skill Bundles
description: Parsing a YAML file containing multiple skills loaded under one slash command
resource: agentmemory://observation/obs_mrxdidh3_93c68191dcd6
tags: ["fileread"]
timestamp: 2026-07-23T10:33:29.255146+00:00
source: agentmemory
session_id: 20260722_161423_6e28d6
importance: 4
confidence: 0.75
---
# Summary

The tool successfully read a YAML file containing multiple skills loaded under one slash command

## Facts
- Bundle files are stored in "~/.hermes/skill-bundles/*.yaml" (and equivalent profile-aware directory)
- Bundles live in the home directory with filenames matching "name: ....yaml"

## Files
- `/Users/davec/.hermes/hermes-agent/agent/skill_bundles.py`

_Importance: 4 · Confidence: 0.75_
