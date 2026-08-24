---
type: Fact
title: # Connecting to skill hubs

source: hermes
session_id: 20260704_112244_3bb303
re
description: # Connecting to skill hubs

source: hermes
session_id: 20260704_112244_3bb303
resource: hermes://session/20260704_112244_3bb303

# Conversation

- **Session ID:** `20260704_112244_3bb303`
- **Source:*
resource: agentmemory://memory/mem_msp0cprs_03edf895771e
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-08-11T18:42:43.177Z
source: agentmemory
strength: 7
---
# Content

# Connecting to skill hubs

source: hermes
session_id: 20260704_112244_3bb303
resource: hermes://session/20260704_112244_3bb303

# Conversation

- **Session ID:** `20260704_112244_3bb303`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-07-04T16:22:45Z
- **Messages:** 10
- **CWD:** `/Volumes/davec`
- **Tokens:** 116251 in / 1013 out
- **Est. cost:** $0.0650

---

### 👤 User — 2026-07-04T16:22:46Z

how so i connect to skill hubs?

### 👤 User — 2026-07-04T16:25:53Z

[System: The active model for this chat has changed to kilo-auto/efficient via provider kilo. From this point forward, use this runtime metadata when answering questions about what model/provider is active.]

### 👤 User — 2026-07-04T16:26:08Z

Ho do i connect hermes skill hubs

### 🤖 Assistant — 2026-07-04T16:26:16Z

<details><summary>Reasoning</summary>

The user is asking about connecting to "skill hubs" in Hermes. Let me check if there's relevant information in the skills or memory. This sounds like it could be related to Hermes Agent features. Let me load the hermes-agent skill first as recommended, and also check if there's anything in memory about this.


</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 🤖 Assistant — 2026-07-04T16:26:27Z

<details><summary>Reasoning</summary>

The user is asking about "skill hubs" — how to connect to them. Let me look at what the Hermes Agent skill says about skill hubs. From the skill content, I can see the relevant section:

```
hermes skills                Manage skills (CLI)
hermes skills list          List installed skills
hermes skills search QUERY  Search the skills hub
hermes skills install ID    Install a skill (ID can be a hub identifier OR a direct https://…/SKILL.md URL; pass --name to override when frontmatter has no name)
hermes skills inspect ID    Preview without installing
hermes skills config        Enable/disable skills per platform
hermes skills check         Check for updates
hermes skills update        Update outdated skills
hermes skills uninstall N   Remove a hub skill
hermes skills publish PATH  Publish to registry
hermes skills browse        Browse all available skills
hermes skills tap add REPO  Add a GitHub repo as skill source
```

The key command for connecting to skill hubs is `hermes skills tap add REPO` — this adds a GitHub repo as a skill source. Let me also check the docs for more info.

Let me provide a clear answer based on what I know from the skill.

</details>

Great question! Here's how skill hubs work in Hermes:

## Connecting to Skill Hubs

The command is:

```bash
hermes skills tap add <REPO>
```

This adds a GitHub repository as a skill source. For example, to tap the official Hermes community skills repo:

```bash
hermes skills tap add NousResearch/hermes-skills
```

Once tapped, you can browse, search, install, and update skills from that hub just like built-in skills.

## Key Skill Hub Commands

| Command | What it does |
|---------|-------------|
| `hermes skills tap add REPO` | Add a GitHub repo as a skill source |
| `hermes skills browse` | Browse all available skills from all hubs |
| `hermes skills search QUERY` | Search the skill hubs |
| `hermes skills install ID` | Install a skill (hub ID or direct URL) |
| `hermes skills inspect ID` | Preview a skill without installing |
| `hermes skills check` | Check for updates across all hubs |
| `hermes skills update` | Update outdated skills |
| `hermes skills list` | List your installed skills |
| `hermes skills uninstall N` | Remove a hub skill |
| `hermes skills config` | Enable/disable skills per platform |

Want me to help you browse what's available or tap a specific repo?

### 👤 User — 2026-07-04T16:27:00Z

hermes skills browse

### 🤖 Assistant — 2026-07-04T16:27:08Z

<details><summary>Reasoning</summary>

The user wants to run `hermes skills browse`. I should run the command in the terminal.

</details>

**Tool call: terminal**

```json
{
  "command": "hermes skills browse",
  "timeout": 30
}
```

### 🤖 Assistant — 2026-07-04T16:27:21Z

<details><summary>Reasoning</summary>


The user wants to 
