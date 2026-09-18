---
type: Error
title: skill_manage patch failed due to missing read-before-write requirement
description: Attempted to patch v-compiler-build skill without loading SKILL.md first
resource: agentmemory://observation/obs_mrrj512f_3c2d4d20e1e2
tags: ["skill management", "read-before-write requirement", "V compiler build process", "error"]
timestamp: 2026-07-19T08:24:27.299769+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 4
confidence: 1
---
# Summary

The skill_manage tool rejected a patch operation on the v-compiler-build skill because it requires the SKILL.md content to be loaded via skill_view before allowing modifications. This is a safety mechanism to prevent unintended changes. The patch attempted to add instructions about installing the built binary via symlink, noting behavior differences when /usr/local/bin is writable versus falling back to ~/.local/bin.

## Facts
- Tool: skill_manage with action=patch on skill v-compiler-build
- Error: Refusing background curator patch because SKILL.md content not loaded
- Required action: Call skill_view(name) before retry to load content
- Patch was inserting symlink installation instructions with /usr/local/bin quirk explanation

## Concepts
- skill management
- read-before-write requirement
- V compiler build process

## Files
- `skill:v-compiler-build`

_Importance: 4 · Confidence: 1_
