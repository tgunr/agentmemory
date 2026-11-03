---
type: file_edit
title: RSync filter setup
description: Set up rsync filter to exclude .rsync-filter files
resource: agentmemory://observation/obs_mvzk4wyk_2fd15ba55854
tags: ["rsync filtering", "file_edit"]
timestamp: 2026-11-02T17:53:20.343846+00:00
source: agentmemory
session_id: local-84924181f2b8f5385af1d974cbcb819f851702ed9d8cc3ec9f480e0336829d57
importance: 6
confidence: 0.9
---
# Summary

Tool terminal was used to call rsyncf, a custom command-line tool, which set up an rsync filter to exclude .rsync-filter files. The output indicates the tool is working as expected.

## Facts
- Excluded files: /etc/rsync.excludes, ./.rsync.excludes
- RSync binary path: /usr/local/bin/rsync

## Concepts
- rsync filtering

## Files
- `/usr/local/bin/rsync`

_Importance: 6 · Confidence: 0.9_
