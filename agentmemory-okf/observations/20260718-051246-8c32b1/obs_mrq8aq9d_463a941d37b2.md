---
type: CommandRun
title: Cleaned up config.yaml: removed retired project-* commands, fixed session_move paths
description: Updated quick_commands section in Hermes configuration
resource: agentmemory://observation/obs_mrq8aq9d_463a941d37b2
tags: ["configuration management", "quick_commands", "path refactoring", "commandrun"]
timestamp: 2026-07-18T10:33:11.277210+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 5
confidence: 1
---
# Summary

Cleaned up the Hermes config.yaml by removing deprecated project management commands that pointed to a retired skill, and corrected session management command paths to reference the proper script locations. This maintenance ensures quick_commands reference valid, active scripts.

## Facts
- Removed 3/3 project-* quick command blocks (project-detect, project-list, project-stats)
- Fixed session_move path references from ~/.hermes/session_move.py to ~/.hermes/skills/autonomous-ai-agents/hermes-workspace-context/scripts/session_move.py
- Backup created: config.yaml.bak.{timestamp}
- Remaining quick commands: session-merge, session-move, session-transfer

## Concepts
- configuration management
- quick_commands
- path refactoring

## Files
- `~/.hermes/config.yaml`
- `~/.hermes/config.yaml.bak.{timestamp}`

_Importance: 5 · Confidence: 1_
