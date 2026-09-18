---
type: CommandRun
title: Python environment diagnostic for Hermes runtime
description: Checking python versions and EventKit/pyobjc availability
resource: agentmemory://observation/obs_mrs1j8bk_4d5f99b0d415
tags: ["python environment", "pyenv", "homebrew", "EventKit", "pyobjc", "Hermes runtime", "TCC permissions", "commandrun"]
timestamp: 2026-07-19T16:59:22.973375+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 5
confidence: 1
---
# Summary

Diagnostic command revealed that the expected homebrew python3.11 installation is missing at /opt/homebrew/bin/python3.11, preventing EventKit/pyobjc testing. The Hermes runtime is configured to use multiple python interpreters including the missing python3.11 path, indicating a potential environment configuration issue that needs resolution.

## Facts
- Terminal python3 is pyenv shim at Python 3.13.2 (/Users/davec/.pyenv/shims/python3)
- /opt/homebrew/bin/python3.11 does not exist
- EventKit/pyobjc cannot be tested due to missing python3.11
- Hermes runtime references multiple python paths: /opt/homebrew/bin/python3.11, /opt/homebrew/Caskroom/miniconda/base/bin/python3.13, /Users/davec/.venv/bin/python3

## Concepts
- python environment
- pyenv
- homebrew
- EventKit
- pyobjc
- Hermes runtime
- TCC permissions

## Files
- `/opt/homebrew/bin/python3.11`
- `/Users/davec/.pyenv/shims/python3`

_Importance: 5 · Confidence: 1_
