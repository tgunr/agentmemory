---
type: Fact
title: # Find hermes port to permit mac backend

source: hermes
session_id: 20260823_01
description: # Find hermes port to permit mac backend

source: hermes
session_id: 20260823_015520_096474
resource: hermes://session/20260823_015520_096474

# Conversation

- **Session ID:** `20260823_015520_096474
resource: agentmemory://memory/mem_mt5jazca_f7c7c713d7e4
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-23T08:17:33.728Z
source: agentmemory
strength: 7
---
# Content

# Find hermes port to permit mac backend

source: hermes
session_id: 20260823_015520_096474
resource: hermes://session/20260823_015520_096474

# Conversation

- **Session ID:** `20260823_015520_096474`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-08-23T06:56:51Z
- **Ended:** 2026-08-23T07:18:57Z
- **Messages:** 11
- **CWD:** `/Users/davec`
- **Tokens:** 54142 in / 4475 out

---

### 👤 User — 2026-08-23T06:56:51Z

what is the hermes port on this mac to permit another mac to connect as its backend?

### 🤖 Assistant — 2026-08-23T06:56:56Z

<details><summary>Reasoning</summary>

The user wants to know the Hermes port on this Mac to permit another Mac to connect as its backend. Let me think about this.

This is about Hermes Agent configuration. The question is about which port Hermes listens on so another Mac can connect as a backend. This is a Hermes configuration question. I should load the hermes-agent skill to get accurate info.

Let me check the skill

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 🤖 Assistant — 2026-08-23T06:57:05Z

<details><summary>Reasoning</summary>

The user is asking about the Hermes port on this Mac to permit another Mac to connect as its backend. This is about the terminal backend configuration. Let me check the relevant references. The question is about the SSH terminal backend and what port to permit.

Actually, the user wants to know which port Hermes uses so another Mac can connect as the backend. This relates to the terminal backend being `ssh` - another Mac connecting to this Mac as an SSH backend.

Let me look at the relevant references. There's `references/remote-access-setup.md` and the SSH terminal backend. Let me check the config for `terminal.backend: ssh`.

Actually the question is "what is the hermes port on this mac to permit another mac to connect as its backend?" 

This is about SSH. The default SSH port is 22. Another Mac connecting as the backend (terminal backend = ssh) would use SSH port 22. But maybe Hermes has a specific configuration. Let me check the reference for SSH terminal.

Let me look at the hermes-ssh-terminal skill and the config reference. Let me search.

Actually, let me think about this. The user has a setup where another Mac connects as the backend. The terminal backend can be `ssh`. So the other Mac would SSH into this Mac. The port to permit would be the SSH port, typically 22.

But there might be a specific Hermes port. Let me check the SSH terminal configuration skill and remote-access-setup.md.

Let me load the relevant references and skills

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent",
  "file_path": "references/remote-access-setup.md"
}
```

**Tool call: skill_view**

```json
{
  "name": "hermes-ssh-terminal"
}
```

### 🤖 Assistant — 2026-08-23T06:57:35Z

<details><summary>Reasoning</summary>

The user is asking about the Hermes port on this Mac to permit another Mac to connect as its backend. This is about using Hermes's SSH terminal backend — but wait, the question is about what port Hermes listens on to let another Mac connect as a backend.

Let me think about what "another mac to connect as its backend" means. The Hermes `terminal` tool has a backend option: `local`, `docker`, `ssh`, `modal`. If you want another Mac to act as the terminal backend, you'd configure `TERMINAL_SSH_HOST`/`TERMINAL_SSH_USER` on the Hermes machine to point at the other Mac's SSH server. That means the OTHER Mac needs to have SSH enabled (port 22 by default).

But the question phrasing "the hermes port on this mac to permit another mac to connect as its backend" — they want to know what port on THIS Mac needs to be open/permitted so another Mac can connect as the backend.

Hmm, actually wait. Let me reconsider. There are two interpretations:

1. The user wants THIS Mac to be the Hermes backend for ANOTHER Mac. I.e., another Mac runs Hermes, and its terminal backend is SSH pointed at this Mac. In that case, THIS Mac needs SSH enabled (Remote Login) on port 22.

2. The user wants another Mac to be the backend for THIS Hermes instan
