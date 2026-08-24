---
type: file_edit
title: Ollama Model Picker Visibility Triage
description: This is a triage script for an Ollama model missing from the Hermes picker.
resource: agentmemory://observation/obs_msakdf26_5c522d2f1908
tags: ["file_edit"]
timestamp: 2026-08-01T16:06:35.641043+00:00
source: agentmemory
session_id: 20260801_105601_c81646
importance: 8
confidence: 0.75
---
# Summary

A triage step before debugging any issues is to first proof that Ollama clearly has the model. The model must appear in either the output of `ollama list` or the live probing endpoint. A root cause investigation confirms the issue is config-side, specifically with the `discover_models: false` provider.</fact>
  <narrative>An ad-hoc membership check can be performed using a Python script to verify if the model tag is in the models list and reachable at the exact endpoint Hermes uses.

## Facts
- The issue is not with Ollama, but with Hermese's model registration.

_Importance: 8 · Confidence: 0.75_
