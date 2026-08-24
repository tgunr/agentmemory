---
type: FileRead
title: Tool usage error: Description too long
description: New skill creation attempt failed due to descriptive length restriction.
resource: agentmemory://observation/obs_msr67rz9_350e3f8bcdf8
tags: ["skill creation limitations", "fileread"]
timestamp: 2026-08-13T07:02:22.817934+00:00
source: agentmemory
session_id: 20260812_063037_afea39f2
importance: 5
confidence: 0.9
---
# Summary

The agent attempted to create a new skill based on a descriptive passage that exceeded the allowed character limit. This led to an error due to formatting restrictions. The reason for this limitation is related to handling skills within limited character counts ("system-prompt budget") defined in certain routing signals, particularly those related to "new skills".

## Facts
- Total description character count exceeds system-prompt budget of 60 characters for the "new skills" routing signal, causing truncation and loss of contextual routing information.

## Concepts
- skill creation limitations

_Importance: 5 · Confidence: 0.9_
