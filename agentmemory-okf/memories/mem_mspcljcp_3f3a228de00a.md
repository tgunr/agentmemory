---
type: Fact
title: # Kilo Gateway Plugin Mechanics

source: hermes
session_id: 20260612_080520_5bab
description: # Kilo Gateway Plugin Mechanics

source: hermes
session_id: 20260612_080520_5bab23
resource: hermes://session/20260612_080520_5bab23

# Conversation

- **Session ID:** `20260612_080520_5bab23`
- **Sou
resource: agentmemory://memory/mem_mspcljcp_3f3a228de00a
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T00:25:30.155Z
source: agentmemory
strength: 7
---
# Content

# Kilo Gateway Plugin Mechanics

source: hermes
session_id: 20260612_080520_5bab23
resource: hermes://session/20260612_080520_5bab23

# Conversation

- **Session ID:** `20260612_080520_5bab23`
- **Source:** tui
- **Model:** kilo-auto/free
- **Started:** 2026-06-12T13:05:20Z
- **Ended:** 2026-06-12T13:34:28Z
- **Messages:** 8
- **CWD:** `/Users/davec`
- **Tokens:** 1059345 in / 6240 out

---

### 👤 User — 2026-06-12T13:05:20Z

How do the number of MCP servers affect performance?

### 👤 User — 2026-06-12T13:06:50Z

how many mcp servers are available?

### 👤 User — 2026-06-12T13:10:06Z

Hernes is not connecting properly even though I have the correct api key installed, need to investigate how to use Kiol Gateway in Hermes.

### 👤 User — 2026-06-12T13:17:14Z

how do plugins work? Specifically the Kilo Gateway plugin

### 🤖 Assistant — 2026-06-12T13:17:52Z

Let's dive into how plugins in Herems work, with a focus on the Kiol Gateway.

**1. General Plugin Concept**

Herems plugins are pieces of functionality that you can add to your system easily through skill development and configuration management. The goal is to provide specific capabilities or workflows without requiring additional software installation.

- **Plugin Interface:** Plugins interact by defining what they're capable of with methods and functions.
- **Integration:** You install a plugin in your Herems environment, which makes its available API/commands usable via commands like `hermes skill enable PLUGIN_NAME`.
  - By default, plugins are scoped to a given skills directory. If you want them accessible system-wide or shared between profiles, adjust the `plugin_scope` parameter.

**2. Kiol Gateway Plugin Overview**

- **Core Capability:** Acts as an API gateway for remote services through which agents can invoke backend systems like MCP servers.
  - Agents in Herems send requests to plugins; they return responses that are passed back to agents acting on behalf of users.
  
Kiol Gateway is one such plugin. Let's break down how it functions:

- **Installation:** To install Kiol Plugin:
  ```bash
  hermes skill manage action='add' name='kiol'
  ```
  You'll have `hermia kiol` as a command now.

- **Commands:**
  
  - `hermia kiol get <URL>` fetches the content of a URL.
  - `hermia kiol post <URL> --data '{"key":"value"}' sends form data to an endpoint.
  
Herems abstracts access to any service accessible by HTTP(S). While Kiol Gateway is one example, plugins could theoretically handle anything from database queries to API calls.

**3. Setting Up MCP and the Plugin**

- **Configuring MCP Servers:** In your configuration file (`config.yaml`), ensure the following:
  ```yaml
    mcp_servers:
      api_key: 'YOUR_API_KEY'
```
     - This tells Herems which servers to use.
  
- **MCP Agent Configuration:** Set up an agent specifically for interacting with MCS server through the Kiol plugin. 
  Here's a basic example of how you could configure this:

```yaml
agents:
    - name: mcp-agent
      type: generic-webclient-interpreter
        default_port: 8888
        endpoint_urls:
          - http://example.com/api/mcp/
```

  If running on macOS:

```bash
hermes skill enable kiol
HERMES_CONFIG=mcp.yaml hermia kiol post "http://example.com/api/mcp" --data '{"action": "some_method", "params": [1,2]}' 
```
- **Herems' Role:** Act as a bridge between your client code and the remote servers it interacts with.
  - Agents can directly use this plugin's functionality to perform actions on behalf of users.

**4. Troubleshooting**

If there are connectivity or configuration issues when using `kiol`, try these:

1. Check that port mappings in your system (e.g., firewall) allow Herems plugins like Kiol Gateway to communicate securely over any network interface.
2. Verify the API keys and URLs of MCS servers match with the ones configured in Herems' settings.

For more detailed help or if you're encountering specific error messages, refer to the official documentation for each technology (Herems plugin configuration files are also a good starting point).

Always ensure that updates to your system maintain compatibility bet
