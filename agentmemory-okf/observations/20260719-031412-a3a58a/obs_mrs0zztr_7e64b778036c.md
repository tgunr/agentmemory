---
type: Error
title: Skill 'apple-reminders' not found
description: Attempted to view non-existent skill, returned available skills list
resource: agentmemory://observation/obs_mrs0zztr_7e64b778036c
tags: ["skill management", "tool error handling", "environment capabilities", "error"]
timestamp: 2026-07-19T16:44:25.501518+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 3
confidence: 1
---
# Summary

The agent attempted to view the 'apple-reminders' skill, which does not exist in the environment. The system returned an error alongside a comprehensive list of 20 valid skills, guiding the agent to use 'skills_list' or select an existing skill.

## Facts
- Tool 'skill_view' called with name='apple-reminders'
- Skill 'apple-reminders' does not exist in the current environment
- Available skills: computer-use, dogfood, name-assistant, project-name-master, bettertouchtool, macos-computer-use, macos-integrations, agentmemory-hermes-integration, cross-profile-skills, hermes-agent, hermes-self-hosted, hermes-session-hygiene, hermes-webui, hermes-workspace-context, local-model-providers, mcp-router-guide, ollama-provider-troubleshooting, project-workspace-setup, uncensored-llm-models, vectric-cam
- System hint suggests using 'skills_list' to view all available skills

## Concepts
- skill management
- tool error handling
- environment capabilities

_Importance: 3 · Confidence: 1_
