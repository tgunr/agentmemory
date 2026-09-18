---
type: Fact
title: # Resolve unknown command /tq08

source: hermes
session_id: 20260826_061434_4f74
description: # Resolve unknown command /tq08

source: hermes
session_id: 20260826_061434_4f74c0
resource: hermes://session/20260826_061434_4f74c0

# Conversation

- **Session ID:** `20260826_061434_4f74c0`
- **Sou
resource: agentmemory://memory/mem_mtg12re0_d24c24af0921
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:32:44.978Z
source: agentmemory
strength: 7
---
# Content

# Resolve unknown command /tq08

source: hermes
session_id: 20260826_061434_4f74c0
resource: hermes://session/20260826_061434_4f74c0

# Conversation

- **Session ID:** `20260826_061434_4f74c0`
- **Source:** desktop
- **Model:** tencent/hy3:free
- **Started:** 2026-08-26T11:17:06Z
- **Ended:** 2026-08-26T11:40:22Z
- **Messages:** 73
- **CWD:** `/Users/davec`
- **Tokens:** 89524 in / 36123 out

---

### 👤 User — 2026-08-26T11:17:06Z

Unknown command: /tq08

### 🤖 Assistant — 2026-08-26T11:17:41Z

<details><summary>Reasoning</summary>

The user has typed something that resulted in "Unknown command: /tq08". This looks like a slash command that wasn't recognized. Let me think about this.

The user's message is just "Unknown command: /tq08" which appears to be a system message indicating that `/tq08` is not a registered command. 

Looking at my memory: there's information about `/tq14`, `/tq27`, and `/tq08`. Specifically:
- `/tq08 = Qwen/Qwen3-8B TQ4 (8B, base/open)`
- "Slash cmds /tg14 /tg27 /reset only appear if registered in quick_commands (active profile config.yaml + global)."

So `/tq08` is a slash command that the user tried to use but it's not registered. The system is reporting "Unknown command: /tq08".

Wait, actually the message format "Unknown command: /tq08" — this is a system message telling me that the user attempted a slash command that doesn't exist. This is the user's input being echoed as a system rejection.

Actually, re-reading: the user input got transformed. The literal text "Unknown command: /tq08" — this might be the result of the user typing /tq08 into the chat and the system responding that it's not a known command.

Per my memory: `/tq08 = Qwen/Qwen3-8B TQ4`. The user wants to switch to the 8B model perhaps, or there's a `/tq08` slash command that should let them use the 8B model in chat. But memory says only `/tg14`, `/tg27`, `/reset` appear if registered in quick_commands. So `/tq08` was never registered.

So the user tried to use /tq08 and it failed. I should help them. The user wants to use the 8B model presumably. 

Let me think about what the user actually wants. The message is just "Unknown command: /tq08". This is the system telling me the slash command failed. The user probably intended to switch to the 8B model via a slash command.

I have memory about the quick_commands dispatch fix (commit 5dd05917) and that slash commands must be registered in config.yaml quick_commands. 

I should figure out: does the user want me to register /tq08 as a quick command? That seems like the most likely intent. The user is on the Hermes agent, they have /tg14, /tg27, /reset quick commands but /tq08 wasn't registered.

Let me recall the relevant memory details:
- "Hermes-agent update workflow on this machine (~/.hermes/hermes-agent): branch `tg-main` ... carries local-only commit 5dd05917 (the quick_commands $1/$@ dispatch fix, NOT upstream). Config `updates.parked_branch_strategy: update_in_place`..."
- "/tq14 (14B) = Qwen/Qwen3-14B-TQ4... /tq27 = Qwen3.8-27B-tq4-g/64... /tq08 = Qwen/Qwen3-8B TQ4 (8B, base/open). CURRENT LIVE STATE: ... Slash cmds /tg14 /tg27 /reset only appear if registered in quick_commands (active profile config.yaml + global)."
- "Slash command dispatch bugs are the real bug, not the script."
- "User: davec... Uses Hermes slash commands heavily (/optimize, /route, /classify)."

So the user likely wants /tq08 registered as a quick command to switch to the 8B model. Let me check the current config to see how /tg14 and /tg27 are defined, then add /tq08 analogously.

Actually, I should be careful here. The message "Unknown command: /tq08" is terse. It might be that the user literally sent me a system output. But in chat context, this is the user (or system) telling me the command failed.

Let me investigate. I should:
1. Look at the Hermes config to understand how quick_commands are defined.
2. Determine the right way to add /tq08.

The memory mentions "active profile config.yaml" and "global". The active profile is "default". So I should look at ~/.hermes/profiles/default/config.yaml and possibly the global config.

But wait 
