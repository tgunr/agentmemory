---
type: file_edit
title: Calendar Calendar App Error
description: Error executing Calendar Calendar App command
resource: agentmemory://observation/obs_mvhgtyiu_b34c5ee2e322
tags: ["osascript, Calendar app, event summary", "file_edit"]
timestamp: 2026-10-21T02:00:59.136286+00:00
source: agentmemory
session_id: cron_579965e2d62f_20261020_210009
importance: 7
confidence: 0.9
---
# Summary

The Calendar Calendar App command execution resulted in an error. The app attempted to obtain summary data from the "Home" calendar.

## Facts
- Tool: terminal
- Command: osascript -e &apos;tell application &quot;Calendar&quot; to tell calendar &quot;Home&quot; to get summary of (every event whose start date ≥ date &quot;Wednesday, October 21, 2026 12:00:00 AM&quot; and start date ≤ date &quot;Thursday, October 22, 2026 12:00:00 AM&quot;)&#39; 2>&1 | head -20; echo &quot;=== all cals ===&quot;; osascript -e &#39;tell application &quot;Calendar&quot; to get name of every calendar&#39; 2>&1 | head -5"

## Concepts
- osascript, Calendar app, event summary

_Importance: 7 · Confidence: 0.9_
