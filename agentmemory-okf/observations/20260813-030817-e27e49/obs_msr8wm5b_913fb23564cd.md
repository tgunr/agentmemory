---
type: file_edit
title: Audit of podman command
description: Maintenance tool usage on PODMAN version
resource: agentmemory://observation/obs_msr8wm5b_913fb23564cd
tags: ["podman-systemd.unit(5)", "Quadlets", "file_edit"]
timestamp: 2026-08-13T08:17:40.891600+00:00
source: agentmemory
session_id: 20260813_030817_e27e49
importance: 4
confidence: 1
---
# Summary

Audit of podman command usage found a deprecated command, recommended to use Quadlets instead. Detailed logs and exit code provided.

## Facts
- podman --version; echo ---;
- qu quadlets for running containers and pods under systemd.
- /var/lib/containers/storage/overlay-containers/{ocid}/config.json

## Concepts
- podman-systemd.unit(5)
- Quadlets

_Importance: 4 · Confidence: 1_
