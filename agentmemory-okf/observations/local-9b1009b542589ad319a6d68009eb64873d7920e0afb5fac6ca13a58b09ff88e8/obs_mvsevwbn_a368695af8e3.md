---
type: file_edit
title: Installed packages with epoch 100
description: dpkg-query search on packages with version 100
resource: agentmemory://observation/obs_mvsevwbn_a368695af8e3
tags: ["dpkg-query", "file_edit"]
timestamp: 2026-10-28T17:51:58.303702+00:00
source: agentmemory
session_id: local-9b1009b542589ad319a6d68009eb64873d7920e0afb5fac6ca13a58b09ff88e8
importance: 5
confidence: 0.9
---
# Summary

The tool executed a dpkg-query command to search for packages with a version of 100. The output indicates no packages were found. This is a routine query and does not impact the package index.

## Facts
- Package Version Status
- Dpkg-query command: dpkg-query -W -f\"\\${Package} \\${Version} \\${db:Status-Abbrev}\\n\" 2>/dev/null | awk \"\\$3 ~ /^ii/ && \\$2 ~ /:100:/ {print \\$1, \\$2}\"

## Concepts
- dpkg-query

## Files
- ``

_Importance: 5 · Confidence: 0.9_
