---
type: Observation
title: Prompt-time model routing for Kilo, Nous, and Ollama
description: Routing for cheaper or more appropriate models for the current prompt
resource: agentmemory://observation/obs_mrulo6jw_235dd632b0c5
tags: ["Prompt-time model routing", "observation"]
timestamp: 2026-07-21T11:58:38.631158+00:00
source: agentmemory
session_id: 20260721_065755_a95130
importance: 4
confidence: 1
---
# Summary

The post_tool_call hook executed the skill_view tool with input model-selection-routing. The output was a JSON object containing information about the prompt-time model routing.
This skill is used to pick a cheaper or more appropriate model/provider for the current prompt, especially across Kilo, Nous, and Ollama. It provides a reusable routing step before continuing with the real task, and it can also be used as a prompt-time substitution when the user wants to reduce cost or auto-select a provider/model.
The router uses pre-defined rules to determine which model/providers are available for the current task. The pre-fetched models are checked first in order of priority based on speed, stability, and resource usage before selecting the nearest available model for a given request.
This skill is not meant to replace prompt-level mechanisms but rather serves as an additional useful tool that increases efficiency for all users using this language-based conversation platform.

## Facts
- Cheaper local/free paths preferred when task quality does not require hosted capability
- Kilo coding variants are used for code and high-stakes research tasks
- Nous catalog entries include specific provider IDs for routed models

## Concepts
- Prompt-time model routing

_Importance: 4 · Confidence: 1_
