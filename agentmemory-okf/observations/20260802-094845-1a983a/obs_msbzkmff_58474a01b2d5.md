---
type: FileRead
title: Llama server process details
description: User-space processes on Ollama, Llama-server, and Ollama-router
resource: agentmemory://observation/obs_msbzkmff_58474a01b2d5
tags: ["Llama server", "Ollama services", "fileread"]
timestamp: 2026-08-02T15:59:52.199557+00:00
source: agentmemory
session_id: 20260802_094845_1a983a
importance: 6
confidence: 0.9
---
# Summary

Observed the ps aux output which displayed some useful processes from the user space including the ollama server processes - The output revealed three processes from /Users/davec and one more in /Applications that included a reference to ollama-server. This process contains information about CPU usage.

## Facts
- Total installed RAM of all ollama services = 495103280KB or approximately 491.4GB.
- Found ollama server running with process ID = 24205, CPU usage around 45%

## Concepts
- Llama server
- Ollama services

_Importance: 6 · Confidence: 0.9_
