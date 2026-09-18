---
type: FileRead
title: Read sidebar bulk registration script for Hermes Desktop
description: Python script to populate projects.db with AI projects and folder attachments
resource: agentmemory://observation/obs_mrq87zg7_d1a313daefbe
tags: ["SQLite database schema", "Hermes Desktop sidebar", "Bulk data insertion", "Idempotent script execution", "fileread"]
timestamp: 2026-07-18T10:31:03.220544+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 4
confidence: 1
---
# Summary

The agent read a reference Python script used for bulk-registering AI projects and their associated folder paths into the Hermes Desktop sidebar SQLite database. This reveals the underlying database schema and the standard directory structure used across the Hermes ecosystem.

## Facts
- Script targets SQLite database at ~/.hermes/projects.db
- Modifies 'projects' and 'project_folders' tables
- Registers 6 AI projects: AgentMemory, Hermes, EXO, Comfy, MCP, Ollama
- Uses UUID for project IDs and handles idempotent creation via slug lookup
- Creates directories on disk using os.makedirs before database insertion

## Concepts
- SQLite database schema
- Hermes Desktop sidebar
- Bulk data insertion
- Idempotent script execution

## Files
- `~/.hermes/skills/productivity/projects/references/sidebar-bulk-registration.py`
- `~/.hermes/projects.db`

_Importance: 4 · Confidence: 1_
