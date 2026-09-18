---
type: file_edit
title: A Bug in Third Party library iii-engine and fix
description: Error with sdk.trigger(&quot;mem::export&quot;) &amp; api::export
resource: agentmemory://observation/obs_msptpbhq_999f1d743a6e
tags: ["iii-engine", "api::export", "file_edit"]
timestamp: 2026-08-12T08:24:20.072352+00:00
source: agentmemory
session_id: 20260718_095300_22c85c2d
importance: 7
confidence: 0.9
---
# Summary

(2026-08-12T08:24:20.072352+00:00, AM :3111) there was an issue with a specific third-party library, &quot;iii-engine&quot;. This is because the function mem::export would fail when calling sdk.trigger(&quot;mem::export&quot;) via api::export without a valid caller. The root cause was traced to invocation-routing bug that would return an error of &quot;Invocation stopped&quot; when looking up this caller in the registry while there were already 200 registered invocations with health set to /sessions and thus it returned a `Did not find caller for invocation`.

## Facts
- The bug in SDK was not properly handling invocation
- API call to `sdk.trigger` was failing

## Concepts
- iii-engine
- api::export

_Importance: 7 · Confidence: 0.9_
