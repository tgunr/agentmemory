---
type: Observation
title: skill_manage
description: {"action":"patch","name":"agentmemory-hermes-integration","new_string":"`cd /Volumes/AI/agentmemory && export PATH=/opt…
resource: agentmemory://observation/obs_mrtgrtwp_21f8f78dee65
tags: ["observation"]
timestamp: 2026-07-20T16:53:44.614825+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 0.3
---
# Summary

{"action":"patch","name":"agentmemory-hermes-integration","new_string":"`cd /Volumes/AI/agentmemory && export PATH=/opt/homebrew/bin:$PATH && npm install --no-audit --no-fund`; then `launchctl unload/load ~/Library/LaunchAgents/com.github.agentmemory.plist`. Verify: `/agentmemory/health` returns `401` (alive) not `404`; `ps` shows `dist/index.mjs` again. Install-state fix, NOT a code bug. |\n| UI…

_Importance: 5 · Confidence: 0.3_
