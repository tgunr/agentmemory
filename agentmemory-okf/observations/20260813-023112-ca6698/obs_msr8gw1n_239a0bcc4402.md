---
type: CommandRun
title: Skill_view tool used for config audit
description: Audit and inspect Hermes profile and global config defaults
resource: agentmemory://observation/obs_msr8gw1n_239a0bcc4402
tags: ["config audit", "Hermes config defaults", "commandrun"]
timestamp: 2026-08-13T08:05:27.224760+00:00
source: agentmemory
session_id: 20260813_023112_ca6698
importance: 8
confidence: 0.9
---
# Summary

This observation recorded a tool usage event where the skill_view tool was used with the post_tool_call hook to run a config audit for Hermes, passing an input JSON payload containing the name "hermes-config-audit". The narrative explains that this is a reusable workflow for inspecting Hermes `config.yaml`, summarizing actionable defaults and flagging drift from recommended values.

## Facts
- Tool name: skill_view, tool usage: post_tool_call
- Input JSON payload: {"name": "hermes-config-audit"}

## Concepts
- config audit
- Hermes config defaults

## Files
- `/Users/davec/.hermes/skills/autonomous-ai-agents/hermes-config-audit/SKILL.md`
- `/Users/davec /.hermes/skills/autonomous-ai-agents/hermes-config-audit/scripts/audit_profile_defaults.py`

_Importance: 8 · Confidence: 0.9_
