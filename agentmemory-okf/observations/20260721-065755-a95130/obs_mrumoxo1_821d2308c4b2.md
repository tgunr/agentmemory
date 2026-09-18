---
type: Observation
title: Hermes Agent Command
description: Edits CLI configuration within Hermes Agent
resource: agentmemory://observation/obs_mrumoxo1_821d2308c4b2
tags: ["CLI configuration editing", "Hermes model switching", "Sed command usage", "observation"]
timestamp: 2026-07-21T12:27:13.389755+00:00
source: agentmemory
session_id: 20260721_065755_a95130
importance: 8
confidence: 0.9
---
# Summary

The Hermes agent command was used to edit the CLI configuration by modifying the 'cli.py' file.
This change impacts how the Hermes agent interacts with the underlying systems and requires attention to restore functionality.

## Facts
- User attempted to modify 'hermes_agent' binary using sed commands.
- Sed edited line 7945-8010 in cli.py file relative to user's home directory.

## Concepts
- CLI configuration editing
- Hermes model switching
- Sed command usage

## Files
- `/Users/davec/.hermes/hermes-agent/cli.py`

_Importance: 8 · Confidence: 0.9_
