---
type: file_edit
title: Testing HERMES configuration with default profile
description: 
resource: agentmemory://observation/obs_msezuykh_f5d27afff991
tags: ["HERMES_HOME", "file_edit"]
timestamp: 2026-08-04T18:31:13.022535+00:00
source: agentmemory
session_id: 20260804_132551_abb885
importance: 8
confidence: 1
---
# Summary

The user tested Heremes configuration by running a series of commands with and without the HERMES_HOME environment variable. The results show that setting up the HERMES_HOME environment variable makes a difference, which is reflected by changes to the output of each command.

## Facts
- User: davec
- HERMES_HOME environment variable not set for Test A
- HERMES_HOME environment variable set to user profile path for Test B
- User ran hermes in clean mode for Test C

## Concepts
- HERMES_HOME

## Files
- `/Users/davec/.hermes/config.yaml`

_Importance: 8 · Confidence: 1_
