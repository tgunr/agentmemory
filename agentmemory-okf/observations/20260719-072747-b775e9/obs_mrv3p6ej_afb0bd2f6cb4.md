---
type: file_edit
title: Test make-app version endpoint using curl
description: Contacting the make-app API to retrieve app version info
resource: agentmemory://observation/obs_mrv3p6ej_afb0bd2f6cb4
tags: ["file_edit"]
timestamp: 2026-07-21T20:23:18.183729+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 6
confidence: 0.75
---
# Summary

The provided shell script iterates over several endpoints. This code calls the /app/get_version path with both the main and an alternate path on a server.

## Facts
- Using the get_net host, a different way of getting the app version is tried instead of the current implementation.

## Files
- `/v1/app/get_version`
- `/v1/slicer/get_version`
- `/v1/software/get`
- `/v1/client/upgrade/get`
- `/v1/upgrade/get?os=mac&app=eufymake`

_Importance: 6 · Confidence: 0.75_
