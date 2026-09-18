---
type: file_edit
title: macos TCC Sandbox — MCP Launcher «Connection closed»
description: Covers the EPERM diagnostic, the relocate-to-~/ fix, and the config.yaml repoint fallback when the patch tool refuses.
resource: agentmemory://observation/obs_msreqek6_862bc59090eb
tags: ["file_edit"]
timestamp: 2026-08-13T11:00:48.811103+00:00
source: agentmemory
session_id: 20260813_045937_c89aee
importance: 7
confidence: 0.75
---
# Summary

An MCP server fails with a 'Connection closed' error due to the TCC sandbox blocking file access. The single systemic cause is the grant of file access to the launchd-launched process tree but not to the Hermes agent process tree, leading to EPERM errors.

## Facts
- macOS TCC sandbox grants file access to the launchd-launched process tree but not to the Hermes agent process tree
- The `command` or `args` path lives under a mounted volume, leading to EPERM: operation not permitted errors when trying to read files from there

## Files
- `/Volumes/AI`

_Importance: 7 · Confidence: 0.75_
