---
type: file_edit
title: PostgreSQL Database Collation Version Mismatch
description: Redmine environment setup fails to create database
resource: agentmemory://observation/obs_mw4wsc7f_e0a8bd9fd95d
tags: ["PostgreSQL Collation Version Mismatch", "Redmine Database Setup", "file_edit"]
timestamp: 2026-11-06T11:46:19.463961+00:00
source: agentmemory
session_id: local-8ef33c32e52cde7148dacf6aa07a1ff93cd08abd254c0bb379729b950c6fd7ff
importance: 7
confidence: 0.9
---
# Summary

The tool executed a script to create a Redmine database, but encountered a PostgreSQL collation version mismatch issue. The issue was resolved by rebuilding objects in the database that use the default collation, and running an <code>ALTER DATABASE</code> command.

## Facts
- PostgreSQL database collation version mismatch detected
- Solution involves rebuilding objects using default collation

## Concepts
- PostgreSQL Collation Version Mismatch
- Redmine Database Setup

## Files
- `/root/recreate-containers.sh`
- `/root/redmine.env`

_Importance: 7 · Confidence: 0.9_
