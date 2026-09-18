---
type: file_edit
title: Check physical devices
description: determine if device is connected or available
resource: agentmemory://observation/obs_mryscql6_3b203989a18c
tags: ["device inquiry", "file_edit"]
timestamp: 2026-07-24T10:16:46.736269+00:00
source: agentmemory
session_id: 20260724_024601_e0991d
importance: 5
confidence: 0.9
---
# Summary

Checked physical devices and provided search results with output, exit code: 0, error: null.

## Facts
- xcrun devicectl list devices &quot;Reality == &#39;physical&#39;\&quot; 2>&1 | head -20;
- xcrun devicectl list devices 2>&1 | grep -iE &#39;physical|connected|phone&#39; | head;

## Concepts
- device inquiry

_Importance: 5 · Confidence: 0.9_
