---
type: Observation
title: terminal
description: {"command":"echo \"### exact BB home chat GUID/identifier via API ###\"\nPW=\"$(grep -i '^BLUEBUBBLES_PASSWORD=' ~/.her…
resource: agentmemory://observation/obs_mrtga0ie_1b091332d57e
tags: ["observation"]
timestamp: 2026-07-20T16:39:53.361740+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 0.3
---
# Summary

{"command":"echo \"### exact BB home chat GUID/identifier via API ###\"\nPW=\"$(grep -i '^BLUEBUBBLES_PASSWORD=' ~/.hermes/.env 2>/dev/null | head -1 | cut -d= -f2-)\"\nB=http://localhost:1234\ncurl -s -X POST \"$B/api/v1/chat/query?password=$PW\" -H 'Content-Type: application/json' -d '{\"limit\":50}' \\\n | python3 -c \"\nimport sys,json\nd=json.load(sys.stdin)\nfor c in (d.get('data') or []):\…

_Importance: 5 · Confidence: 0.3_
