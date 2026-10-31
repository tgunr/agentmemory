---
type: FileRead
title: Inspecting macOS Mojave installation
description: Checking contents of Install macOS Mojave.app
resource: agentmemory://observation/obs_mvtqxts7_3558d369d72e
tags: ["file system navigation", "fileread"]
timestamp: 2026-10-29T16:17:09.889538+00:00
source: agentmemory
session_id: local-e9ab8df906a52b531f34415f60f150cd690b581a6a7d11b3d94cb29119eb6dbc
importance: 6
confidence: 1
---
# Summary

The command was executed to inspect the contents of the Install macOS Mojave.app and determine its size. The operation was successful, but an error was encountered when attempting to read the «Install macOS Mojave.app/Contents/Info» file.

## Facts
- Command issued: cd «/Volumes/beta/dmg/OSX»; ls -la «Install macOS Mojave.app/Contents/SharedSupport/» 2>&1; ls -la «Install macOS Mojave.app/Contents/Resources» 2>&1 | head -20; defaults read $PWD/Install macOS Mojave.app/Contents/Info CFBundleShortVersionString 2>&1
- Total size of installation: 11731782
- Contents of Install macOS Mojave.app include AppleDiagnostics.chunklist, AppleDiagnostics.dmg, BaseSystem.chunklist, and other files

## Concepts
- file system navigation

## Files
- `/Volumes/beta/dmg/OSX/Install macOS Mojave.app/Contents/SharedSupport/`
- `/Volumes/beta/dmg/OSX/Install macOS Mojave.app/Contents/Resources`

_Importance: 6 · Confidence: 1_
