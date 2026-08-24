---
type: Error
title: Failed skill_manage write_file - incorrect parameter name
description: Tool expected 'file_content' but received 'content' parameter
resource: agentmemory://observation/obs_mrrtp7ov_47309fcddef8
tags: ["bash scripting", "tool parameter validation", "error handling", "file writing", "error"]
timestamp: 2026-07-19T13:20:05.162821+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 3
confidence: 1
---
# Summary

A bash script template for CEF crash workarounds failed to write due to incorrect parameter naming. The content was provided but the skill_manage tool expected 'file_content' as the key rather than 'content', causing the operation to fail.

## Facts
- Action attempted: write_file
- Target file path: templates/safe-launcher.sh
- Error message: file_content is required for 'write_file'</arg>
    <fact>Content was provided but under wrong parameter key 'content' instead of 'file_content'
- Template was a bash script for launching crashing CEF/macOS apps safely

## Concepts
- bash scripting
- tool parameter validation
- error handling
- file writing

## Files
- `templates/safe-launcher.sh`

_Importance: 3 · Confidence: 1_
