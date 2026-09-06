---
type: Fact
title: # Find skills external-directory pointing

source: hermes
session_id: 20260829_0
description: # Find skills external-directory pointing

source: hermes
session_id: 20260829_033929_978f42
resource: hermes://session/20260829_033929_978f42

# Conversation

- **Session ID:** `20260829_033929_978f4
resource: agentmemory://memory/mem_mtg12xtf_0bb4a48348fa
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260829_033929_978f42"]
timestamp: 2026-08-30T16:32:53.337Z
source: agentmemory
strength: 7
---
# Content

# Find skills external-directory pointing

source: hermes
session_id: 20260829_033929_978f42
resource: hermes://session/20260829_033929_978f42

# Conversation

- **Session ID:** `20260829_033929_978f42`
- **Source:** desktop
- **Model:** tencent/hy3:free
- **Started:** 2026-08-29T08:41:49Z
- **Ended:** 2026-08-29T09:33:03Z
- **Messages:** 68
- **Tokens:** 73523 in / 13876 out

---

### 👤 User — 2026-08-29T08:41:49Z

where is the skills external-directory pointing?

### 🤖 Assistant — 2026-08-29T08:41:56Z

<details><summary>Reasoning</summary>

The user is asking where the skills external-directory is pointing. This is a Hermes Agent configuration question. Let me check the Hermes config.

Let me look at the Hermes configuration. The skills external-directory is likely a config setting. Let me check.

Let me run `hermes config get skills` or similar. Let me first check the config

</details>

**Tool call: terminal**

```json
{
  "command": "hermes config get skills 2>&1; echo \"---\"; hermes config get 2>&1 | head -50"
}
```

### 🤖 Assistant — 2026-08-29T08:42:03Z

<details><summary>Reasoning</summary>

The skills config has external_dirs pointing to /Volumes/alpha/sources/hermes-knowledge/skills. Let me verify that path exists.

</details>

**Tool call: terminal**

```json
{
  "command": "ls -ld /Volumes/alpha/sources/hermes-knowledge/skills 2>&1; echo \"---\"; ls /Volumes/alpha/sources/hermes-knowledge/skills 2>&1 | head -20"
}
```

### 🤖 Assistant — 2026-08-29T08:42:07Z

<details><summary>Reasoning</summary>

The path doesn't exist. Let me check if /Volumes/alpha even exists.

</details>

**Tool call: terminal**

```json
{
  "command": "ls -ld /Volumes/alpha 2>&1; echo \"--- mounts ---\"; mount | grep -i alpha 2>&1; echo \"--- all Volumes ---\"; ls -1 /Volumes 2>&1"
}
```

### 🤖 Assistant — 2026-08-29T08:42:12Z

<details><summary>Reasoning</summary>

So the external_dirs points at a path that doesn't exist. The volume `/Volumes/alpha` isn't mounted. Let me report this clearly.

</details>

Here's the situation:

**Config value** (`skills.external_dirs`):
```
/Volumes/alpha/sources/hermes-knowledge/skills
```

**Reality check:** That path does **not exist**. `/Volumes/alpha` isn't even mounted — the only volumes currently present are:
- `/Volumes/com.apple.TimeMachine.localsnapshots`
- `/Volumes/Macintosh HD`

So the external skills directory points at a location that's currently unreachable (the `alpha` volume appears to be unmounted or the path was renamed). Any skills that were supposed to be loaded from there won't be picked up right now.

If you expected skills from that directory to be active, you'll want to either:
- Remount/connect the `alpha` volume, or
- Update `skills.external_dirs` to the correct path (e.g. `hermes config set skills.external_dirs <path>`).

Want me to check where your active skills are actually loading from, or help repoint that config?

### 👤 User — 2026-08-29T08:46:03Z

look again, now mounted

### 🤖 Assistant — 2026-08-29T08:46:10Z

<details><summary>Reasoning</summary>

Let me re-check now that it's mounted.

</details>

**Tool call: terminal**

```json
{
  "command": "ls -ld /Volumes/alpha/sources/hermes-knowledge/skills 2>&1; echo \"--- count ---\"; ls -1 /Volumes/alpha/sources/hermes-knowledge/skills 2>&1 | wc -l; echo \"--- listing ---\"; ls -1 /Volumes/alpha/sources/hermes-knowledge/skills 2>&1 | head -40"
}
```

### 🤖 Assistant — 2026-08-29T08:46:14Z

<details><summary>Reasoning</summary>

Interesting - there's some stderr about a cd error to /Volumes/projects/CarltonCrafted. That seems unrelated to my command. Let me re-run clean

</details>

**Tool call: terminal**

```json
{
  "command": "ls -ld /Volumes/alpha/sources/hermes-knowledge/skills 2>&1; echo \"--- count ---\"; ls -1 /Volumes/alpha/sources/hermes-knowledge/skills 2>&1 | wc -l; echo \"--- listing ---\"; ls -1 /Volumes/alpha/sources/hermes-knowledge/skills 2>&1 | head -40"
}
```

### 🤖 Assistant — 2026-08-29T08:46:21Z

<details><summary>Reasoning</summary>

Strange. The output shows a cd error for a different path `/Volumes/projects/CarltonCrafted`. It seems the shell'
