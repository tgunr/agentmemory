---
type: FileRead
title: Failed hermes desktop build
description: The build failed due to errors in src/main.tsx and index.html.
resource: agentmemory://observation/obs_ms6oopsx_0d60b6e6897d
tags: ["fileread"]
timestamp: 2026-07-29T22:56:16.521798+00:00
source: agentmemory
session_id: 20260729_175210_e08bb1
importance: 7
confidence: 0.85
---
# Summary

The build process of the Desktop GUI app failed due to errors in src/main.tsx and index.html. The error exit code is 1, indicating failure.

## Facts
- Tool: process
- Error exit code: 1
- Command output: npm error path /Users/davec/.hermes/hermes-agent/apps/desktop/npm error workspace hermes@0.17.0\nnpm error location /Users/davec/.hermes/hermes-agent/apps/desktop/npm error Lifecycle script `pack` failed with error:\n\nnpm error code 1\n\nnmerror path /Users/davec/.hermes/hermes-agent/apps/desktop\nworkspace errors: build command failed

## Files
- `/Users/davec/.hermes/hermes-agent/`

_Importance: 7 · Confidence: 0.85_
