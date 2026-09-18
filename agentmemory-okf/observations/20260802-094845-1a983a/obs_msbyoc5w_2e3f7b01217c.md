---
type: file_edit
title: Llama3.2:3b wait loop with python3 and curl
description: This script waits for a specific llama model to be ready on port 8081
resource: agentmemory://observation/obs_msbyoc5w_2e3f7b01217c
tags: ["HTTP client-side scripts with `curl` and server-side models", "file_edit"]
timestamp: 2026-08-02T15:34:45.901084+00:00
source: agentmemory
session_id: 20260802_094845_1a983a
importance: 8
confidence: 0.9
---
# Summary

This script uses a loop to repeatedly check for the availability of the \"llama3.2:3b\" model on port 8081 and outputs a success message when it's ready, including the attempt number

## Facts
- The script uses `curl` to fetch the current state of the models at `http://127.0.0.1:8081/v1/models
- The server response contains the model ID 'llama3.2:3b'

## Concepts
- HTTP client-side scripts with `curl` and server-side models

## Files
- `http://127.0.0.1:8081/v1/models`

_Importance: 8 · Confidence: 0.9_
