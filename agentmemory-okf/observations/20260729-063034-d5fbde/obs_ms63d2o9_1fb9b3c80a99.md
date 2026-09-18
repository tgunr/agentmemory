---
type: CommandRun
title: skill_view projects information
description: No one-line context provided.
resource: agentmemory://observation/obs_ms63d2o9_1fb9b3c80a99
tags: ["project_hierarchy", "cli_registry", "desktop_projects", "commandrun"]
timestamp: 2026-07-29T12:59:21.411013+00:00
source: agentmemory
session_id: 20260729_063034_d5fbde
importance: 8
confidence: 0.9
---
# Summary

The skill_view tool provided information about the structure of projects within Hermes, including the two systems for CLI registry and first-class desktop projects. This highlights a potential issue with the current implementation that needs attention to ensure accurate sidebar rendering.

## Facts
- The projects in Hermes are composed of two independent systems: CLI registry and first-class desktop projects.
- There is a gap between the expected project hierarchy visualization in the Desktop sidebar and how it's currently rendered, specifically with respect to how parent-child nesting works.

## Concepts
- project_hierarchy
- cli_registry
- desktop_projects

## Files
- `/references/two-project-systems.md`

_Importance: 8 · Confidence: 0.9_
