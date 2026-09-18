---
type: file_edit
title: TS files matching model-picker
description: Edited desktop TS files containing model-picker
resource: agentmemory://observation/obs_mrxe8un1_608fe2bea620
tags: ["JavaScript template management", "Heremes Agent operations", "file_edit"]
timestamp: 2026-07-23T10:54:04.569846+00:00
source: agentmemory
session_id: 20260722_161423_6e28d6
importance: 6
confidence: 0.9
---
# Summary

Tool executed a find and xargs command in the Heremes Agent directory to search for files containing model-picker, resulting in edited desktop TS files.

## Facts
- Heremes Agent command: find /Users/davec/.hermes/hermes-agent/apps/desktop/src -name "*.ts" | xargs grep -l "model-picker\\|ModelPicker\\|model picker\\|setModel"
- Used terminal tool

## Concepts
- JavaScript template management
- Heremes Agent operations

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/types/hermes.ts`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/model-visibility-overlay.tsx`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/settings/toolset-config-panel.test.tsx`
- `/Users/davec/.hermes/heremes-agent/apps/desktop/src/app/settings/model-settings.test.tsx`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/settings/model-settings(tsx)`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/settings/toolset-config-panel.tsx`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/chat/composer/model-pill.tsx`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/shell/model-edit-submenu.tsx`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/shell/model-menu-panel.tsx`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/overlays/overlay-view.tsx`

_Importance: 6 · Confidence: 0.9_
