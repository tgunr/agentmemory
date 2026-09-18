---
type: CommandRun
title: web_extract failed with error message
description: Failed to retrieve expected project downloads from Brave Search backend error
resource: agentmemory://observation/obs_mrwb3fia_3c483bd09785
tags: ["search-only backends and web_extract configuration", "commandrun"]
timestamp: 2026-07-22T16:38:06.640446+00:00
source: agentmemory
session_id: 20260722_113737_9d0c2a
importance: 5
confidence: 0.9
---
# Summary

The web_extract tool call failed due to an incorrect backend configuration. It appears that Brave Search is not capable of extracting URLs, prompting reconsideration of the default backend.

## Facts
- web.extract_backend: brave

## Concepts
- search-only backends and web_extract configuration

_Importance: 5 · Confidence: 0.9_
