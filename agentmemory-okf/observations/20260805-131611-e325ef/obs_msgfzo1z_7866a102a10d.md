---
type: file_edit
title: Hermes Cron Troubleshooting Skill Manage Tool Call
description: Diagnose and fix Hermes cron jobs that fail or stop firing — the "global inference config drifted" guardrail, the fact that `cronjob update` cannot pin provider/model snapshots (edit jobs.json directl
resource: agentmemory://observation/obs_msgfzo1z_7866a102a10d
tags: ["YAML parse error", "Cron job failures", "file_edit"]
timestamp: 2026-08-05T18:50:32.707091+00:00
source: agentmemory
session_id: 20260805_131611_e325ef
importance: 6
confidence: 0.9
---
# Summary

The skill manage tool was used to create a new skill called hermes-cron-troubleshooting, but failed due to a YAML frontmatter parse error. The error occurred on line 3, column 309, and is likely related to the `mapping values are not allowed here` syntax.

## Facts
- Recurring Hermes cron jobs (e.g. \"Apple FM Serve\", the `okf-mirror` jobs) fail in two recurring ways.

## Concepts
- YAML parse error
- Cron job failures

## Files
- `/~/.hermes/cron/jobs.json`
- `/cron/output/<timestamp>.md`

_Importance: 6 · Confidence: 0.9_
