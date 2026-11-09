---
type: Observation
title: Syncoid files in master
description: Check for syncoid files and components
resource: agentmemory://observation/obs_mw4un3k1_802ad3ba068c
tags: ["Podman", "Kubernetes", "syncoid", "observation"]
timestamp: 2026-11-06T10:46:15.741435+00:00
source: agentmemory
session_id: local-8ef33c32e52cde7148dacf6aa07a1ff93cd08abd254c0bb379729b950c6fd7ff
importance: 7
confidence: 0.9
---
# Summary

During the syncoid-tool-call, the observed command executed an ssh command to print "=== syncoid files in master ===" output, followed by a series of commands to inspect for running syncoid processes. The tool output included files synced to master, cleanup, and job scripts.

## Facts
- Syncoid is a Kubernetes-based component for managing and monitoring databases as a service.
- File syncoid*, syncoid-cleanup*, syncoid-jobs* found in /root/src/sanoid-master/

## Concepts
- Podman
- Kubernetes
- syncoid

## Files
- `/root/src/sanoid-master/syncoid-runner.service`
- `/root/src/sanoid-master/syncoid-cleanup.service`

_Importance: 7 · Confidence: 0.9_
