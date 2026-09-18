---
type: file_edit
title: Skill Manage Patch Error
description: Failed skill externalization for Hermes secrets.
resource: agentmemory://observation/obs_msujthaq_b6e69c40acd6
tags: ["file_edit"]
timestamp: 2026-08-15T15:46:28.942078+00:00
source: agentmemory
session_id: 20260815_101007_f33541
importance: 4
confidence: 0.85
---
# Summary

A patch operation using skill manage resulted in an error due to a missing skill in the active default environment.

## Facts
- patch operation performed on a file with the new string containing Hermes secret metadata.
- The old string contained leaked credentials, and the replacement was denied.
- Error message: Skill '' not found in active profile 'default''.

_Importance: 4 · Confidence: 0.85_
