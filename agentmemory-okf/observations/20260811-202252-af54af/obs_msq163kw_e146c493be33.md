---
type: file_edit
title: Pitfalls of skill manage integration with AgentMemory
description: Danger of misusing REST vs hooks for lesson posting
resource: agentmemory://observation/obs_msq163kw_e146c493be33
tags: ["file_edit"]
timestamp: 2026-08-12T11:53:20.284915+00:00
source: agentmemory
session_id: 20260811_202252_af54af
importance: 8
confidence: 0.75
---
# Summary

The integration of skill manage with AgentMemory poses risks if not done correctly. Misusing REST API for lesson posting may lead to inconsistent data or authentication issues, such as those encountered during this patch attempt.

## Facts
- The user posted 3 lessons using the `POST /agentmemory/lessons` endpoint, causing a sudden increase in lessons displayed.
- Autonomous curation is restricted from certain skills, including 'kilo-agentmemory-integration', until adopted by an authorized curator.

_Importance: 8 · Confidence: 0.75_
