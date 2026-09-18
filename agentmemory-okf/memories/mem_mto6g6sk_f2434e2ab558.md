---
type: Fact
title: # Check current working directory

source: hermes
session_id: 20260902_073357_20
description: # Check current working directory

source: hermes
session_id: 20260902_073357_20517b
resource: hermes://session/20260902_073357_20517b

# Conversation

- **Session ID:** `20260902_073357_20517b`
- **S
resource: agentmemory://memory/mem_mto6g6sk_f2434e2ab558
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-05T09:25:18.838Z
source: agentmemory
strength: 7
---
# Content

# Check current working directory

source: hermes
session_id: 20260902_073357_20517b
resource: hermes://session/20260902_073357_20517b

# Conversation

- **Session ID:** `20260902_073357_20517b`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-09-02T12:34:10Z
- **Ended:** 2026-09-04T12:09:22Z
- **Messages:** 71
- **CWD:** `/Users/davec`
- **Tokens:** 135366 in / 30285 out

---

### 👤 User — 2026-09-02T12:34:10Z

what is your cwd?

### 🤖 Assistant — 2026-09-02T12:34:23Z

<details><summary>Reasoning</summary>

User asks current working directory. Environment says terminal backend ssh, home /Users/davec, working dir /Users/davec. Need answer perhaps verify with pwd? Simple question; can answer from env, but maybe cwd persists in terminal. We can just say /Users/davec. Keep concise.

</details>

`/Users/davec`

### 👤 User — 2026-09-02T12:35:24Z

check the previous session, I launched heremes from ~/.hermes/hermes-agent which is where the cwd should be since we removed the cwd pin

### 🤖 Assistant — 2026-09-02T12:35:37Z

<details><summary>Reasoning</summary>

The user says the previous session was launched from ~/.hermes/hermes-agent and cwd should be there since the pin was removed. But my current cwd is /Users/davec. Let me check the previous session to confirm.

</details>

**Tool call: session_search**

```json
{
  "limit": 3,
  "query": "hermes-agent cwd launch",
  "sort": "newest"
}
```

**Tool call: terminal**

```json
{
  "command": "pwd; echo \"---\"; hermes config get terminal.cwd 2>/dev/null; echo \"---\"; ls -ld ~/.hermes/hermes-agent"
}
```

### 🤖 Assistant — 2026-09-02T12:36:01Z

<details><summary>Reasoning</summary>

The user is asking me to check the previous session where they launched Hermes from ~/.hermes/hermes-agent. They expected the cwd to be ~/.hermes/hermes-agent since we removed the cwd pin, but pwd shows /Users/davec.

Looking at the session search results, I found the relevant session: @session:default/20260902_071201_524efa where we removed the cwd pin from config.yaml. The session said "Launching `hermes` (or `hermes desktop`) from `~/.hermes/hermes-agent` will now actually root the session there and load that repo's `AGENTS.md`."

But wait — in my terminal output, pwd shows /Users/davec, and hermes config get terminal.cwd shows ".". Interesting — the terminal output also shows "[Subdirectory context discovered: .hermes/hermes-agent/AGENTS.md]" which means the AGENTS.md from ~/.hermes/hermes-agent IS being loaded. So the session is anchored at /Users/davec but subdirectory context discovery found .hermes/hermes-agent/AGENTS.md?

Hmm, wait. Let me think about this. The terminal tool shows pwd = /Users/davec. The working directory in my environment section says: "Working directory: /Users/davec". But the subdirectory context discovery found .hermes/hermes-agent/AGENTS.md — that's odd. That suggests maybe the actual session workspace is ~/.hermes/hermes-agent but the terminal backend cwd is /Users/davec?

Actually the note in the environment says "Working directory: /Users/davec" — but the AGENTS.md subdirectory context discovered is .hermes/hermes-agent/AGENTS.md, which is relative to /Users/davec. Hmm, that means the workspace discovery found the AGENTS.md in the subdirectory.

Wait, actually — the user says "I launched heremes from ~/.hermes/hermes-agent which is where the cwd should be since we removed the cwd pin". So they expected cwd to be ~/.hermes/hermes-agent. But pwd shows /Users/davec.

Hmm, but why is .hermes/hermes-agent/AGENTS.md being discovered as subdirectory context? That's weird. Maybe the project root detection walked up/down and found it? Or maybe the session did start in ~/.hermes/hermes-agent and the terminal backend reset to /Users/davec?

Actually, let me reconsider. The subdirectory context note appeared in the terminal result — it's the terminal tool's AGENTS.md discovery. That means from the terminal backend's perspective, the working directory or workspace contains .hermes/hermes-agent/AGENTS.md. If pwd = /Users/davec, then .hermes/hermes-agent/AGENTS.md is a subdirectory of the cwd. So 
