---
type: FileRead
title: Read package.json for agentmemory project
description: Project configuration and dependencies manifest
resource: agentmemory://observation/obs_mroq1mfo_1a36dff2653f
tags: ["package.json manifest", "ES module configuration", "Node.js package management", "fileread"]
timestamp: 2026-07-17T09:14:27.153799+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 2
confidence: 1
---
# Summary

Read the package.json manifest which defines the agentmemory package as an ES module for persistent AI agent memory storage. It includes Claude SDK dependencies, SQLite for storage, and iii-engine integration.

## Facts
- Package name: @agentmemory/agentmemory, version: 0.9.27
- Type: ES module, main entry: dist/index.mjs
- Build script uses tsdown and copies config files to dist/
- Dependencies include @anthropic-ai/claude-agent-sdk, better-sqlite3, iii-sdk, zod
- Node engine requirement: >=20.0.0, package manager: pnpm@10.13.1

## Concepts
- package.json manifest
- ES module configuration
- Node.js package management

## Files
- `/Volumes/AI/agentmemory/package.json`

_Importance: 2 · Confidence: 1_
