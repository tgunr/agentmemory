---
type: Fact
title: # Stripe MCP Server Setup for AI

source: grok
session_id: cd2ddb8e-03f5-4a2e-bb
description: # Stripe MCP Server Setup for AI

source: grok
session_id: cd2ddb8e-03f5-4a2e-bb5b-693385e554d8
resource: grok://conversation/cd2ddb8e-03f5-4a2e-bb5b-693385e554d8

# Conversation

- **Session ID:** `c
resource: agentmemory://memory/mem_mthhokb5_651dee9bcf31
tags: ["okf", "okf-grok", "grok", "grok://conversation/cd2ddb8e-03f5-4a2e-bb5b-693385e554d8"]
timestamp: 2026-08-31T17:05:22.262Z
source: agentmemory
strength: 7
---
# Content

# Stripe MCP Server Setup for AI

source: grok
session_id: cd2ddb8e-03f5-4a2e-bb5b-693385e554d8
resource: grok://conversation/cd2ddb8e-03f5-4a2e-bb5b-693385e554d8

# Conversation

- **Session ID:** `cd2ddb8e-03f5-4a2e-bb5b-693385e554d8`
- **Source:** grok
- **Model:** grok-3
- **Started:** 2026-08-18T21:28:52Z
- **Messages:** 2

---

### 👤 User — 2026-08-18T21:29:08Z

Is there a mcp server for stripe.com? How can I use AI to manage the account?

---

### 🤖 Assistant — 2026-08-18T21:29:08Z

**Yes**, Stripe provides an official Model Context Protocol (MCP) server.

### Official Stripe MCP Server
- **Remote (hosted) endpoint**: `https://mcp.stripe.com`  
  This is the recommended option. It uses OAuth for authentication (your MCP client opens a browser flow to authorize access to your Stripe account). No need to paste API keys into config files.
- **Local option**: Run via npm with  
  `npx -y @stripe/mcp --api-key=YOUR_STRIPE_SECRET_KEY`  
  (or use a Restricted API Key for better security/scoping). You can also set the key via the `STRIPE_SECRET_KEY` environment variable.

Official docs: [docs.stripe.com/mcp](https://docs.stripe.com/mcp).

The server exposes tools that let AI agents:
- Read and write Stripe resources (customers, products, prices, invoices, subscriptions, payment intents, refunds, coupons, etc.)
- Search Stripe documentation and knowledge base
- Query account info and balances
- Perform more advanced API operations via generic read/write tools

Permissions are controlled by Restricted API Keys (RAKs) when using the local server, or by the OAuth scopes you grant for the remote server. Always start in **test mode** and use least-privilege access.

### How to connect it (examples)
**Cursor** (`~/.cursor/mcp.json`):
```json
{
  "mcpServers": {
    "stripe": {
      "url": "https://mcp.stripe.com"
    }
  }
}
```

**Claude Code**:
```bash
claude mcp add --transport http stripe https://mcp.stripe.com
```

**Claude Desktop** (local version example):
```json
{
  "mcpServers": {
    "stripe": {
      "command": "npx",
      "args": ["-y", "@stripe/mcp", "--api-key=YOUR_KEY"]
    }
  }
}
```

Similar setup works with other MCP-compatible clients (VS Code, Windsurf, etc.).

### How to use AI to manage your Stripe account
1. Connect the MCP server to an MCP-capable AI client (Claude, Cursor, Codex, Grok-compatible tools, custom agents, etc.).
2. Authenticate via OAuth (remote) or provide a scoped Restricted API Key (local).
3. Talk to the AI in natural language. Examples of what you can ask:
   - “List all active subscriptions and show any that are past due.”
   - “Create a customer for jane@example.com and send her a $99 invoice.”
   - “Create a 20% off coupon valid for 3 months and generate a payment link.”
   - “Refund charge ch_xxx and explain why.”
   - “Search Stripe docs for the best way to handle usage-based billing.”
   - “Show my current balance and recent payouts.”

The AI will call the appropriate MCP tools under the hood.

**Best practices / security tips**:
- Prefer Restricted API Keys with only the permissions the agent needs.
- Require human confirmation for write/destructive actions (refunds, cancellations, etc.) where possible.
- Start in test mode.
- For production/workspace accounts, an admin may need to enable MCP access.
- Stripe also offers related tools: agent skills, `@stripe/ai-sdk`, token metering, etc., for deeper AI + Stripe integrations.

There are also community/third-party Stripe MCP servers, but the official one from Stripe is the one you should use.

---
