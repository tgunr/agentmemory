---
type: file_edit
title: Curl to json tool with token
description: Fetching plugin providers from API
resource: agentmemory://observation/obs_ms0kuaw7_ce50ddb45139
tags: ["API endpoint not found", "file_edit"]
timestamp: 2026-07-25T16:22:01.636799+00:00
source: agentmemory
session_id: 20260725_111430_873a56
importance: 8
confidence: 0.9
---
# Summary

The agent ran a curl command to fetch plugin providers from the API, but encountered an error reading that no such endpoint exists.

## Facts
- Command used: curl -s -m 10 -H \"Authorization: Bearer ${TOKEN}\" \"http://127.0.0.1:9119/api/dashboard/plugin-providers?profile=ai\"/>

## Concepts
- API endpoint not found

_Importance: 8 · Confidence: 0.9_
