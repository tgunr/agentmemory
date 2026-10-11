---
type: file_edit
title: Disclosure agent disclosure
description: Action related to Hermes agent
resource: agentmemory://observation/obs_mv0ssqw8_424fb2b3925a
tags: ["Typesafe Jev", "file_edit"]
timestamp: 2026-10-09T10:03:52.998352+00:00
source: agentmemory
session_id: 20261009_030534_37b4eb
importance: 8
confidence: 0.9
---
# Summary

Found TYPESAFE_API_KEY disclosure in plugin-catalog/jev-typesafe.yaml, suggesting agent plugins may need this API key for certain actions.

## Facts
- Tool: terminal
- Command: cd /.hermes/hermes-agent && grep -rn "JEVMODEL_API_KEY|TYPESAFE_API_KEY" --include="*.py" --include="*.yaml" --include="*.yml" . 2>/dev/null | grep -v node_modules | head -30

## Concepts
- Typesafe Jev

## Files
- `./plugin-catalog/jev-typesafe.yaml`

_Importance: 8 · Confidence: 0.9_
