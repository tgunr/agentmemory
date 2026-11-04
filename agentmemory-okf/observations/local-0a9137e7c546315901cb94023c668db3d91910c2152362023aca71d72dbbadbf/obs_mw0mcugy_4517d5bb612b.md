---
type: CommandRun
title: Tool "ssh" executed with command
description: Running a command on a specific server
resource: agentmemory://observation/obs_mw0mcugy_4517d5bb612b
tags: ["pjsip module", "commandrun"]
timestamp: 2026-11-03T11:43:15.775273+00:00
source: agentmemory
session_id: local-0a9137e7c546315901cb94023c668db3d91910c2152362023aca71d72dbbadbf
importance: 6
confidence: 0.9
---
# Summary

The command was successfully executed and its output is shown below. This output includes a list of files containing pjsip modules, indicating a potential module search result.

## Facts
- Tool: terminal
- Input command: ssh root@192.168.88.230 'find /var/www/html/admin/modules/core -iname '*pjsip*' | head; echo ===; grep -n "public function addTrunk" -A 60 /var/www/html/admin/modules/core/drivers/pjsip/Pjsip.class.php 2>/dev/null | head -80'

## Concepts
- pjsip module

## Files
- `/var/www/html/admin/modules/core/sip_to_pjsip`
- `/var/www/html/admin/modules/core/sip_to_pjsip/sip_to_pjsip.py`
- `/var/www/html/admin.modules/core/Console/Convert2pjsip.class.php`
- `/var/www/html/admin/modules/core/functions.inc/drivers/PJSip.class.php`
- `/var/www/html/admin/modules/core/views/trunks/pjsip.php`

_Importance: 6 · Confidence: 0.9_
