---
type: file_edit
title: SMB Troubleshooting Guide
description: Use when SMB clients cannot connect or smbd thread counts explode.
resource: agentmemory://observation/obs_mvs74ll4_19e5c9f1aa80
tags: ["Debugging Samba on Linux", "Port binding and service discovery", "Leaked ZFS threads and load average issues", "file_edit"]
timestamp: 2026-10-28T14:14:47.364791+00:00
source: agentmemory
session_id: local-c011c9abd1b54d0d2d2186ff8c540b40744b4384d8cc262c446f9fbf89528d3e
importance: 7
confidence: 1
---
# Summary

Systematic approach for debugging Samba on Linux, port binding, service discovery, and leaked ZFS threads inflating load average.

## Facts
- Verify Samba is running
- Check what ports are actually listening
- Verify interface binding matches config

## Concepts
- Debugging Samba on Linux
- Port binding and service discovery
- Leaked ZFS threads and load average issues

## Files
- `/etc/samba/smb.conf`

_Importance: 7 · Confidence: 1_
