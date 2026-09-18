---
type: Fact
title: # 20260720_141942_a3ced1

source: hermes
session_id: 20260720_141942_a3ced1
reso
description: # 20260720_141942_a3ced1

source: hermes
session_id: 20260720_141942_a3ced1
resource: hermes://session/20260720_141942_a3ced1

# Conversation

- **Session ID:** `20260720_141942_a3ced1`
- **Source:** 
resource: agentmemory://memory/mem_mspdvq62_68c1e424b12c
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:01:25.144Z
source: agentmemory
strength: 7
---
# Content

# 20260720_141942_a3ced1

source: hermes
session_id: 20260720_141942_a3ced1
resource: hermes://session/20260720_141942_a3ced1

# Conversation

- **Session ID:** `20260720_141942_a3ced1`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-07-20T19:19:42Z
- **Messages:** 39
- **CWD:** `/Users/davec`
- **Tokens:** 63925 in / 21374 out

---

### 👤 User — 2026-07-20T19:19:43Z

In my opencode desktop i am getting
Error: ConfigInvalidError
    at wrapClientError (oc://renderer/assets/main-BC_UeTC5.js:70973:12)
    at request (oc://renderer/assets/main-BC_UeTC5.js:65889:28)



────────────────────────────────────────
Caused by:
{
  "body": {
    "name": "ConfigInvalidError",
    "data": {
      "path": "/Users/davec/.config/opencode/opencode.jsonc",
      "issues": [
        {
          "path": [
            "mcp",
            "mcp-router"
          ],
          "message": "Expected { readonly \"type\": \"local\", ... } | { readonly \"type\": \"remote\", ... }, got {\"args\":[\"-y\",\"@mcp_router/cli@latest\",\"connect\"],\"command\":\"npx\",\"env\":{\"MCPR_TOKEN\":\"mcpr_5X4MVkGX8AVTGv8VVij4yAmBXXvarWBN\"}}"
        },
        {
          "path": [
            "mcp",
            "mcp-router",
            "enabled"
          ],
          "message": "Missing key"
        }
      ]
    }
  },
  "status": 400
}
Look at the config files to ensure they are correct

### 🤖 Assistant — 2026-07-20T19:19:50Z

<details><summary>Reasoning</summary>

The user is getting a ConfigInvalidError from opencode desktop. The error indicates that the `mcp.mcp-router` config is invalid. Let me look at the config file to understand the issue.

The error says:
1. `mcp.mcp-router` - Expected `{ readonly "type": "local", ... } | { readonly "type": "remote", ... }`, got `{"args":["-y","@mcp_router/cli@latest","connect"],"command":"npx","env":{"MCPR_TOKEN":"..."}}`
2. `mcp.mcp-router.enabled` - Missing key

So the config has `mcp.mcp-router` defined as a local server config (with command/args/env) but it's missing the `type` field and `enabled` field. Opencode expects MCP servers to have a `type` field ("local" or "remote") and an `enabled` field.

Let me look at the config file first.

</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.config/opencode/opencode.jsonc"
}
```

### 🤖 Assistant — 2026-07-20T19:20:39Z

<details><summary>Reasoning</summary>

Let me analyze the error. The error says:

```
{
  "path": [
    "mcp",
    "mcp-router"
  ],
  "message": "Expected { readonly \"type\": \"local\", ... } | { readonly \"type\": \"remote\", ... }, got {\"args\":[\"-y\",\"@mcp_router/cli@latest\",\"connect\"],\"command\":\"npx\",\"env\":{\"MCPR_TOKEN\":\"mcpr_5X4MVkGX8AVTGv8VVij4yAmBXXvarWBN\"}}"
}
```

Wait, the error message shows the config has `command` as a string "npx" and `args` as an array. But the file shows `command` as an array `["npx", "-y", "@mcp_router/cli@latest", "connect"]`.

Hmm, interesting. The error message body shows:
```
got {"args":["-y","@mcp_router/cli@latest","connect"],"command":"npx","env":{"MCPR_TOKEN":"..."}}
```

This is different from what's in the file. The file has `command` as an array. But the error shows `command` as a string "npx" and `args` as an array.

Wait, this is weird. The error is showing a different structure than the file. Let me think about this.

Actually, the opencode config schema for MCP servers. Let me look at the opencode config schema. The error says it expects `{ readonly "type": "local", ... } | { readonly "type": "remote", ... }`.

So the issue is that the `mcp-router` entry is missing the `type` field? No wait, the file has `"type": "local"`.

Wait, let me re-read. The error message shows the data it received was:
```
{"args":["-y","@mcp_router/cli@latest","connect"],"command":"npx","env":{"MCPR_TOKEN":"..."}}
```

But the file has:
```
"mcp-router": {
  "type": "local",
  "command": ["npx", "-y", "@mcp_router/cli@latest", "connect"],
  "enabled": true,
  "env": {
    "MCPR_TOKEN": "mcpr_5X4MVkGX8AVTGv8VVij4yAmBXXvarWBN"
  }
}
```

So the error message's "got" doesn't include `type` or `enable
