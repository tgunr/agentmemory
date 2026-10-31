---
type: Observation
title: Skilled view of project workspace setup
description: Setting up a new project workspace
resource: agentmemory://observation/obs_mvtul1q4_2ca3430d48e6
tags: ["project workspace setup", "Hermes profile", "samba share", "observation"]
timestamp: 2026-10-29T17:59:12.119277+00:00
source: agentmemory
session_id: local-dc35c5b5a8d499aae4dc7d4f11b4a5df7c05f9de3c685fafc582f480691a0efa
importance: 5
confidence: 1
---
# Summary

The skill_view tool used the project-workspace-setup skill to create a new project workspace in the active Hermes profile. The skill writes to the profile running under, and substitutes the profile name (e.g. cnc, default, jo) for <PROFILE> in the steps. The skill works by first checking existing projects, resolving their folder, and then adding to projects.yaml and creating a workspace directory.

## Facts
- Tool skill is skill_view
- Input is project-workspace-setup
- Output is a markdown formatted doc
- Tags are project, workspace, setup, brief

## Concepts
- project workspace setup
- Hermes profile
- samba share

## Files
- `/Volumes/projects/{work,assets,deliverables,notes,archive}`

_Importance: 5 · Confidence: 1_
