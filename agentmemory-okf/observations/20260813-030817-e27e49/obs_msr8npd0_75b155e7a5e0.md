---
type: file_edit
title: Failed Podman start command
description: Open-webui container initialization fails with OCI runtime error
resource: agentmemory://observation/obs_msr8npd0_75b155e7a5e0
tags: ["cgroupv2", "OCI runtime error", "Podman", "file_edit"]
timestamp: 2026-08-13T08:10:45.152881+00:00
source: agentmemory
session_id: 20260813_030817_e27e49
importance: 5
confidence: 0.9
---
# Summary

The Podman start command for open-webui container encountered an OCI runtime error, preventing successful initialization. This is a critical system failure.

## Facts
- OCI runtime error: unable to start container "23f94906bf767393ed9dd7ff282d31ad03c41944e6704cbd8ed1ee814a1b58ad"
- cgroupv2 memory swappiness limitation

## Concepts
- cgroupv2
- OCI runtime error
- Podman

_Importance: 5 · Confidence: 0.9_
