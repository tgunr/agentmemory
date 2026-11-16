---
type: Observation
title: Terminal tool usage
description: Used terminal to execute script
resource: agentmemory://observation/obs_mwi1nzlo_d4fcec538abb
tags: ["archiving projects", "observation"]
timestamp: 2026-11-15T16:23:54.857539+00:00
source: agentmemory
session_id: local-e1e6499998c2ef29d74e9457a59fa7878a3c72c854a9497ca9e7d3769fa21a57
importance: 8
confidence: 0.9
---
# Summary

The tool was used to execute a script that archived projects from the sidebar and switched them from the statusbar, affecting feature 8

## Facts
- Tool used: terminal
- Command executed: cd ~/.hermes/hermes-agent/apps/desktop/release/mac-arm64/Hermes.app/Contents/Resources && ls -la app.asar* && echo \"=== grep marker in unpacked dist ===\" && grep -rl \"projects-all\" app.asar.unpacked/dist/assets/ 2>/dev/null | head; echo \"exit=$?\"; echo \"=== grep inside asar binary ===\"; grep -c \"projects-all\" app.asar 2>/dev/null; echo \"=== git show stat of feature commit ===\"; cd ~/.hermes/hermes-agent && git show --stat --format=\"%h %ci %s\" cc8ac42591 | head -25"

## Concepts
- archiving projects

_Importance: 8 · Confidence: 0.9_
