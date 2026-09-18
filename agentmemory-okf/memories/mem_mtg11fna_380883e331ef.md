---
type: Fact
title: # Handling Iteration Budget Exhausted Warning

source: hermes
session_id: 202607
description: # Handling Iteration Budget Exhausted Warning

source: hermes
session_id: 20260704_121749_4dca34
resource: hermes://session/20260704_121749_4dca34

# Conversation

- **Session ID:** `20260704_121749_4
resource: agentmemory://memory/mem_mtg11fna_380883e331ef
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260704_121749_4dca34"]
timestamp: 2026-08-30T16:31:43.158Z
source: agentmemory
strength: 7
---
# Content

# Handling Iteration Budget Exhausted Warning

source: hermes
session_id: 20260704_121749_4dca34
resource: hermes://session/20260704_121749_4dca34

# Conversation

- **Session ID:** `20260704_121749_4dca34`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-07-04T17:18:08Z
- **Ended:** 2026-08-24T22:20:25Z
- **Messages:** 42
- **Tokens:** 206935 in / 6212 out
- **Est. cost:** $0.1769

---

### 👤 User — 2026-07-04T17:18:09Z

What do I do whenb I get 
⚠️ Iteration budget exhausted (90/90) — asking model to summarise

### 🤖 Assistant — 2026-07-04T17:18:19Z

<details><summary>Reasoning</summary>

The user is asking about a Hermes Agent message they're seeing: "⚠️ Iteration budget exhausted (90/90) — asking model to summarise". Let me explain what this means and what they can do about it.

This is a Hermes Agent feature where there's a limit on how many tool-call iterations the agent can perform in a single turn/response. When it hits 90 iterations, it stops and asks the model to summarize what it's done so far.

Let me think about what the user can do:

1. This is normal behavior - it means the task was complex enough that it hit the iteration limit
2. They can just let it continue - the summary will be provided and they can ask it to keep going
3. They could break the task into smaller chunks
4. They could check if there's a config setting for the iteration budget


5. I should look at the hermes-agent documentation to give them specific configuration options and best practices for handling this situation.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 🤖 Assistant — 2026-07-04T17:18:26Z

<details><summary>Reasoning</summary>


The user is asking about the warning message "⚠️ Iteration budget exhausted (90/90) — asking model to summarise". This is a Hermes-specific message that appears when the agent has used up its iteration budget. Let me check the config for `max_turns` which was mentioned in the skill content - it says the default is 90.

Looking at the skill content:
- Under "Config Sections": `agent` section has `max_turns` (90)
- There's mention of `/compress` command for manual compression

The user wants to know what to do when this happens. This is likely when the conversation is getting long and Hermes needs to compress or summarise the context. Let me provide a helpful answer about what this means and what options they have.


</details>

When you see `⚠️ Iteration budget exhausted (90/90) — asking model to summarise`, Hermes has hit the maximum number of turns for the conversation and is compressing context to keep going.

**What it means:**
- The default `agent.max_turns` is 90 - after 90 iterations of the agent loop, Hermes compresses the conversation history to free up context
- This preserves the most important information while reducing token usage

**What you can do:**

1. **Let it summarise** (recommended) - Hermes will automatically compress the context and continue. The summary keeps essential info.

2. **Start fresh** - Type `/new` or `/reset` to begin a clean conversation without compression.

3. **Change the limit** - If you want more turns before compression:
   ```bash
   hermes config set agent.max_turns 150
   ```
   (Requires restarting the session to take effect)

4. **Manual compression** - Type `/compress` anytime to proactively reduce context if your conversation is getting long.

The compression threshold is configurable too (`compression.threshold` and `compression.target_ratio` in config.yaml), but the defaults work well for most cases.

### 👤 User — 2026-07-04T17:19:45Z

how do i continue the session

### 🤖 Assistant — 2026-07-04T17:19:58Z

<details><summary>Reasoning</summary>

The user is asking how to continue a session after the iteration budget was exhausted. Let me think about what options are available based on the skill content I loaded.

From the skill:
- `/new` or `/reset` - fresh session
- `hermes --resume SESSION` - resume by ID
- `hermes --continue` - resume most recent
- The iteration budget exhaustion message says "asking model to summarise" - so Hermes actually con
