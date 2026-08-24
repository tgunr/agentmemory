---
type: Search
title: Viewed hermes-workspace-context skill documentation
description: Retrieved configuration and workspace management guide for Hermes
resource: agentmemory://observation/obs_mrq8xrel_a6934a132811
tags: ["workspace management", "project root configuration", "git worktrees", "Hermes profiles", "launch-time cwd", "search"]
timestamp: 2026-07-18T10:51:05.848078+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 7
confidence: 1
---
# Summary

Accessed the hermes-workspace-context skill which provides comprehensive guidance on managing project roots and working directories across Hermes interfaces. The documentation covers critical launch-time configuration requirements and isolation strategies for multi-agent workflows.

## Facts
- Skill manages Hermes project roots, working directories, Desktop cwd launch behavior, profiles, and worktrees
- CLI/TUI uses launch directory as project root for filesystem tools and terminal commands
- Desktop app requires hermes desktop --cwd /path or HERMES_DESKTOP_CWD environment variable at launch time
- Profiles provide isolated Hermes state/config but do not restrict filesystem access
- Git worktrees recommended for parallel agents to avoid change interference
- HERMES_HOME can be moved to remote ZFS for reliable sessions with local SQLite performance

## Concepts
- workspace management
- project root configuration
- git worktrees
- Hermes profiles
- launch-time cwd

## Files
- `~/.hermes/config.yaml`

_Importance: 7 · Confidence: 1_
