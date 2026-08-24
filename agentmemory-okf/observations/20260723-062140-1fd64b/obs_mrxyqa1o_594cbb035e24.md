---
type: file_edit
title: Agent Memory Health Test
description: Curl tests with launchctl unload/load operations in the background.
resource: agentmemory://observation/obs_mrxyqa1o_594cbb035e24
tags: ["file_edit"]
timestamp: 2026-07-23T20:27:30.009827+00:00
source: agentmemory
session_id: 20260723_062140_1fd64b
importance: 7
confidence: 0.75
---
# Summary

The tool has performed the agent memory health test. It retrieved data from /dev/null and wrote data to JSON files.

## Facts
- Total calls for mem::compress: 4184, success count: 3675
- Total calls for mem::summarize: 60, success count: 60

## Files
- `/tmp/health2.json`

_Importance: 7 · Confidence: 0.75_
