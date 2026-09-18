---
type: CommandRun
title: Investigate EufyMake recent projects and CEF file chooser
description: Checking recent_projects_debug.json and native file chooser usage in CEF
resource: agentmemory://observation/obs_mrrvr5x9_f2cffd6c5a7d
tags: ["Chromium Embedded Framework (CEF)", "macOS native file chooser", "NSOpenPanel", "JSON project metadata", "EufyMake Studio", "commandrun"]
timestamp: 2026-07-19T14:17:35.417128+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 6
confidence: 1
---
# Summary

The command investigated how EufyMake Studio handles recent projects and file selection. It confirmed the existence of a large JSON file tracking recent projects with metadata and thumbnails. It also revealed that the app's CEF framework includes native macOS file chooser components, which could be problematic if the native panel is broken.

## Facts
- recent_projects_debug.json is located at ~/Library/Application Support/eufyMake Studio Profile/Projects/recent_projects_debug.json
- The file is 2.7MB and contains JSON with project_id, project_mode, cloud_type, project_path, project_name, open_time, and base64 thumbnail data
- EufyMake Studio.app uses Chromium Embedded Framework (CEF)
- CEF binary contains strings indicating native file chooser usage: remote_cocoa.mojom.SelectFileDialog, file_chooser_impl.cc, SelectFile
- Native file chooser implementation may hit a broken NSOpenPanel on macOS

## Concepts
- Chromium Embedded Framework (CEF)
- macOS native file chooser
- NSOpenPanel
- JSON project metadata
- EufyMake Studio

## Files
- `/Users/davec/Library/Application Support/eufyMake Studio Profile/Projects/recent_projects_debug.json`
- `/Applications/eufyMake Studio.app/Contents/Frameworks/Chromium Embedded Framework.framework/Chromium Embedded Framework`

_Importance: 6 · Confidence: 1_
