---
type: file_edit
title: ssh publickey auth failure
description: Automated script created successful publickey authentication
resource: agentmemory://observation/obs_mvzr1thu_cb5dc7434784
tags: ["ssh publickey authentication", "publickey password authentication", "file_edit"]
timestamp: 2026-11-02T21:06:53.198298+00:00
source: agentmemory
session_id: local-0a9137e7c546315901cb94023c668db3d91910c2152362023aca71d72dbbadbf
importance: 7
confidence: 0.9
---
# Summary

The script was able to connect to the server using publickey authentication, but the target user was locked out after three incorrect passwords. The user needs to check ownership/mode of the target path (`ls -la`) and prefer a user-writable location.

## Facts
- ssh command to connect to 192.168.88.230

## Concepts
- ssh publickey authentication
- publickey password authentication

## Files
- `/tmp/voipboot/vmssh.exp`
- `/root/.ssh/authorized_keys`

_Importance: 7 · Confidence: 0.9_
