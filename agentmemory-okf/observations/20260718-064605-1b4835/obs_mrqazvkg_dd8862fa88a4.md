---
type: CommandRun
title: SQLite config database query for bluebubbles-server
description: Checked config schema and attempted to list config rows with password redaction
resource: agentmemory://observation/obs_mrqazvkg_dd8862fa88a4
tags: ["SQLite database query", "Config table schema", "Column name mismatch error", "commandrun"]
timestamp: 2026-07-18T11:48:43.789557+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

Attempted to read the bluebubbles-server configuration database to inspect settings, but the SELECT query failed because it referenced a non-existent 'key' column when the actual schema uses 'name' as the column. The schema inspection succeeded, revealing the table structure.

## Facts
- Database path: $HOME/Library/Application Support/bluebubbles-server/config.db
- Config table schema: CREATE TABLE "config" ("name" text PRIMARY KEY NOT NULL, "value" text)
- Query used incorrect column name 'key' instead of actual column 'name'
- Exit code: 1 (indicating query failure)

## Concepts
- SQLite database query
- Config table schema
- Column name mismatch error

## Files
- `$HOME/Library/Application Support/bluebubbles-server/config.db`

_Importance: 4 · Confidence: 1_
