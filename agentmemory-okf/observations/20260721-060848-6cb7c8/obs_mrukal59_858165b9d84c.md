---
type: file_edit
title: Hermes Agent UI configuration update
description: No context available
resource: agentmemory://observation/obs_mrukal59_858165b9d84c
tags: ["config management", "file_edit"]
timestamp: 2026-07-21T11:20:04.744995+00:00
source: agentmemory
session_id: 20260721_060848_6cb7c8
importance: 7
confidence: 1
---
# Summary

Updated the configuration file to introduce a new logic for calculating the cost of certain operations, as well as improving the display of indicators.

## Facts
- pasteCollapseCharsFromConfig is called once to process cfg
- d.streaming status unchanged for sections functionality
- New indicatorStyle logic in useConfigSync

## Concepts
- config management

## Files
- `/Users/davec/.hermes/hermes-agent/ui-tui/src/app/useConfigSync.ts`

_Importance: 7 · Confidence: 1_
