---
type: CommandRun
title: Inspect Hermes profiles and config.yaml settings
description: Lists active profiles and extracts terminal/external_dirs configuration
resource: agentmemory://observation/obs_mrq7mvor_243c50f0e6e7
tags: ["Hermes CLI", "Profile management", "YAML configuration", "Terminal execution settings", "Container configuration", "commandrun"]
timestamp: 2026-07-18T10:14:38.567237+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 4
confidence: 1
---
# Summary

The user ran a diagnostic command to inspect the Hermes environment, checking active profiles and configuration settings. The output reveals the 'default' profile is currently running while others are stopped, and provides a detailed view of the config.yaml including terminal execution parameters, external directories, and integrations like STT and messaging platforms.

## Facts
- Command executed in ~/.hermes to list profiles and inspect config.yaml
- 9 profiles exist: default (running, kilo-auto/balanced), ai, cc, develop, ollama, personal, pveroot, ranch, shop (all stopped)
- config.yaml line 363 shows orchestrator_profile is empty (no sticky default)
- external_dirs includes ~/sources/hermes-knowledge/skills
- Terminal config sets cwd to /Users/davec, persistent_shell to true, timeout to 180s
- Container images configured as nikolaik/python-nodejs:python3.11-nodejs20 for docker, modal, and singularity
- STT provider set to openai (whisper-1) with mistral (mistral-nemo:latest) also configured

## Concepts
- Hermes CLI
- Profile management
- YAML configuration
- Terminal execution settings
- Container configuration

## Files
- `/Users/davec/.hermes/config.yaml`

_Importance: 4 · Confidence: 1_
