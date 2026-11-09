---
type: file_edit
title: Qdrant container creation failed
description: Failed to create qdrant container
resource: agentmemory://observation/obs_mw4y5p40_e3d80b0e683e
tags: ["qdrant startup error", "docker container creation", "file_edit"]
timestamp: 2026-11-06T12:24:42.331132+00:00
source: agentmemory
session_id: local-8ef33c32e52cde7148dacf6aa07a1ff93cd08abd254c0bb379729b950c6fd7ff
importance: 7
confidence: 1
---
# Summary

The qdrant container creation process failed due to a panic in the startup process of the qdrant application. The error message indicates an invalid type error in JSON serialization.

## Facts
- Command ran: ssh root@10.1.2.1 'podman rm -f qdrant >/dev/null 2>&1; podman run -d --name qdrant --restart=unless-stopped -p 6333:6333 -p 6334:6334 -v /alpha/data/qdrant:/qdrant/storage:z docker.io/qdrant/qdrant:v1.12.6 2>&1 | tail -2; sleep 20; podman ps --format "{{.Names}} {{.Status}}" | grep qdrant; echo "--- log ---"; podman logs --tail 6 qdrant 2>&1 | tail -6; echo "--- api ---"; timeout 10 curl -s http://127.0.0.1:6333/collections | head -c 300' 2>&1
- Exit code of terminal command: 0
- Output of terminal command: <redacted></redacted>
- Time taken to run command: 300ms
- Panic occurred in qdrant startup with error: \"Failed to (de)serialize from/to json: invalid type: sequence, expected a map at line 1 column 1\"",<redacted></redacted>
- Error: Error::Error

## Concepts
- qdrant startup error
- docker container creation

_Importance: 7 · Confidence: 1_
