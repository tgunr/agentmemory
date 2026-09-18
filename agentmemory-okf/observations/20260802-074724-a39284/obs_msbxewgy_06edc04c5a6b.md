---
type: file_edit
title: Loading Vite CLI with custom command
description: Evaluating compatibility of project configuration with recent feature updates.
resource: agentmemory://observation/obs_msbxewgy_06edc04c5a6b
tags: ["Vite configuration update", "file_edit"]
timestamp: 2026-08-02T14:59:26.040661+00:00
source: agentmemory
session_id: 20260802_074724_a39284
importance: 8
confidence: 0.9
---
# Summary

Running loading sequence with Vite CLI, executing custom command for type-checking the project's setup and investigating potential issues related to recent configuration updates.

## Facts
- The input script calls npx tsc and a test file for Vite configuration checking.
- A recent version of Vite introduces an incompatible feature that needs to be handled using import.meta.dirname.

## Concepts
- Vite configuration update

## Files
- `/Users/davec/.hermes/hermes_agent/apps/desktop/vite.config.ts`
- `/Users/davec/.hermes/hermes.Agent/apps/desktop/src/app/session/hooks/use-session-actions/resolve-stored-session.test.ts`

_Importance: 8 · Confidence: 0.9_
