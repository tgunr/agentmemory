---
type: Error
title: Plugin configuration issue for web search
description: 
resource: agentmemory://observation/obs_ms0sromq_f82ba98bf257
tags: ["plugin configuration", "error"]
timestamp: 2026-07-25T20:03:56.400491+00:00
source: agentmemory
session_id: 20260725_150011_66d9c7
importance: 8
confidence: 0.9
---
# Summary

The tool call resulted in a plugin configuration error. The web search backend is set to 'brave_free', but its plugin is disabled. This issue can be resolved by re-enabling the plugin.

## Facts
- web_search_backend set to 'brave_free' but its plugin is disabled in config.
- Plugin ('web/brave_free') must be re-enabled with 'hermes plugins enable web/brave_free'

## Concepts
- plugin configuration

_Importance: 8 · Confidence: 0.9_
