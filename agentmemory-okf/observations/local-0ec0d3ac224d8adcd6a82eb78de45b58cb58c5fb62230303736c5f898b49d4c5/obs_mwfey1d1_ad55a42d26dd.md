---
type: file_edit
title: Update model-selection-routing skill
description: Update prompt-time model routing for Kilo, Nous, and Ollama
resource: agentmemory://observation/obs_mwfey1d1_ad55a42d26dd
tags: ["failover behavior", "local-first bias", "file_edit"]
timestamp: 2026-11-13T20:12:20.192595+00:00
source: agentmemory
session_id: local-0ec0d3ac224d8adcd6a82eb78de45b58cb58c5fb62230303736c5f898b49d4c5
importance: 6
confidence: 0.9
---
# Summary

Updated the model-selection-routing skill to reflect the changes in failover behavior and local-first bias. This change allows the skill to prioritize local models for trivial work and provides a more robust fallback mechanism.

## Facts
- Update version to 1.3.0
- Update description to include failover behavior and local-first bias

## Concepts
- failover behavior
- local-first bias

## Files
- `/data/models.yaml`

_Importance: 6 · Confidence: 0.9_
