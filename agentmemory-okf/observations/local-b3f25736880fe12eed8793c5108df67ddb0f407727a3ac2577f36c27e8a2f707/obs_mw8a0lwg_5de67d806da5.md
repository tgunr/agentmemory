---
type: file_edit
title: SCP and Python script execution
description: executes Python script on remote server
resource: agentmemory://observation/obs_mw8a0lwg_5de67d806da5
tags: ["SFTPSCP file transfers", "uncoded file names", "data processing with Python", "file_edit"]
timestamp: 2026-11-08T20:19:58.809847+00:00
source: agentmemory
session_id: local-b3f25736880fe12eed8793c5108df67ddb0f407727a3ac2577f36c27e8a2f707
importance: 5
confidence: 1
---
# Summary

Executed a Python script on a remote server using SCP and SSH. The script processed files in a directory and printed decomposed file names.

## Facts
- Command: cd /Users/davec && scp -q ~/.hermes/cache/scratch/pve_nfc.py root@10.1.2.1:/tmp/pve_nfc.py
- Python script: python3 -c \"\nimport sys\nfor l in open('/tmp/hermes-dirs.txt',errors='surrogateescape'):\n    l=l.rstrip('\\n')\n    if l.startswith('/Volumes/design/'): print('/beta/design/'+l[len('/Volumes/design/'):])\n\" > /tmp/hermes-dirs-srv.txt
- Remote execution: ssh root@10.1.2.1
- Environment variables: export HERMES_CACHE_DIR=scratch
- SCP command options: -q, -o
- Python 3 used

## Concepts
- SFTPSCP file transfers
- uncoded file names
- data processing with Python

_Importance: 5 · Confidence: 1_
