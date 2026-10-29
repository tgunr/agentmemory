---
type: file_edit
title: Syncoid Runner check
description: Check if syncoid-runner executable and up-to-date on target machine.
resource: agentmemory://observation/obs_mvt0bhj9_55b4ac8fbe10
tags: ["ssh script execution", "file_edit"]
timestamp: 2026-10-29T03:51:57.563411+00:00
source: agentmemory
session_id: 20261028_223908_69d0b0
importance: 7
confidence: 0.9
---
# Summary

The agent executed a bash script on the target machine using SSH, checking if the syncoid-runner executable exists and runs correctly. The target machine's syncoid-runner executable was found to exist and run.

## Facts
- Command used: ssh
- Timeout set to 60 seconds

## Concepts
- ssh script execution

## Files
- `/usr/local/bin/syncoid-runner`
- `/root/src/sanoid-master/syncoid-runner`
- `/alpha/sources/Linux/sanoid-master/syncoid-runner`

_Importance: 7 · Confidence: 0.9_
