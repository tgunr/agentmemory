---
type: CommandRun
title: Audit Hermes profiles, cron jobs, and session database
description: Scanning ~/.hermes for ticker markers, state.db session stats, and profile registry
resource: agentmemory://observation/obs_mrq7nwq7_e816e18c293a
tags: ["Hermes configuration profiles", "Cron job scheduling and heartbeats", "SQLite state database", "Session management", "commandrun"]
timestamp: 2026-07-18T10:15:26.572412+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 4
confidence: 1
---
# Summary

Executed a diagnostic script across the ~/.hermes directory to audit cron job distribution, ticker heartbeat presence, and session database health. Found that only a few profiles have active jobs while most have ticker markers, and identified that 51 out of 188 sessions in the top-level state.db lack titles.

## Facts
- Only 2 profiles (ai, pveroot) have cron jobs (1 each), root has 0 jobs
- Ticker/heartbeat markers present in 8 out of 9 scanned profile directories
- Top-level state.db contains 188 total sessions, 51 of which are untitled
- 9 profile directories exist: ai, cc, default, develop, ollama, personal, pveroot, ranch, shop
- config.yaml contains the string 'jo'

## Concepts
- Hermes configuration profiles
- Cron job scheduling and heartbeats
- SQLite state database
- Session management

## Files
- `/Users/davec/.hermes/state.db`
- `/Users/davec/.hermes/config.yaml`
- `/Users/davec/.hermes/profiles/*/cron/jobs.json`
- `/Users/davec/.hermes/profiles/*/cron/ticker_heartbeat`
- `/Users/davec/.hermes/profiles/*/cron/ticker_last_success`

_Importance: 4 · Confidence: 1_
