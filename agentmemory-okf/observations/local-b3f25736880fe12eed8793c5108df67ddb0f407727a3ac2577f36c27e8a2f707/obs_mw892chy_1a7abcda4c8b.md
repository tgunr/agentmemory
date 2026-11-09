---
type: file_write
title: NFC normalization tool
description: fix malformed filenames
resource: agentmemory://observation/obs_mw892chy_1a7abcda4c8b
tags: ["NFC normalization", "smb share path management", "file_write"]
timestamp: 2026-11-08T19:53:20.323593+00:00
source: agentmemory
session_id: local-b3f25736880fe12eed8793c5108df67ddb0f407727a3ac2577f36c27e8a2f707
importance: 8
confidence: 0.9
---
# Summary

The script normalizes decomposed (NFD) filenames on an SMB share to NFC, allowing tools like rsync to work correctly. It checks for existing files, attempts renaming, and verifies the result. Results are printed to the console, and in write mode, also written to /tmp/hermes-nfc-renames.tsv.

## Facts
- Process bytes path to fix NFC normalization errors
- fail path if NFD/compat mode is used

## Concepts
- NFC normalization
- smb share path management

## Files
- `/Users/davec/.hermes/cache/scratch/nfc_fix.py`

_Importance: 8 · Confidence: 0.9_
