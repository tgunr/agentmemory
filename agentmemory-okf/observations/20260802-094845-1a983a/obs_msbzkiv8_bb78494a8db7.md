---
type: file_edit
title: A mistake happened during a test with curl.
description: The code uses backgrounding on the foreground command. The advice is to configure this using "terminal(background=true)".
resource: agentmemory://observation/obs_msbzkiv8_bb78494a8db7
tags: ["terminal configuration", "backgrounding errors", "file_edit"]
timestamp: 2026-08-02T15:59:47.583565+00:00
source: agentmemory
session_id: 20260802_094845_1a983a
importance: 5
confidence: 0.9
---
# Summary

This observation is about a process running in the foreground using backgrounding&amp;#x02013;long-lived processes require this special configuration to run. Testers need to fix their code to meet AI tool requirements.

## Facts
- The error message was &quot;Foreground command uses '&' backgrounding. Use terminal(background=title&gt; for long-lived processes, then run health checks and tests in follow-up terminal calls.&quot;

## Concepts
- terminal configuration
- backgrounding errors

_Importance: 5 · Confidence: 0.9_
