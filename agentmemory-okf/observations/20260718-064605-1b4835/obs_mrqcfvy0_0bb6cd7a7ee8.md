---
type: CommandRun
title: Hermes config files and service listeners investigation
description: Found config files and identified running services
resource: agentmemory://observation/obs_mrqcfvy0_0bb6cd7a7ee8
tags: ["hermes configuration", "gateway api", "bluebubbles integration", "commandrun"]
timestamp: 2026-07-18T12:29:10.388765+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Investigated hermes configuration to understand gateway and bluebubbles setup. Found main config.yaml with gateway configuration pointing to api.kilo.ai and multiple use_gateway settings. Several node and python processes are listening on various ports but no clear hermes service identified.

## Facts
- ~/.hermes/.env exists (24501 bytes, modified Jul 18)
- ~/.hermes/config.yaml exists (21309 bytes) with gateway/bluebubbles configuration
- Config contains gateway settings: base_url https://api.kilo.ai/api/gateway, use_gateway flags, bluebubbles section
- Multiple services listening: node on ports 18791, 18789, 3113; python on 5001, 8787, 22222
- No obvious hermes-specific listener found - python3.1 on *:8787 may be relevant

## Concepts
- hermes configuration
- gateway api
- bluebubbles integration

## Files
- `/Users/davec/.hermes/.env`
- `/Users/davec/.hermes/config.yaml`

_Importance: 5 · Confidence: 1_
