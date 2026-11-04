---
type: file_edit
title: Terminal edit
description: Temporary access to voipboot
resource: agentmemory://observation/obs_mw0n37co_5df8b8e7b6dd
tags: ["python", "file_edit"]
timestamp: 2026-11-03T12:03:45.521983+00:00
source: agentmemory
session_id: local-0a9137e7c546315901cb94023c668db3d91910c2152362023aca71d72dbbadbf
importance: 4
confidence: 0.9
---
# Summary

Run `cd /tmp/voipboot && python3 -c \"\nopen('x.html',errors='ignore').read(); i=t.find('noaccess'); print(repr(t[i-300:i+200]))\n\"; echo \"=== ajax test\"; curl -s -b cj2.txt -H \"Host: voip.carltontc.com\" \"http://192.168.88.230/admin/ajax.php?module=core&command=getExtensionGrid&type=pjsip\" | head -c 400; echo; echo \"=== ajax2\"; curl -s -b cj2.txt -H \"Host: voip.carltontc.com\" \"http://192.168.88.230/admin/ajax.php?module=userman&command=getUsersList\" | head -c 200

## Facts
- Command used
- Output format

## Concepts
- python

_Importance: 4 · Confidence: 0.9_
