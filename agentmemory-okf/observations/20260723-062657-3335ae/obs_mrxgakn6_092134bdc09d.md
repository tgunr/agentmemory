---
type: file_edit
title: Troubleshooting Hermes Desktop issues using skill_view tool
description: Loading specific commands to check desktop UI bugs and data reception.
resource: agentmemory://observation/obs_mrxgakn6_092134bdc09d
tags: ["file_edit"]
timestamp: 2026-07-23T11:51:22.487221+00:00
source: agentmemory
session_id: 20260723_062657_3335ae
importance: 5
confidence: 0.75
---
# Summary

The skill_view tool needs care when editing the Hermes Desktop app, as incorrect usage can lead to corrupted files. This observation aims to provide insights into troubleshooting methods for this particular desktop application, emphasizing specific file paths and commands to follow.

## Facts
- The `hermes-desktop` app requires careful use of the `skill_view` tool for fixes, as it doesn't follow a full electron-builder run.
- The command sequence is usually built using `npm run dist:mac` and involves copying an old assembly archive to a backup location while replacing it with an uncomputed assembly archive.

_Importance: 5 · Confidence: 0.75_
