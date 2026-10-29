---
type: file_edit
title: Restore Nextcloud Server
description: Invalidate and restore a Nextcloud server
resource: agentmemory://observation/obs_mvqp4ffv_7bf73b7df36a
tags: ["SQL migration", "Nextcloud restore", "file_edit"]
timestamp: 2026-10-27T13:03:00.135486+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 8
confidence: 0.9
---
# Summary

A Nextcloud instance usually survives a \"total loss\" far better than it looks: the **database**, **data directory**, and **TLS certs** are what matter, and they are rarely what got deleted. Never reinstall over a live data dir before confirming what the database expects.

## Facts
- Use when Nextcloud serves a maintenance page, 500s, or blank pages after an update or a host rebuild.
- The web root, Apache vhost, or `config.php` was deleted but the database and data dir survive.

## Concepts
- SQL migration
- Nextcloud restore

## Files
- `/var/www/nextcloud`

_Importance: 8 · Confidence: 0.9_
