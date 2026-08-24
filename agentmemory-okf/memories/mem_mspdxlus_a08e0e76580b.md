---
type: Fact
title: # dfee42c5de01

source: hermes
session_id: dfee42c5de01
resource: hermes://sessi
description: # dfee42c5de01

source: hermes
session_id: dfee42c5de01
resource: hermes://session/dfee42c5de01

# Conversation

- **Session ID:** `dfee42c5de01`
- **Source:** webui
- **Model:** tencent/hy3:free
- **
resource: agentmemory://memory/mem_mspdxlus_a08e0e76580b
tags: ["okf", "okf-hermes", "hermes", "hermes://session/dfee42c5de01"]
timestamp: 2026-08-12T01:02:52.870Z
source: agentmemory
strength: 7
---
# Content

# dfee42c5de01

source: hermes
session_id: dfee42c5de01
resource: hermes://session/dfee42c5de01

# Conversation

- **Session ID:** `dfee42c5de01`
- **Source:** webui
- **Model:** tencent/hy3:free
- **Started:** 2026-07-25T16:35:01Z
- **Messages:** 27
- **Tokens:** 79349 in / 14941 out

---

### 👤 User — 2026-07-25T16:35:01Z

Why is the Hermes Dashboard so much different than the Hermes Agent UI?

### 🤖 Assistant — 2026-07-25T16:35:07Z

<details><summary>Reasoning</summary>

The user is asking about the difference between the Hermes Dashboard and the Hermes Agent UI. This is a question about Hermes itself. I should load the `hermes-agent` skill to get authoritative information about Hermes's features and interfaces.

Let me load the hermes-agent skill to understand the architecture and differences between these

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 🤖 Assistant — 2026-07-25T16:35:24Z

<details><summary>Reasoning</summary>

The user is asking about the "Hermes Dashboard" vs the "Hermes Agent UI". I'm currently in the Hermes WebUI. The user wants to know why they look so different. Let me think about what these are.

The "Hermes Agent UI" — this is likely the TUI (terminal UI) that you get when you run `hermes` in the terminal, which is a rich prompt_toolkit-based interface. And the "Hermes Dashboard" is likely the WebUI (web-based dashboard).

Wait, the question is "Why is the Hermes Dashboard so much different than the Hermes Agent UI?" Let me think carefully. 

The Hermes Agent UI could refer to:
1. The CLI/TUI interface (terminal)
2. The desktop app

The Hermes Dashboard could be:
1. The WebUI

Actually, I should look at what's documented. The skill mentions "Hermes WebUI (ser...)" skill. There's a `hermes-webui` skill. Let me check it. Also there might be a "Hermes Desktop" app skill (`hermes-desktop`).

Actually the user is asking a conceptual question, not asking me to configure anything. But to answer accurately, I should understand the difference between the "Dashboard" and "Agent UI". Let me look at the hermes-webui and hermes-desktop skills to give an accurate answer.

Actually, let me reconsider. The terminology:
- "Hermes Agent UI" — could be the terminal/TUI chat interface
- "Hermes Dashboard" — could be the WebUI

But within the WebUI skill there might be details. Let me check. Actually, I think the most useful thing is to load the hermes-webui skill and possibly the hermes-desktop skill to understand the architecture. Let me also recall — I'm currently using the WebUI (per the system prompt: "You are in the Hermes WebUI, a browser-based chat interface").

Let me load the hermes-webui skill.

Actually, the question is somewhat conceptual. Let me think about whether there's a distinct "Dashboard" product. There's:
- Hermes Agent (the CLI/TUI)
- Hermes WebUI (browser-based)
- Hermes Desktop (native app)

The "Dashboard" might be a specific thing. Let me search the skills and docs.

Let me load hermes-webui skill and check the hermes-desktop skill. I'll do these in parallel

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-webui"
}
```

**Tool call: skill_view**

```json
{
  "name": "hermes-desktop"
}
```

### 🤖 Assistant — 2026-07-25T16:35:50Z

<details><summary>Reasoning</summary>

Now I have a clear picture from the actual skills. Let me explain the difference between "Hermes Dashboard" and "Hermes Agent UI" based on the real architecture.

From the skills:

1. **Hermes Agent (the core)** — this is the agent framework itself, runs in terminal/CLI (`hermes`), messaging platforms (gateway), and IDEs. It's the underlying engine.

2. **Hermes WebUI** — `server.py` on port 8787. A full agent dashboard that runs `hermes-agent` as a subprocess. React-style web frontend (static js + css). Browser-based chat interface. Full markdown rendering. This is what I'm running in right now (the WebUI session).

3. **Hermes Desktop** — Electron app (`Hermes.app`). React + Vite renderer bundled into `app.asar`. Talks to a Python `serve`/`gateway` child over WebSocke
