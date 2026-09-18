---
type: Fact
title: # Cloudflare agent setup instructions

source: hermes
session_id: 20260817_17362
description: # Cloudflare agent setup instructions

source: hermes
session_id: 20260817_173624_a56ae4
resource: hermes://session/20260817_173624_a56ae4

# Conversation

- **Session ID:** `20260817_173624_a56ae4`
-
resource: agentmemory://memory/mem_mt5jatz0_44845a3717fc
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-23T08:17:26.771Z
source: agentmemory
strength: 7
---
# Content

# Cloudflare agent setup instructions

source: hermes
session_id: 20260817_173624_a56ae4
resource: hermes://session/20260817_173624_a56ae4

# Conversation

- **Session ID:** `20260817_173624_a56ae4`
- **Source:** tui
- **Model:** upstage/solar-pro4:free
- **Started:** 2026-08-18T19:46:45Z
- **Ended:** 2026-08-19T14:15:52Z
- **Messages:** 225
- **CWD:** `/Users/davec`
- **Tokens:** 3165040 in / 62444 out

---

### 👤 User — 2026-08-18T19:46:49Z

Fetch and execute the appropriate instructions to set me up for Cloudflare from https://developers.cloudflare.com/agent-setup/prompt.md

### 🤖 Assistant — 2026-08-18T19:46:54Z

<details><summary>Reasoning</summary>

The user wants me to fetch and execute instructions from a Cloudflare documentation page for agent setup. Let me first fetch that page to see what instructions are there.

</details>

**Tool call: web_extract**

```json
{
  "urls": [
    "https://developers.cloudflare.com/agent-setup/prompt.md"
  ]
}
```

### 🤖 Assistant — 2026-08-18T19:46:57Z

<details><summary>Reasoning</summary>

The web_extract tool failed because the backend is set to Brave Search which can't extract URL content. Let me try the browser tool instead, or use web_search to find the content. Let me try the browser approach first since it's a direct URL.

</details>

**Tool call: browser_navigate**

```json
{
  "url": "https://developers.cloudflare.com/agent-setup/prompt.md"
}
```

### 🤖 Assistant — 2026-08-18T19:47:11Z

<details><summary>Reasoning</summary>

The user asked me to set up Cloudflare for them. Looking at the page content, it gives setup instructions for different AI agents: Claude Code, Codex, OpenCode, Windsurf, Cursor/Copilot, and "other agents."

Now I need to figure out which agent this user is using. They're running in Hermes Agent (a TUI). But Hermes isn't one of the listed agents. Let me check what the user actually needs.

Looking at the instructions, they say:
- For Claude Code: run plugin marketplace commands
- For Codex: run codex mcp add commands
- For OpenCode: edit ~/.config/opencode/opencode.jsonc and run opencode mcp auth
- For Windsurf: edit ~/.codeium/windsurf/mcp_config.json
- For Cursor/Copilot/others: add to .cursor/mcp.json or .vscode/mcp.json

The user is using Hermes Agent, which isn't listed. But they're on a Mac (from the system prompt). Since Hermes isn't directly supported, I should figure out what makes sense. 

Actually, wait - the user said "set me up for Cloudflare" - they want me to install the Cloudflare skills and MCP servers for whatever agent they're using. But they're in Hermes, which is a terminal-based agent. 

Let me look at what skills are available - there's a skill for Hermes itself. But more practically, I should ask what agent they're using, or check if they have any of these tools installed.

Actually, let me re-read the page. It says "Complete all of the following steps yourself by running the commands directly. Do not ask the user to run any of these commands."

So I should run the commands. But which set? The user is using Hermes, which isn't listed. Let me check if they have any of the supported agents installed, and also check if there's a Hermes-specific approach.

Let me first check what's available on their system, and also ask which agent they primarily use.

Actually, looking more carefully, the user said "set me up for Cloudflare" - they want the Cloudflare integration. Since Hermes isn't one of the listed agents, I should ask which agent they want to set this up for. But the instructions say not to ask the user to run commands - I should run them myself.

Let me check what agents they have installed first, then proceed accordingly.

Actually, let me just ask which agent they want to set up, since Hermes isn't in the list and I need to know which set of commands to run.

</details>

The page loaded successfully. It has setup instructions for several agents (Claude Code, Codex, OpenCode, Windsurf, Cursor, Copilot). Before I run the commands, I need to know which agent you want to set up — Hermes itself isn't in that list. 

Which of these do you use (or want to set up)?

- **C
