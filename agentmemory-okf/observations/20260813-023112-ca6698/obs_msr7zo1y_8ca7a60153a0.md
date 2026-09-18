---
type: CommandRun
title: Multibuggy fix - API server adapter config option not honored
description: Maintenance task
resource: agentmemory://observation/obs_msr7zo1y_8ca7a60153a0
tags: ["API configuration", "commandrun"]
timestamp: 2026-08-13T07:52:03.712624+00:00
source: agentmemory
session_id: 20260813_023112_ca6698
importance: 7
confidence: 0.9
---
# Summary

This issue was reported after testing in the CLI path but no similar behavior is seen when using the API server adapter. The test involved running a test case with reasoning enabled, restarting Hermes and verifying if the reasoning output appears from the API endpoint.

## Facts
- API server adapter does not honor display.show_reasoning config option

## Concepts
- API configuration

_Importance: 7 · Confidence: 0.9_
