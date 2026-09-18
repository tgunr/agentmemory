---
type: file_edit
title: TUI formatting with `rg` on Hermes Agent files
description: Edit TUI code to display cost in USD
resource: agentmemory://observation/obs_ms67znq2_e8e085ee01cd
tags: ["rg pattern", "Herpes agent", "file_edit"]
timestamp: 2026-07-29T15:08:53.592159+00:00
source: agentmemory
session_id: 20260729_083331_2ab38b
importance: 5
confidence: 0.9
---
# Summary

The TUI code was updated to display the cost in USD.

## Facts
- Command used: cd ~/.hermes/hermes-agent && rg -n "showCost|show_cost|cost_usd" ui-tui/src --type ts --type tsx 2>/dev/null | head -20
- Tool used: terminal

## Concepts
- rg pattern
- Herpes agent

## Files
- `/home/user/.hermes/hermes-agent/ui-tui/src.ts`
- `/home/user/.hermes/hermes-agent/ui-tui/src.tsx`

_Importance: 5 · Confidence: 0.9_
