---
type: file_write
title: write_file
description: {"content":"#!/usr/bin/env python3\n\"\"\"Ad-hoc verification for okf_bridge.py — NOT a committed test suite.\nRe-runs …
resource: agentmemory://observation/obs_mrtd3eld_ad7fd336f0df
tags: ["file_write"]
timestamp: 2026-07-20T15:10:46.171526+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 0.3
---
# Summary

{"content":"#!/usr/bin/env python3\n\"\"\"Ad-hoc verification for okf_bridge.py — NOT a committed test suite.\nRe-runs the bridge on the real AgentMemory export and checks OKF v0.1 conformance.\"\"\"\nimport json, os, re, subprocess, sys, tempfile, shutil\n\nBRIDGE = \"/Volumes/AI/Servers/agentmemory-kilo-hooks/okf_bridge.py\"\nEXPORT = \"/tmp/am_export/export.json\"\nif not (os.path.exists(BRIDG…

## Files
- `/var/folders/hl/ls4hd0dx283_3btyvcf3wgt40000gn/T/hermes-verify-okf-bridge.py`

_Importance: 5 · Confidence: 0.3_
