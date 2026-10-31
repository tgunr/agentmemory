---
type: FileRead
title: Check if skill directory is a hub-installed skill
description: No hub installs if the skills tree directory does not have a lock file
resource: agentmemory://observation/obs_mvuin3xv_e04576e45730
tags: ["SKILL.md template", "fileread"]
timestamp: 2026-10-30T05:12:39.089073+00:00
source: agentmemory
session_id: 20261030_001120_f8c5f7
importance: 7
confidence: 1
---
# Summary

The tool checks if a skill directory is a hub-installed skill and whether it is a community trust using the skills tree lock file. The output provides information on the hub installs and the trust level of the skill.

## Facts
- Command:cd ~/.hermes/hermes-agent && sed -n 100,175p agent/skill_preprocessing.py; echo ====; grep -rn &quot;preprocess_skill_content(&quot; --include=*.py . | grep -v test | grep -v worktrees | head
- Tool used:terminal
- Output:Whether *skill_dir* is a hub-installed skill the scan gate classifies as community trust.

## Concepts
- SKILL.md template

## Files
- `./tools/skills_tool_plugin.py:117:        return preprocess_skill_content(content, skill_dir, session_id=session_id)`
- `./agent/skill_preprocessing.py:142:`
- `./agent/skill_commands.py:377:`

_Importance: 7 · Confidence: 1_
