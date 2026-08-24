---
type: Fact
title: # Web Search Troubleshoot

source: hermes
session_id: 20260617_102506_c051b2
res
description: # Web Search Troubleshoot

source: hermes
session_id: 20260617_102506_c051b2
resource: hermes://session/20260617_102506_c051b2

# Conversation

- **Session ID:** `20260617_102506_c051b2`
- **Source:**
resource: agentmemory://memory/mem_msp0ckbi_e48020dc0ab2
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-11T18:42:36.115Z
source: agentmemory
strength: 7
---
# Content

# Web Search Troubleshoot

source: hermes
session_id: 20260617_102506_c051b2
resource: hermes://session/20260617_102506_c051b2

# Conversation

- **Session ID:** `20260617_102506_c051b2`
- **Source:** tui
- **Model:** kilo-auto/balanced
- **Started:** 2026-06-17T15:26:24Z
- **Ended:** 2026-06-18T13:47:56Z
- **Messages:** 113
- **CWD:** `/Users/davec`
- **Tokens:** 270 in / 11988 out
- **Est. cost:** $0.1294

---

### 👤 User — 2026-06-17T15:26:25Z

lets find out why your web search is not working, it should be functional and even if not you should drop into mcp-router and use the Brave web server.

### 🤖 Assistant — 2026-06-17T15:28:05Z

<details><summary>Reasoning</summary>

The user wants me to troubleshoot why web search isn't working. Let me first try a web search to see what happens, and also check the MCP router setup for Brave search as a fallback.

</details>

**Tool call: web_search**

```json
{
  "query": "test search 2024"
}
```

### 🤖 Assistant — 2026-06-17T15:28:05Z

<details><summary>Reasoning</summary>

Web search is not configured. The user wants me to either fix web search or use the MCP router's Brave search as a fallback. Let me:

1. Check the current Hermes config to see what's set up for web search
2. Check the MCP router setup for Brave search
3. Fix or work around the issue

Let me start by checking the config and the MCP router tools.

</details>

**Tool call: terminal**

```json
{
  "command": "hermes config get web_search 2>&1 || true"
}
```

**Tool call: tool_search**

```json
{
  "query": "brave web search mcp router",
  "limit": 5
}
```

### 🤖 Assistant — 2026-06-17T15:28:05Z

<details><summary>Reasoning</summary>

I found the MCP router tools. There are three search options:
1. `mcp_mcp_router_brave_web_search` - Brave Search API
2. `mcp_mcp_router_brave_local_search` - Brave Local Search
3. `mcp_mcp_router_webSearch` - DuckDuckGo search

The user wants web search to work. I have two options:

1. Fix the built-in `web_search` tool by configuring a provider
2. Make sure I know how to use the MCP router Brave search as a workaround

Let me first check the Hermes config to see what's there, and also look at the `hermes tools` setup. Then I should also configure web_search properly so it works natively.

Let me check what web search options are available in Hermes config.


</details>

**Tool call: terminal**

```json
{
  "command": "hermes config show 2>&1 | head -80"
}
```

**Tool call: tool_describe**

```json
{
  "name": "mcp_mcp_router_brave_web_search"
}
```

### 🤖 Assistant — 2026-06-17T15:28:05Z

<details><summary>Reasoning</summary>

Now I can see the issue clearly. The web search requires one of these API keys to be set:
- Exa
- Tavily
- Firecrawl (for web extract)
- Parallel

None of these are configured. The built-in `web_search` tool has no provider.

However, the MCP router has Brave Search available. I need to:

1. Fix the built-in `web_search` - this would require setting up one of the supported providers (Exa, Tavily, etc.)
2. Or configure Hermes so that `web_search` routes through the MCP Brave search

Actually, let me also check if there's a way to configure web_search to use Brave as a backend in Hermes. Let me look at the Hermes docs or config options.

But the more immediate solution is: I can use the MCP router Brave search tools via `tool_call`. And for a longer-term fix, I should see if Hermes supports configuring Brave as a web search provider.

Actually, looking at the config output more carefully - there's no Brave API key field listed. The supported providers seem to be Exa, Parallel, Tavily, Firecrawl. 

Let me check if there's a way to set up Brave search, or if the best approach is to just use `tool_call` to invoke the MCP router's Brave search. The user said "even if not you should drop into mcp-router and use the Brave web server" - so they're fine with using the MCP route.

Let me try using the Brave search via tool_call to confirm it works, and also check if there's a simpler config fix for the native web_search.


</details>

**Tool call: tool_call**

```json
{
  "name": "mcp_mcp_router_brav
