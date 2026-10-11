---
type: CommandRun
title: Kilo usage chip
description: Displays the compact provider-only readout for the Kilo usage meter
resource: agentmemory://observation/obs_mv2pvxj2_04c35b53e531
tags: ["Kilo model", "Electron IPC", "commandrun"]
timestamp: 2026-10-10T18:17:55.067148+00:00
source: agentmemory
session_id: 20261010_125129_b40f5d
importance: 4
confidence: 0.9
---
# Summary

The Kilo usage chip displays the compact provider-only readout, using the collector feed and Electron IPC. The chip hides itself for sessions not using Kilo.

## Facts
- Cron collector feeds JSON data to this chip
- Chip reads the JSON feed every 30s via Electron IPC

## Concepts
- Kilo model
- Electron IPC

## Files
- `/Users/davec/.hermes/scripts/kilo_usage_status.json`

_Importance: 4 · Confidence: 0.9_
