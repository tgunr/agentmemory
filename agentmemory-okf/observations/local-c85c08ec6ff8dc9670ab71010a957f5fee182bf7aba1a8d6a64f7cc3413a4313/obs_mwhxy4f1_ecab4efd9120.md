---
type: file_edit
title: Feature API changes
description: Git log and grep output for upstream/main
resource: agentmemory://observation/obs_mwhxy4f1_ecab4efd9120
tags: ["git log", "grep", "session profile", "file_edit"]
timestamp: 2026-11-15T14:39:49.205617+00:00
source: agentmemory
session_id: local-c85c08ec6ff8dc9670ab71010a957f5fee182bf7aba1a8d6a64f7cc3413a4313
importance: 6
confidence: 1
---
# Summary

Git command output for feature API changes on upstream/main

## Facts
- Command: cd /Users/davec/.hermes/hermes-agent &&
- printf '%s\\n' '--- upstream feature API ---' &&
- git grep -n 'session.profile.move\\|move_session_rows\\|archive.*adopted_by_profile' upstream/main --
- gateway tui_gateway apps/desktop |
- sed -n '1,100p' &&
- printf '%s\\n' '--- commits for primary files ---' &&
- git log --oneline --all -- gateway/session_controls.py apps/desktop/src/app/chat/sidebar/session-actions-menu.tsx |
- sed -n '1,100p'

## Concepts
- git log
- grep
- session profile

_Importance: 6 · Confidence: 1_
