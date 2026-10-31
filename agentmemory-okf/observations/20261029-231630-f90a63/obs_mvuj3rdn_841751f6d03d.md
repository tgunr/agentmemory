---
type: file_edit
title: Updating Hermes agent
description: Update command executed
resource: agentmemory://observation/obs_mvuj3rdn_841751f6d03d
tags: ["update", "file_edit"]
timestamp: 2026-10-30T05:25:35.960148+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 7
confidence: 0.9
---
# Summary

The `process_manage` tool was used to update the Hermes agent with the command `ssh -o ConnectTimeout=10 davec@10.1.2.1 'cd ~/.hermes/hermes-agent && ~/.local/bin/hermes update --yes 2>&1 | tail -30'.

## Facts
- Process managed by session proc_c04da6385686 with command ssh -o ConnectTimeout=10 davec@10.1.2.1...

## Concepts
- update

## Files
- `~/.hermes/hermes-agent/hermes-Agent.conf`

_Importance: 7 · Confidence: 0.9_
