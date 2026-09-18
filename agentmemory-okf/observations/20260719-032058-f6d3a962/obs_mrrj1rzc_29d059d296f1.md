---
type: CommandRun
title: Check Hermes status and gateway help
description: Inspecting configured messaging platforms and gateway service management options
resource: agentmemory://observation/obs_mrrj1rzc_29d059d296f1
tags: ["Hermes gateway", "messaging platforms", "launchd service management", "shell hooks auto-accept", "commandrun"]
timestamp: 2026-07-19T08:21:55.557918+00:00
source: agentmemory
session_id: 20260719_032058_f6d3a962
importance: 4
confidence: 1
---
# Summary

The command checks the status of the Hermes application and its gateway service. The gateway is running via launchd with Telegram, Email, and BlueBubbles configured. The help output reveals gateway management subcommands and an --accept-hooks option for non-interactive shell hook approval.

## Facts
- Hermes gateway service is running (PID 30806) managed by launchd
- Configured messaging platforms: Telegram (home: 7451734548), Email, BlueBubbles (home: +193****0811)
- Unconfigured platforms include Discord, WhatsApp, Signal, Slack, SMS, DingTalk, Feishu, WeCom, Weixin, QQBot, Yuanbao
- Terminal backend is local with sudo disabled
- 8 active sessions, 0 scheduled jobs
- Gateway subcommands: run, start, stop, restart, status, install, uninstall, list, setup, migrate-legacy, enroll
- Gateway --accept-hooks flag auto-approves unseen shell hooks without TTY prompt (equivalent to HERMES_ACCEPT_HOOKS=1)

## Concepts
- Hermes gateway
- messaging platforms
- launchd service management
- shell hooks auto-accept

_Importance: 4 · Confidence: 1_
