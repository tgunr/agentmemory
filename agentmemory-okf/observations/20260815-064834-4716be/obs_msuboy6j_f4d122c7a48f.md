---
type: file_write
title: Configure Hermes backup provider
description: Failover configuration tool for Hermes
resource: agentmemory://observation/obs_msuboy6j_f4d122c7a48f
tags: ["Hermes fallback providers", "file_write"]
timestamp: 2026-08-15T11:59:00.615567+00:00
source: agentmemory
session_id: 20260815_064834_4716be
importance: 6
confidence: 0.9
---
# Summary

The observation was made during the creation of a HMS config skill. A Hermes backup provider needs to be configured correctly, including two gotchas that can silently do nothing. The runtime parser only accepts dict entries for provider configuration.

## Facts
- Nous provider defaults to tencent/hy3:free model
- Fallback providers are optional and independent of credential pools

## Concepts
- Hermes fallback providers

_Importance: 6 · Confidence: 0.9_
