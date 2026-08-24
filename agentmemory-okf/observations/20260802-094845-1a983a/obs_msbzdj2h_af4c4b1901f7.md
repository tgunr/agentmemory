---
type: file_edit
title: Devstral test via curl
description: Test devstral model via Ollama
resource: agentmemory://observation/obs_msbzdj2h_af4c4b1901f7
tags: ["curl", "devstral:latest model", "file_edit"]
timestamp: 2026-08-02T15:54:21.251731+00:00
source: agentmemory
session_id: 20260802_094845_1a983a
importance: 8
confidence: 0.9
---
# Summary

The curl command timed out after 30 seconds without retrieving the desired completion result.

## Facts
- Command: # Test devstral:latest via Ollama\ncurl -s "http://127.0.0.1:11434/v1/chat/completions" \\\n  -H "Content-Type: application/json" \\\\n  -d '{\"model\":\"devstral:latest\",\"messages\":[{\"role\":\"user\",\"content\":\"Say OK\"}],\"max_tokens\":8}' \\\\n  2>/dev/null | grep -o \"content\":\"[^\"]*\""
- Input timeout: 30 seconds

## Concepts
- curl
- devstral:latest model

_Importance: 8 · Confidence: 0.9_
