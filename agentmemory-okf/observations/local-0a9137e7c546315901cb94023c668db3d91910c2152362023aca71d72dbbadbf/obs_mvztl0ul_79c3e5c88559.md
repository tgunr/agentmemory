---
type: file_edit
title: InspectUsermanClass
description: No specific context provided
resource: agentmemory://observation/obs_mvztl0ul_79c3e5c88559
tags: ["React hooks", "file_edit"]
timestamp: 2026-11-02T22:17:48.425013+00:00
source: agentmemory
session_id: local-0a9137e7c546315901cb94023c668db3d91910c2152362023aca71d72dbbadbf
importance: 4
confidence: 1
---
# Summary

Executed terminal command to inspect Userman class file, revealing public function definition.

## Facts
- Tool: terminal
- Command: ssh root@192.168.88.230 \"grep -n 'public function addUser' -A 6 /var/www/html/admin/modules/userman/Userman.class.php | head -20\"\
- Output: Warning: Permanently added '192.168.88.230' (ED25519) to the list of known hosts.\r\n2053:public function addUserByDirectory($directory, $username, $password, $default='none', $description=null, $extraData=[], $encrypt = true) {\n2054-\t\t...

## Concepts
- React hooks

## Files
- `/var/www/html/admin/modules/userman/Userman.class.php`

_Importance: 4 · Confidence: 1_
