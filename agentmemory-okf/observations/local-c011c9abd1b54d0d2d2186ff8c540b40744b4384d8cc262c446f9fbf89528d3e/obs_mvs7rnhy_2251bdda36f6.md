---
type: file_edit
title: SMB Troubleshooting Guide
description: Debug Samba on Linux — port binding, service discovery, mDNS, and leaked ZFS threads inflating load average.
resource: agentmemory://observation/obs_mvs7rnhy_2251bdda36f6
tags: ["port binding", "service discovery", "mDNS", "ZFS threads", "file_edit"]
timestamp: 2026-10-28T14:32:42.926751+00:00
source: agentmemory
session_id: local-c011c9abd1b54d0d2d2186ff8c540b40744b4384d8cc262c446f9fbf89528d3e
importance: 7
confidence: 1
---
# Summary

When devices (especially iPads, Macs, iOS) can't connect to SMB servers, follow this systematic approach.

## Facts
- Verify Samba is running using `systemctl status smbd nmbd`
- Check what ports are actually listening using `ss -tlnp | grep -E ':445|:139'
- Verify interface binding matches config using `ss -tlnp 'sport = :445'

## Concepts
- port binding
- service discovery
- mDNS
- ZFS threads

## Files
- `/etc/samba/smb.conf`

_Importance: 7 · Confidence: 1_
