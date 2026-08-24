---
type: file_edit
title: Fix gateway config scope
description: 
resource: agentmemory://observation/obs_ms6hxv1j_d1c81b8e41ad
tags: ["config scope", "PR #49153", "regression testing", "file_edit"]
timestamp: 2026-07-29T19:47:25.923105+00:00
source: agentmemory
session_id: 20260729_083331_2ab38b
importance: 7
confidence: 1
---
# Summary

A fix for a gateway configuration issue was made by wrapping the config bridge with set_hermes_home_override(str(profile_dir)). The issue affected how terminal.cwd was scoped in different profiles.

## Facts
- PR #49153: scope terminal config bridge to requested profile in _resolve_chat_argv
- fix(gateway): scope terminal config bridge to requested profile in _resolve_chat_argv
- regression test asserting a profile-scoped chat child reads the requested profile's terminal.cwd, not the launch profile's

## Concepts
- config scope
- PR #49153
- regression testing

## Files
- `/hermes_cli/web_server.py`

_Importance: 7 · Confidence: 1_
