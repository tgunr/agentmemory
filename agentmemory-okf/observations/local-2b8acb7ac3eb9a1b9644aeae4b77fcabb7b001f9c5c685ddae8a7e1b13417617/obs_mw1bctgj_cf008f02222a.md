---
type: FileRead
title: Python script execution
description: Login to Gmail IMAP account and fetch emails
resource: agentmemory://observation/obs_mw1bctgj_cf008f02222a
tags: ["IMAP login and email search", "fileread"]
timestamp: 2026-11-03T23:23:04.862405+00:00
source: agentmemory
session_id: local-2b8acb7ac3eb9a1b9644aeae4b77fcabb7b001f9c5c685ddae8a7e1b13417617
importance: 4
confidence: 0.9
---
# Summary

Executed a Python script that logged into Gmail IMAP and fetched emails containing keywords "Plex Pass" and "Receipt".

## Facts
- Tool: terminal
- Command: python3 - <<'EOF'\nimport imaplib, email\nm = imaplib.IMAP4_SSL(\"imap.gmail.com\", 993, timeout=30)\nm.login(\"davec@carltontc.com\", \"ogzvkjjlculzmlcv\")\nm.select('\"[Gmail]/All Mail\"', readonly=True)\nst, msgs = m.search(None, '(OR (SUBJECT \"Plex Pass\") (SUBJECT \"Receipt\") (FROM \"plex.tv\"))')\nids = msgs[0].split()\nprint(\"hits:\", len(ids))\nfor i in ids:\n    st, d = m.fetch(i, \"(BODY.PEEK[HEADER.FIELDS (FROM TO SUBJECT DATE)])\")\n    h = d[0][1].decode(\"utf-8\",\"replace\").replace(\"\\r\\n\",\" | \")\n    if 'plex' in h.lower():\n        print(\"-\", h[:190])\nm.logout()\nEOF'

## Concepts
- IMAP login and email search

## Files
- `None`

_Importance: 4 · Confidence: 0.9_
