---
type: file_edit
title: Command backgrounding error with ssh
description: Warning about using '&' in foreground commands
resource: agentmemory://observation/obs_msrax4sw_d413e04a98e8
tags: ["Command backgrounding", "file_edit"]
timestamp: 2026-08-13T09:14:04.302104+00:00
source: agentmemory
session_id: 20260813_034821_7a6336
importance: 5
confidence: 1
---
# Summary

The command used '&' in the foreground, causing an error. The use of '*' as a background operator needs to be avoided.

## Facts
- Timestamp: 2026-08-13T09:14:04.302104+00:00
- Input command: ssh pve.root 'timeout 12 tcpdump -np -i podman5 -c 20 udp port 53 2>/dev/null' &amp;\nsleep 2\nssh pve.root 'timeout 8 podman exec docmost_docmost_1 node -e \"const d=require(\\\"dns\\\");d.lookup(\\\"redis\\\",()=>process.exit(0));setTimeout(()=>process.exit(1),6000)\"' &amp;\nwait
- Exit Code: -1

## Concepts
- Command backgrounding

_Importance: 5 · Confidence: 1_
