---
type: Search
title: Search Hermes config for profile and workspace settings
description: Found 3 matches for orchestration and workspace configuration patterns
resource: agentmemory://observation/obs_mrq7m5k2_fa8a1c1e0d31
tags: ["YAML configuration", "Hermes orchestration", "Docker workspace mounting", "search"]
timestamp: 2026-07-18T10:14:04.703763+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 3
confidence: 1
---
# Summary

A search of the Hermes configuration file revealed key settings for orchestration profiles and workspace mounting. The orchestrator_profile is currently empty, external directories are configured, and workspace mounting to Docker is disabled.

## Facts
- Seached /Users/davec/.hermes/config.yaml for patterns: external_dirs|default_profile|^profiles|profile:|workspace
- Found orchestrator_profile: '' at line 363
- Found external_dirs: at line 724
- Found docker_mount_cwd_to_workspace: false at line 775

## Concepts
- YAML configuration
- Hermes orchestration
- Docker workspace mounting

## Files
- `/Users/davec/.hermes/config.yaml`

_Importance: 3 · Confidence: 1_
