---
type: file_edit
title: Error activating brave free plugin
description: Re-enabling a disabled plugin leads to a configuration conflict.
resource: agentmemory://observation/obs_ms0so2s7_d8583cff65e6
tags: ["plugin management", "configuration conflicts</concert>
    <concept>hermes command reference", "file_edit"]
timestamp: 2026-07-25T20:01:08.118712+00:00
source: agentmemory
session_id: 20260725_150011_66d9c7
importance: 6
confidence: 0.9
---
# Summary

Tool tool call failed due to configuration conflict while activating brave free plugin. Error instructs on how to resolve this problem.

## Facts
- web.search_backend is set to 'brave_free', but its plugin ('web/brave_free') is disabled in config
- The error message suggests re-enabling the plugin with `hermes plugins enable web/brave_free`

## Concepts
- plugin management
- configuration conflicts</concert>
    <concept>hermes command reference

_Importance: 6 · Confidence: 0.9_
