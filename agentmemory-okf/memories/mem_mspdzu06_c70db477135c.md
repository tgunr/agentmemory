---
type: Fact
title: # Missing /route quick command in autocomplete

source: hermes
session_id: 20260
description: # Missing /route quick command in autocomplete

source: hermes
session_id: 20260721_065755_a95130
resource: hermes://session/20260721_065755_a95130

# Conversation

- **Session ID:** `20260721_065755_
resource: agentmemory://memory/mem_mspdzu06_c70db477135c
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:04:36.722Z
source: agentmemory
strength: 7
---
# Content

# Missing /route quick command in autocomplete

source: hermes
session_id: 20260721_065755_a95130
resource: hermes://session/20260721_065755_a95130

# Conversation

- **Session ID:** `20260721_065755_a95130`
- **Source:** tui
- **Model:** stepfun/step-3.7-flash:free
- **Started:** 2026-07-21T11:57:55Z
- **Messages:** 270
- **CWD:** `/Users/davec`
- **Tokens:** 908347 in / 38621 out

---

### 👤 User — 2026-07-21T11:57:55Z

the /route quick command is not showing in autocomplete

### 👤 User — 2026-07-21T11:57:55Z

the /route quick command is not showing in autocomplete

### 🤖 Assistant — 2026-07-21T11:58:02Z

<details><summary>Reasoning</summary>

The user is reporting that the `/route` quick command is not showing up in autocomplete. This seems to be about Hermes Agent itself - specifically about a quick command feature. Let me first check if there's any relevant skill or documentation about this.

Let me search for information about Hermes quick commands and the `/route` command specifically.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

**Tool call: session_search**

```json
{
  "query": "/route quick command autocomplete",
  "limit": 10
}
```

### 🤖 Assistant — 2026-07-21T11:58:02Z

<details><summary>Reasoning</summary>

The user is reporting that the `/route` quick command is not showing up in autocomplete. This seems to be about Hermes Agent itself - specifically about a quick command feature. Let me first check if there's any relevant skill or documentation about this.

Let me search for information about Hermes quick commands and the `/route` command specifically.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

**Tool call: session_search**

```json
{
  "query": "/route quick command autocomplete",
  "limit": 10
}
```

### 🤖 Assistant — 2026-07-21T11:58:16Z

<details><summary>Reasoning</summary>

The user is having an issue with the `/route` quick command not appearing in autocomplete in Hermes Agent.

Based on the skill I just loaded, I can see that:
1. Quick commands are defined in `config.yaml` under `quick_commands:` section
2. Slash commands `/help` are the in-session commands
3. The `/route` command is not a built-in Hermes command in the reference I have - it might be a quick command they've set up, or a webhook/web route thing, or something else entirely.

Wait - looking more carefully at the skill content, I see "Quick Commands (Zero-Token Shell Access)" section mentions adding custom slash commands that run shell commands directly. The config uses `quick_commands:` in config.yaml.

The user says `/route` is not showing in autocomplete. Let me think about what could cause this:


- The command might not be defined in their `config.yaml` quick_commands
- They may have defined it but with a naming issue
- Or they could be confusing it with the webhook subscription feature

I'm also noting that "Quick Commands" are specifically mentioned as allowing custom slash commands via `config.yaml`'s `quick_commands:` section, and they're whitelisted for messaging platforms. The registration of these commands should happen through the `CommandDef` in `commands.py` according to the skill documentation. But the `hermes-agent` skill doesn't actually document a built-in `/route` command, which suggests this might be something user-defined or they're thinking of a different feature entirely. config.yaml` or it might be in the session context somewhere. Let me think systematically:
1. Check if `/route` is a built-in Hermes command
2. Check if it's a quick command
3. Check if it's from a skill or session

From the skill content I don't see `/route` as a built-in command. But the user says "the" which implies they expect it to exist. Maybe they have it configured previously, or maybe they're using the webhook routes feature and expecting `/route` as a slash command.

Actually wait - maybe they're using the webhooks feature or a custom session-transfer skill? Let me check the session-transfer skill or webhooks. The skill mentions:

> **Webhooks**
> `hermes webhook subscribe N  Create route at /webhooks/<name>`

