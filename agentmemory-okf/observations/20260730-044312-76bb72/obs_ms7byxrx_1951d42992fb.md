---
type: FileRead
title: Hermes skin/theme engine — the theme SDK for every surface.
description: A data-driven skin system that lets users (and Hermes itself) customize the visual appearance across the CLI, the TUI, and the desktop GUI from a single file.
resource: agentmemory://observation/obs_ms7byxrx_1951d42992fb
tags: ["React hooks", "fileread"]
timestamp: 2026-07-30T09:48:04.597361+00:00
source: agentmemory
session_id: 20260730_044312_76bb72
importance: 7
confidence: 0.9
---
# Summary

This module is the source of truth: it resolves the active skin, and the gateway pushes the resolved palette to the TUI and desktop (see tui_gateway's ``resolve_skin`` / ``skin_changed'').

## Facts
- Skins are defined as YAML files in ~/.hermes/skins/ or as built-in presets.
- No code changes are needed to add a new skin.

## Concepts
- React hooks

## Files
- `/Users/davec/.hermes/hermes-agent/hermes_cli/skin_engine.py`

_Importance: 7 · Confidence: 0.9_
