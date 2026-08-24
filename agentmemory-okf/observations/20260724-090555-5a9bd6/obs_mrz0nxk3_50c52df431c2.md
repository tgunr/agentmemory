---
type: FileRead
title: xcodegen tool found in multiple locations on the system
description: No core package build for macOS?
resource: agentmemory://observation/obs_mrz0nxk3_50c52df431c2
tags: ["xcodegen", "fileread"]
timestamp: 2026-07-24T14:09:25.811061+00:00
source: agentmemory
session_id: 20260724_090555_5a9bd6
importance: 5
confidence: 0.9
---
# Summary

The tool called xcodegen was used to fetch its own version, suggesting that it is installed in multiple locations on the system. However, when running a command with that tool, an error appeared regarding core package builds for macOS.

## Facts
- Tool usage: "xcodegen" version 2.45.4 executed with command flags.
- Command flags output was empty and omitted after "--- core package builds on macOS? ---".

## Concepts
- xcodegen

## Files
- `/opt/homebrew/bin/xcodegen`

_Importance: 5 · Confidence: 0.9_
