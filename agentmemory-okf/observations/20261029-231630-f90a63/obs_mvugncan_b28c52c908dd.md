---
type: CommandRun
title: Search for `statusbar` in hermes-agent codebase
description: A search query to help identify the usage of statusbar in the hermes-agent codebase.
resource: agentmemory://observation/obs_mvugncan_b28c52c908dd
tags: ["statusbar", "commandrun"]
timestamp: 2026-10-30T04:16:50.683238+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 8
confidence: 0.9
---
# Summary

The command was executed to search for `statusbar` in the hermes-agent codebase, resulting in the identification of various usage contexts.

## Facts
- Command provided to terminal: "cd ~/.hermes/hermes-agent/apps/desktop/src && grep -rn \"StatusBar\\|statusBar\\|status-bar\\|statusbar\" --include=*.tsx --include=*.ts | head -40; echo '=== footer/bottom'; grep -rln \"bottom-0\" --include=*.tsx ."

## Concepts
- statusbar

## Files
- `./app/routes.ts`
- `./app/index.tsx`
- `./app/artifacts/index.tsx`
- `./app/capabilities/index.tsx`
- `./app/chat/sidebar/index.tsx`
- `./app/chat/sidebar/connection-glyph.tsx`
- `./app/chat/sidebar/profile-rail-fleet.test.tsx`
- `./app/chat/sidebar/profile-switcher.tsx`
- `./app/chat/sidebar/profile-dropdown-switcher.test.tsx`
- `./app/chat/sidebar/filter-menu.tsx`
- `./app/chat/composer/status-stack/coding-row.test.tsx`
- `./app/chat/composer/status-stack/coding-row.tsx`
- `./app/chat/composer/types.ts`
- `./app/chat/composer/model-pill.tsx`
- `./app/chat/composer/contrib.ts`
- `./app/shell/statusbar-visibility.test.tsx`

_Importance: 8 · Confidence: 0.9_
