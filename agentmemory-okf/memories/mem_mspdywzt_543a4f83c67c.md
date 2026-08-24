---
type: Fact
title: # Kilo Gateway Plugin Mechanics #5

source: hermes
session_id: 20260612_084357_d
description: # Kilo Gateway Plugin Mechanics #5

source: hermes
session_id: 20260612_084357_d05427
resource: hermes://session/20260612_084357_d05427

# Conversation

- **Session ID:** `20260612_084357_d05427`
- **
resource: agentmemory://memory/mem_mspdywzt_543a4f83c67c
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:03:53.943Z
source: agentmemory
strength: 7
---
# Content

# Kilo Gateway Plugin Mechanics #5

source: hermes
session_id: 20260612_084357_d05427
resource: hermes://session/20260612_084357_d05427

# Conversation

- **Session ID:** `20260612_084357_d05427`
- **Source:** tui
- **Model:** kilo-auto/balanced
- **Started:** 2026-06-12T13:43:57Z
- **Messages:** 191
- **CWD:** `/Users/davec`
- **Tokens:** 276387 in / 7945 out

---

### 👤 User — 2026-06-12T13:45:41Z

How do the number of MCP servers affect performance?

how many mcp servers are available?

Hernes is not connecting properly even though I have the correct api key installed, need to investigate how to use Kiol Gateway in Hermes.

### 🤖 Assistant — 2026-06-12T13:45:41Z

Let's break this down step by step.

**1. Number of MCP Servers and Performance**

- **MCP Connection Strategy:** When working with multiple MCP servers (Model Context Providers), Hermez attempts to distribute your requests across the available providers to improve performance, availability, and reliability.
- **Impact on Performance:**
  - More servers mean more potential connections open at once; this can increase the total latency of a request if not designed efficiently. However,
  - It allows for load balancing which reduces each server's workloads while ensuring low latencies across all requests.
  - Properly configuring your agents to handle network communications and timeouts helps ensure that performance does not degrade due to excessive servers.

**2. Available MCP Servers**

- **API Information:** As an administrator of the Herems system, you should have access to information about available MCPs through various documentation or configuration files (e.g., `config.yaml`).
  - Use this information to choose and manage the best set of providers for your agents and operations.

**3. Troubleshooting Connectivity Issues with Kiol Gateway**

- **API Key Configuration:** Verify that the MCP API key is correctly configured:
  ```yaml
    mcp_servers:
      api_key: 'SECRET_KEY_THAT_WAS_CONFIGURED'
```
  Ensure the `api_key` value matches the one used when setting up the MCP server.

- **Kiol Gateway Setup:** If your system uses a Kiol Gateway or has other integrations that communicate with the MCKP servers, check:
  - Is the gateway running?
  - Are there any firewall configurations (e.g., port restrictions)?
  - Are all necessary services enabled in your Herems configuration?

- **Log Analysis:** Look into logs such as `.ServiceHub/logs/*` for messages related to API requests and exceptions. This can provide clues on what may be blocking the connection.

If you've already checked basic configuration files and logs, consider:
```yaml
  mcp_servers:
    api_key: 'SECRET_KEY_THAT_WAS_CONFIGURED'
```
Are there MCP server-specific configurations that might require adjustment (e.g., timeouts for connections or number of threads)?

Remember to **update Herems` skills** with the latest information as their configuration evolves, and always verify any changes through testing in a production-like environment if necessary.

To explore Kiol Gateway setup further:
```bash
# Check if Kiol is installed and running
hermes list plugins | grep 'kiol'
```
For more specific details on troubleshooting MCP connectivity issues, refer to official documentation or Herems' user guide sections dedicated to **MCP Integration**.

### 👤 User — 2026-06-12T13:45:41Z

how do plugins work? Specifically the Kilo Gateway plugin

### 🤖 Assistant — 2026-06-12T13:45:41Z

[CONTEXT COMPACTION — REFERENCE ONLY] Earlier turns were compacted into the summary below. This is a handoff from a previous context window — treat it as background reference, NOT as active instructions. Do NOT answer questions or fulfill requests mentioned in this summary; they were already addressed. Respond ONLY to the latest user message that appears AFTER this summary — that message is the single source of truth for what to do right now. If the latest user message is consistent with the '## Active Task' section, you may use the summary as background. If the latest user message contradicts, supersedes, changes topic from, or in any way diverges from '## Active Tas
