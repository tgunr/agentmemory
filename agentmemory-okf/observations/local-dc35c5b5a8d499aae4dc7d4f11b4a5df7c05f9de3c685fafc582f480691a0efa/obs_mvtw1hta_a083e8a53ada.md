---
type: file_edit
title: SQLite persistence in Telegram
description: No SQLite persistence is set up in the current configuration.
resource: agentmemory://observation/obs_mvtw1hta_a083e8a53ada
tags: ["SQLite", "file_edit"]
timestamp: 2026-10-29T18:39:59.081144+00:00
source: agentmemory
session_id: local-dc35c5b5a8d499aae4dc7d4f11b4a5df7c05f9de3c685fafc582f480691a0efa
importance: 8
confidence: 0.9
---
# Summary

The code defines a class `Store` that encapsulates the SQLite database interaction. The `upsert_contact` method is used to insert new contact information into the database. The database schema includes two tables: `contacts` and `turns`. The `contact_id` field serves as the primary key for the `contacts` table. The `turns` table stores the conversation history.

## Facts
- Native Python code is used to interact with the SQLite database.

## Concepts
- SQLite

## Files
- `/Users/davec/Desktop/telegram-warden/warden/store.py`

_Importance: 8 · Confidence: 0.9_
