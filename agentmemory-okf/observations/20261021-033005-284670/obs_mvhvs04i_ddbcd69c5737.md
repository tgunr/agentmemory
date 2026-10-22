---
type: Observation
title: Running auth plugin provider registry
description: No specific context
resource: agentmemory://observation/obs_mvhvs04i_ddbcd69c5737
tags: ["provider registration", "mirror profiles", "observation"]
timestamp: 2026-10-21T08:59:22.139852+00:00
source: agentmemory
session_id: 20261021_033005_284670
importance: 6
confidence: 0.9
---
# Summary

Running a command to mirror provider-plugin profiles into `PROVIDER_REGISTRY`, updating provider registration and mirroring profiles into `PROVIDER_REGISTRY` in several places, including `hermes_cli/auth.py` and `hermes_cli/model_setup_flows.py`.

## Facts
- Environment variable `PROVIDER_REGISTRY[\"anthropic\"].api_key_env_vars` is defined
- Function `sync_plugin_provider_registry` is defined in `hermes_cli/auth_plugin_providers.py`

## Concepts
- provider registration
- mirror profiles

_Importance: 6 · Confidence: 0.9_
