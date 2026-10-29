---
type: CommandRun
title: Nftables log configuration and scan
description: Nftables log configuration using logrotate
resource: agentmemory://observation/obs_mvt5sa8o_464ff83462d6
tags: ["nftables configuration", "commandrun"]
timestamp: 2026-10-29T06:24:59.346468+00:00
source: agentmemory
session_id: 20261029_010915_e2b06b
importance: 8
confidence: 0.9
---
# Summary

The tool has run a command that updated and configured nftables logs using logrotate. This includes a weekly rotation of logs, compression, and notifying when logs are missing or empty.

## Facts
- Command executed successfully with an exit code of 0
- nftables logs are configured to rotate weekly, compress, and notify when missing or empty

## Concepts
- nftables configuration

## Files
- `/etc/logrotate.d/nftables-log`

_Importance: 8 · Confidence: 0.9_
