---
type: FileRead
title: Analysis of Hermes CLI source paths
description: No relevant context provided
resource: agentmemory://observation/obs_msf1io6k_9733a54f00cd
tags: ["fileread"]
timestamp: 2026-08-04T19:17:38.919706+00:00
source: agentmemory
session_id: 20260804_141612_969e2e
importance: 6
confidence: 0.75
---
# Summary

This observation analyzes Hermes CLI source paths, including where shim pointing and configuration profile directories are located.

## Facts
- The 'which hermes' command points to the shims directory
- The `.hermes/profiles` dir is empty except for default values

## Files
- `/Users/davec/.pyenv/shims/hermes`
- `/Users/davec/.hermes/profiles`

_Importance: 6 · Confidence: 0.75_
