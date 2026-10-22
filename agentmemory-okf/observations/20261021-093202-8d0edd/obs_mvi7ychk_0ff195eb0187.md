---
type: CommandRun
title: Retrieve dataset holding information
description: Retrieve information about the dataset holding /var/www
resource: agentmemory://observation/obs_mvi7ychk_0ff195eb0187
tags: ["Filesystem usage and snapshot management", "commandrun"]
timestamp: 2026-10-21T14:40:13.488307+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 4
confidence: 1
---
# Summary

The terminal was run with an ssh command to retrieve information about the dataset holding /var/www. The system returned the total disk space of /var/www and information about the letsencrypt certificates. However, the presence of an old webroot in snapshots was not found.

## Facts
- Total disk space of /var/www: 2.2T (15G used, 2.2T available)
- Presence of old webroot in snapshots not found
- Number of letsencrypt certs: 174

## Concepts
- Filesystem usage and snapshot management

## Files
- `/var/www`

_Importance: 4 · Confidence: 1_
