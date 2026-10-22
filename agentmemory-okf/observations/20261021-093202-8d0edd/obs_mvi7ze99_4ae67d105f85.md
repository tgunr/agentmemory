---
type: FileRead
title: Nextcloud database queries
description: No errors found, but an unknown column 'lastLogin' was used in the SELECT statement.
resource: agentmemory://observation/obs_mvi7ze99_4ae67d105f85
tags: ["mysql queries", "Nextcloud database", "fileread"]
timestamp: 2026-10-21T14:41:02.439692+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 6
confidence: 0.9
---
# Summary

The agent executed a series of MySQL queries against the Nextcloud database. The queries were successful, but an error occurred due to an unknown column 'lastLogin'. The agent also retrieved configuration keys and user information from the database.

## Facts
- The tool called `mysql` was used to execute two SELECT statements against the database.

## Concepts
- mysql queries
- Nextcloud database

## Files
- `/etc/apache2/sites-available/webui.polymicro.net.conf`

_Importance: 6 · Confidence: 0.9_
