---
type: file_edit
title: GridFinity &quot;scoop&quot; port fix
description: User wanted scoop enabled in GridFinity reference
resource: agentmemory://observation/obs_mssym8qt_035db936428e
tags: ["file_edit"]
timestamp: 2026-08-14T13:05:13.153240+00:00
source: agentmemory
session_id: 20260814_074410_c9b83a
importance: 8
confidence: 0.75
---
# Summary

User worked around a technical issue with the GridFinity reference by enabling the scoop parameter using the compartment_features module.

## Facts
- The extended fork has NO scoop parameter, only a stray .bat comment.
- An earlier copy of the scoop solid lands below and behind the cavity, resulting in an invisible cut. The fix is to relocate the solid into cavity space.

_Importance: 8 · Confidence: 0.75_
