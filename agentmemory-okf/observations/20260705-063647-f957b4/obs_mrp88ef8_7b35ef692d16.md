---
type: FileRead
title: Read SidebarProjectTree interface definition
description: Examining project tree structure in chat sidebar
resource: agentmemory://observation/obs_mrp88ef8_7b35ef692d16
tags: ["TypeScript interfaces", "project tree structure", "sidebar UI components", "git repo promotion", "fileread"]
timestamp: 2026-07-17T17:43:36.448060+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

Reading the workspace-groups.ts file to understand the SidebarProjectTree interface structure. This interface defines the shape of project tree items in the chat sidebar, including support for auto-promoted git repo roots that exist outside the projects database.

## Facts
- File workspace-groups.ts has 589 lines, 21742 bytes
- Interface SidebarProjectTree defined at line 46 with properties: id (string), label (string), path (string|null), color (string|null|undefined), icon (string|null|undefined), archived (boolean|undefined)
- Comment at line 53 indicates git repo roots can be auto-promoted without being user-created projects.db rows

## Concepts
- TypeScript interfaces
- project tree structure
- sidebar UI components
- git repo promotion

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/chat/sidebar/projects/workspace-groups.ts`

_Importance: 3 · Confidence: 1_
