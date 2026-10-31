---
type: file_edit
title: PVE upgrade details
description: Consequences of the PVE upgrade on various components
resource: agentmemory://observation/obs_mvtmvaos_9143ee816241
tags: ["PVE upgrade issues", "file_edit"]
timestamp: 2026-10-29T14:23:13.367347+00:00
source: agentmemory
session_id: local-c7c5873d431d7d884eadd2ed5ac73e4b7335c56d8d1e8df105a46ec6e3f2bce9
importance: 7
confidence: 0.9
---
# Summary

The PVE upgrade introduced several issues, including a drifting repo copy, an unfinished merge, and a failed HBA firmware installation. These issues require attention to prevent further problems.

## Facts
- The repo copy was from April 2025, and the deployed file had drifted 131 lines ahead.
- The repo has had an unfinished merge since 2026-05-31, which blocks committing the syncoid-runner fix.

## Concepts
- PVE upgrade issues

## Files
- `/Users/davec/pve-upgrade-2026-10-28.UPGRADE-2026-10-28.md`

_Importance: 7 · Confidence: 0.9_
