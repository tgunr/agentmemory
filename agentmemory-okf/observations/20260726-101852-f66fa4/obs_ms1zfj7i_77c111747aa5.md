---
type: file_edit
title: Launch opencode acp with -m ollama/qwen3-coder & run grep command
description: Run commands within a spawned process and capture model from log
resource: agentmemory://observation/obs_ms1zfj7i_77c111747aa5
tags: ["command_line_backgrounding", "file_edit"]
timestamp: 2026-07-26T15:58:12.988621+00:00
source: agentmemory
session_id: 20260726_101852_f66fa4
importance: 8
confidence: 1
---
# Summary

The tool executed incorrectly due to improper use of ampersand (&) in a foreground command. It failed, returning an exit code (-1), and produced no output.

## Facts
- New tool usage detected: command using backgrounding
- Error encountered during usage: Foreground command uses ampersand (&) for backgrounding
- "output" is empty
- Exit code (-1) indicates failure without specifying exit reason

## Concepts
- command_line_backgrounding

_Importance: 8 · Confidence: 1_
