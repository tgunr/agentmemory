---
type: Observation
title: Viewed hermes-workspace-context skill
description: Defines project root resolution, CWD behavior, profiles, and worktrees
resource: agentmemory://observation/obs_mrqkkkxe_b27c4a158f98
tags: ["Hermes workspace context", "project root resolution", "Desktop CWD launch behavior", "Hermes profiles", "Git worktrees for parallel agents", "terminal.cwd configuration", "observation"]
timestamp: 2026-07-18T16:16:46.317421+00:00
source: agentmemory
session_id: 8a8d0406d0fe
importance: 7
confidence: 1
---
# Summary

Retrieved the hermes-workspace-context skill to understand how Hermes determines its project root and working directory across different interfaces (CLI, Desktop, Gateway). The skill outlines critical rules for launching Desktop with --cwd, using profiles for isolated state, and leveraging git worktrees for safe parallel agent execution.

## Facts
- Hermes uses working directory as project root for filesystem tools, terminal commands, checkpoints, and code edits
- CLI/TUI uses launch directory; Desktop uses `hermes desktop --cwd &lt;path&gt;` or `HERMES_DESKTOP_CWD`
- Gateways and cron jobs use `terminal.cwd` in `~/.hermes/config.yaml` or the active profile
- `hermes desktop --cwd` is launch-time only; existing sessions must be fully restarted to pick up CWD changes
- Profiles isolate config, memory, sessions, and skills but do not restrict filesystem access (not sandboxes)
- Git worktrees are recommended over cwd-only isolation for parallel agents to prevent checkpoint and edit interference
- Absolute paths are preferred over relative paths for durable `terminal.cwd` configuration

## Concepts
- Hermes workspace context
- project root resolution
- Desktop CWD launch behavior
- Hermes profiles
- Git worktrees for parallel agents
- terminal.cwd configuration

## Files
- `~/.hermes/config.yaml`

_Importance: 7 · Confidence: 1_
