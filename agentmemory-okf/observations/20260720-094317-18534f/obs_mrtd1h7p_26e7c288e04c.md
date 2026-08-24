---
type: FileRead
title: read_file
description: {"path":"/Users/davec/.agentmemory/launchd-wrapper.sh"}
resource: agentmemory://observation/obs_mrtd1h7p_26e7c288e04c
tags: ["fileread"]
timestamp: 2026-07-20T15:09:16.258525+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 0.3
---
# Summary

{"path":"/Users/davec/.agentmemory/launchd-wrapper.sh"} | {"content": "1|#!/bin/bash\n2|# LaunchAgent wrapper for agentmemory dev build.\n3|# Runs the iii-engine directly with the dev-repo config. The iii-exec worker\n4|# inside that config spawns node dist/index.mjs, which registers the REST API\n5|# and starts the viewer. This avoids the double-worker race caused by running\n6|# dist/cli.mjs (w…

## Files
- `/Users/davec/.agentmemory/launchd-wrapper.sh`

_Importance: 5 · Confidence: 0.3_
