---
type: file_edit
title: Automate CCS migration
description: Migrate and normalize UV directory structure to uv directory structure for all projects.
resource: agentmemory://observation/obs_ms7djtja_f26f15c8e068
tags: ["CCS directory structure migration", "file_edit"]
timestamp: 2026-07-30T10:32:18.493964+00:00
source: agentmemory
session_id: 20260730_052105_b2cb06
importance: 7
confidence: 0.9
---
# Summary

The tool executes a script to migrate and normalize the directory structure of all profiles to use "uv" instead of "UV", avoiding conflicts.

## Facts
- Duplicate "UV" project in cc identified and deleted (id: p_dbc42c8a)
- Normalized primary_path on projects using NEW_PREFIX

## Concepts
- CCS directory structure migration

_Importance: 7 · Confidence: 0.9_
