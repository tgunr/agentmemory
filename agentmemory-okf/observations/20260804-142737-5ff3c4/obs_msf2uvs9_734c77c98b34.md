---
type: file_edit
title: Copy project DB
description: Copying system's projects database for backup and migration purposes
resource: agentmemory://observation/obs_msf2uvs9_734c77c98b34
tags: ["file_edit"]
timestamp: 2026-08-04T19:55:08.257475+00:00
source: agentmemory
session_id: 20260804_142737_5ff3c4
importance: 6
confidence: 0.85
---
# Summary

The script copies the system's projects database to a backup location using SQLite and Python standard library functions. This is likely done for data protection, migration, or maintenance purposes.

## Facts
- The script copies the system's projects database to a backup location.
- The script uses SQLite, Python standard library functions, and Pathlib for file manipulation.
- The script connects to the local machine via SSH (pro.local) without forwarding X11.

## Files
- `/Users/davec/.hermes/profiles/systems/projects.db`

_Importance: 6 · Confidence: 0.85_
