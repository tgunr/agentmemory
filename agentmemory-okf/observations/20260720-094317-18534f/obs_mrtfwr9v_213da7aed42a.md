---
type: Observation
title: skill_manage
description: {"action":"patch","name":"agentmemory-hermes-integration","new_string":"| 110+ sessions all stuck `status: active` | No…
resource: agentmemory://observation/obs_mrtfwr9v_213da7aed42a
tags: ["observation"]
timestamp: 2026-07-20T16:29:34.865431+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 0.3
---
# Summary

{"action":"patch","name":"agentmemory-hermes-integration","new_string":"| 110+ sessions all stuck `status: active` | Nothing fires session-end | Close stale sessions: `POST /agentmemory/session/end {\"sessionId\":\"<id>\"}` for each stale `active` session; NEVER close the CURRENT live session. This is idempotent and safe. |\n| Every route 404 (even `/livez`, `/health`) after a `brew upgrade` | Na…

_Importance: 5 · Confidence: 0.3_
