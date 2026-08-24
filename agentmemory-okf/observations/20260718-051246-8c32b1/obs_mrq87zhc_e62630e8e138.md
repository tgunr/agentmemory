---
type: discovery
title: Hermes Workspace Context Skill Details
description: Rules for project roots, CWD, profiles, and worktrees in Hermes
resource: agentmemory://observation/obs_mrq87zhc_e62630e8e138
tags: ["Hermes workspace context", "Project root resolution", "Git worktrees for parallel agents", "Hermes profiles and isolation", "HERMES_HOME configuration", "discovery"]
timestamp: 2026-07-18T10:31:03.259676+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 6
confidence: 1
---
# Summary

The agent retrieved the hermes-workspace-context skill to understand how Hermes determines its project root across different interfaces. This establishes the operational rules for switching projects, isolating parallel agents using git worktrees, and configuring persistent working directories via config or environment variables.

## Facts
- Hermes uses the working directory as the project root for filesystem tools, terminal commands, checkpoints, and code edits.
- CLI/TUI uses the launch directory; Desktop uses hermes desktop --cwd &lt;path&gt; or HERMES_DESKTOP_CWD (launch-time only, requires restart to change).
- Gateway and cron jobs use terminal.cwd in ~/.hermes/config.yaml or the active profile.
- Profiles isolate config, memory, and sessions but do not restrict filesystem access (they are not sandboxes).
- Git worktrees are recommended over cwd-only isolation for parallel agents to prevent checkpoint and edit interference.
- HERMES_HOME can be moved to a ZFS volume to provide local filesystem performance for SQLite, snapshots, and remote WebUI access.

## Concepts
- Hermes workspace context
- Project root resolution
- Git worktrees for parallel agents
- Hermes profiles and isolation
- HERMES_HOME configuration

## Files
- `~/.hermes/config.yaml`

_Importance: 6 · Confidence: 1_
