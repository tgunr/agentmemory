---
type: file_edit
title: Grep src/hermes.ts with regex pattern
description: Making changes to Hermes application configuration
resource: agentmemory://observation/obs_ms6qawkk_a6929817c525
tags: ["Grep command pattern usage in JavaScript files", "export function listAllProfileSessions, export function listSidebarSessions", "file_edit"]
timestamp: 2026-07-29T23:41:31.359372+00:00
source: agentmemory
session_id: 20260729_183908_b2df90
importance: 6
confidence: 0.9
---
# Summary

The code source file hermes.ts was examined for export functions related to Sidebar sessions, and the grep commands successfully found results.

## Facts
- Command executed: cd ~/.hermes/hermes-agent/apps/desktop && grep \"export.*listAllProfileSessions\\|export.*listSidebarSessions\" src/hermes.ts 2>&1
- Exit code: 0, indicating success

## Concepts
- Grep command pattern usage in JavaScript files
- export function listAllProfileSessions, export function listSidebarSessions

## Files
- `src/hermes.ts`

_Importance: 6 · Confidence: 0.9_
