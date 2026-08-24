---
type: CommandRun
title: Check git status and profile store in two hermes-agent repos
description: Comparing modified files and branch state across local clones
resource: agentmemory://observation/obs_mrp2sf43_0fed8aad7709
tags: ["git status comparison", "monorepo state inspection", "file existence check", "commandrun"]
timestamp: 2026-07-17T15:11:12.767789+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

Executed a shell script to compare the state of two local hermes-agent repositories. Found that the primary repo has uncommitted changes to session and profile UI components, while the fresh clone is mostly clean. Confirmed that neither repo currently uses a profile.ts store file.

## Facts
- /Users/davec/.hermes/hermes-agent is on main branch with modified files: profile-switcher.tsx, session.test.ts, session.ts, styles.css
- /Users/davec/.hermes-fresh/hermes-agent is on main branch with only an untracked .install_method file
- Neither repository contains the file src/store/profile.ts

## Concepts
- git status comparison
- monorepo state inspection
- file existence check

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/chat/sidebar/profile-switcher.tsx`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/session.test.ts`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/session.ts`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/styles.css`

_Importance: 3 · Confidence: 1_
