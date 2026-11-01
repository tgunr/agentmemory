---
type: CommandRun
title: Updating Hermes config and skills
description: External directory references in profiles
resource: agentmemory://observation/obs_mvwk6z8d_b9951b4c8255
tags: ["external directories", "profile configuration", "Hermes skills", "commandrun"]
timestamp: 2026-10-31T15:31:38.073348+00:00
source: agentmemory
session_id: local-f2e524bd5d3cfd4334c418b91ffebb661855b4cf3e42d35c11951a4633bce792
importance: 6
confidence: 1
---
# Summary

The command updated the Hermes config and skills, incorporating external directory references from profiles. This is a routine edit.

## Facts
- Command: cd ~ && for f in ~/.hermes/config.yaml ~/.hermes/profiles/*/config.yaml;
- Redacted secret: $b[b[REDACTED_SECRET]]
- Copy files from ~/.hermes/config.yaml to profiles/*/config.yaml
- Update skills with external directory references

## Concepts
- external directories
- profile configuration
- Hermes skills

## Files
- `/Users/davec/.hermes/config.yaml`
- `/Users/davec/.hermes/profiles/*/config.yaml`

_Importance: 6 · Confidence: 1_
