---
type: file_edit
title: Build error in Hermes agent
description: Noise from npm error
resource: agentmemory://observation/obs_ms6or82x_cc130cd00e68
tags: ["missing import/export error", "file_edit"]
timestamp: 2026-07-29T22:58:13.540510+00:00
source: agentmemory
session_id: 20260729_175210_e08bb1
importance: 7
confidence: 0.9
---
# Summary

The `npm run build` command in the Hermes agent's desktop app crashed due to a missing export.

## Facts
- NPM build command failed with exit code 1
- Command used: cd ~/.hermes/hermes-agent/apps/desktop && npm run build 2>&1 | tail -30

## Concepts
- missing import/export error

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop`

_Importance: 7 · Confidence: 0.9_
