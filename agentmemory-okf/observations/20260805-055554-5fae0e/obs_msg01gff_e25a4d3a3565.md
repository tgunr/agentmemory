---
type: file_edit
title: Debug subdomain/reverse-proxy outage
description: Diagnose and detect issues with public hostname/forwarding and backend process
resource: agentmemory://observation/obs_msg01gff_e25a4d3a3565
tags: ["reverse-proxy", "file_edit"]
timestamp: 2026-08-05T11:24:02.279139+00:00
source: agentmemory
session_id: 20260805_055554_5fae0e
importance: 5
confidence: 1
---
# Summary

Post-tool-call event detected. The skill.manage tool created a new skill for diagnosing subdomain/reverse-proxy outages. The error included an issue with description length, but no further details were reported.

## Facts
- Post-tool-call event detected
- Tool: skill_manage, action: create, category: devops
- Error detected, tool report indicates Description is 63 chars — new skills must fit the 60-char system-prompt budget...

## Concepts
- reverse-proxy

## Files
- `/home/skila/tools/skill-manage.yaml`

_Importance: 5 · Confidence: 1_
