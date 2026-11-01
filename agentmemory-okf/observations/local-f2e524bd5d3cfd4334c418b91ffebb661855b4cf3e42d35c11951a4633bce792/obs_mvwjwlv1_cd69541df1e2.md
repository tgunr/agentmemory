---
type: FileRead
title: External and Local Skills Analysis
description: find and sed in file ~/sources/hermes-knowledge/skills/
resource: agentmemory://observation/obs_mvwjwlv1_cd69541df1e2
tags: ["sed and shell tricks", "find and filtering patterns", "fileread"]
timestamp: 2026-10-31T15:23:34.183813+00:00
source: agentmemory
session_id: local-f2e524bd5d3cfd4334c418b91ffebb661855b4cf3e42d35c11951a4633bce792
importance: 6
confidence: 0.9
---
# Summary

The tool executed a command in the terminal to analyze external and local skills, generating two files and printing the results to the console.

## Facts
- Command: cd ~ && find ~/sources/hermes-knowledge/skills -name SKILL.md -maxdepth 3 | sed 's|/skills/||; s|/SKILL.md||' | sort > /tmp/ext-skills.txt; ...
- Command: find ~/.hermes/skills -name SKILL.md | sed 's|/skills/||; s|/SKILL.md||' | sort > /tmp/local-skills.txt;

## Concepts
- sed and shell tricks
- find and filtering patterns

## Files
- `/tmp/ext-skills.txt`

_Importance: 6 · Confidence: 0.9_
