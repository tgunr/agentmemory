---
type: file_edit
title: Extracting email response
description: Contacting Plex support
resource: agentmemory://observation/obs_mw21m1c4_dea922a8ecc2
tags: ["Python with IMAP", "Email parsing", "file_edit"]
timestamp: 2026-11-04T11:38:04.986959+00:00
source: agentmemory
session_id: local-2b8acb7ac3eb9a1b9644aeae4b77fcabb7b001f9c5c685ddae8a7e1b13417617
importance: 7
confidence: 0.9
---
# Summary

The script fetches and parses an email response from Plex's account support team, extracting relevant information such as the subject, date, and message ID.

## Facts
- Using Python with IMAP to fetch and parse email response.

## Concepts
- Python with IMAP
- Email parsing

## Files
- `python3 -c \\nimport imaplib, email\\nm = imaplib.IMAP4_SSL("imap.gmail.com", 993, timeout=30)\\nm.login("davec@carltontc.com", "ogzvkjjlculzmlcv")\\nm.select("INBOX", readonly=True)\\nst, msgs = m.search(None, '(FROM "plexapp.com")')\\nids = msgs[0].split()\\nfor i in ids[-2:]:
 ...`

_Importance: 7 · Confidence: 0.9_
