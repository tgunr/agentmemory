---
type: Fact
title: # MCP Router Tool Discovery Rule

source: hermes
session_id: 20260613_072136_034
description: # MCP Router Tool Discovery Rule

source: hermes
session_id: 20260613_072136_0348b1
resource: hermes://session/20260613_072136_0348b1

# Conversation

- **Session ID:** `20260613_072136_0348b1`
- **So
resource: agentmemory://memory/mem_mspcllpa_f299ca241d81
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-08-12T00:25:33.206Z
source: agentmemory
strength: 7
---
# Content

# MCP Router Tool Discovery Rule

source: hermes
session_id: 20260613_072136_0348b1
resource: hermes://session/20260613_072136_0348b1

# Conversation

- **Session ID:** `20260613_072136_0348b1`
- **Source:** tui
- **Model:** kilo-auto/balanced
- **Started:** 2026-06-13T12:21:37Z
- **Messages:** 88
- **CWD:** `/Volumes/davec`
- **Tokens:** 264 in / 12184 out
- **Est. cost:** $0.1524

---

### 👤 User — 2026-06-13T12:21:37Z

Make a rule that when looking for tools, the MCP router contains all of the MPC servers it is the master router for MTP

### 🤖 Assistant — 2026-06-13T12:22:22Z

<details><summary>Reasoning</summary>

Thinking Process:

1.  **Understand the User's Request**: The user wants to "Make a rule that when looking for tools, the MCP router contains all of the MPC servers it is the master router for MTP".
2.  **Analyze the Request**:
    *   "Make a rule": This likely means adding a memory or creating a skill about how MCP (Model Context Protocol) servers are managed or discovered.
    *   "when looking for tools": Context is tool discovery or MCP tool usage.
    *   "the MCP router contains all of the MPC servers": There's a typo here: "MPC" -> "MCP".
    *   "it is the master router for MTP": Typo? "MTP" -> "MCP"? Or maybe a specific Hermes feature (MCP router acts as master router for MCP/MTP?).
    *   Let's check Hermes documentation or existing skills for "MCP router", "master router", "MTP".
    *   Let's load the `mcp` or `native-mcp` skill to understand Hermes' MCP architecture.

</details>

**Tool call: skill_view**

```json
{
  "name": "native-mcp"
}
```

### 🤖 Assistant — 2026-06-13T12:22:22Z

<details><summary>Reasoning</summary>

I see there's a naming collision. Let's load `mcp/native-mcp`.


</details>

**Tool call: skill_view**

```json
{
  "name": "mcp/native-mcp"
}
```

### 🤖 Assistant — 2026-06-13T12:22:22Z

<details><summary>Reasoning</summary>

I see "MCP Router" mentioned in the skill:
"### MCP Router / Aggregator Pattern
An MCP router is a remote HTTP MCP server that exposes aggregator tools for discovering and invoking downstream MCP servers."

But the user mentions "MCP router contains all of the MPC servers it is the master router for MTP".
This sounds like a mnemonic or a specific rule they want me to create.
Wait: "MCP router contains all of the MCP servers it is the master router for MCP".
M-P-C = Model Protocol Client? Or just a typo for MCP.
"MTP" - maybe another typo for MCP.

Let's search Hermes documentation or skills for "master router" or "MTP".


</details>

**Tool call: search_files**

```json
{
  "pattern": "master router|MTP",
  "path": "/Users/davec/.hermes",
  "limit": 5
}
```

### 🤖 Assistant — 2026-06-13T12:22:22Z

<details><summary>Reasoning</summary>

No matches for "master router" or "MTP" in the Hermes directory (just noise from logs).

Let me search the web or think about what the user might mean.
"Make a rule that when looking for tools, the MCP router contains all of the MPC servers it is the master router for MTP"

Could "MTP" be "MCP"? "MPC" be "MCP"?
"Make a rule that when looking for tools, the MCP router contains all of the MCP servers it is the master router for."

Ah! "the MCP router contains all of the MCP servers it is the master router for"
M-P-C -> MCP (transposition)
M-T-P -> MCP (transposition/typo)

Yes, "MPC" is a typo for "MCP", and "MTP" is a typo for "MCP".
The user wants a rule: "When looking for tools, the MCP router contains all of the MCP servers it is the master router for."

Let's create a memory or a skill rule about this.
Wait, if it's a "rule", I can save it to memory.
Let's clarify with the user or just save it to memory as a rule about MCP routers.
Actually, the user is stating a fact/rule they want me to remember: "when looking for tools, the MCP router contains all of the MCP servers it is the master router for".

Let's use the `memory` tool to save this rule, and also I can clarify if they meant MCP instead of MPC/MTP.

Let's save to memory:
Target: memory
Content: "When looking for tools, an MCP router contains all of the MCP servers it is the master router for."

Wai
