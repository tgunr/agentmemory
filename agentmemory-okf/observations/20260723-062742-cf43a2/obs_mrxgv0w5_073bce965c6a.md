---
type: file_edit
title: Pipeline configuration export
description: Export profile configurations and cache compression settings for all three environments.
resource: agentmemory://observation/obs_mrxgv0w5_073bce965c6a
tags: ["file_edit"]
timestamp: 2026-07-23T12:07:18.336783+00:00
source: agentmemory
session_id: 20260723_062742_cf43a2
importance: 5
confidence: 0.85
---
# Summary

The pipeline used the Hermetic profile export functionality to capture and dump configuration settings and cache compression metrics from the <code>.hermes/profiles/</code> path. This enables the tracking of model compression ratios across different environments, as well as ensuring that sensitive parameters are not exposed.

## Facts
- Hermetic pipeline execution with <code>hermes-profiles</code> module
- Cached compression ratios: target=0.2, threshold=0.5
- Codex cache raising mechanism enabled for <code>gpt55</code>

## Files
- `/path/to/hermes/profiles/ai/config.yaml`
- `./hermes/profiles/cc/config.yaml`
- `/dev/hermes/profiles/dev/config.yaml`

_Importance: 5 · Confidence: 0.85_
