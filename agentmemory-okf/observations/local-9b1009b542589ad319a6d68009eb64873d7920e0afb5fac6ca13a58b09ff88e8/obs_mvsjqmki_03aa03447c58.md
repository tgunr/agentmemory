---
type: file_edit
title: Pruning package dependencies
description: Pruning apt on a Debian/PVE host to improve package performance
resource: agentmemory://observation/obs_mvsjqmki_03aa03447c58
tags: ["package dependency management", "file_edit"]
timestamp: 2026-10-28T20:07:50.457212+00:00
source: agentmemory
session_id: local-9b1009b542589ad319a6d68009eb64873d7920e0afb5fac6ca13a58b09ff88e8
importance: 7
confidence: 0.9
---
# Summary

This observation details the process of pruning package dependencies on a Debian/PVE host to improve performance. The tool utilizes brew to normalize package names and compare against apt-mark showmanual to identify unnecessary packages. The pruning process is then carried out using apt-cache rdepends and dpkg-query to remove packages that do not have dependents.

## Facts
- Using brew to normalize package names and compare against apt-mark showmanual
- Removing unnecessary packages using apt-cache rdepends and dpkg-query

## Concepts
- package dependency management

## Files
- `references/package-pruning.md`

_Importance: 7 · Confidence: 0.9_
