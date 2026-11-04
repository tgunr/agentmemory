---
type: CommandRun
title: Run command on remote server
description: Execute PHP command via SSH
resource: agentmemory://observation/obs_mw0myt4c_8e50e66810c4
tags: ["SSH command execution", "commandrun"]
timestamp: 2026-11-03T12:00:20.456408+00:00
source: agentmemory
session_id: local-0a9137e7c546315901cb94023c668db3d91910c2152362023aca71d72dbbadbf
importance: 5
confidence: 0.9
---
# Summary

The command on the remote server was executed successfully using SSH. The output includes PHP code and database query results.

## Facts
- SSH connection established to 192.168.88.230
- Command executed: head -40 /var/www/html/admin/modules/core/page.extensions.php; echo === ; mysql -N asterisk -e "select username,password_sha1,sections from ampusers" ; echo === userman; mysql -N asterisk -e "select id,username,default_extension,auth from userman_users"

## Concepts
- SSH command execution

## Files
- ``

_Importance: 5 · Confidence: 0.9_
