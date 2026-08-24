---
type: file_edit
title: Hermes Agent desktop tab verb fixes
description: Resolves issues with focused zone and session tile anchors
resource: agentmemory://observation/obs_ms6p0yku_8922070ad0da
tags: ["focusedSessionTabAnchor", "file_edit"]
timestamp: 2026-07-29T23:05:47.784444+00:00
source: agentmemory
session_id: 20260729_175210_e08bb1
importance: 8
confidence: 0.9
---
# Summary

The Hermes agent's desktop edit operation fixed a bug with tab verb behavior and anchor layouts. This update improves user experience by allowing focused session tiles to correctly interact with tabs in their respective zones.

## Facts
- Made the tab verbs in the focused zone work as expected like ⌘1-9
- Fixed hardcoded window pane group resolutions for second chat zone layout

## Concepts
- focusedSessionTabAnchor

## Files
- `/apps/desktop/src/store/session-states.ts`

_Importance: 8 · Confidence: 0.9_
