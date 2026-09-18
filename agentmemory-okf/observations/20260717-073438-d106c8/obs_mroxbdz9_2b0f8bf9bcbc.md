---
type: Search
title: Search for summary/session/unknown patterns in viewer
description: Found 19 matches in index.html for UI session display logic
resource: agentmemory://observation/obs_mroxbdz9_2b0f8bf9bcbc
tags: ["session display logic", "UI fallback patterns", "crystal summaries", "flag-summary component", "search"]
timestamp: 2026-07-17T12:38:00.060453+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 3
confidence: 1
---
# Summary

Searched the viewer's index.html for patterns related to session summaries and unknown states. Found 19 matches showing the UI displays session previews using firstPrompt or summary fields, with 'Unknown' fallbacks for missing data, and includes crystal/session summary descriptions.

## Facts
- 19 total matches found in /Volumes/AI/agentmemory/src/viewer/index.html
- Matches include CSS for .flag-summary button styling (lines 659-680, 3819)
- Session display logic uses firstPrompt, summary, or firstPromptFromObs for previews (lines 2934, 2971-2986)
- Default fallback text includes 'Unknown session' (line 1169) and 'Unknown' for missing project names (line 2990)
- Crystals UI includes summary descriptions of compressed session data (lines 3253, 3265)
- Project summary display at line 3491-3493

## Concepts
- session display logic
- UI fallback patterns
- crystal summaries
- flag-summary component

## Files
- `/Volumes/AI/agentmemory/src/viewer/index.html`

_Importance: 3 · Confidence: 1_
