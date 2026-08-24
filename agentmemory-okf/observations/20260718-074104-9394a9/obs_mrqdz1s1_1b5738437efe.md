---
type: Error
title: Ambiguous skill name error when viewing 'skill-creator'
description: Two skills match across local and external skill directories
resource: agentmemory://observation/obs_mrqdz1s1_1b5738437efe
tags: ["skill name collision", "skill resolution ambiguity", "hermes skill system", "categorized skill paths", "error"]
timestamp: 2026-07-18T13:12:04.030986+00:00
source: agentmemory
session_id: 20260718_074104_9394a9
importance: 5
confidence: 1
---
# Summary

Attempting to view the 'skill-creator' skill failed due to a name collision between two skills in different directories. To resolve, the skill must be referenced by its full categorized path (e.g., 'rare/skill-creator' or 'software-development/kilo-skill-creator'), or the duplicate should be renamed to ensure uniqueness.

## Facts
- skill_view failed with error: "Ambiguous skill name 'skill-creator'"
- 2 matching skills found across local skills dir and external_dirs
- Match 1: /Users/davec/.hermes/profiles/cc/skills/rare/skill-creator/SKILL.md
- Match 2: /Users/davec/.hermes/profiles/cc/skills/software-development/kilo-skill-creator/SKILL.md
- Resolution hint: pass full relative path like 'category/skill-name' or rename one colliding skill

## Concepts
- skill name collision
- skill resolution ambiguity
- hermes skill system
- categorized skill paths

## Files
- `/Users/davec/.hermes/profiles/cc/skills/rare/skill-creator/SKILL.md`
- `/Users/davec/.hermes/profiles/cc/skills/software-development/kilo-skill-creator/SKILL.md`

_Importance: 5 · Confidence: 1_
