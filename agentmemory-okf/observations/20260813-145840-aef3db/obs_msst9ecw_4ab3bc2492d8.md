---
type: FileRead
title: The output of the search for hermes plists in LaunchAgents
description: Looking for hermes-related jobs in launchctl list and hermes plists in ~/Library/LaunchAgents
resource: agentmemory://observation/obs_msst9ecw_4ab3bc2492d8
tags: ["Launchd", "Hermes gateway", "fileread"]
timestamp: 2026-08-14T10:35:15.821997+00:00
source: agentmemory
session_id: 20260813_145840_aef3db
importance: 5
confidence: 0.9
---
# Summary

During the search, we found a matching plugin named ai.hermes.webui-watchdog, but unfortunately, hermes-related jobs from other processes like hermes.gateway, hermes.webui and com.davec.hermes.gitautocommit were not found in launchctl list.

## Facts
- Read-only: find hermes launchd jobs found a matching plugin: ai.hermes.webui-watchdog.
- Hernes gateway, webui and gitautocommit plugins were not found in launchctl list.

## Concepts
- Launchd
- Hermes gateway

_Importance: 5 · Confidence: 0.9_
