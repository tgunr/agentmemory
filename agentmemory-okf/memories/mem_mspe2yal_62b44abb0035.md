---
type: Fact
title: # Invalid MCP settings JSON format. Please check your settings file for syntax e
description: # Invalid MCP settings JSON format. Please check your settings file for syntax err

source: kilo
session_id: 946c5fbf-86b1-47af-a40b-3b8d2d1a535e
resource: kilo://task/946c5fbf-86b1-47af-a40b-3b8d2d1a
resource: agentmemory://memory/mem_mspe2yal_62b44abb0035
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T01:07:02.252Z
source: agentmemory
strength: 7
---
# Content

# Invalid MCP settings JSON format. Please check your settings file for syntax err

source: kilo
session_id: 946c5fbf-86b1-47af-a40b-3b8d2d1a535e
resource: kilo://task/946c5fbf-86b1-47af-a40b-3b8d2d1a535e

# Conversation

- **Task ID:** `946c5fbf-86b1-47af-a40b-3b8d2d1a535e`
- **Source:** kilo
- **Started:** 2025-12-04T11:34:29Z
- **Ended:** 2025-12-04T11:35:55Z
- **Message blocks:** 23
- **Tokens:** 668708 in / 1351 out

---

### 👤 User — 2025-12-04T11:34:29Z

Invalid MCP settings JSON format. Please check your settings file for syntax errors.

### 👤 User — 2025-12-04T11:34:34Z

I need to check the MCP settings file for JSON syntax errors. Let me first locate and examine the MCP settings file.

### 🤖 Assistant — 2025-12-04T11:34:35Z

**Tool call: readFile**

```json
{
  "path": ".kilocode/cli/global/settings/mcp_settings.json",
  "isOutsideWorkspace": false,
  "content": "/Users/davec/.startup/.kilocode/cli/global/settings/mcp_settings.json",
  "reason": ""
}
```

### 👤 User — 2025-12-04T11:34:40Z

I can see the issue with the MCP settings JSON file. The problem is on line 18 where there's a trailing comma after the last property in the `brave-search` object. In JSON, trailing commas are not allowed. Let me fix this syntax error.

### 🤖 Assistant — 2025-12-04T11:34:42Z

**Tool call: appliedDiff**

```json
{
  "path": ".kilocode/cli/global/settings/mcp_settings.json",
  "diff": "\n<<<<<<< SEARCH\n:start_line:18\n-------\n      \"env\": {\n        \"BRAVE_API_KEY\": \"${BRAVE_API_KEY}\",\n      }\n=======\n      \"env\": {\n        \"BRAVE_API_KEY\": \"${BRAVE_API_KEY}\"\n      }\n>>>>>>> REPLACE\n</diff"
}
```

### 👤 User — 2025-12-04T11:34:48Z

I see the issue - the file content shows that there's no trailing comma on line 19, but there's actually a different JSON syntax error. Looking more carefully at the file, I notice that on line 17, there's a trailing comma after `"mcp-server-brave-search"` which is invalid JSON. Let me fix this:

### 🤖 Assistant — 2025-12-04T11:34:50Z

**Tool call: appliedDiff**

```json
{
  "path": ".kilocode/cli/global/settings/mcp_settings.json",
  "diff": "\n<<<<<<< SEARCH\n:start_line:16\n-------\n    \"brave-search\": {\n      \"command\": \"mcp-server-brave-search\",\n      \"env\": {\n        \"BRAVE_API_KEY\": \"${BRAVE_API_KEY}\"\n      }\n    }\n=======\n    \"brave-search\": {\n      \"command\": \"mcp-server-brave-search\",\n      \"env\": {\n        \"BRAVE_API_KEY\": \"${BRAVE_API_KEY"
}
```

### 👤 User — 2025-12-04T11:34:54Z

I see the issue now. Looking at the file content more carefully, I can see that the JSON syntax error is actually on line 17 where there's a trailing comma after `"mcp-server-brave-search"`. Let me fix this by removing the trailing comma:

### 🤖 Assistant — 2025-12-04T11:34:55Z

**Tool call: appliedDiff**

```json
{
  "path": ".kilocode/cli/global/settings/mcp_settings.json",
  "diff": "<<<<<<< SEARCH\n:start_line:17\n-------\n      \"command\": \"mcp-server-brave-search\",\n=======\n      \"command\": \"mcp-server-brave-search\"\n>>>>>>> REPLACE",
  "content": "@@ -14,7 +14,7 @@\n       \"command\": \"mcp-server-github\"\n     },\n     \"brave-search\": {\n-      \"command\": \"mcp-server-brave-search\",\n+      \"command\": \"mcp-server-brave-search\"\n       \"env\": {\n         \"BRAVE_API_KEY\": \"${BRAVE_API_KEY}\"\n       }\n",
  "diffStats": {
    "added": 1,
    "removed": 1
  },
  "isProtected": true
}
```

### 👤 User — 2025-12-04T11:35:05Z

I see there's still a JSON syntax error. The issue is that after removing the trailing comma from line 17, now line 18 is expecting a comma. Let me read the file again to see the current state and fix the JSON properly:

### 🤖 Assistant — 2025-12-04T11:35:06Z

**Tool call: readFile**

```json
{
  "path": ".kilocode/cli/global/settings/mcp_settings.json",
  "isOutsideWorkspace": false,
  "content": "/Users/davec/.startup/.kilocode/cli/global/settings/mcp_settings.json",
  "reason": ""
}
```

### 👤 User — 2025-12-04T11:35:09Z

Now I can see the issue clearly. The JSON syntax error is that line 18 is missing a comma after the `"env"` property. In JSON, when you have multiple properties in an object, they need to be separat
