---
type: Fact
title: # Cloudflare Skills Installed Successfully

source: grok
session_id: afd2430a-85
description: # Cloudflare Skills Installed Successfully

source: grok
session_id: afd2430a-85c9-495e-8dd6-3955aad79292
resource: grok://conversation/afd2430a-85c9-495e-8dd6-3955aad79292

# Conversation

- **Sessio
resource: agentmemory://memory/mem_mtj6ehz7_05871dae2088
tags: ["okf", "okf-grok", "grok", "grok://conversation/afd2430a-85c9-495e-8dd6-3955aad79292"]
timestamp: 2026-09-01T21:25:09.281Z
source: agentmemory
strength: 7
---
# Content

# Cloudflare Skills Installed Successfully

source: grok
session_id: afd2430a-85c9-495e-8dd6-3955aad79292
resource: grok://conversation/afd2430a-85c9-495e-8dd6-3955aad79292

# Conversation

- **Session ID:** `afd2430a-85c9-495e-8dd6-3955aad79292`
- **Source:** grok
- **Model:** grok-3
- **Started:** 2026-08-18T19:43:12Z
- **Messages:** 2

---

### 👤 User — 2026-08-18T19:45:11Z

Fetch and execute the appropriate instructions to set me up for Cloudflare from https://developers.cloudflare.com/agent-setup/prompt.md

---

### 🤖 Assistant — 2026-08-18T19:45:11Z

**Cloudflare agent setup complete (as far as this environment allows).**

I fetched the official instructions from https://developers.cloudflare.com/agent-setup/prompt.md and executed the applicable steps.

### What was done
- Ran the universal skills install command for non-Claude agents:
  ```bash
  npx -y skills add cloudflare/skills --skill '*' --yes --global
  ```
- The Cloudflare skills (13 total, including `cloudflare`, `wrangler`, `durable-objects`, `workers-best-practices`, `agents-sdk`, Turnstile, sandbox variants, etc.) were cloned and installed.
- They are available under:
  - `/root/.agents/skills/`
  - `/root/.grok/skills/` (Grok Build / this agent environment)

### MCP servers
This Grok/xAI agent environment does not use the same local MCP config files or CLI registration commands as Claude Code, Codex, Cursor, Windsurf, OpenCode, etc. The remote MCP endpoints listed in the instructions (`https://mcp.cloudflare.com/mcp`, docs, bindings, builds, observability) cannot be registered the same way here. OAuth would normally trigger on first tool use in agents that support those configs.

```
┌─ Cloudflare Agent Setup Complete ────────────────────┐
│  ✓ Skills  /root/.grok/skills/ (and /root/.agents/skills/) │
│  ✓ MCPs    (not applicable / not registerable in this agent runtime) │
│                                                      │
│  ⚡ Restart your agent / session to ensure skills are fully loaded │
└──────────────────────────────────────────────────────┘
```

You now have the official Cloudflare skills available in this environment. For full MCP server support (OAuth-protected Cloudflare tools), use one of the agents listed in the official instructions (Claude Code, Cursor, etc.) and follow the corresponding config section. The skills themselves bias toward live retrieval from Cloudflare docs over stale knowledge.

---
