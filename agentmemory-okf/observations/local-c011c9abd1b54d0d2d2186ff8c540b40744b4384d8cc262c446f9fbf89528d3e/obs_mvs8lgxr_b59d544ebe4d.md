---
type: file_edit
title: SMB Troubleshooting Guide
description: Use when SMB clients cannot connect or smbd thread counts explode.
resource: agentmemory://observation/obs_mvs8lgxr_b59d544ebe4d
tags: ["port binding", "service discovery", "mDNS", "file_edit"]
timestamp: 2026-10-28T14:55:54.107513+00:00
source: agentmemory
session_id: local-c011c9abd1b54d0d2d2186ff8c540b40744b4384d8cc262c446f9fbf89528d3e
importance: 8
confidence: 0.9
---
# Summary

When devices (especially iPads, Macs, iOS) can't connect to SMB servers, follow this systematic approach. Verify Samba is running, check what ports are actually listening, and diagnose common issues and fixes.

## Facts
- Verify Samba is running.
- Check what ports are actually listening.

## Concepts
- port binding
- service discovery
- mDNS

## Files
- `/etc/samba/smb.conf`

_Importance: 8 · Confidence: 0.9_
