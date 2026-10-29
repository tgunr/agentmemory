---
type: file_edit
title: patch: Ollama server fix
description: a fix for a crash-looping service
resource: agentmemory://observation/obs_mvqw0wt4_75df313b7b19
tags: ["acl setting", "security update", "file_edit"]
timestamp: 2026-10-27T16:16:13.331679+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 8
confidence: 0.95
---
# Summary

patch: Ollama server fix

## Facts
- AOAC (Apple Security Update Archive Control) not required
- `mkdir /usr/share/ollama/.ollama: permission denied` was causing the problem
- ACLs can be targeted to allow the program to access the store

## Concepts
- acl setting
- security update

## Files
- `/Users/davec/.hermes/profiles/systems/workspace/pveroot/AGENTS.md`

_Importance: 8 · Confidence: 0.95_
