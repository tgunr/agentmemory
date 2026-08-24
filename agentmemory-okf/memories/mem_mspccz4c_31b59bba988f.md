---
type: Fact
title: # Creating the Personal profile

source: hermes
session_id: f7ca083290e1
resourc
description: # Creating the Personal profile

source: hermes
session_id: f7ca083290e1
resource: hermes://session/f7ca083290e1

# Conversation

- **Session ID:** `f7ca083290e1`
- **Source:** webui
- **Model:** kilo
resource: agentmemory://memory/mem_mspccz4c_31b59bba988f
tags: ["okf", "okf-hermes", "hermes", "hermes://session/f7ca083290e1"]
timestamp: 2026-08-12T00:18:50.686Z
source: agentmemory
strength: 7
---
# Content

# Creating the Personal profile

source: hermes
session_id: f7ca083290e1
resource: hermes://session/f7ca083290e1

# Conversation

- **Session ID:** `f7ca083290e1`
- **Source:** webui
- **Model:** kilo-auto/balanced
- **Started:** 2026-06-17T20:32:52Z
- **Messages:** 6
- **Tokens:** 18 in / 380 out
- **Est. cost:** $0.0168

---

### 👤 User — 2026-06-17T20:32:52Z

Create new profile called Personal

### 🤖 Assistant — 2026-06-17T20:33:12Z

<details><summary>Reasoning</summary>

The user wants to create a new Hermes profile called "Personal". Let me load the hermes-agent skill first since this involves configuring Hermes itself.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 🤖 Assistant — 2026-06-17T20:33:12Z

<details><summary>Reasoning</summary>

The skill shows the profile commands. I need to run `hermes profile create Personal` to create the new profile.

</details>

**Tool call: terminal**

```json
{
  "command": "hermes profile create Personal",
  "timeout": 15
}
```

### 🤖 Assistant — 2026-06-17T20:33:12Z

<details><summary>Reasoning</summary>

Done. Let me summarize what was created.

</details>

Done! Your **Personal** profile is ready. Here's what was set up:

| Detail | Value |
|--------|-------|
| **Profile directory** | `~/.hermes/profiles/personal/` |
| **Wrapper command** | `personal` (in `~/.local/bin/`) |
| **Skills synced** | 73 bundled skills |

### Next steps you can take:

- **`personal setup`** — configure API keys and model for this profile
- **`personal chat`** — start an interactive session using the Personal profile
- **`personal gateway start`** — run a separate messaging gateway for this profile
- **Edit `~/.hermes/profiles/personal/SOUL.md`** — customize the personality

⚠️ The profile doesn't have API keys yet — it'll inherit from your shell environment until you configure its own. Run `personal setup` if you want to give it dedicated credentials.
