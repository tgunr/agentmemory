---
type: file_edit
title: Tune macOS TCP buffers for 10GbE
description: avoid single-stream throughput caps on macOS
resource: agentmemory://observation/obs_mvs73k1y_7bf69ecc6456
tags: ["TCP buffer tuning", "LaunchDaemon", "10GbE network", "file_edit"]
timestamp: 2026-10-28T14:13:58.723942+00:00
source: agentmemory
session_id: local-513b631d6a88dad15f29360760f1a97a48f656f26061d79b4c34dde2f8e62a99
importance: 7
confidence: 0.9
---
# Summary

Tuning macOS TCP buffers for 10GbE will help avoid single-stream throughput caps and improve overall network performance. The process involves creating a Launch Daemon and applying immediately, installing it for boot persistence, and verifying the changes.

## Facts
- macOS defaults to 128KB TCP send/recv buffers and 8MB maxsockbuf, capping single-stream throughput at ~2.3 Gbps on 10GbE.
- The static route on mini (for 10.1.1.0/24 via 10.1.2.1) is separate: `networksetup -setadditionalroutes Ethernet 10.1.1.0 255.255.255.0 10.1.2.1`

## Concepts
- TCP buffer tuning
- LaunchDaemon
- 10GbE network

## Files
- `/path/to/com.polymicro.tcp-tune.plist`

_Importance: 7 · Confidence: 0.9_
