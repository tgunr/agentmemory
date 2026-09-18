---
type: Fact
title: # Explain why processes 82464 and 97292 exist?…

source: hermes
session_id: 2026
description: # Explain why processes 82464 and 97292 exist?…

source: hermes
session_id: 20260825_104929_d0ecb6
resource: hermes://session/20260825_104929_d0ecb6

# Conversation

- **Session ID:** `20260825_104929
resource: agentmemory://memory/mem_mtg12o1o_5bde4ecce090
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260825_104929_d0ecb6"]
timestamp: 2026-08-30T16:32:40.676Z
source: agentmemory
strength: 7
---
# Content

# Explain why processes 82464 and 97292 exist?…

source: hermes
session_id: 20260825_104929_d0ecb6
resource: hermes://session/20260825_104929_d0ecb6

# Conversation

- **Session ID:** `20260825_104929_d0ecb6`
- **Source:** cli
- **Model:** kilo-auto/free
- **Started:** 2026-08-25T15:49:34Z
- **Ended:** 2026-08-25T15:49:54Z
- **Messages:** 4
- **Tokens:** 5530 in / 323 out

---

### 👤 User — 2026-08-25T15:49:29Z

Explain why processes 82464 and 97292 exist? What are they doing?

### 🤖 Assistant — 2026-08-25T15:49:43Z

<details><summary>Reasoning</summary>

The user is asking about two specific processes: 82464 and 97292. They want to know why these processes exist and what they're doing. This is a system state question about current running processes on the machine.

I need to use terminal commands to investigate these processes. I should look at what processes are running, specifically PIDs 82464 and 97292, and determine what they are.

Let me use terminal to run ps commands to inspect these processes.

</details>

**Tool call: terminal**

```json
{
  "command": "ps -p 82464,97292 -o pid,ppid,user,%cpu,%mem,stat,start,time,command"
}
```

### 🤖 Assistant — 2026-08-25T15:49:54Z

<details><summary>Reasoning</summary>

The output is clear:

- 82464 is the TurboQuant-MLX 14B server on 127.0.0.1:8080.
- 97292 is a Hermes slash_worker for a session, pointed at the same 14B model.

So these exist because the user is running local TurboQuant MLX inference and Hermes is using it for a slash-command session. I should present that plainly.

</details>

**82464** is the local TurboQuant-MLX inference server for the 14B model, listening on `127.0.0.1:8080`.

**97292** is a Hermes slash-worker process tied to a specific session, using that same local 14B model.

So they exist because you're running local LLM inference and Hermes is currently using it for a slash-command session.
