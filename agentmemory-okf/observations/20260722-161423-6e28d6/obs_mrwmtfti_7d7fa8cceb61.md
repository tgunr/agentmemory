---
type: file_write
title: Update model selection routing skill
description: Edit the prompt-time route skill.
resource: agentmemory://observation/obs_mrwmtfti_7d7fa8cceb61
tags: ["model selection and provider routing", "file_write"]
timestamp: 2026-07-22T22:06:15.890381+00:00
source: agentmemory
session_id: 20260722_161423_6e28d6
importance: 8
confidence: 0.9
---
# Summary

A Hermes Agent updated a critical architectural component by rewriting the 'model-selection-routing' skill. This change impacts how the agent selects models for each request and may introduce breaking changes.

  The update included changing how model providers are selected, particularly in cheap tasks where local providers are prioritized. This modification aims to minimize overhead while maintaining performance.

  For future work, it is planned to explore using the capability scoring algorithm further, as well potential additions to this routing step.

## Facts
- detailed description of changes made to the skill, including the new behavior or capabilities added.

## Concepts
- model selection and provider routing

_Importance: 8 · Confidence: 0.9_
