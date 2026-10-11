---
type: file_edit
title: Prusa MK4 JSON profile printing
description: No additional context provided
resource: agentmemory://observation/obs_mv2ql798_c564cbdbb5d1
tags: ["file_edit"]
timestamp: 2026-10-10T18:37:34.073648+00:00
source: agentmemory
session_id: 20261010_123854_7d7598
importance: 7
confidence: 0.75
---
# Summary

The script prints the content of the /tmp/ps_prof_Prusa_MK4_0.4.json file.

## Facts
- Tool: terminal
- Command: python3 - <<'PY'\nimport json\nd=json.load(open('/tmp/ps_prof_Prusa_MK4_0.4.json'))\nprint(\"TOP:\", list(d.keys()))\nfor k,v in d.items():\n    if isinstance(v,list):\n        print(f\"\\n== {k} ({len(v)}) ==\")\n        for it in v[:12]:\n            print(\"   \", it if isinstance(it,str) else json.dumps(it)[:200])\n    else:\n        print(f\"\\n== {k} == {str(v)[:200]}\")\nPY

## Files
- `/tmp/ps_prof_Prusa_MK4_0.4.json`

_Importance: 7 · Confidence: 0.75_
