---
type: FileRead
title: Hermes Agent Search Tool Call
description: Found matching files in the Hermes Agent applications path
resource: agentmemory://observation/obs_mruuhwg3_8021ef0b9495
tags: ["search files", "HerMES Agent", "fileread"]
timestamp: 2026-07-21T16:05:42.106969+00:00
source: agentmemory
session_id: 20260721_092550_1df2c6
importance: 4
confidence: 0.9
---
# Summary

The post_tool_call hook recorded a search_files tool call with a file glob of *.ts and *tsx. The tool returned a limited number of results, indicating a successful text-based search.

## Facts
- The tool search_files was executed with a file glob of *.ts and *tsx.
- The output mode was set to content, which produced 100 matching results.

## Concepts
- search files
- HerMES Agent

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/session.test.ts`

_Importance: 4 · Confidence: 0.9_
