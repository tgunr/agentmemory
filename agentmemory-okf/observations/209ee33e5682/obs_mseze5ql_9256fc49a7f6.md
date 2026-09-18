---
type: CommandRun
title: Hello World from Hermes WebUI!
description: Piped commands and file references.
resource: agentmemory://observation/obs_mseze5ql_9256fc49a7f6
tags: ["hermes_agent dist", "pip package search hermes", "commandrun"]
timestamp: 2026-08-04T18:18:09.160627+00:00
source: agentmemory
session_id: 209ee33e5682
importance: 6
confidence: 0.9
---
# Summary

The HMS tool ran a series of piped commands, including catting files, listing directories, and running grep on requirements.txt and pyproject.toml. The outputs confirm that webui references hermes in its configuration.

## Facts
- CAT command outputs the contents of direct_url.json
- LS commands reference the dist-info directory

## Concepts
- hermes_agent dist
- pip package search hermes

## Files
- `/Users/davec/.venv/lib/python3.13/site-packages/hermes_agent-0.18.2/dist-info/direct_url.json`

_Importance: 6 · Confidence: 0.9_
