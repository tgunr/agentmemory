---
type: file_edit
title: Set environment variable
description: Running command in hermes-agent
resource: agentmemory://observation/obs_mvl3hsr5_8b55d80b26f8
tags: ["Python", "file_edit"]
timestamp: 2026-10-23T14:58:39.731131+00:00
source: agentmemory
session_id: local-809bba89dfe3ea9f5c18ac47fb5e98d8f387fdfa7d0a3842632c1eabc2f8e61f
importance: 8
confidence: 1
---
# Summary

The tool ran a command to set an environment variable using `python`. The output indicates that the variable was set successfully, but the tool encountered an error.

## Facts
- Command: `VP=$(ls -d ~/.hermes/installs/*/environments/*/venv/bin/python 2>/dev/null | head -1); echo "VP=$VP"; cd ~/.hermes/hermes-agent && HERMES_HOME=/Users/davec/jo "$VP" -c ...`
- Output: `VP=/Users/davec/.hermes/installs/977a2b64e85cdb79/environments/0d29233e11384443a7e76879b0e0b575/venv/bin/python`
- Exit code: 1
- Error: `TypeError: 'bool' object is not callable`

## Concepts
- Python

## Files
- `/Users/davec/.hermes/installs/977a2b64e85cdb79/environments/0d29233e11384443a7e76879b0e0b575/venv/bin/python`

_Importance: 8 · Confidence: 1_
