---
type: Error
title: Skill patch failed: read-before-write requirement not met
description: Agent attempted to patch bluebubbles-gateway skill reference without loading content first
resource: agentmemory://observation/obs_mrroun1k_c25bd0cdeaf4
tags: ["skill management system", "read-before-write enforcement", "BlueBubbles gateway diagnostics", "pytest environment variable isolation", "message loop detection", "error"]
timestamp: 2026-07-19T11:04:20.260790+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

The agent attempted to patch a skill reference file (bluebubbles-self-loop.md) to add diagnostic information about BlueBubbles gateway loop detection and test pitfalls. The operation was rejected because the system enforces a read-before-write requirement for skill files to ensure context is loaded before modifications. The agent must first call skill_view() to load the file content before retrying the patch operation.

## Facts
- Tool: skill_manage with action "patch" on file references/bluebubbles-self-loop.md
- Skill name: bluebubbles-gateway
- Error: "Refusing background curator patch... content has not been loaded in this review turn"
- System enforces _read_before_write_required: true for skill files
- Intended patch adds diagnostic steps for distinguishing real loops from stale processes, test-suite pitfalls for environment variable bleeding in pytest
- Resolution requires calling skill_view(name, file_path=...) before retrying the patch

## Concepts
- skill management system
- read-before-write enforcement
- BlueBubbles gateway diagnostics
- pytest environment variable isolation
- message loop detection

## Files
- `references/bluebubbles-self-loop.md`

_Importance: 4 · Confidence: 1_
