---
type: CommandRun
title: Investigate vitest config and test:ui script in monorepo
description: Searching for vitest configuration and test script definitions across the hermes-agent project
resource: agentmemory://observation/obs_mrp2x29a_29cf5a3f4e01
tags: ["vitest configuration", "monorepo test setup", "jsdom test environment", "npm scripts", "commandrun"]
timestamp: 2026-07-17T15:14:49.372362+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 4
confidence: 1
---
# Summary

A search was performed to understand the vitest test setup across the hermes-agent monorepo. The root package.json has no vitest references, but two workspace packages (ui-tui and web) have their own vitest.config.ts files. The desktop app's test:ui script runs vitest with jsdom environment but has no local vitest config file.

## Facts
- Root package.json has no "test:ui" or "vitest" references
- Vitest config files exist at ./ui-tui/vitest.config.ts and ./web/vitest.config.ts
- apps/desktop/package.json line 46 defines test:ui as "vitest run --environment jsdom"
- No vitest config found in apps/desktop directory (only in ui-tui and web packages)

## Concepts
- vitest configuration
- monorepo test setup
- jsdom test environment
- npm scripts

## Files
- `ui-tui/vitest.config.ts`
- `web/vitest.config.ts`
- `apps/desktop/package.json`

_Importance: 4 · Confidence: 1_
