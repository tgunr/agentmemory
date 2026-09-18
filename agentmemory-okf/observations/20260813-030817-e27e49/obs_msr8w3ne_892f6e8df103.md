---
type: file_edit
title: Edit configuration of Docmost app
description: Open-webui swappiness raw (HostConfig mem section)
resource: agentmemory://observation/obs_msr8w3ne_892f6e8df103
tags: ["React hooks", "file_edit"]
timestamp: 2026-08-13T08:17:16.919269+00:00
source: agentmemory
session_id: 20260813_030817_e27e49
importance: 7
confidence: 0.9
---
# Summary

The command `ssh pve.root 'head -c 400 /tmp/docmost_app_cfg.json; echo; echo "==== open-webui swappiness raw (HostConfig mem section)===="; podman inspect open-webui > /tmp/ow.json; python3 -c "\nimport json\nd=json.load(open(\\\"/tmp/ow.json\\\"))\nh=d[0][\\\"HostConfig\\\"]\nprint({k:h[k] for k in h if \\\"mem\\\" in k.lower() or \\\"swap\\\" in k.lower()})\nprint(\\\"cgroupns:\\\",\\\"unpriv\\\" if False else \\\"\\\")\nc=d[0][\\\"Config\\\"]\nprint(\\\"labels:\\\", json.dumps(c.get(\\\"Labels\\\",{})))\n\"'\)` ran successfully after 30 seconds.

## Facts
- Timeout: 30 seconds
- Command: ssh pve.root

## Concepts
- React hooks

## Files
- `/tmp/docmost_app_cfg.json`

_Importance: 7 · Confidence: 0.9_
