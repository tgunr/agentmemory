---
type: Error
title: Error in web_extract tool
description: Disabled web.extract_backend plugins
resource: agentmemory://observation/obs_mvvciuog_317f62907f3b
tags: ["disabled plugins", "error"]
timestamp: 2026-10-30T19:09:08.941487+00:00
source: agentmemory
session_id: 20261030_140842_13e155
importance: 7
confidence: 0.9
---
# Summary

The web_extract tool encountered an error due to a disabled web.extract_backend plugin. To resolve this issue, please re-enable the plugin with the specified command.

## Facts
- web.extract_backend is set to 'firecrawl', but its plugin ('web/firecrawl') is disabled in config.
- Re-enable it with `hermes plugins enable web/firecrawl` (or remove it from plugins.disabled).

## Concepts
- disabled plugins

_Importance: 7 · Confidence: 0.9_
