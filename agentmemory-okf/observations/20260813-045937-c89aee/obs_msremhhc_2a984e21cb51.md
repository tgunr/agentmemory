---
type: FileRead
title: Detecting DOCMOST credentials in config notes
description: User initiated search for access control information
resource: agentmemory://observation/obs_msremhhc_2a984e21cb51
tags: ["file permission checking", "environment variable interpolation", "fileread"]
timestamp: 2026-08-13T10:57:45.979585+00:00
source: agentmemory
session_id: 20260813_045937_c89aee
importance: 5
confidence: 1
---
# Summary

The post-tool-call hook executed successfully, searching for DOCMOST credentials in the Hermes config and notes. A build path is being used with an empty API URL and email credentials.

## Facts
- Searching for 'DOCMOST' in '/Users/davec/.hermes/config.yaml'
- The search result found a path with 'docmost-mcp/build/index.js'
- The search result found a set of credentials but they were empty

## Concepts
- file permission checking
- environment variable interpolation

## Files
- `/Users/davec/.hermes/config.yaml`
- `/Users/davec/docmost-mcp/build/index.js`

_Importance: 5 · Confidence: 1_
