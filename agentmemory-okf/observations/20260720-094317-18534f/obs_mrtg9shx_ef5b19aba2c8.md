---
type: Observation
title: terminal
description: {"command":"cd /tmp\nif gh repo view tgunr/agentmemory-okf >/dev/null 2>&1; then\n  echo \"REPO_EXISTS\"\nelse\n  gh re…
resource: agentmemory://observation/obs_mrtg9shx_ef5b19aba2c8
tags: ["observation"]
timestamp: 2026-07-20T16:39:42.977460+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 0.3
---
# Summary

{"command":"cd /tmp\nif gh repo view tgunr/agentmemory-okf >/dev/null 2>&1; then\n  echo \"REPO_EXISTS\"\nelse\n  gh repo create agentmemory-okf --private --description \"OKF markdown mirror of AgentMemory (submodule)\" --confirm 2>&1 | tail -3\n  echo \"REPO_CREATED\"\nfi\necho \"--- details ---\"\ngh repo view tgunr/agentmemory-okf --json name,url,visibility,sshUrl 2>&1 | head -20"} | {"output"…

_Importance: 5 · Confidence: 0.3_
