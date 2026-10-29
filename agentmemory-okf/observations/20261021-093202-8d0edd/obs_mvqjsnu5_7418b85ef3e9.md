---
type: CommandRun
title: Findling info XML restore and unpark script update
description: Revert of backup and app disable followed by script rewrite.
resource: agentmemory://observation/obs_mvqjsnu5_7418b85ef3e9
tags: ["Info XML restore", "App disabling and search provider inactivation", "Unpark script rewrite and placement", "commandrun"]
timestamp: 2026-10-27T10:33:53.064228+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 8
confidence: 1
---
# Summary

The info.xml file was restored from the cache, and then the application was disabled and the search provider was made inactive to prevent potential security issues. Next, the unpark script was rewritten and placed in the right location.

## Facts
- Pristine info.xml restored in cache directory
- Parked findling info.xml backup exists outside app tree
- Findling app disabled with background jobs stopped
- Parked findling info.xml file changes and data state preserved

## Concepts
- Info XML restore
- App disabling and search provider inactivation
- Unpark script rewrite and placement

## Files
- `/var/www/backups/findling-info.xml.parked-20261027`

_Importance: 8 · Confidence: 1_
