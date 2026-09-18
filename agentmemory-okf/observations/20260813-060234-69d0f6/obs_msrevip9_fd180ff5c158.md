---
type: CommandRun
title: Post Tool Call
description: 
resource: agentmemory://observation/obs_msrevip9_fd180ff5c158
tags: ["npm package installation", "Bcrypt library verification", "commandrun"]
timestamp: 2026-08-13T11:04:47.467221+00:00
source: agentmemory
session_id: 20260813_060234_69d0f6
importance: 6
confidence: 0.9
---
# Summary

Post Hook command was triggered on terminal. The Post Hook command ran successfully while testing for supported npm packages (node &amp; bcrypt), with some compatibility issues detected.

## Facts
- The output of the Post Hook command is: Pseudo-terminal will not be allocated because stdin is not a terminal...\r\nLinux pve 6.8.12-2-pve #1 SMP PREEMPT_DYNAMIC PMX 6.8.12-2 (2024-09-05T10:03Z) x86_64\r\n...\r
- The output of the Node.js BCrypt test is: bcrypt OK, bcryptjs NO

## Concepts
- npm package installation
- Bcrypt library verification

## Files
- `/path/to/posthook.sh`
- `/path/to/node.sh`

_Importance: 6 · Confidence: 0.9_
