---
type: file_edit
title: "Memory compression failure"
description: No operations were applied (batch is all-or-nothing).
resource: agentmemory://observation/obs_msg05xmw_95ee5579b051
tags: ["file_edit"]
timestamp: 2026-08-05T11:27:31.200126+00:00
source: agentmemory
session_id: 20260805_055554_5fae0e
importance: 5
confidence: 0.85
---
# Summary

The memory compression engine was unable to perform any operations due to the batch failing.

## Facts
- Current entries: .hermes/ and .startup/ are git repos.
- Shared KB: `~/sources/hermes-knowledge/skills` via `skills.external_dirs` in each profile that needs cross-profile skills.
- Previous entry: Hermes TWO installs on this Mac: (1) git ~/.hermes/hermes-agent = `hermes update` + CLI shim; (2) stale venv /Users/davec/.venv (hermes 0.18.2) runs hermes-webui dashboard (/Users/davec/hermes-webui).
- Previous entry: iOS builds: team D8BD4M78SW. Apple ID must be in Xcode Settings>Accounts or xcodebuild fails 'No Account'.

_Importance: 5 · Confidence: 0.85_
