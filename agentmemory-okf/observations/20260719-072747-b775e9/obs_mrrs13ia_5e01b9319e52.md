---
type: CommandRun
title: eufyMake Studio Profile directory and cache inspection
description: Checking application support directory size and crash dump files
resource: agentmemory://observation/obs_mrrs13ia_5e01b9319e52
tags: ["Sentry crash reporting", "macOS application storage", "Application Support directory", "commandrun"]
timestamp: 2026-07-19T12:33:20.384214+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 4
confidence: 1
---
# Summary

Investigated eufyMake Studio application storage to find the 1.6GB Application Support directory contains Sentry crash dump files but minimal cache data. The crash dumps in .SentryDmp/completed/ indicate the app has experienced crashes that were captured and stored.

## Facts
- Application Support directory is 1.6GB at ~/Library/Application Support/eufyMake Studio Profile
- .SentryDmp directory exists with crash dumps in completed/ subdirectory
- Two crash dump files found: 497f675c-6331-40d5-b134-9e6f6b643e7a.dmp and aba02cfb-73a7-4b95-86a4-3845c50d322e.dmp
- Cache directory is only 80K at ~/Library/Caches/com.anker.pceufyMake
- Cache contains Cache.db (49152 bytes), Cache.db-shm, and fsCachedData directory
- Directory includes config files: CommonConfig.ini, UVCommonConfig.ini, FilamentMaterial.json

## Concepts
- Sentry crash reporting
- macOS application storage
- Application Support directory

## Files
- `/Users/davec/Library/Application Support/eufyMake Studio Profile/.SentryDmp/completed/497f675c-6331-40d5-b134-9e6f6b643e7a.dmp`
- `/Users/davec/Library/Application Support/eufyMake Studio Profile/.SentryDmp/completed/aba02cfb-73a7-4b95-86a4-3845c50d322e.dmp`
- `/Users/davec/Library/Caches/com.anker.pceufyMake/Cache.db`

_Importance: 4 · Confidence: 1_
