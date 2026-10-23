---
type: file_edit
title: Verify API Key
description: Verify vendor API keys; probe unknown API endpoints.
resource: agentmemory://observation/obs_mvjluz7k_99dd68d6d020
tags: ["API key verification", "file_edit"]
timestamp: 2026-10-22T13:57:17.093708+00:00
source: agentmemory
session_id: 20261022_083459_a05ab0
importance: 6
confidence: 0.9
---
# Summary

This skill verifies a vendor API key and probes unknown API endpoints. It checks if the key is actually in the request and confirms the authentication style. If the key is restricted or revoked, it requires further diagnosis.

## Facts
- Vendor's SDK/pydocs page fetch and grep method names.
- Shell vars do not persist across terminal calls; verify key value is in request.

## Concepts
- API key verification

## Files
- `/tmp/sdk.html`

_Importance: 6 · Confidence: 0.9_
