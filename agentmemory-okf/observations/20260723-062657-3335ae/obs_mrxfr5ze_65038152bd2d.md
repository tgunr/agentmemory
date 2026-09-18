---
type: FileRead
title: The recents list is local-only:...
description: The messaging slice is the inverse: drop cron + every local source so only external-platform conversations remain, then split per platform in the UI.
resource: agentmemory://observation/obs_mrxfr5ze_65038152bd2d
tags: ["useSessionListActions", "React hooks", "JSX", "fileread"]
timestamp: 2026-07-23T11:36:18.695454+00:00
source: agentmemory
session_id: 20260723_062657_3335ae
importance: 7
confidence: 0.9
---
# Summary

The tool performs local read operation to maintain session list and messaging slices.

## Facts
- Rows a session refresh must preserve even if the aggregator omits them:
- In-flight first turns (message_count 0), pinned rows aged off the page,

## Concepts
- useSessionListActions
- React hooks
- JSX

## Files
- `.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-session-list-actions.ts`

_Importance: 7 · Confidence: 0.9_
