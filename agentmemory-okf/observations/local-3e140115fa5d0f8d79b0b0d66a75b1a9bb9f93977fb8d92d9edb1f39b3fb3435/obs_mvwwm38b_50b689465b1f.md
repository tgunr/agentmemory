---
type: file_edit
title: Search for recentsProfile
description: Inspect code search output
resource: agentmemory://observation/obs_mvwwm38b_50b689465b1f
tags: ["recentsProfile", "hermes-tools", "file_edit"]
timestamp: 2026-10-31T21:19:18.485142+00:00
source: agentmemory
session_id: local-3e140115fa5d0f8d79b0b0d66a75b1a9bb9f93977fb8d92d9edb1f39b3fb3435
importance: 6
confidence: 1
---
# Summary

The output of the code search shows the value of recentsProfile as 'work'.

## Facts
- Tool: execute_code
- Input: from hermes_tools import terminal\nprint(terminal(command="cd ~/.hermes/hermes-agent/apps/desktop/src && grep -rn 'recentsProfile' --include=*.ts --include=*.tsx . | grep -v 'api/sessions.ts' | head -20")
- Output:
<code>
./app/session/hooks/use-session-list-actions.test.tsx:754:        recentsProfile: 'work',
./app/session/hooks/use-session-list-actions.test.tsx:816:    expect(listSidebarSessions).toHaveBeenCalledWith(expect.objectContaining({ recentsProfile: 'work' }}))</code>

## Concepts
- recentsProfile
- hermes-tools

_Importance: 6 · Confidence: 1_
