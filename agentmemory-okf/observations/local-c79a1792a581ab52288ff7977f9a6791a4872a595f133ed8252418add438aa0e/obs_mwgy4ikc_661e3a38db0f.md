---
type: file_edit
title: Running test scripts
description: Running i18n keys test script
resource: agentmemory://observation/obs_mwgy4ikc_661e3a38db0f
tags: ["i18n keys testing", "file_edit"]
timestamp: 2026-11-14T21:57:01.304764+00:00
source: agentmemory
session_id: local-c79a1792a581ab52288ff7977f9a6791a4872a595f133ed8252418add438aa0e
importance: 5
confidence: 0.9
---
# Summary

The Hermes Agent setup tool was used to execute a test script, which failed due to a mismatch between the local locale file and the expected format. The output shows the error message and the test results.

## Facts
- Executing script with command "cd /Users/davec/.hermes/hermes-agent/apps/desktop && pnpm exec vitest run scripts/i18n-keys.test.mjs 2>&1 | sed -n '1,45p'"

## Concepts
- i18n keys testing

_Importance: 5 · Confidence: 0.9_
