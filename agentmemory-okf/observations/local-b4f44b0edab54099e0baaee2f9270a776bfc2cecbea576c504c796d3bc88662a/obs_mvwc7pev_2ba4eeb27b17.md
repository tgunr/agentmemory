---
type: file_edit
title: Set context.engine = compressor
description: Run hermes config and grep config.yaml
resource: agentmemory://observation/obs_mvwc7pev_2ba4eeb27b17
tags: ["hermes config", "grep", "file_edit"]
timestamp: 2026-10-31T11:48:15.076175+00:00
source: agentmemory
session_id: local-b4f44b0edab54099e0baaee2f9270a776bfc2cecbea576c504c796d3bc88662a
importance: 6
confidence: 0.9
---
# Summary

The user edited the context.engine field of the hermes configuration and also inspected the value of this field.

## Facts
- Command output: <code>cd ~/.hermes && hermes config set context.engine compressor 2>&1 | tail -5; echo \"--- get ---\"; hermes config get context.engine; echo \"--- file ---\"; grep -n -A2 \"^context:\" config.yaml</code>
- CWD: /Users/davec/.hermes

## Concepts
- hermes config
- grep

## Files
- `/Users/davec/.hermes/config.yaml`

_Importance: 6 · Confidence: 0.9_
