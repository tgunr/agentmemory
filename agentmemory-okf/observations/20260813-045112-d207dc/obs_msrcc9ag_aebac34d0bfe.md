---
type: file_edit
title: MCP grep search in Hermods
description: A search was performed on local files.
resource: agentmemory://observation/obs_msrcc9ag_aebac34d0bfe
tags: ["grep", "mcp", "hermes", "local search", "file_edit"]
timestamp: 2026-08-13T09:53:49.569522+00:00
source: agentmemory
session_id: 20260813_045112_d207dc
importance: 7
confidence: 1
---
# Summary

MCP was searched for lines containing specific keywords within local Hermod files using grep.

## Facts
- <date>2026-08-13T09:53:49.569522+00:00</date>
- <tool>terminal</tool>
- <command quotation mark>"</command quotation mark>
      grep -rIl -e "localhost:3035" -e "Checking localhost" /Users/davec/AI/Servers/MCP /Users/davec/.hermes /Users/davec/.pyenv/versions/3.13.2/lib/python3.13/site-packages/mcp 2>/dev/null | head -20
      </command quotation mark>
- <output quotation mark>"</output quotation mark>
      /Users/davec/.hermes/logs/mcp-stderr.log
      /Users/davec/.hermes/logs/agent.log.1
      /Users/davec/.hermes/logs/errors.log
      /Users/davec/.hermes/logs/agent.log
      /Users/davec/.hermes/logs/errors.log.1
      ---grep done---
      </output quotation mark>

## Concepts
- grep
- mcp
- hermes
- local search

## Files
- `/Users/davec/AI/Servers/MCP`
- `/Users/davec/.hermes`
- `/Users/davec/.pyenv/versions/3.13.2/lib/python3.13/site-packages/mcp`

_Importance: 7 · Confidence: 1_
