---
type: file_edit
title: Fix Finder folder sort order
description: I iCloud, not Finder
resource: agentmemory://observation/obs_mw9e2p3c_9c64ccdc0ea3
tags: ["macOS Finder", "iCloud", "file_edit"]
timestamp: 2026-11-09T15:01:20.900123+00:00
source: agentmemory
session_id: local-2363f2ccea79a9bb83632ec91c5f6f391ea4b76bc1bb0bf76d1332aab5f87d1f
importance: 8
confidence: 0.9
---
# Summary

The user verified that the folder's stored view settings say exactly what would be expected: .DS_Store → sortColumn = name, name column ascending = true. However, the listing isn't in name order, but also not what the user would expect. The assistant provides a short answer stating that the sorting setting is fine — it's iCloud, not Finder.

## Facts
- The folder's stored view settings say exactly what you'd expect: .DS_Store → sortColumn = name, name column ascending = true.
- The listing isn't name order, but it's also not what you'd expect: ...ntell application Finder ... set cvo to column view options of f ... return {sort column of cvo, |arranged by| of cvo} ...

## Concepts
- macOS Finder
- iCloud

## Files
- `/Users/davec/Library/Mobile Documents/com~apple~CloudDocs/3CL/design`

_Importance: 8 · Confidence: 0.9_
