---
type: file_edit
title: Retrieve audiobook rows and dist types from iBooks database
description: Determine library structure
resource: agentmemory://observation/obs_mwgexm80_11ad903630fe
tags: ["sqlite database query", "file_edit"]
timestamp: 2026-11-14T12:59:46.749128+00:00
source: agentmemory
session_id: local-3c5638a551616541af36776d3aeea5523a156e6598162a09661369ba607ddaf9
importance: 4
confidence: 1
---
# Summary

The tool retrieved and processed data from the iBooks database, extracting key information about audiobooks and dist types.

## Facts
- DB path: $HOME/Library/Containers/com.apple.iBooksX/Data/Documents/BKLibrary/BKLibrary-1-091020131601.sqlite
- Executed SQL query: select ZTITLE, ZASSETTYPE, ZCONTENTTYPE from ZBKLIBRARYASSET where ZCONTENTTYPE is not null limit 5
- Executed SQL query: select ZASSETTYPE, count(*) from ZBKLIBRARYASSET group by 1

## Concepts
- sqlite database query

## Files
- `$HOME/Library/Containers/com.apple.iBooksX/Data/Documents/BKLibrary/BKLibrary-1-091020131601.sqlite`

_Importance: 4 · Confidence: 1_
