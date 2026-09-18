---
type: FileRead
title: Read consistency test suite for cross-file validation
description: Vitest tests ensuring version, tool counts, endpoints, and docker-compose mounts match across project files
resource: agentmemory://observation/obs_mroq2a0c_ee2bcbc933e3
tags: ["Vitest testing", "Cross-file consistency validation", "MCP tools registry", "Docker-compose bind mounts", "Regression testing", "Package.json files array", "fileread"]
timestamp: 2026-07-17T09:14:57.705855+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 5
confidence: 1
---
# Summary

The agent read a comprehensive consistency test suite that validates cross-file metadata (versions, tool counts, endpoint counts) and docker-compose bind mounts against package.json. This ensures documentation and configuration remain synchronized with the actual codebase and prevents packaging regressions like issue #136.

## Facts
- File path: /Volumes/AI/agentmemory/test/consistency.test.ts
- Uses Vitest framework with mocked logger
- Validates version consistency across package.json, plugin.json, version.ts, and export-import.ts
- Checks README.md and AGENTS.md for correct MCP tool counts and REST endpoint counts
- Validates all MCP tools have unique names, descriptions, and inputSchemas
- Regression guard for issue #136: ensures host-path bind mounts in docker-compose.yml are included in package.json files array
- Imports getAllTools from ../src/mcp/tools-registry.js and VERSION from ../src/version.js

## Concepts
- Vitest testing
- Cross-file consistency validation
- MCP tools registry
- Docker-compose bind mounts
- Regression testing
- Package.json files array

## Files
- `/Volumes/AI/agentmemory/test/consistency.test.ts`

_Importance: 5 · Confidence: 1_
