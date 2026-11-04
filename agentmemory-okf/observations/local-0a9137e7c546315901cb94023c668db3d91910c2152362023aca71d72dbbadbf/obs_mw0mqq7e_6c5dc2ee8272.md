---
type: file_edit
title: SSH bulk import error
description: Bulk import of CSV file fails due to undefined variable $replace
resource: agentmemory://observation/obs_mw0mqq7e_6c5dc2ee8272
tags: ["fwconsole bulkimport", "sed and awk usage", "file_edit"]
timestamp: 2026-11-03T11:54:03.429445+00:00
source: agentmemory
session_id: local-0a9137e7c546315901cb94023c668db3d91910c2152362023aca71d72dbbadbf
importance: 6
confidence: 0.9
---
# Summary

The bulk import of a CSV file using fwconsole bulkimport failed due to an undefined variable $replace in Bulkimport.class.php line 47. This may cause issues with importing new modules.

## Facts
- Permanently added '192.168.88.230' (ED25519) to the list of known hosts.
- Importing bulk extensions fails with undefined variable $replace error.

## Concepts
- fwconsole bulkimport
- sed and awk usage

## Files
- `/root/ext.csv`

_Importance: 6 · Confidence: 0.9_
