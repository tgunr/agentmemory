---
type: file_edit
title: Mutex and Hermes Desktop bug investigation in global projects database
description: No issues found with sidebar rendering using grep for project files
resource: agentmemory://observation/obs_ms5z6myj_d44cfbca399f
tags: ["hermesDesktopBugInvestigation", "file_edit"]
timestamp: 2026-07-29T11:02:22.641774+00:00
source: agentmemory
session_id: 20260728_172854_00df48
importance: 4
confidence: 0.9
---
# Summary

In the Desktop GUI profile, there's been an issue where a global projects database entry is not shown in the sidebar when viewing projects in the active developer profile. An investigation was conducted using grep to identify if there are any rendering issues specifically with Hermes Desktop or project linkages between profiles.

## Facts
- User ran a terminal command to investigate the disappearance of a project from the desktop GUI profile.
- The command used grep to search for specific keywords in relevant JS and TS files containing patterns like "project" or "sidebar".

## Concepts
- hermesDesktopBugInvestigation

## Files
- `/Users/davec/Projects/VoidBreath/globalprojects.db`

_Importance: 4 · Confidence: 0.9_
