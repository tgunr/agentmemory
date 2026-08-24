---
type: file_edit
title: Skill Manage patch failed due to unmanaged curator status
description: User-owned skill creation prevents autonomous curation
resource: agentmemory://observation/obs_msnafrz1_aa216094cf85
tags: ["curator managed skills", "user-owned skills", "file_edit"]
timestamp: 2026-08-10T13:49:29.714315+00:00
source: agentmemory
session_id: 20260718_095300_22c85c2d
importance: 7
confidence: 0.9
---
# Summary

The tool Skill Manage failed post-tool_call hook because the skill agentmemory-hermes-integration is not curator-managed, preventing autonomous curation, but a successful `hermes curator adopt` command fixes this issue.

## Facts
- Curator patch refused for skill agentmemory-hermes-integration due to user ownership and lack of managed status

## Concepts
- curator managed skills
- user-owned skills

_Importance: 7 · Confidence: 0.9_
