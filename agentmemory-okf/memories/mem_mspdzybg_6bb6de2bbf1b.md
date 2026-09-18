---
type: Fact
title: # Kilo CLI as Xcode 27 agent

source: hermes
session_id: 20260724_062931_d84b69

description: # Kilo CLI as Xcode 27 agent

source: hermes
session_id: 20260724_062931_d84b69
resource: hermes://session/20260724_062931_d84b69

# Conversation

- **Session ID:** `20260724_062931_d84b69`
- **Source
resource: agentmemory://memory/mem_mspdzybg_6bb6de2bbf1b
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:04:42.307Z
source: agentmemory
strength: 7
---
# Content

# Kilo CLI as Xcode 27 agent

source: hermes
session_id: 20260724_062931_d84b69
resource: hermes://session/20260724_062931_d84b69

# Conversation

- **Session ID:** `20260724_062931_d84b69`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-07-24T11:29:31Z
- **Messages:** 262
- **CWD:** `/Users/davec`
- **Tokens:** 195753 in / 61815 out

---

### 👤 User — 2026-07-24T11:29:32Z

How to use kilo cli as agent in Xcode 27?

### 🤖 Assistant — 2026-07-24T11:29:42Z

<details><summary>Reasoning</summary>

The user is asking about using "kilo cli as agent in Xcode 27". Let me think about this.

This seems to be about using the Kilo Code CLI (an AI coding agent) within Xcode 27. Wait, Xcode 27? That doesn't exist yet — as of my knowledge, the latest Xcode is around version 16. Xcode 27 would be a future version. But the conversation mentions a "Kilo" reference — in the memory it says "Kilo ('Kego') title" and "Kego = user's name for Kilo Code".

Kilo Code is a VS Code fork / AI coding assistant. The user is asking how to use kilo cli as an agent in Xcode 27.

Let me think about what they might actually want. They might want to:
1. Use the Kilo Code CLI tool inside Xcode
2. Use it as a coding agent integrated into Xcode

Actually, I should search for current information about this since Xcode 27 is a future version and Kilo Code's CLI capabilities may have evolved. Let me do a web search to get the latest info.

Actually, let me reconsider. The memory says "Kilo ('Kego')" is the user's name for Kilo Code. The user is asking how to use kilo cli as agent in Xcode 27.

This is a specific technical question. I should search the web for current documentation. Let me also check if there's relevant session context.

Let me search the web for this. But Xcode 27 — I'm not sure that exists. As of July 2026 (the conversation date), Xcode could be higher. Actually given the date is July 24, 2026, Xcode 27 might be plausible (Xcode 26 would be the 2025 release, Xcode 27 the 2026 release). 

Let me do a web search to get accurate, current info rather than relying on my training data. I should also load the hermes-agent skill? No, that's for configuring Hermes itself. Not relevant here.

Let me search the web for "kilo code cli xcode agent" and related. Let me do parallel searches.

Actually let me think about what "kilo cli" is. Kilo Code has a CLI. Let me search

</details>

**Tool call: web_search**

```json
{
  "query": "Kilo Code CLI agent command line usage 2026"
}
```

**Tool call: web_search**

```json
{
  "query": "Xcode 27 AI coding agent terminal integration"
}
```

### 🤖 Assistant — 2026-07-24T11:29:49Z

<details><summary>Reasoning</summary>

Let me dig into the specifics. The SwiftLee article about agent skills is interesting, and there's a Claude/Codex/Cursor integration. The question is about using Kilo CLI as an agent in Xcode 27.

Let me read the SwiftLee article and look for how Xcode 27 supports external agents. The key concept is "Agent Skills" - reusable skill definitions that Xcode 27 exposes. Let me extract those articles.

Also I should clarify: Kilo Code is a VS Code extension (fork of Continue/Roo Code). Is there a "Kilo CLI"? Let me check. Kilo Code does have a CLI. Let me search specifically.

Let me read the SwiftLee article about Xcode 27 agent skills and how third-party agents integrate

</details>

**Tool call: web_extract**

```json
{
  "urls": [
    "https://www.avanderlee.com/ai-development/using-xcode-27s-agent-skills-in-claude-codex-and-cursor/",
    "https://lushbinary.com/blog/xcode-27-agentic-coding-device-hub-guide/"
  ]
}
```

**Tool call: web_search**

```json
{
  "query": "Kilo Code CLI agent headless command line mode"
}
```

### 🤖 Assistant — 2026-07-24T11:30:00Z

<details><summary>Reasoning</summary>

Let me extract the Kilo CLI docs page and the Xcode 27 agent skills page. The web_extract failed because the backend is search-only. Let me try with a different approach - maybe use browser to navigate, or use web_extract with a different backend. Actually the error says I need to set web.extract_backend. Let me check if 
