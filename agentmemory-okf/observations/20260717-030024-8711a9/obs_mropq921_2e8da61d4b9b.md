---
type: file_edit
title: Skill patch failed: 118 matches for old_string
description: Attempted update to hermes-service-debugging skill checklist
resource: agentmemory://observation/obs_mropq921_2e8da61d4b9b
tags: ["skill management", "patch uniqueness", "observation hook testing", "worker process staleness", "post_tool_call observation", "file_edit"]
timestamp: 2026-07-17T09:05:36.598815+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 5
confidence: 1
---
# Summary

The patch tried to expand the debugging checklist in the hermes-service-debugging skill, but the old_string was too short and appeared 118 times, so the tool could not identify a unique replacement target.
    To proceed, the caller must include surrounding context or set replace_all to update every matching checklist item.

## Facts
- Tool skill_manage action=patch on skill "hermes-service-debugging" returned success=false
- old_string was a single checklist item: "- [ ] `bash scripts/verify-agentmemory.sh` passes end-to-end ..."
- new_string intended to add two extra checks: verify-observe-hooktype.sh and a single fresh worker check
- Failure reason: "Found 118 matches for old_string. Provide more context to make it unique, or use replace_all=True."
- Skill metadata: version 1.7.0, MIT license, tags include debugging, hermes-agent, services, port-conflicts, data-loading, native-modules

## Concepts
- skill management
- patch uniqueness
- observation hook testing
- worker process staleness
- post_tool_call observation

_Importance: 5 · Confidence: 1_
