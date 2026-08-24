---
type: file_edit
title: OKF mirror integration
description: Nothing special today.
resource: agentmemory://observation/obs_mrvz8cye_b13368599f37
tags: ["git-diffable mirror", "file_edit"]
timestamp: 2026-07-22T11:06:01.234156+00:00
source: agentmemory
session_id: 20260722_052513_8901df
importance: 8
confidence: 0.9
---
# Summary

The OKF mirror integration was successful. The current version of the mirror can be found at &#x27;references/okf-mirror.md&#x27;. A cron job runs nightly to update the submodule. Local `file://` transport is blocked by default in git ≥2.38 — pass `protocol.file.allow=always`. .

## Facts
- The OKF mirror is an automated AgentMemory → OKF submodule.
- AgentMemory stays the live engine; OKF is the git-diffable mirror.

## Concepts
- git-diffable mirror

## Files
- `references/okf-mirror.md`

_Importance: 8 · Confidence: 0.9_
