---
type: CommandRun
title: Inspect eufyMake Studio.app bundle structure
description: Analyzing macOS application bundle to determine architecture and dependencies
resource: agentmemory://observation/obs_mrrruhx5_a77c0eb9a01e
tags: ["macOS app bundle inspection", "Chromium Embedded Framework", "application reverse engineering", "embedded SSL certificates", "websocket server", "commandrun"]
timestamp: 2026-07-19T12:28:12.469779+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 5
confidence: 1
---
# Summary

Inspected the eufyMake Studio application bundle to understand its architecture and dependencies. The app uses Chromium Embedded Framework rather than Electron, contains embedded SSL certificates and keys for websocket communication, and includes custom Anker libraries for networking and color engine functionality.

## Facts
- App path: /Applications/eufyMake Studio.app
- Bundle ID: com.anker.pceufyMake
- Version: 4.0.2
- Main executable: eufyStudio (137MB)
- Uses Chromium Embedded Framework (CEF), not pure Electron
- Contains SSL certificates (.crt) and private key for websocket_server
- Minimum macOS version: 10.12
- No quarantine flag present
- Includes custom dylibs: libAnkerNet.dylib, libAnkerPlugin.dylib, libcolorengine_algo.dylib

## Concepts
- macOS app bundle inspection
- Chromium Embedded Framework
- application reverse engineering
- embedded SSL certificates
- websocket server

## Files
- `/Applications/eufyMake Studio.app`
- `/Applications/eufyMake Studio.app/Contents/Info.plist`
- `/Applications/eufyMake Studio.app/Contents/MacOS/eufyStudio`
- `/Applications/eufyMake Studio.app/Contents/MacOS/websocket_server.crt`
- `/Applications/eufyMake Studio.app/Contents/MacOS/websocket_server.key`

_Importance: 5 · Confidence: 1_
