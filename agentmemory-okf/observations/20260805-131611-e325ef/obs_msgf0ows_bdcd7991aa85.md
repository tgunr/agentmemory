---
type: file_edit
title: Skill manage: hermes-cron configuration edit
description: Edit Hermes scheduled jobs (\"cron tasks\") using the `hermes-cron` tool and `~/.hermes/cron/jobs.json` file.
resource: agentmemory://observation/obs_msgf0ows_bdcd7991aa85
tags: ["inference config drifted", "Spend guardrail", "Cron job", "file_edit"]
timestamp: 2026-08-05T18:23:20.855313+00:00
source: agentmemory
session_id: 20260805_131611_e325ef
importance: 6
confidence: 0.9
---
# Summary

The `hermes-cron` skill edits the `jobs.json` file to resolve silent failures caused by the spend-guardrail in Hermes scheduled cron jobs.

## Facts
- The skill manages Hermes scheduled cron jobs and fixes silent failures by editing the `jobs.json` file.
- The update tool does not persist provider/model into snapshot fields, but manually editing the file directly can fix the issue.

## Concepts
- inference config drifted
- Spend guardrail
- Cron job

## Files
- `/Users/<you>/.hermes/cron/jobs.json`

_Importance: 6 · Confidence: 0.9_
