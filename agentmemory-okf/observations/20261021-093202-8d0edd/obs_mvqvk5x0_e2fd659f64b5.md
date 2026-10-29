---
type: file_write
title: Fixed ollama service
description: Edits OLLAMA_MODELS and grants traversability
resource: agentmemory://observation/obs_mvqvk5x0_e2fd659f64b5
tags: ["acl", "pinning", "traversal", "file_write"]
timestamp: 2026-10-27T16:03:11.983388+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 7
confidence: 0.9
---
# Summary

The service was updated to grant the ollama user access to the real model store via ACLs, and to pin OLLAMA_MODELS explicitly. 
    The edits were verified and the service was successfully restarted with no new restarts. 
    The OLLAMA_MODELS were successfully pinned and the service is now traversable.

## Facts
- Edited OLLAMA_MODELS at path: /Users/davec/.hermes/profiles/systems/cache/scratch/nc30/fix_ollama.sh
- Traversable parents set

## Concepts
- acl
- pinning
- traversal

## Files
- `/Users/davec/.hermes/profiles/systems/cache/scratch/nc30/fix_ollama.sh`

_Importance: 7 · Confidence: 0.9_
