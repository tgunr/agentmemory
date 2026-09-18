---
type: file_edit
title: Create Hermes fallback providers configuration
description: Create configuration for backup/failover LLM providers in Hermes Agent.
resource: agentmemory://observation/obs_msubo9z0_25fd53ee4f66
tags: ["React hooks", "file_edit"]
timestamp: 2026-08-15T11:58:29.226594+00:00
source: agentmemory
session_id: 20260815_064834_4716be
importance: 8
confidence: 0.9
---
# Summary

The tool skill manages was used to create the Hermes fallback providers configuration. This configuration is about setting up a backup provider model **mid-session**, including avoiding silent setups due to gotchas in the configuration parser and credential validity checks.

## Facts
- Configuration file path will be ~/.hermes/config.yaml (per profile ~/.hermes/profiles/<name>/config.yaml)
- The config shape must have both 'provider' and 'model'; entries missing either are also skipped.

## Concepts
- React hooks

## Files
- `/home/user/.hermes/config.yaml`

_Importance: 8 · Confidence: 0.9_
