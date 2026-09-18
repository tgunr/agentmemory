---
type: Error
title: skill_manage tool rejects 'view' action
description: Attempted to view skill 'hermes-service-debugging' but 'view' is not supported
resource: agentmemory://observation/obs_mrox5vim_f97047794a84
tags: ["skill management", "tool action validation", "skill_manage API", "error"]
timestamp: 2026-07-17T12:33:42.858878+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 3
confidence: 1
---
# Summary

Attempted to use the skill_manage tool with the 'view' action to inspect the 'hermes-service-debugging' skill. The tool returned an error indicating 'view' is not a supported action, and provided the list of valid actions for skill management.

## Facts
- Tool called: skill_manage
- Attempted action: view
- Target skill name: hermes-service-debugging
- Valid actions are: create, edit, patch, delete, write_file, remove_file

## Concepts
- skill management
- tool action validation
- skill_manage API

_Importance: 3 · Confidence: 1_
