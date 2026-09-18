---
type: CommandRun
title: Export agent memory to OKF bundle and validate conformance
description: Ran okf_bridge.py to export 1830 observations into 2017 markdown files, with 2 minor frontmatter violations.
resource: agentmemory://observation/obs_mrtczyrh_6f9d8dffd7d9
tags: ["memory export pipeline", "OKF format", "markdown frontmatter validation", "agent memory architecture", "commandrun"]
timestamp: 2026-07-20T15:08:05.691277+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 1
---
# Summary

Executed okf_bridge.py to export agent memory into an OKF-formatted markdown bundle. Validation confirmed 2015 of 2017 files have correct YAML frontmatter and type fields, with only two index/log files missing frontmatter.

## Facts
- Command executed in /Volumes/AI/Servers/agentmemory-kilo-hooks
- Exported 111 sessions, 1830 observations, 3 memories, 79 index entries
- Generated 2017 markdown files in /tmp/am_okf_bundle
- Conformance check found 2 files missing frontmatter: log.md and graph/index.md
- Root index.md successfully includes okf_version field

## Concepts
- memory export pipeline
- OKF format
- markdown frontmatter validation
- agent memory architecture

## Files
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/okf_bridge.py`
- `/tmp/am_okf_bundle/log.md`
- `/tmp/am_okf_bundle/graph/index.md`
- `/tmp/am_okf_bundle/index.md`

_Importance: 5 · Confidence: 1_
