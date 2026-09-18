---
type: Error
title: skill_manage write_file failed due to incorrect parameter name
description: Attempted to write bash diagnostic script to scripts/bluebubbles-diag.sh
resource: agentmemory://observation/obs_mrqhm4nq_958473fc4797
tags: ["tool parameter validation", "BlueBubbles server diagnostics", "script deployment failure", "error"]
timestamp: 2026-07-18T14:53:59.698505+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

The skill_manage tool call failed because the parameter name was 'content' but the tool expected 'file_content'. This prevented writing a diagnostic bash script that checks BlueBubbles server health, webhook listener status, and IPv4/IPv6 binding issues for the Hermes gateway.

## Facts
- Tool: skill_manage with action write_file
- Error message: file_content is required for 'write_file'
- Parameter used: "content" instead of "file_content"
- Target file path: scripts/bluebubbles-diag.sh
- Skill name: macos-integrations
- Script content was approximately 45 lines of bash for BlueBubbles server diagnostics

## Concepts
- tool parameter validation
- BlueBubbles server diagnostics
- script deployment failure

## Files
- `scripts/bluebubbles-diag.sh`

_Importance: 4 · Confidence: 1_
