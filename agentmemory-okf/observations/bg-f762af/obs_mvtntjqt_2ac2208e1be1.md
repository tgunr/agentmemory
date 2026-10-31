---
type: file_edit
title: Manage scheduled cron jobs
description: No context available
resource: agentmemory://observation/obs_mvtntjqt_2ac2208e1be1
tags: ["cron job management", "file_edit"]
timestamp: 2026-10-29T14:49:51.409276+00:00
source: agentmemory
session_id: bg_f762af
importance: 7
confidence: 1
---
# Summary

Manage scheduled cron jobs with various options such as recurring intervals, one-shot schedules, natural day/time, and cron syntax. These schedules can be applied to manage jobs such as 'manage scheduled cron jobs' in the main agent model.

## Facts
- Schedule forms: (1) recurring interval — '30m', 'every 2h', 'every hour' (EVERY 30 minutes / 2 hours / hour, forever by default');
- Schedule forms: (2) explicit one-shot by duration — 'in 30m', 'in 2h';
- Schedule forms: (3) natural day/time — 'every monday 9am', 'weekdays at 9am', 'every day at 9am';
- Schedule forms: (4) cron syntax — '0 9 * * *';
- Schedule forms: (5) absolute one-shot — ISO timestamp '2026-06-01T09:00:00';

## Concepts
- cron job management

## Files
- `/user/home/agent/script/cronJobManage.js`

_Importance: 7 · Confidence: 1_
