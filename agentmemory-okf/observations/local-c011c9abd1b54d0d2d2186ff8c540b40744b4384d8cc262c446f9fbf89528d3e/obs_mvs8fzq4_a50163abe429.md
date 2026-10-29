---
type: file_edit
title: Listing SAS LSI FTP
description: No specific context
resource: agentmemory://observation/obs_mvs8fzq4_a50163abe429
tags: ["curl options", "ftp listing", "plain ftp", "file_edit"]
timestamp: 2026-10-28T14:51:38.521714+00:00
source: agentmemory
session_id: local-c011c9abd1b54d0d2d2186ff8c540b40744b4384d8cc262c446f9fbf89528d3e
importance: 6
confidence: 1
---
# Summary

Tool executed a series of FTP commands as part of a test. The output showed successful listings and tests.

## Facts
- ftp /Driver/SAS/LSI/ listing
- curl options: --list-only, --max-time 25
- ftp /Driver/SAS/LSI/3008/ listing
- curl options: --list-only, --max-time 25
- plain ftp root test
- curl options: --list-only, --max-time 20

## Concepts
- curl options
- ftp listing
- plain ftp

_Importance: 6 · Confidence: 1_
