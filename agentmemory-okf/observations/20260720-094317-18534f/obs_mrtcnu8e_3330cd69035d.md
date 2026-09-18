---
type: Error
title: Skill patch refused: read-before-write required
description: agentmemory-hermes-integration description update blocked
resource: agentmemory://observation/obs_mrtcnu8e_3330cd69035d
tags: ["skill_manage", "read-before-write", "agentmemory-hermes-integration", "SKILL.md", "error"]
timestamp: 2026-07-20T14:58:39.946379+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 4
confidence: 1
---
# Summary

A patch to expand the agentmemory-hermes-integration skill description was refused because the SKILL.md content had not been loaded in the current turn. The curator must call skill_view first, then retry the write using the freshly returned content.

## Facts
- skill_manage patch on 'agentmemory-hermes-integration' failed with success: false
- Attempted to extend description to include "live-instance runtime health diagnostics"
- Old description covered session registration, title sync, and secret resolution
- Error: refusing background curator patch because SKILL.md was not loaded in this review turn
- Fix: call skill_view(name) for SKILL.md (or skill_view with file_path), then retry patch with returned content
- Flag set: _read_before_write_required: true

## Concepts
- skill_manage
- read-before-write
- agentmemory-hermes-integration
- SKILL.md

_Importance: 4 · Confidence: 1_
