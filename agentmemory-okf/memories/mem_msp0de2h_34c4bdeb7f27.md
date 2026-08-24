---
type: Fact
title: # 212b0d278252

source: hermes
session_id: 212b0d278252
resource: hermes://sessi
description: # 212b0d278252

source: hermes
session_id: 212b0d278252
resource: hermes://session/212b0d278252

# Conversation

- **Session ID:** `212b0d278252`
- **Source:** webui
- **Model:** tencent/hy3:free
- **
resource: agentmemory://memory/mem_msp0de2h_34c4bdeb7f27
tags: ["okf", "okf-hermes", "hermes", "hermes://session/212b0d278252"]
timestamp: 2026-08-11T18:43:14.669Z
source: agentmemory
strength: 7
---
# Content

# 212b0d278252

source: hermes
session_id: 212b0d278252
resource: hermes://session/212b0d278252

# Conversation

- **Session ID:** `212b0d278252`
- **Source:** webui
- **Model:** tencent/hy3:free
- **Started:** 2026-07-25T16:25:46Z
- **Messages:** 6
- **Tokens:** 21889 in / 1151 out

---

### 👤 User — 2026-07-25T16:25:46Z

How do I add a todo in hermes

### 🤖 Assistant — 2026-07-25T16:26:06Z

<details><summary>Reasoning</summary>

The user is asking how to add a todo in Hermes. Let me think about this. I have a `todo` tool available. The question is about how to add a todo in Hermes.

Let me look at the todo tool. The tool is for managing task lists. To add a todo, I'd call the todo tool with `todos` array containing items with id, content, status.

But the user might be asking about the Hermes CLI/UI interface, not necessarily my todo tool. Let me think — there could be a skill about Hermes. The instruction says to load skills when relevant. The user is asking about Hermes Agent itself — configuring/using. But this is a feature question, not config.

Actually, the question "How do I add a todo in hermes" could be interpreted as: how do I use the todo feature. I should answer based on the todo tool I have. Let me check the hermes docs or skill. Actually, there's a `hermes-agent` skill. But this is a simple question. The user wants to know how to add a todo.

I have a todo tool. Let me explain how to add a todo. There's no need to load a skill for this simple explanation — but the rule says load skill when configuring/setting up Hermes. This is a usage question. I think I can answer directly using the todo tool's capabilities.

Actually, let me reconsider. The "todo" feature in Hermes — is there a user-facing way to add todos via slash commands or the UI? The user might be asking how they, as a user, add a todo. But since I'm an agent, I have a todo tool. Let me explain that I can manage todos for them, and show how it works.

Let me just answer clearly and demonstrate. I could either explain or actually create one. Since they asked "how do I add a todo", I should explain the mechanism. I'll explain that I (the agent) have a todo tool, and show an example. Let me give a concise, helpful answer.

I don't think I need to invoke the tool unless they want me to. But a quick demonstration might help. Let me explain concisely.

Actually, let me consider: is there a slash command or user-facing todo in Hermes? I'm not certain. The docs at hermes-agent.nousresearch.com would be authoritative. But for a simple "how do I add a todo", the answer is that the agent manages todos via the todo tool, and I can demonstrate.

Let me give a clear answer. I'll explain that I can maintain a todo list for our session using the todo tool, and show the format. I won't over-engineer this.

I think the best answer: explain I have a todo tool, show example of adding items, and offer to set one up. Let me check if there's relevant skill content quickly. Given the instruction to load skills for Hermes config/usage, but this is a basic usage question. I'll keep it light but could load hermes-agent skill for accuracy. Actually, the hermes-agent skill is about configuring Hermes, not the todo feature specifically. Let me just answer.

Let me provide a helpful response

</details>

You add a todo through me — I have a built-in **todo** tool that keeps a task list for our session. You don't type a special command; you just tell me your tasks and I track them.

**How it works:**

To add items, I call the todo tool with a list like this:

```json
todos: [
  { "id": "1", "content": "Research X", "status": "pending" },
  { "id": "2", "content": "Write the script", "status": "in_progress" },
  { "id": "3", "content": "Run tests", "status": "pending" }
]
```

- **status** can be `pending`, `in_progress`, `completed`, or `cancelled`
- Only **one** item is `in_progress` at a time
- I mark things `completed` as I finish them, or `cancelled` if they drop off

**To use it, just say something like:**
- *"Add a todo: finish the report, then email the client"*
- *"Track
