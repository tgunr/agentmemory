---
type: CommandRun
title: Blocked Page Recovery
description: Use when a fetch fails: 403/429, paywall, WAF, bot wall.
resource: agentmemory://observation/obs_mvtodab0_a4a10bbe6c48
tags: ["Paywall", "WAF", "Fallback", "commandrun"]
timestamp: 2026-10-29T15:05:12.294340+00:00
source: agentmemory
session_id: local-c1ef1e4658f72d459e0fd8aaf5c56bb1cc73ad4c9efb4c5a19508556f82ea629
importance: 5
confidence: 0.9
---
# Summary

Use the skill_view tool with input name blocked-page-recovery when a fetch fails with 403/429 error or a paywall, WAF, or bot wall.

## Facts
- The tool skill_view is used.
- Input name is blocked-page-recovery.

## Concepts
- Paywall
- WAF
- Fallback

## Files
- `<path>python3 scripts/recover_page.py</path>`

_Importance: 5 · Confidence: 0.9_
