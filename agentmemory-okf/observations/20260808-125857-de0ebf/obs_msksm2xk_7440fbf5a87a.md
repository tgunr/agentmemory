---
type: Error
title: CameraGrid ambiguous window target
description: Provide window_id for pid 8958.
resource: agentmemory://observation/obs_msksm2xk_7440fbf5a87a
tags: ["ambiguous_window_target", "window_id", "error"]
timestamp: 2026-08-08T19:54:58.504224+00:00
source: agentmemory
session_id: 20260808_125857_de0ebf
importance: 5
confidence: 0.9
---
# Summary

The tool CameraGrid refused the action due to ambiguous window target for pid 8958, with eligible top-level windows including multiple instances of the CameraGrid Mask Editor and other non-recognized windows.

## Facts
- Pid 8958 owns more than one eligible top-level window.
- Candidates: { "window_id": [11435, 11437, 11434, 11433, 11432, 11431] }.

## Concepts
- ambiguous_window_target
- window_id

_Importance: 5 · Confidence: 0.9_
