---
type: file_edit
title: Ollama Daemon Alive
description: No other context provided
resource: agentmemory://observation/obs_ms1zwb6y_76435b0d031c
tags: ["Postgres database management", "file_edit"]
timestamp: 2026-07-26T16:11:15.752112+00:00
source: agentmemory
session_id: 20260726_101852_f66fa4
importance: 6
confidence: 0.9
---
# Summary

The ollama daemon process was initiated to perform specific functions. The process details and port status are available upon querying certain commands.

## Facts
- Total CPU usage of ollama daemon: 11661 on Macbook, 15611 on Ollama.app with 10 GB size and 100% GPU usage
- Port 11434 API is up (HTTP code: 200)

## Concepts
- Postgres database management

## Files
- `/dev/null;`
- `/Applications/Ollama.app/Contents/Resources/llama-server --model /Volumes/AI/ollama/.ollama/models/blobs/sha256-dde5aa3fc5ffc17176b5e8bdc82f587b24b2678c6c66101bf7da77af9f7ccdff --port 62923 --host 127.0.0.1 --no-webui --offline -c 65536 -np 1 --log-verbosity 4 --no-log-prefix --no-log-timestamps --no-jinja --chat-template chatml --flash-attn auto -b 2048 -ub 2048 --context-shift --keep 4`
- `/Applications/Ollama.app/Contents/Resources/ollama serve; pgrep -fl ollama>`

_Importance: 6 · Confidence: 0.9_
