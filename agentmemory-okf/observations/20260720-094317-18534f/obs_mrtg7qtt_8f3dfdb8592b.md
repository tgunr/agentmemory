---
type: Observation
title: terminal
description: {"command":"echo \"### gh auth? ###\"\ngh auth status 2>&1 | head -8\necho\necho \"### gh user / default visibility pre…
resource: agentmemory://observation/obs_mrtg7qtt_8f3dfdb8592b
tags: ["observation"]
timestamp: 2026-07-20T16:38:07.494049+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 0.3
---
# Summary

{"command":"echo \"### gh auth? ###\"\ngh auth status 2>&1 | head -8\necho\necho \"### gh user / default visibility prefs ###\"\ngh api user --jq '.login' 2>&1 | head -1\necho\necho \"### BlueBubbles gateway reachable? ###\"\nBB_CFG=\"$HOME/.config/bluebubbles\" 2>/dev/null\nls -d ~/.bluebubbles 2>/dev/null; ls -d ~/bluebubbles 2>/dev/null\necho \"--- any bluebubbles config/env ---\"\nenv | grep …

_Importance: 5 · Confidence: 0.3_
