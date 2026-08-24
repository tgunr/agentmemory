---
type: Error
title: Skill patch failed - old_string not found in macos-app-crash-debug
description: skill_manage patch action for macOS crash debugging skill failed to match
resource: agentmemory://observation/obs_mrrw2yb3_17feb80cb994
tags: ["skill management", "tool error handling", "string matching", "error"]
timestamp: 2026-07-19T14:26:45.419849+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 4
confidence: 1
---
# Summary

The skill_manage tool attempted to patch the macos-app-crash-debug skill but failed because the old_string parameter did not match any content in the file. The error provided suggestions for similar sections, indicating the skill exists but the specific text pattern differed from what was expected.

## Facts
- Action was 'patch' on skill 'macos-app-crash-debug'</arg_value>
    <fact>old_string could not be matched in the skill file
- Error message suggested 3 alternative sections at lines 55-60, 111-116, and 131-134
- The skill appears to be about macOS native app crash debugging for CEF/bundled Chromium apps

## Concepts
- skill management
- tool error handling
- string matching

## Files
- `macos-app-crash-debug (skill)`

_Importance: 4 · Confidence: 1_
