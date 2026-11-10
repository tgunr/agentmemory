---
type: file_edit
title: Linker command failed in DXFQuickLook.xcodeproj
description: Ld error in arm64 architecture
resource: agentmemory://observation/obs_mw9gynj8_0bc757e70cc4
tags: ["ld warnings", "file_edit"]
timestamp: 2026-11-09T16:22:11.101745+00:00
source: agentmemory
session_id: local-1f28301d1d21594964207a1d5d9d73553a3bf4f15d6662387568057a6f54f82b
importance: 8
confidence: 1
---
# Summary

The build process encountered a linker command failure due to a difference in macOS versions between the built and linked architectures.

## Facts
- Panicked because linker command failed
- ld: symbol(s) not found for architecture x86_64
- Ld /Users/davec/Desktop/DXF/QuickLook/build/Build/Intermediates.noindex/DXFQuickLook.build/Release/DXFThumbnail.build/Objects-normal/arm64/Binary/DXFThumbnail
- Ld...

## Concepts
- ld warnings

## Files
- `/Users/davec/Desktop/DXF/QuickLook/DXFQuickLook.xcodeproj`

_Importance: 8 · Confidence: 1_
