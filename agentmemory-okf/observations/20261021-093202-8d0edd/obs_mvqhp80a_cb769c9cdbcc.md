---
type: file_edit
title: Nextcloud major-version upgrade chain
description: Decide the PHP window before touching anything and validate mechanics
resource: agentmemory://observation/obs_mvqhp80a_cb769c9cdbcc
tags: ["PHP version management", "file_edit"]
timestamp: 2026-10-27T09:35:13.348026+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 8
confidence: 0.9
---
# Summary

The script performs a series of steps to upgrade Nextcloud from version 31 to version 33, including validating the PHP version ID range, decrypting a file from GitHub, and creating a hard link to the old version. Each step is crucial for the upgrade process.

## Facts
- Using `curl` to fetch `versioncheck.php` from the GitHub repository
- Verifying the PHP version ID range before proceeding

## Concepts
- PHP version management

## Files
- `references/upgrade-chain.md`

_Importance: 8 · Confidence: 0.9_
