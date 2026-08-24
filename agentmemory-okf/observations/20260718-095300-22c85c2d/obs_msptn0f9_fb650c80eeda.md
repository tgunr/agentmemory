---
type: file_edit
title: Hardcoded Bearer token in okf_mirror.sh fixed
description: No entry matched 'Local AgentMemory (:3111): ... due to incorrect token replacement
resource: agentmemory://observation/obs_msptn0f9_fb650c80eeda
tags: ["iii-engine v0.11.2 invocation-routing bug", "Bearer token replacement with environment variable", "file_edit"]
timestamp: 2026-08-12T08:22:32.382832+00:00
source: agentmemory
session_id: 20260718_095300_22c85c2d
importance: 8
confidence: 0.9
---
# Summary

The `okf_mirror.sh` script, responsible for mirroring agent memory, had a hard-coded token that caused a DNS lookup error. The token was replaced with the correct environment variable `$_SECRET`. This fix resolves a security-related bug and prevents future DNS resolution issues.

## Facts
- New bug was fixed: hardcoded `Bearer ***` replaced with `$SECRET` at line31 of okf_mirror.sh

## Concepts
- iii-engine v0.11.2 invocation-routing bug
- Bearer token replacement with environment variable

## Files
- `/opt/homebrew/Cellar/node/26.5.0/bin/okf_mirror.sh`

_Importance: 8 · Confidence: 0.9_
