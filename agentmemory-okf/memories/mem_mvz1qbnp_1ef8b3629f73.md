---
type: Fact
title: # Configure NextCloud OAuth client in config.yaml

source: hermes
session_id: lo
description: # Configure NextCloud OAuth client in config.yaml

source: hermes
session_id: local-0d7f2c764086a9aea06abb3f72b0b99f17f46f390e6fd02f93edf51349b195a2
resource: hermes://session/local-0d7f2c764086a9aea0
resource: agentmemory://memory/mem_mvz1qbnp_1ef8b3629f73
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-11-02T09:18:06.297Z
source: agentmemory
strength: 7
---
# Content

# Configure NextCloud OAuth client in config.yaml

source: hermes
session_id: local-0d7f2c764086a9aea06abb3f72b0b99f17f46f390e6fd02f93edf51349b195a2
resource: hermes://session/local-0d7f2c764086a9aea06abb3f72b0b99f17f46f390e6fd02f93edf51349b195a2

# Conversation

- **Session ID:** `local-0d7f2c764086a9aea06abb3f72b0b99f17f46f390e6fd02f93edf51349b195a2`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-01T09:36:52Z
- **Ended:** 2026-11-01T10:29:10Z
- **Messages:** 169
- **CWD:** `/Users/davec`
- **Tokens:** 320466 in / 35358 out
- **Est. cost:** $-189019.0000

---

### 👤 User — 2026-11-01T09:36:53Z

How do i do this?
'NextCloud' does not support automatic client registration — the registration request returned 404 (typical for Google's hosted Gmail/Drive MCP servers and other providers without RFC 7591 dynamic client registration). Create an OAuth client for this provider and add it under config.yaml as `oauth: {client_id: ..., client_secret: ...}`, then re-run:
  hermes mcp login NextCloud

### 🤖 Assistant — 2026-11-01T09:36:58Z

<details><summary>Reasoning</summary>

The user asks how to do this: create an OAuth client for NextCloud and add it under config.yaml as oauth: {client_id, client_secret}, then re-run `hermes mcp login NextCloud`.

I should check the actual Hermes config structure and MCP login flow. Let me look at the hermes-agent source for MCP oauth handling — and check the current config.yaml MCP section for NextCloud.

Let me batch: read config.yaml relevant section, grep for oauth client registration in hermes source.

Let me start.

Also consider loading a skill: hermes-config-layering, hermes-plugin-management... Maybe "hermes-agent" skill. Let's load it partially. But token discipline: batch.

Let me do: search config.yaml for NextCloud; grep source for "automatic client registration" message.

</details>

**Tool call: search_files**

```json
{
  "limit": 40,
  "output_mode": "content",
  "path": "/Users/davec/.hermes/hermes-agent",
  "pattern": "automatic client registration|client_id|dynamic_client|7591"
}
```

**Tool call: search_files**

```json
{
  "context": 6,
  "limit": 40,
  "output_mode": "content",
  "path": "/Users/davec/.hermes/config.yaml",
  "pattern": "NextCloud|nextcloud"
}
```

### 🤖 Assistant — 2026-11-01T09:37:02Z

<details><summary>Reasoning</summary>

So config.yaml has an MCP entry NextCloud at https://cloud.polymicro.net/apps/mcp/. Need to know the exact config schema for per-server oauth client_id/client_secret. Let me grep hermes source MCP oauth code for the config keys and the error message text.

</details>

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/.hermes/hermes-agent && grep -rn \"automatic client registration\\|dynamic client registration\\|RFC 7591\" --include=*.py --include=*.ts . | grep -v node_modules | head -20"
}
```

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/.hermes/hermes-agent && grep -rln \"def .*oauth\\|oauth\" --include=*.py hermes/mcp* hermes/tools/ 2>/dev/null | head -30; echo ---; ls hermes | head -50"
}
```

### 🤖 Assistant — 2026-11-01T09:37:25Z

<details><summary>Reasoning</summary>

Let's read tools/mcp_oauth.py around lines 1-120 (docstring describing config keys) and 1180-1260, plus mcp_config.py ~920-960.

</details>

**Tool call: read_file**

```json
{
  "limit": 60,
  "path": "/Users/davec/.hermes/hermes-agent/tools/mcp_oauth.py"
}
```

**Tool call: read_file**

```json
{
  "limit": 75,
  "offset": 1180,
  "path": "/Users/davec/.hermes/hermes-agent/tools/mcp_oauth.py"
}
```

**Tool call: read_file**

```json
{
  "limit": 45,
  "offset": 915,
  "path": "/Users/davec/.hermes/hermes-agent/hermes_cli/mcp_config.py"
}
```

### 🤖 Assistant — 2026-11-01T09:37:34Z

<details><summary>Reasoning</summary>

Now I need the NextCloud side: how to create an OAuth client in NextCloud. NextCloud's `apps/mcp/` endpoint — is that the NextCloud MCP app? NextCloud (server) supports OAuth2 clients via the "oauth2" app (Settings → Administration → Security → OAuth 2.0 clients) since NC 28ish. Actually NextCloud has an `oauth2` app built-in: Settings → Administration → Security → "OAuth 2.0 clients" (requires enabling the "OAuth2" app? It's shipped
