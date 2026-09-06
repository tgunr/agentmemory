---
type: bug
title: BUG: classify/optimize skill's apply_classify.py (scripts/apply_classify.py) onl
description: BUG: classify/optimize skill's apply_classify.py (scripts/apply_classify.py) only flips the `enabled:` key for servers that ALREADY have an explicit `enabled:` line. Servers lacking the key (e.g. `can
resource: agentmemory://memory/mem_mtf43eoq_f28594bf0117
tags: ["apply_classify.py", "classify skill", "optimize skill", "mcp_servers", "enabled flag", "desktop MCP panel", "/reload-mcp", "profile config"]
timestamp: 2026-08-30T01:09:27.795Z
source: agentmemory
strength: 7
---
# Content

BUG: classify/optimize skill's apply_classify.py (scripts/apply_classify.py) only flips the `enabled:` key for servers that ALREADY have an explicit `enabled:` line. Servers lacking the key (e.g. `canva` and `desktop-commander` in the default profile) default to ON and are silently skipped, so a context7-only toggle leaves them enabled and the desktop MCP panel still shows them. PROPOSED FIX: explicitly WRITE `enabled: false` for every server NOT in the keep-set (don't just flip existing keys). Also: the desktop MCP panel reflects the active profile's config.yaml (lit house icon = active profile), and the desktop spawns a per-profile `serve` process — editing root/other profiles' configs does NOT change the panel. Reload is `/reload-mcp now` in chat (NOT `hermes mcp reload`, which doesn't exist).

## Files
- `/Users/davec/.hermes/skills/autonomous-ai-agents/classify/scripts/apply_classify.py`
