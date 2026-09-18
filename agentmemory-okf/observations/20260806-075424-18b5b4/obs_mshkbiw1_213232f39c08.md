---
type: file_edit
title: Environment-aware testing
description: Use this skill whenever a test exercises code that derives behavior from environment variables.
resource: agentmemory://observation/obs_mshkbiw1_213232f39c08
tags: ["env leakage", "environment variable", "file_edit"]
timestamp: 2026-08-06T13:39:30.526183+00:00
source: agentmemory
session_id: 20260806_075424_18b5b4
importance: 7
confidence: 0.9
---
# Summary

An observation was made on the tool post_tool_call using skill view with input env-aware-testing. This is an edit task to modify existing code in the agentmemory repository. The purpose of this action is to write tests for code that reads process.env or loads .env files without being polluted by the developer's real environment, CI secrets, or user config files.

## Facts
- No env leakage can be detected by simply deleting process.env keys.

## Concepts
- env leakage
- environment variable

## Files
- `/Users/davec/.hermes/profiles/ai/skills/software-development/env-aware-testing/SKILL.md`

_Importance: 7 · Confidence: 0.9_
