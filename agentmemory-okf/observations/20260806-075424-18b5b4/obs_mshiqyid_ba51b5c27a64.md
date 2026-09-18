---
type: file_edit
title: Error Output from Testing Command
description: detailed testing results for command execution
resource: agentmemory://observation/obs_mshiqyid_ba51b5c27a64
tags: ["Embedding configuration and AI model usage", "file_edit"]
timestamp: 2026-08-06T12:55:31.377516+00:00
source: agentmemory
session_id: 20260806_075424_18b5b4
importance: 7
confidence: 1
---
# Summary

The execution of the testing command resulted in critical errors concerning AI embedder configuration test and other system interactions such as OpenAI timeout value, embedding data processing, summary handling, and flaky failure with retry operations which caused errors to appear more frequently. These failures had direct implications on downstream applications due to dependencies between these components.

## Facts
- OpenAI model not found with key 'test-key' and dimensions 1536, expected to be 4096.
- Patient timeout exceeded while pulling data due to excessive timeout environment setting of 60000ms in ms. Defaulting to 60 seconds instead.
- Patient timeout exceeded again when trying different configuration with different timeout, default to the original one.
- Chucking size failure for `summarize` chunk handling due to incorrect flag being set as true after failing attempts
- Flaky error for parsing in specific test case due to repeated parse operation with retries.
- Persistently broken chunk still managed by the reduce algorithm despite failed attempt to skip it due to the presence of this issue.

## Concepts
- Embedding configuration and AI model usage

## Files
- `/Volumes/AI/agentmemory/test-output.txt`

_Importance: 7 · Confidence: 1_
