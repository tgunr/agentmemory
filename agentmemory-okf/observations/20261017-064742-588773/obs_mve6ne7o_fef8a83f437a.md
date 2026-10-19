---
type: file_edit
title: Pre-flight delta size vs. target free space
description: Import data from running command line
resource: agentmemory://observation/obs_mve6ne7o_fef8a83f437a
tags: ["zfs send", "zfs receive", "file_edit"]
timestamp: 2026-10-18T18:52:38.192325+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 8
confidence: 0.9
---
# Summary

The operation was modified to add a safety check for delta size vs. target free space. Before starting, a baseline should be read from the running command line or log INFO line. This is done to prevent hours of running errors due to insufficient space.

## Facts
- Running `zfs send -I <snapA> <snapB>` is recommended due to catch-up delta values.
- Compare with `zfs list -o avail` on TARGET pool to avoid "out of space" errors.

## Concepts
- zfs send
- zfs receive

_Importance: 8 · Confidence: 0.9_
