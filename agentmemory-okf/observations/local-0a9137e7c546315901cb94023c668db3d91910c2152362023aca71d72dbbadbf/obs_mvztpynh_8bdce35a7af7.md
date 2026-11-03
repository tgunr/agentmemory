---
type: file_edit
title: SSH Command Update Manager
description: No specific context provided
resource: agentmemory://observation/obs_mvztpynh_8bdce35a7af7
tags: ["Update Manager", "SQL query", "file_edit"]
timestamp: 2026-11-02T22:21:38.857040+00:00
source: agentmemory
session_id: local-0a9137e7c546315901cb94023c668db3d91910c2152362023aca71d72dbbadbf
importance: 5
confidence: 0.9
---
# Summary

The script updated the Update Manager by retrieving and executing SQL queries.

## Facts
- Command executed on terminal: `ssh root@192.168.88.230 "sed -n '190,230p' /var/www/html/admin/libraries/Builtin/UpdateManager.php; echo '=== kvstore'; mysql -N asterisk -e \\\"select module,id,key,value from kvstore where key like '%update%' or key like '%period%' or key like '%every%' limit 20;\\\" 2>&1 | head -20\""

## Concepts
- Update Manager
- SQL query

## Files
- `/var/www/html/admin/libraries/Builtin/UpdateManager.php`

_Importance: 5 · Confidence: 0.9_
