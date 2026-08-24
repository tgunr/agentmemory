---
type: Fact
title: # Changing Hermes Profiles

source: hermes
session_id: 20260614_131733_7bcc60
re
description: # Changing Hermes Profiles

source: hermes
session_id: 20260614_131733_7bcc60
resource: hermes://session/20260614_131733_7bcc60

# Conversation

- **Session ID:** `20260614_131733_7bcc60`
- **Source:*
resource: agentmemory://memory/mem_mspdv2fl_624f4d1fa617
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260614_131733_7bcc60"]
timestamp: 2026-08-12T01:00:54.387Z
source: agentmemory
strength: 7
---
# Content

# Changing Hermes Profiles

source: hermes
session_id: 20260614_131733_7bcc60
resource: hermes://session/20260614_131733_7bcc60

# Conversation

- **Session ID:** `20260614_131733_7bcc60`
- **Source:** cli
- **Model:** kilo-auto/free
- **Started:** 2026-06-14T18:17:33Z
- **Ended:** 2026-06-14T18:21:14Z
- **Messages:** 10
- **Tokens:** 165683 in / 724 out

---

### 👤 User — 2026-06-14T18:18:27Z

how so i change profiles

### 🤖 Assistant — 2026-06-14T18:19:28Z

<details><summary>Reasoning</summary>


The user is asking how to change profiles in Hermes. This is a configuration/setup question about Hermes Agent itself. According to my instructions, when the user asks about configuring, setting up, or managing Hermes features, I should load the `hermes-agent` skill first.

Let me load that skill to get the proper instructions.


</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 🤖 Assistant — 2026-06-14T18:19:28Z

<details><summary>Reasoning</summary>


The user is asking "how do i change profiles". Looking at the skill content, I can see there's a Profile section in the CLI Reference. Let me look at that section more carefully.

From the skill, I can see:

```
### Profiles

```\nhermes profile list         List all profiles\nhermes profile create NAME  Create (--clone, --clone-all, --clone-from)\nhermes profile use NAME     Set sticky default\nhermes profile delete NAME  Delete a profile\nhermes profile show NAME    Show details\nhermes profile alias NAME   Manage wrapper scripts\nhermes profile rename A B   Rename a profile\nhermes profile export NAME  Export to tar.gz\nhermes profile import FILE  Import from archive\n```\n```

And from the Key Paths & Config section:
```
Profiles use `~/.hermes/profiles/<name>/` with the same layout.
```

So to change profiles, the user would use:
- `hermes profile use NAME` - to set a sticky default
- `hermes --profile NAME` - to use a profile for a single invocation (from Global Flags)

Let me provide a helpful answer based on this information.


</details>

To change Hermes profiles:

**For a one-time session with a different profile:**
```bash
hermes --profile <name>
```

**To set a sticky default profile:**
```bash
hermes profile use <name>
```

**To see available profiles:**
```bash
hermes profile list
```

Each profile lives in `~/.hermes/profiles/<name>/` with its own config, skills, memory, and `state.db`. The current profile is shown in your session header (you're on `default`).

### 👤 User — 2026-06-14T18:20:04Z

hermes profile use fastest

### 🤖 Assistant — 2026-06-14T18:20:36Z

<details><summary>Reasoning</summary>


The user wants me to run `hermes profile use fastest` to set the profile to "fastest". This is a straightforward CLI command. Let me execute it.


</details>

**Tool call: terminal**

```json
{
  "command": "hermes profile use fastest"
}
```

### 🤖 Assistant — 2026-06-14T18:20:36Z

<details><summary>Reasoning</summary>


Good, that worked. Now let me check if the fastest profile exists and see what profiles are available.


</details>

**Tool call: terminal**

```json
{
  "command": "hermes profile list"
}
```

### 🤖 Assistant — 2026-06-14T18:20:36Z

<details><summary>Reasoning</summary>


The `fastest` profile is now active (shown with the ◆ marker). It uses `qwen3:1.7b` model, same as `default`. The gateway is stopped on this profile, which is expected since it's not the main profile connected to any messaging platform.


</details>

Profile `fastest` is now active (◆ marker). It uses `qwen3:1.7b` model, same as your previous `default` profile.
