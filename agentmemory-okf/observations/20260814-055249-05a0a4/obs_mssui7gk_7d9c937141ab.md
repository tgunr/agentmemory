---
type: CommandRun
title: Error while killing gateway
description: 
resource: agentmemory://observation/obs_mssui7gk_7d9c937141ab
tags: ["sigterm issue, gateway process", "commandrun"]
timestamp: 2026-08-14T11:10:06.398277+00:00
source: agentmemory
session_id: 20260814_055249_05a0a4
importance: 5
confidence: 0.9
---
# Summary

The attempt to kill a gateway process failed due to the signal term propagation issue, and an error message was produced.

## Facts
- Command: echo \\&quot;killing gateway 14583 (KeepAlive will respawn clean)\\&quot;; kill 14583 2>/dev/null;
               sleep 4;
               echo \\&quot;post-kill: new gateway pid=($(pgrep -fl &#39;hermes_cli.main gateway run&#39; | head -1 | awk \\{print \$1}\\}))\\&quot;;
- Exit Code: 1

## Concepts
- sigterm issue, gateway process

_Importance: 5 · Confidence: 0.9_
