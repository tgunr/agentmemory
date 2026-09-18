---
type: file_edit
title: Audit and workarounds for SSH backend issues on Samba mounts
description: Error handling and access scenarios
resource: agentmemory://observation/obs_mssyapht_60fc4df81b68
tags: ["Samba", "TCC sandbox", "rsync", "file_edit"]
timestamp: 2026-08-14T12:56:14.989733+00:00
source: agentmemory
session_id: 20260814_074410_c9b83a
importance: 8
confidence: 0.9
---
# Summary

The provided tutorial deals with the Samba mount access issues on macOS and presents two ways to work around the problem: 1) using SSH to operate on the native filesystem, and 2) rsync -e ssh for file pushes. The first method avoids both TCC write-blocks and SMB quirks.

## Facts
- The agent's SSH terminal backend cannot write to Samba mounts (the macOS TCC sandbox is the cause)
- Pushing an edited file to the native fs with rsync -e ssh is recommended instead of trying to cp mv onto the mount

## Concepts
- Samba
- TCC sandbox
- rsync

_Importance: 8 · Confidence: 0.9_
