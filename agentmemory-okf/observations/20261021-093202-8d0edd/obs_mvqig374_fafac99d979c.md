---
type: file_edit
title: web_extract backend configuration issue
description: Re enabling web.firecrawl plugin
resource: agentmemory://observation/obs_mvqig374_fafac99d979c
tags: ["web extract configuration", "file_edit"]
timestamp: 2026-10-27T09:56:06.829586+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 7
confidence: 0.9
---
# Summary

The web_extract tool attempted to fetch from 'https://kilo.ai/docs/gateway', but encountered a configuration issue with 'web.extract_backend' set to 'firecrawl'. The issue is due to the 'web.firecrawl' plugin being disabled in the config.

## Facts
- web.extract_backend is set to 'firecrawl'
- web.extract_backend plugin is disabled in config

## Concepts
- web extract configuration

_Importance: 7 · Confidence: 0.9_
