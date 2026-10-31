---
type: file_edit
title: Hermes Desktop (Electron app) rebuild and repack process
description: Build, repack, debug, and ship fixes to the Hermes Desktop Electron app
resource: agentmemory://observation/obs_mvugn1wv_b908033d41cf
tags: ["electron-builder", "asar", "repack", "file_edit"]
timestamp: 2026-10-30T04:16:37.225324+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 8
confidence: 0.9
---
# Summary

The tool skill_view made a call to the post_tool_call hook with the input containing the name 'hermes-desktop'. The tool successfully executed a file_edit operation. The output contains the ship process details, including rebuilding and repacking the Hermes Desktop Electron app, and the process fails at the final code-signing stage on macOS. Additionally, it reveals the process for the `app.asar` and `node-pty` files.

## Facts
- a `nm run dist:mac` fails at the final code-signing stage on macOS
- the `app.asar` is already written to `release/` but fails to re-sign `node-pty`'s prebuilt `pty.node`

## Concepts
- electron-builder
- asar
- repack

## Files
- `/Applications/Hermes.app/Contents/Resources/app.asar`
- `/release/`
- `/dist/`

_Importance: 8 · Confidence: 0.9_
