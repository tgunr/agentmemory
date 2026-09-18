---
type: Fact
title: # Executing Shell Commands in Hermes

source: hermes
session_id: 20260615_071644
description: # Executing Shell Commands in Hermes

source: hermes
session_id: 20260615_071644_e1a964
resource: hermes://session/20260615_071644_e1a964

# Conversation

- **Session ID:** `20260615_071644_e1a964`
- 
resource: agentmemory://memory/mem_mspdz4ku_0d4cc075dfd9
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260615_071644_e1a964"]
timestamp: 2026-08-12T01:04:03.779Z
source: agentmemory
strength: 7
---
# Content

# Executing Shell Commands in Hermes

source: hermes
session_id: 20260615_071644_e1a964
resource: hermes://session/20260615_071644_e1a964

# Conversation

- **Session ID:** `20260615_071644_e1a964`
- **Source:** tui
- **Model:** kilo-auto/free
- **Started:** 2026-06-15T12:17:17Z
- **Ended:** 2026-06-15T12:28:01Z
- **Messages:** 13
- **Tokens:** 473771 in / 2864 out

---

### 👤 User — 2026-06-15T12:17:17Z

how do i execute a shell command in hermes e.g. ls -la

### 🤖 Assistant — 2026-06-15T12:17:46Z

<details><summary>Reasoning</summary>


The user is asking how to execute shell commands in Hermes. This is a basic question about Hermes functionality. I should explain that they can use the `terminal` tool to execute shell commands. Let me provide a clear and helpful response, and I can demonstrate with an actual `ls -la` command if they want.

Actually, looking at the tools available, I have a `terminal` tool that can execute shell commands. I should explain this to the user and offer to demonstrate it.


</details>

**Tool call: terminal**

```json
{
  "command": "ls -la"
}
```

### 🤖 Assistant — 2026-06-15T12:17:46Z

<details><summary>Reasoning</summary>


That's a lot of output! The user asked how to execute a shell command in Hermes, and I demonstrated it. Now let me give them a helpful summary.


</details>

That ran successfully! As you can see, the `terminal` tool returns:
- `output`: the stdout from your command
- `exit_code`: 0 for success, non-zero for errors
- `error`: any error message (null if successful)

**Quick reference:**
- Use `terminal(command="your command here")` to run shell commands
- For long-running processes: add `background=true` and `notify_on_complete=true`
- For interactive tools (like vim): add `pty=true`
- For a specific working directory: use `workdir="/path/to/dir"`

The current working directory persists between calls, so if you need to navigate somewhere for multiple commands, you can do that once and subsequent commands will stay there.

Anything specific you'd like to run?

### 👤 User — 2026-06-15T12:19:19Z

terminal(command="ls")

### 🤖 Assistant — 2026-06-15T12:19:41Z

<details><summary>Reasoning</summary>


The user is asking me to run `ls` - they're probably seeing how I respond or they want a simpler listing. Let me run it.


</details>

**Tool call: terminal**

```json
{
  "command": "ls"
}
```

### 🤖 Assistant — 2026-06-15T12:19:41Z

<details><summary>Reasoning</summary>


The user just asked me to run "ls" and I did. I should just give them a simple confirmation. No need to over-explain - they saw how it works in my first response.


</details>

There you go — `terminal(command="ls")` returned the directory listing. Simple as that!

### 👤 User — 2026-06-15T12:20:35Z

I don't want or need to involve the agent, I just want to issue a shell command and see the result without any model intervention

### 🤖 Assistant — 2026-06-15T12:22:13Z

<details><summary>Reasoning</summary>


Ah, the user wants to run shell commands directly without agent intervention. They're asking about Hermes functionality - specifically they want to use the terminal tool directly, bypassing the LLM.

This is more about the Hermes TUI interface. In the Hermes chat UI, there might be a way to run shell commands directly. Let me think about what they might be referring to:

1. In Hermes TUI, there might be slash commands like `/shell` or `/exec`
2. Or they might want to use a direct terminal without the agent loop
3. Or there's a way to invoke tools directly in the UI

Actually, looking at this more carefully - they want to execute shell commands without the agent "intervening" - meaning they want to do it themselves in the TUI. The `terminal` tool I just used IS the way to run shell commands in Hermes, but I (the agent) initiated it.

They might be asking:
- How to use Hermes TUI to run shell commands directly
- Or how to configure something

Let me check if there's a skill about debugging TUI commands since I see `debugging-hermes-tui-commands` in the skills list.


</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 
