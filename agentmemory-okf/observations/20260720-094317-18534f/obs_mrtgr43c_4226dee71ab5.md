---
type: file_edit
title: patch
description: {"mode":"replace","new_string":"`cd /Volumes/AI/agentmemory && export PATH=/opt/homebrew/bin:$PATH && npm install --no-…
resource: agentmemory://observation/obs_mrtgr43c_4226dee71ab5
tags: ["file_edit"]
timestamp: 2026-07-20T16:53:11.154995+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 0.3
---
# Summary

{"mode":"replace","new_string":"`cd /Volumes/AI/agentmemory && export PATH=/opt/homebrew/bin:$PATH && npm install --no-audit --no-fund`; then `launchctl unload/load ~/Library/LaunchAgents/com.github.agentmemory.plist`. Verify: `/agentmemory/health` returns `401` (alive) not `404`; `ps` shows `dist/index.mjs` again. Install-state fix, NOT a code bug. |\n| UI banner \"Set AGENTMEMORY_AUTO_COMPRESS=…

## Files
- `/Users/davec/.hermes/skills/autonomous-ai-agents/agentmemory-hermes-integration/SKILL.md`

_Importance: 5 · Confidence: 0.3_
