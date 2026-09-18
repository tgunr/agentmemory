---
type: Observation
title: Test codestral:latest model
description: 
resource: agentmemory://observation/obs_msbznz3b_f49d39b505d8
tags: ["coding models", "observation"]
timestamp: 2026-08-02T16:02:28.577684+00:00
source: agentmemory
session_id: 20260802_094845_1a983a
importance: 5
confidence: 0.9
---
# Summary

The tool was run to test a smaller model, with specific commands and outputs documented for reference. This check is part of regular quality assurance.

## Facts
- Command to run in terminal: curl -s \"http://127.0.0.1:11434/v1/chat/completions\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"model\":\"codestral:latest\",\"messages\":[{\"role\":\"user\",\"content\":\"Say OK\"}],\"max_tokens\":8,\"stream\":false}' \\\n  2>/dev/null > /tmp/codestral_test.json
- Output from curl command:

## Concepts
- coding models

## Files
- `/tmp/codestral_test.json`

_Importance: 5 · Confidence: 0.9_
