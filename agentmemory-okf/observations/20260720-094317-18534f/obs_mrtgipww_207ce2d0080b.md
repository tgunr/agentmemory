---
type: Observation
title: terminal
description: {"command":"echo \"### is Ollama reachable (local, fast, no network latency)? ###\"\ncurl -s -o /dev/null -w \"ollama h…
resource: agentmemory://observation/obs_mrtgipww_207ce2d0080b
tags: ["observation"]
timestamp: 2026-07-20T16:46:39.533293+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 0.3
---
# Summary

{"command":"echo \"### is Ollama reachable (local, fast, no network latency)? ###\"\ncurl -s -o /dev/null -w \"ollama http=%{http_code}\\n\" --max-time 4 http://127.0.0.1:11434/api/tags 2>&1\necho \"--- models available locally ---\"\ncurl -s --max-time 4 http://127.0.0.1:11434/api/tags 2>/dev/null | python3 -c \"import sys,json; d=json.load(sys.stdin); [print(' -',m['name']) for m in d.get('mode…

_Importance: 5 · Confidence: 0.3_
