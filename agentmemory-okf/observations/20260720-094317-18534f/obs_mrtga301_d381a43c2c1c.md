---
type: Observation
title: terminal
description: {"command":"cd /Volumes/AI/agentmemory/agentmemory-okf\necho \"### re-point origin -> GitHub, keep local bare as 'local…
resource: agentmemory://observation/obs_mrtga301_d381a43c2c1c
tags: ["observation"]
timestamp: 2026-07-20T16:39:56.590430+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 0.3
---
# Summary

{"command":"cd /Volumes/AI/agentmemory/agentmemory-okf\necho \"### re-point origin -> GitHub, keep local bare as 'local' ###\"\ngit remote remove origin 2>/dev/null || true\ngit remote add origin git@github.com:tgunr/agentmemory-okf.git\ngit remote add local /Volumes/AI/agentmemory-okf.git 2>/dev/null || true\necho \"--- remotes ---\"\ngit remote -v\necho\necho \"### push to GitHub (verify upstre…

_Importance: 5 · Confidence: 0.3_
