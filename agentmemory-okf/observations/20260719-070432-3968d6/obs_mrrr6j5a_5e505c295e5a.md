---
type: Error
title: Failed to edit skill 'mcp-router-guide' in active profile
description: Skill exists in other profiles but not in the active 'personal' profile
resource: agentmemory://observation/obs_mrrr6j5a_5e505c295e5a
tags: ["Hermes skill management", "Profile switching", "Cross-profile operations", "MCP Router proxy", "Web search fallback", "error"]
timestamp: 2026-07-19T12:09:34.314312+00:00
source: agentmemory
session_id: 20260719_070432_3968d6
importance: 4
confidence: 1
---
# Summary

An attempt to edit the 'mcp-router-guide' skill failed because it is not present in the currently active 'personal' profile. The error message indicates the skill exists in several other profiles and suggests switching the active profile or using cross-profile file operations to proceed.

## Facts
- Attempted to edit skill 'mcp-router-guide' (v1.2.0) using the skill_manage tool
- Active profile is 'personal', but the skill only exists in 'default', 'develop', 'shop', and 'cc' profiles
- System suggests switching profiles via 'hermes -p &lt;name&gt;' or using file tools with cross_profile=True
- Skill content defines MCP Router app proxy usage, web search fallbacks, and remote bridge CLI configurations

## Concepts
- Hermes skill management
- Profile switching
- Cross-profile operations
- MCP Router proxy
- Web search fallback

_Importance: 4 · Confidence: 1_
