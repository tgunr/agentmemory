---
type: file_write
title: Created observation-count-report.py for LLM cost estimation
description: Python script to count agentmemory observations and estimate compression costs
resource: agentmemory://observation/obs_mropr07j_d76ff3ce1c2d
tags: ["agent memory system", "LLM cost estimation", "observation compression", "binary state store", "cost monitoring", "file_write"]
timestamp: 2026-07-17T09:06:11.786891+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 5
confidence: 1
---
# Summary

Created a Python script to estimate LLM compression costs by counting agentmemory observations. The script reads binary observation files from the state store, parses JSON data, and categorizes observations to estimate the number of LLM compression calls that would be triggered when AGENTMEMORY_AUTO_COMPRESS is enabled.

## Facts
- Script written to /Users/davec/.hermes/profiles/ai/scripts/observation-count-report.py
- Reads binary observation files from /Users/davec/data/agentmemory/data/state_store.db matching pattern mem%3Aobs%3A*.bin
- Categorizes observations as LLM-compressed (real type) vs empty/placeholder (notification or missing type)
- Provides per-day breakdown with histogram visualization
- References AGENTMEMORY_AUTO_COMPRESS environment variable for cost model
- 2481 bytes written, lint status ok

## Concepts
- agent memory system
- LLM cost estimation
- observation compression
- binary state store
- cost monitoring

## Files
- `/Users/davec/.hermes/profiles/ai/scripts/observation-count-report.py`

_Importance: 5 · Confidence: 1_
