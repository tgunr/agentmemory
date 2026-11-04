---
type: CommandRun
title: Reverse Proxy Triage
description: Diagnose a proxied host 503 tracing NAT→proxy→backend.
resource: agentmemory://observation/obs_mw1aorqv_bfc24775d46c
tags: ["reverse proxy triage", "curl", "commandrun"]
timestamp: 2026-11-03T23:04:22.898724+00:00
source: agentmemory
session_id: local-2b8acb7ac3eb9a1b9644aeae4b77fcabb7b001f9c5c685ddae8a7e1b13417617
importance: 8
confidence: 1
---
# Summary

A user reports a subdomain / service behind a reverse proxy is unreachable. The user needs to diagnose and troubleshoot the 503 error.

## Facts
- Valid Let's Encrypt cert but 503 → break is purely the upstream
- symptom from a host that can see the public name: `curl -sS -m 15 -I https://<host>`
- Systematic trace with multiple steps

## Concepts
- reverse proxy triage
- curl

## Files
- `{<host>}`

_Importance: 8 · Confidence: 1_
