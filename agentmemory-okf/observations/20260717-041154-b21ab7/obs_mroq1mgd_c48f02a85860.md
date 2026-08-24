---
type: Search
title: Found REST endpoint count references across codebase
description: Search for endpoint count patterns revealed consistency requirements
resource: agentmemory://observation/obs_mroq1mgd_c48f02a85860
tags: ["REST API endpoint management", "Code documentation consistency", "API security whitelist validation", "Bearer token authentication", "Endpoint count tracking", "search"]
timestamp: 2026-07-17T09:14:27.180064+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 4
confidence: 1
---
# Summary

Search revealed that the project maintains strict consistency between endpoint counts in code, documentation, and tests. The AGENTS.md file documents a mandatory update process when adding REST endpoints, enforced by automated tests. Some SVG assets appear outdated with incorrect endpoint counts.

## Facts
- Project currently has 128 REST endpoints
- AGENTS.md mandates updating 3 files when adding endpoints: src/triggers/api.ts, src/index.ts, and README.md
- Consistency test in test/consistency.test.ts validates endpoint counts match across files
- SVG assets in assets/tags/ still show outdated "109 REST endpoints"
- REST API binds to 127.0.0.1 by default on port 3111
- Security rule: REST endpoints must whitelist fields, never pass raw req.body to sdk.trigger()
- Bearer token auth via AGENTMEMORY_SECRET environment variable

## Concepts
- REST API endpoint management
- Code documentation consistency
- API security whitelist validation
- Bearer token authentication
- Endpoint count tracking

## Files
- `/Volumes/AI/agentmemory/src/index.ts`
- `/Volumes/AI/agentmemory/src/triggers/api.ts`
- `/Volumes/AI/agentmemory/README.md`
- `/Volumes/AI/agentmemory/AGENTS.md`
- `/Volumes/AI/agentmemory/test/consistency.test.ts`
- `/Volumes/AI/agentmemory/.env.example`
- `/Volumes/AI/agentmemory/test/working-memory.test.ts`
- `/Volumes/AI/agentmemory/assets/tags/section-api.svg`
- `/Volumes/AI/agentmemory/assets/tags/light/section-api.svg`
- `/Volumes/AI/agentmemory/plugin/skills/write-agentmemory-skill/SKILL.md`

_Importance: 4 · Confidence: 1_
