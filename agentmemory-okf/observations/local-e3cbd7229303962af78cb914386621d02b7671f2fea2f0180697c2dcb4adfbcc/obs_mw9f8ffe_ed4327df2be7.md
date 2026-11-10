---
type: CommandRun
title: Sed command on specific folder
description: No additional context available
resource: agentmemory://observation/obs_mw9f8ffe_ed4327df2be7
tags: ["string transformation using "to-folder" function", "commandrun"]
timestamp: 2026-11-09T15:33:47.924023+00:00
source: agentmemory
session_id: local-e3cbd7229303962af78cb914386621d02b7671f2fea2f0180697c2dcb4adfbcc
importance: 7
confidence: 1
---
# Summary

The sed command was run on a specific folder, and the output provided a string transformation using the "to-folder" function.

## Facts
- Command: cd /Volumes/alpha/sources/FactorWork && sed -n '370,400p' folder/folder.1
- Output: to-folder ; ! Uses string to-folder from above
- Output: : string-to-folder-tree ( path -- folder )

## Concepts
- string transformation using "to-folder" function

_Importance: 7 · Confidence: 1_
