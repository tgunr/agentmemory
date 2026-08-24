---
type: FileRead
title: Hermes Memory Optimization
description: Air gap technical guideline
resource: agentmemory://observation/obs_mrxenbfh_7f938022906b
tags: ["fileread"]
timestamp: 2026-07-23T11:05:19.511064+00:00
source: agentmemory
session_id: 20260723_060105_e34e43
importance: 4
confidence: 0.75
---
# Summary

This skill covers techniques for keeping Hermes native memory lean, condensed, and efficient — detecting fullness, promoting entries to skills, and maintaining within the character budget. Essential steps include identifying candidates for promotion, promoting detail to a skill, replacing verbose entries, and verifying memory usage.

## Facts
- Total character budget for Hermes native memory is ~2,200 characters max (agent's technical notes) and ~1,375 characters max (user profile/preferences)

_Importance: 4 · Confidence: 0.75_
