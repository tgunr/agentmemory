---
type: Observation
title: Session issue when switching between projects
description: A bug occurs where a user clicks on a project in the sidebar and it gets overshadowed by another sub-project's contents.
resource: agentmemory://observation/obs_msacsqr4_42fa6bb706d3
tags: ["race condition", "project navigation", "sidebar overview", "observation"]
timestamp: 2026-08-01T12:34:33.629489+00:00
source: agentmemory
session_id: 20260801_070002_fbbb8f
importance: 7
confidence: 0.9
---
# Summary

When loading a project in skill_manage, a race condition can occur that makes it hard for users to navigate between sessions. When using the sidebar to open a session and then trying to switch to another one by clicking on it directly from Manage.

## Facts
- A `file_read` event occurred for project Manage: skill_manage (timestamp: 2026-08-01T12:34:33.629489+00:00)
- The problem happens when trying to switch between projects, specifically when clicking on the sidebar overview and a sub-project's folder.

## Concepts
- race condition
- project navigation
- sidebar overview

_Importance: 7 · Confidence: 0.9_
