---
type: Fact
title: # Plan examine mcp servers fix not running

source: hermes
session_id: 20260813_
description: # Plan examine mcp servers fix not running

source: hermes
session_id: 20260813_044640_76f82a
resource: hermes://session/20260813_044640_76f82a

# Conversation

- **Session ID:** `20260813_044640_76f8
resource: agentmemory://memory/mem_mssoo2bv_6b3a3fb93fdd
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-08-14T08:26:41.868Z
source: agentmemory
strength: 7
---
# Content

# Plan examine mcp servers fix not running

source: hermes
session_id: 20260813_044640_76f82a
resource: hermes://session/20260813_044640_76f82a

# Conversation

- **Session ID:** `20260813_044640_76f82a`
- **Source:** desktop
- **Model:** tencent/hy3:free
- **Started:** 2026-08-13T09:46:40Z
- **Messages:** 14
- **CWD:** `/Volumes/davec`
- **Tokens:** 62340 in / 5142 out

---

### 👤 User — 2026-08-13T09:46:46Z

make a plan on examining the mcp servers and fix the ones that are not running

### 🤖 Assistant — 2026-08-13T09:47:05Z

<details><summary>Reasoning</summary>

The user wants a plan on examining the MCP servers and fixing the ones that are not running. This is a planning task. Let me think about this.

There's a skill for this: `mcp-troubleshooting`. Let me load it. Also there's `mcp-router-guide`. The task is about examining MCP servers and fixing ones not running.

Let me load the relevant skill first. The system prompt says: "Before replying, scan the skills below. If a skill matches or is even partially relevant to your task, you MUST load it with skill_view(name) and follow its instructions."

The `mcp-troubleshooting` skill is directly relevant. Let me load it. Also `mcp-router-guide` could be relevant.

The task says "make a plan" — there's also a `plan` skill in software-development category. But this is about MCP servers, so mcp-troubleshooting is the most relevant.

Let me load the skill(s) first. I'll batch independent calls: load mcp-troubleshooting skill, and maybe check the actual MCP server configuration to understand the environment.

Actually, the plan skill says "Write a markdown plan to .hermes/plans/; no execution." But the user wants a plan on examining MCP servers. This is more of a diagnostic plan. The mcp-troubleshooting skill is the right one.

Let me first load the skill and also look at the current MCP config to ground the plan in reality. These are independent so I can batch them.

Let me load:
1. skill_view('mcp-troubleshooting')
2. Check the config.yaml for mcp_servers

Actually, I should check where the config is. The skill probably tells me. Let me load the skill first, then decide. But I can also read the config in parallel since I know the general location is ~/.hermes/ config. Let me check both the skill and the config.

The config.yaml location: typically ~/.hermes/config.yaml. Let me read it to see mcp_servers.

Let me batch the skill load and a search for the config file

</details>

**Tool call: skill_view**

```json
{
  "name": "mcp-troubleshooting"
}
```

**Tool call: search_files**

```json
{
  "pattern": "mcp_servers",
  "path": "/Users/davec/.hermes",
  "output_mode": "files_only"
}
```

### 🤖 Assistant — 2026-08-13T09:47:19Z

<details><summary>Reasoning</summary>

Let me read the config.yaml to see the actual MCP servers and use the `hermes mcp list`/`catalog` to see their status. Let me get the current state. I should base the plan on real data. Let me check the config and run the catalog/list commands

</details>

**Tool call: terminal**

```json
{
  "command": "hermes mcp catalog 2>&1 | head -100; echo \"---EXIT:$?---\""
}
```

**Tool call: terminal**

```json
{
  "command": "hermes mcp list 2>&1 | head -100; echo \"---EXIT:$?---\""
}
```

### 🤖 Assistant — 2026-08-13T09:47:40Z

<details><summary>Reasoning</summary>

The catalog shows status "custom — enabled" and the list shows "✓ enabled" — but "enabled" doesn't mean "running" or "healthy". The actual connectivity status needs a live test. Let me run `hermes mcp test` on each, or check logs. The plan should be: examine which are actually failing at connection time.

Let me think about what the user wants: "make a plan on examining the mcp servers and fix the ones that are not running." So they want a plan, not necessarily immediate execution. But per my operating rules, I should produce a working artifact. However, a "plan" is what's requested. The user explicitly said "make a plan on examining... and fix the ones that are not running." 

This is a planning task. The deliverable is a plan. But I should ground it in reality. Let me actually test connectivity to find
