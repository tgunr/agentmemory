---
type: discovery
title: Investigate pytest and Python environment setup
description: Discovering how pytest is configured and available in hermes-agent project
resource: agentmemory://observation/obs_mrrnhfva_ffb6a20d3838
tags: ["pytest configuration", "pyproject.toml dev dependencies", "pyenv shims", "Python virtual environment", "uv package manager", "discovery"]
timestamp: 2026-07-19T10:26:04.818677+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

Ran diagnostic commands to understand the pytest and Python environment in the hermes-agent project. Found that pytest is configured in pyproject.toml with version 9.0.2 in dev dependencies, a venv/ directory exists, and system python3 has pytest 8.4.1 available via pyenv.

## Facts
- Project path: /Users/davec/.hermes/hermes-agent
- pyproject.toml line 160: dev dependencies include pytest==9.0.2, pytest-asyncio==1.3.0, debugpy, mcp, starlette, ty, ruff, setuptools
- pyproject.toml line 359: [tool.pytest.ini_options] section exists for pytest configuration
- venv/ directory exists in project root
- python3 and uv available via pyenv shims at /Users/davec/.pyenv/shims/
- System python3 has pytest 8.4.1 available (different from project's 9.0.2)
- No dedicated test venvs found (checked .venv, venv-test, test-venv)

## Concepts
- pytest configuration
- pyproject.toml dev dependencies
- pyenv shims
- Python virtual environment
- uv package manager

## Files
- `/Users/davec/.hermes/hermes-agent/pyproject.toml`

_Importance: 4 · Confidence: 1_
