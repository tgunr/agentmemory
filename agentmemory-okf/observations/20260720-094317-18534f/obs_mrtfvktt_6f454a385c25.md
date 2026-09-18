---
type: Observation
title: skill_manage
description: {"action":"patch","new_string":"4. **Sessions never close** — every session stays `status: active`; nothing fires sessi…
resource: agentmemory://observation/obs_mrtfvktt_6f454a385c25
tags: ["observation"]
timestamp: 2026-07-20T16:28:39.855463+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 0.3
---
# Summary

{"action":"patch","new_string":"4. **Sessions never close** — every session stays `status: active`; nothing fires session-end.\n   Corpus grows unbounded; add a hook or short cron to mark sessions `closed` after a TTL so the\n   viewer/API stays fast. Close via `POST /agentmemory/session/end {\\\"sessionId\\\":\\\"<id>\\\"}`;\n   never close the CURRENT live session.\n5. **REST worker dead after …

_Importance: 5 · Confidence: 0.3_
