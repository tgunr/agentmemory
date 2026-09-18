---
type: file_edit
title: TSC compilation failed
description: TSC errors.
resource: agentmemory://observation/obs_mry2azu5_60c111f83acf
tags: ["tsc configuration issues", "file_edit"]
timestamp: 2026-07-23T22:07:35.391729+00:00
source: agentmemory
session_id: 20260723_164941_fa586b
importance: 7
confidence: 0.9
---
# Summary

The compilation of tsc failed with a error TS5112, citing that since tsc was used as a command it ignored the tsconfig file.

## Facts
- TSconfig.json is present but will not be loaded due to specified files on commandline

## Concepts
- tsc configuration issues

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-message-stream/gateway-event.ts`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/tsconfig.json`

_Importance: 7 · Confidence: 0.9_
