---
type: FileRead
title: curl request in Python script
description: Grabbing session data from API endpoint
resource: agentmemory://observation/obs_mrulki5a_0cf87e4c002b
tags: ["curl", "Pipeline execution", "fileread"]
timestamp: 2026-07-21T11:55:47.034101+00:00
source: agentmemory
session_id: 20260721_065448_4675e7
importance: 7
confidence: 0.9
---
# Summary

AgentMemory script executed a cURL request to fetch session data from an API endpoint, then used Python to process and print the results.

## Facts
- Tool: terminal
- Command executed: curl -s -H \"Authorization: Bearer ${SECRET}\" http://127.0.0.1:3111/agentmemory/sessions > /tmp/am_sessions.json ||& python3 -c \"import json; d=json.load(open('/tmp/am_segments.json')); print('total=',len(d.get('sessions',[]))); print('active=',[r.get('status') for r in d.get('sessions',[])].count('active'))\"

## Concepts
- curl
- Pipeline execution

## Files
- `/tmp/am_sessions.json`

_Importance: 7 · Confidence: 0.9_
