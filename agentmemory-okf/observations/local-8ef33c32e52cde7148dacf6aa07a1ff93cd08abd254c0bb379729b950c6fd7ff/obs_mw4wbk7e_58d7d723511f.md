---
type: Observation
title: Podman info and dir dump
description: Running SSH command against 10.1.2.1
resource: agentmemory://observation/obs_mw4wbk7e_58d7d723511f
tags: ["Podman directory structure", "SSH command syntax", "bolt_state.db file format", "observation"]
timestamp: 2026-11-06T11:33:16.680493+00:00
source: agentmemory
session_id: local-8ef33c32e52cde7148dacf6aa07a1ff93cd08abd254c0bb379729b950c6fd7ff
importance: 6
confidence: 0.9
---
# Summary

The tool used was terminal, running an SSH command against 10.1.2.1. The info and dir dump were successful, returning bolt_state.db file details.

## Facts
- Command executed with timeout of 90 seconds
- Loading bolt_state.db file in /var/lib/containers/storage

## Concepts
- Podman directory structure
- SSH command syntax
- bolt_state.db file format

## Files
- `/var/lib/containers/storage/libpod/ bolt_state.db`

_Importance: 6 · Confidence: 0.9_
