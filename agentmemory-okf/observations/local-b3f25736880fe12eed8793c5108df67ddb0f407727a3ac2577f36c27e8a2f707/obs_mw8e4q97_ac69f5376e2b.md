---
type: file_edit
title: Samba mount access
description: Handling Unicode filenames on SMB shares
resource: agentmemory://observation/obs_mw8e4q97_ac69f5376e2b
tags: ["NFD/NFC normalization", "file_edit"]
timestamp: 2026-11-08T22:15:09.544105+00:00
source: agentmemory
session_id: local-b3f25736880fe12eed8793c5108df67ddb0f407727a3ac2577f36c27e8a2f707
importance: 7
confidence: 0.9
---
# Summary

The user encountered a naming issue with SMB shares on a Mac, using a server with Linux/Windows-based clients. The problem was resolved by renaming the file on the server and using a specific script to normalize the name.

## Facts
- Client tools may decompose names while server stores composed ones

## Concepts
- NFD/NFC normalization

## Files
- `references/unicode-filenames.md`

_Importance: 7 · Confidence: 0.9_
