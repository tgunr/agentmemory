---
type: file_write
title: Write venv setup to file
description: Adds isolated venv fix for Hermes PIL support.
resource: agentmemory://observation/obs_mser48pa_6f053bd3b031
tags: ["isolated development environment", "file_write"]
timestamp: 2026-08-04T14:26:29.512330+00:00
source: agentmemory
session_id: 20260804_091845_3f81ae
importance: 7
confidence: 0.9
---
# Summary

The script ensures a clean venv for Hermes PIL support by using `pyenv` and `pip`.

## Facts
- New venv creates a clean environment with `python3` and pip.
- The `env -i` command drops the poisoned `PYTHONPATH` entirely.

## Concepts
- isolated development environment

## Files
- `/Users/davec/.hermes/skills/creative/qrcode-generation/references/setup_venv.md`

_Importance: 7 · Confidence: 0.9_
