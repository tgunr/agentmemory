---
type: file_edit
title: Deleted and logged login file
description: Used nohup hermes mcp login
resource: agentmemory://observation/obs_mvxn53uj_a127ae5b4006
tags: ["hermes mcp login", "file_edit"]
timestamp: 2026-11-01T09:41:55.766374+00:00
source: agentmemory
session_id: local-0d7f2c764086a9aea06abb3f72b0b99f17f46f390e6fd02f93edf51349b195a2
importance: 8
confidence: 0.9
---
# Summary

The command logged into NextCloud using nohup and deleted the login file.

## Facts
- Cmd: cd /Users/davec && rm -f /tmp/nc-login.log && nohup hermes mcp login NextCloud > /tmp/nc-login.log 2>&1 &amp; sleep 1; echo launched

## Concepts
- hermes mcp login

## Files
- `/tmp/nc-login.log`

_Importance: 8 · Confidence: 0.9_
