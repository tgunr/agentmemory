---
type: CommandRun
title: Inspect Hermes-Agent project structure and package manager setup
description: Check workspace configuration and available scripts
resource: agentmemory://observation/obs_mrp2w6n6_68729cac1a6f
tags: ["npm workspaces", "monorepo", "commandrun"]
timestamp: 2026-07-17T15:14:08.413858+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 2
confidence: 1
---
# Summary

Explored the Hermes-Agent project structure to understand the monorepo setup. The project uses npm workspaces rather than pnpm, with separate install and audit scripts for each workspace. Node and pnpm are available through nvm.

## Facts
- package.json exists in /tmp/hermes-profile-fix
- pnpm-workspace.yaml and pnpm-lock.yaml not found (npm workspaces in use)
- Root has postinstall, install:web/tui/desktop, and audit scripts
- pnpm available via nvm node v20.19.1, npm available via /usr/local, node v22.22.3
- Workspace targets: web, ui-tui, apps/desktop

## Concepts
- npm workspaces
- monorepo

## Files
- `/tmp/hermes-profile-fix/package.json`

_Importance: 2 · Confidence: 1_
