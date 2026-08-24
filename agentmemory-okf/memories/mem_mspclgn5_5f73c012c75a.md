---
type: Fact
title: # Testing MCP tools for accessibility

source: hermes
session_id: 20260611_06365
description: # Testing MCP tools for accessibility

source: hermes
session_id: 20260611_063651_37bd71
resource: hermes://session/20260611_063651_37bd71

# Conversation

- **Session ID:** `20260611_063651_37bd71`
-
resource: agentmemory://memory/mem_mspclgn5_5f73c012c75a
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T00:25:26.646Z
source: agentmemory
strength: 7
---
# Content

# Testing MCP tools for accessibility

source: hermes
session_id: 20260611_063651_37bd71
resource: hermes://session/20260611_063651_37bd71

# Conversation

- **Session ID:** `20260611_063651_37bd71`
- **Source:** cli
- **Model:** kilo-auto/free
- **Started:** 2026-06-11T11:36:51Z
- **Ended:** 2026-06-11T12:22:24Z
- **Messages:** 122
- **CWD:** `/Users/davec`
- **Tokens:** 3908679 in / 10748 out

---

### 👤 User — 2026-06-11T11:37:11Z

test all MCP tools for accessibility

### 🤖 Assistant — 2026-06-11T12:13:49Z

<details><summary>Reasoning</summary>


The user wants to test MCP tools for accessibility. Let me first understand what this means - they likely want to verify that MCP (Model Context Protocol) tools are working correctly and are accessible. I should check the available MCP-related skills and tools to understand the context better.

Let me start by:
1. Looking at the `native-mcp` skill which documents the MCP client functionality
2. Check what MCP tools might be available

Actually, I should first check what skills are available related to MCP, and then understand how to test them.


</details>

**Tool call: skill_view**

```json
{
  "name": "native-mcp"
}
```

### 🤖 Assistant — 2026-06-11T12:13:49Z

<details><summary>Reasoning</summary>


Let me read the skill using the full path.


</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/skills/mcp/native-mcp/SKILL.md"
}
```

### 🤖 Assistant — 2026-06-11T12:13:49Z

<details><summary>Reasoning</summary>


Good, I have the native-mcp skill. Now let me check the current MCP configuration and see what tools are available. Let me also check if there's a mcporter skill for ad-hoc MCP tool usage.


</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/config.yaml"
}
```

### 🤖 Assistant — 2026-06-11T12:13:49Z

<details><summary>Reasoning</summary>


I see the config.yaml doesn't have any `mcp_servers` configured. Let me check if there's an mcp section later in the file and also look for any MCP-related tools that might be available.


</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/config.yaml",
  "offset": 501
}
```

### 🤖 Assistant — 2026-06-11T12:13:49Z

<details><summary>Reasoning</summary>


Now I can see there are two MCP servers configured:
1. `agentmemory` - a stdio-based server using a shell script wrapper
2. `mcp-router` - a remote HTTP server at http://localhost:8080/mcp

Let me check what tools are actually available by looking at the available tools list. I should also check the environment - does the mcp Python package exist?


</details>

**Tool call: execute_code**

```json
{
  "code": "import subprocess\nimport sys\n\n# Check if mcp package is installed\ntry:\n    import mcp\n    print(f\"✓ MCP package is installed (version: {mcp.__version__ if hasattr(mcp, '__version__') else 'unknown'})\")\nexcept ImportError:\n    print(\"✗ MCP package is NOT installed\")\n    \n# Check Node.js\ntry:\n    result = subprocess.run(['node', '--version'], capture_output=True, text=True)\n    if result.returncode == 0:\n        print(f\"✓ Node.js installed: {result.stdout.strip()}\")\n    else:\n        print(\"✗ Node.js not found\")\nexcept FileNotFoundError:\n    print(\"✗ Node.js not installed\")\n\n# Check uv (for uvx-based servers)\ntry:\n    result = subprocess.run(['uv', '--version'], capture_output=True, text=True)\n    if result.returncode == 0:\n        print(f\"✓ uv installed: {result.stdout.strip()}\")\n    else:\n        print(\"✗ uv not found\")\nexcept FileNotFoundError:\n    print(\"✗ uv not installed\")"
}
```

### 🤖 Assistant — 2026-06-11T12:13:49Z

<details><summary>Reasoning</summary>


Good - the prerequisites are installed. Now let me test the MCP servers. I'll check if the mcp-router server is running and accessible, and test the agentmemory server.


</details>

**Tool call: execute_code**

```json
{
  "code": "import subprocess\nimport json\nimport time\n\n# Test mcp-router HTTP server accessibility\nprint(\"=== Testing mcp-router (HTTP) ===\")\ntry:\n    result = subprocess.run(\n        ['curl', '-s', '-o',
