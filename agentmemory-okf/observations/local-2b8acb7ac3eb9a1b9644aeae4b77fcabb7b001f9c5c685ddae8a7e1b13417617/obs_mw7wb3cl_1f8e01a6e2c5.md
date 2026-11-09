---
type: file_edit
title: IMAP Gmail search and dump of email content
description: Parse email with multiple parts and remove HTML tags
resource: agentmemory://observation/obs_mw7wb3cl_1f8e01a6e2c5
tags: ["IMAP email parsing", "file_edit"]
timestamp: 2026-11-08T13:56:13.355198+00:00
source: agentmemory
session_id: local-2b8acb7ac3eb9a1b9644aeae4b77fcabb7b001f9c5c685ddae8a7e1b13417617
importance: 4
confidence: 1
---
# Summary

The tool runs a Python script to connect to an IMAP Gmail account, search for emails with a specific subject, and dump the email content. The script then parses the email to remove HTML tags and unwanted characters.

## Facts
- IMAP connection to Gmail using SSL
- Search for emails with specific subject
- Parsing of emails with multiple parts

## Concepts
- IMAP email parsing

## Files
- `imap.py`

_Importance: 4 · Confidence: 1_
