---
type: Fact
title: # Invalid MCP settings format: mcpServers.indexing: Invalid input

source: kilo

description: # Invalid MCP settings format: mcpServers.indexing: Invalid input

source: kilo
session_id: 73f24352-c9fa-432c-8946-f5971afb0eb9
resource: kilo://task/73f24352-c9fa-432c-8946-f5971afb0eb9

# Conversat
resource: agentmemory://memory/mem_mspdykgd_8c3adbb5940a
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T01:03:37.700Z
source: agentmemory
strength: 7
---
# Content

# Invalid MCP settings format: mcpServers.indexing: Invalid input

source: kilo
session_id: 73f24352-c9fa-432c-8946-f5971afb0eb9
resource: kilo://task/73f24352-c9fa-432c-8946-f5971afb0eb9

# Conversation

- **Task ID:** `73f24352-c9fa-432c-8946-f5971afb0eb9`
- **Source:** kilo
- **Started:** 2025-12-04T11:18:20Z
- **Ended:** 2025-12-24T21:32:15Z
- **Message blocks:** 25
- **Tokens:** 846842 in / 1806 out

---

### 👤 User — 2025-12-04T11:18:20Z

Invalid MCP settings format: mcpServers.indexing: Invalid input

### 👤 User — 2025-12-04T11:18:25Z

I need to investigate the MCP settings format issue. Let me start by examining the relevant MCP configuration files to understand the current structure and identify what's causing the "Invalid input" error.

### 🤖 Assistant — 2025-12-04T11:18:26Z

**Tool call: readFile**

```json
{
  "path": ".kilocode/mcp.json",
  "isOutsideWorkspace": false,
  "content": "/Users/davec/.kilocode/mcp.json",
  "reason": ""
}
```

### 👤 User — 2025-12-04T11:18:31Z

Now let me also check the other MCP configuration file that was mentioned in the open tabs to understand the full context:

### 🤖 Assistant — 2025-12-04T11:18:32Z

**Tool call: readFile**

```json
{
  "path": ".startup/.kilocode/cli/global/settings/mcp_settings.json",
  "isOutsideWorkspace": false,
  "content": "/Users/davec/.startup/.kilocode/cli/global/settings/mcp_settings.json",
  "reason": ""
}
```

### 👤 User — 2025-12-04T11:18:35Z

Now I can see the issue clearly. Let me analyze the problem:

## **MCP SETTINGS FORMAT ISSUE ANALYSIS**

### **PROBLEM IDENTIFIED:**
The error "Invalid MCP settings format: mcpServers.indexing: Invalid input" is occurring because there's a structural inconsistency between the two MCP configuration files.

### **COMPARISON:**

**File 1: `.kilocode/mcp.json` (lines 22-44)**
- Contains an `indexing` server configuration with complex nested structure
- Has `embeddingService`, `vectorDatabase`, and `indexingStrategy` sub-objects
- This is the problematic format causing the "Invalid input" error

**File 2: `.startup/.kilocode/cli/global/settings/mcp_settings.json`**
- Does NOT have an `indexing` server configuration
- Only has basic server configurations (filesystem, memory, git, github, brave-search)
- This is the correct, working format

### **ROOT CAUSE:**
The `indexing` configuration in `.kilocode/mcp.json` has an invalid format. Looking at the structure:

```json
"indexing": {
  "embeddingService": {
    "type": "ollama",
    "url": "http://10.1.2.7:11434",
    "model": "embeddinggemma:latest",
    "timeout": 30,
    "dimensions": 2048
  },
  "vectorDatabase": {
    "type": "qdrant",
    "url": "http://10.1.2.7:11434",
    "collection": "kilo_codebase",
    "timeout": 30,
    "batchSize": 100,
    "retryAttempts": 3
  },
  "indexingStrategy": {
    "chunkSize": 512,
    "chunkOverlap": 50,
    "maxTokens": 8192,
    "minScore": 0.7
  }
}
```

**ISSUES FOUND:**
1. **Missing command field**: All other MCP servers have a `command` field, but `indexing` doesn't
2. **Incorrect URL in vectorDatabase**: The URL should be `http://10.1.2.1:6333` (from line 32) but line 30 shows `http://10.1.2.7:11434` (duplicate of embedding service URL)
3. **Invalid structure**: The `indexing` server should follow the same pattern as other servers

### **REQUIRED FIXES:**
1. Add the missing `command` field for the indexing server
2. Fix the vectorDatabase URL inconsistency
3. Ensure the structure matches the expected MCP server format

Let me create a todo list to track this fix:

### 🤖 Assistant — 2025-12-04T11:18:50Z

**Tool call: updateTodoList**

```json
{
  "todos": [
    {
      "id": "243b912de1431f5edffeccdf36c536c4",
      "content": "Analyze MCP configuration files to identify format issues",
      "status": "in_progress"
    },
    {
      "id": "24625e6e412ec4cd1956543d007dde3a",
      "content": "Fix the indexing server configuration in .kilocode/mcp.json",
      "status": "pending"
    },
    {
      "id": "03646373701d3cc80d53b5755324b798",
      "content": "Validate the corrected configuration",
      "status": "pending"
    },
    {
      "id": "c6cca4c17894d2bd4dd15705104fb820",
      "content": "Test tha
