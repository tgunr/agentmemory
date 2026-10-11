---
type: file_edit
title: TypeSafe / Jev Auth Probe
description: Verify auth keys work
resource: agentmemory://observation/obs_mv0tj6yl_66333b9a164f
tags: ["React hooks", "file_edit"]
timestamp: 2026-10-09T10:24:26.874804+00:00
source: agentmemory
session_id: 20261009_052405_0c4cd4
importance: 5
confidence: 0.9
---
# Summary

The Hermes fast-jev context engine uses different auth probes on jevmodel.org and api.typesafe.ai. The engine's _make_asker reads TYPESAFE_API_KEY, NOT JEVMODEL_API_KEY. The engine default TYPESAFE_URL accepts JEVMODEL_API_KEY.

## Facts
- JEVMODEL_API_KEY swaps the POST target
- JEV_BASE_URL swaps the model

## Concepts
- React hooks

## Files
- `/.hermes/.env`

_Importance: 5 · Confidence: 0.9_
