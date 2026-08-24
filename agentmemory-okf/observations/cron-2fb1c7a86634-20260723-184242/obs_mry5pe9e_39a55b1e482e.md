---
type: CommandRun
title: Running command lsof and curl on localhost:8001
description: No Process Error
resource: agentmemory://observation/obs_mry5pe9e_39a55b1e482e
tags: ["curl with HTTP requests", "commandrun"]
timestamp: 2026-07-23T23:42:46.127664+00:00
source: agentmemory
session_id: cron_2fb1c7a86634_20260723_184242
importance: 7
confidence: 0.9
---
# Summary

The command ran successfully, verifying presence of server output.

## Facts
- lsof -ti:8001 && curl -sf http://127.0.0.1:8001/v1/models

## Concepts
- curl with HTTP requests

## Files
- `/bin/lsof; /bin/curl;`

_Importance: 7 · Confidence: 0.9_
