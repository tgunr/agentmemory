---
type: Fact
title: # Restoring Deleted Joe Profile From Git

source: hermes
session_id: 20260708_02
description: # Restoring Deleted Joe Profile From Git

source: hermes
session_id: 20260708_020057_7e2c16
resource: hermes://session/20260708_020057_7e2c16

# Conversation

- **Session ID:** `20260708_020057_7e2c16
resource: agentmemory://memory/mem_mspdvgx6_aad35be992c4
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:01:13.175Z
source: agentmemory
strength: 7
---
# Content

# Restoring Deleted Joe Profile From Git

source: hermes
session_id: 20260708_020057_7e2c16
resource: hermes://session/20260708_020057_7e2c16

# Conversation

- **Session ID:** `20260708_020057_7e2c16`
- **Source:** tui
- **Model:** kilo-auto/balanced
- **Started:** 2026-07-08T07:00:57Z
- **Messages:** 61
- **CWD:** `/Users/davec`
- **Tokens:** 116146 in / 13283 out
- **Est. cost:** $0.0706

---

### 👤 User — 2026-07-08T07:00:57Z

earlier I deleted the Joe profile. I would like to reinstall it. Check the git repo

### 🤖 Assistant — 2026-07-08T07:01:21Z

<details><summary>Reasoning</summary>

The user wants to reinstall the 'jo' profile (which they called the "Joe profile" earlier - their active NSFW/literary AI roleplay via SillyTavern+Ollama). They want me to check the git repo for it.

According to memory, the profiles live under `~/.hermes/profiles/<name>/`. The profile they want back is 'jo'. Let me first look in the git repo (`.hermes/` is a git repo according to memory) to see what happened, and also look for the actual profile directory.

Let me:
1. Check if the `jo` profile directory still exists under `~/.hermes/profiles/`
2. Look at git history in `.hermes/` to see what was deleted


3. Check if there are any backups of the profile

</details>

**Tool call: terminal**

```json
{
  "command": "ls -la ~/.hermes/profiles/"
}
```

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes && git log --all --oneline -- profiles/jo 2>/dev/null | head -20"
}
```

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes && git status 2>/dev/null | head -20"
}
```

### 🤖 Assistant — 2026-07-08T07:01:46Z

<details><summary>Reasoning</summary>

The `jo` profile already exists in `~/.hermes/profiles/jo` — it was recreated, likely at 01:02 today. Let me look at what's in there and determine whether it's really restored or just an empty stub. Then I'll check git history for what the original `jo` profile looked like before deletion.

</details>

**Tool call: terminal**

```json
{
  "command": "ls -la ~/.hermes/profiles/jo/ && echo \"---\" && ls ~/.hermes/profiles/jo/"
}
```

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes && git log --all --oneline --diff-filter=D -- profiles/jo | head -10"
}
```

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes && git log --all --oneline -- profiles/jo | head -20"
}
```

### 🤖 Assistant — 2026-07-08T07:02:13Z

<details><summary>Reasoning</summary>

The `jo` profile exists but is empty of git history — `git log --all -- profiles/jo` returned nothing. That means the profile was never tracked in git, or it was created fresh (not from git history). The fact that git has no history for `profiles/jo` suggests it was a new profile that was simply re-created when the Hermes app started (it likely has internal logic to recreate deleted profiles from memory/seeds).

The profile is there but bare — no skills, no config, no memories. Let me check what the SOUL.md contains, and also look at skills and config to understand the state, and compare with what the user's memory tells us about the profile.

</details>

**Tool call: terminal**

```json
{
  "command": "cat ~/.hermes/profiles/jo/SOUL.md"
}
```

**Tool call: terminal**

```json
{
  "command": "ls -la ~/.hermes/profiles/jo/skills/ 2>/dev/null && echo \"---MEMORIES---\" && ls -la ~/.hermes/profiles/jo/memories/ 2>/dev/null && echo \"---CRON---\" && ls -la ~/.hermes/profiles/jo/cron/ 2>/dev/null"
}
```

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes && git log --all --oneline --diff-filter=A -- profiles/jo | head -10"
}
```

### 🤖 Assistant — 2026-07-08T07:02:27Z

<details><summary>Reasoning</summary>

Now I have a clear picture:

The `jo` profile was **deleted** by the user earlier today, but the app (Hermes desktop GUI) auto-recreated it at `Jul 8 01:02` — it's a fresh skeleton profile, not restored from git. Here's what we know:

**Current state of `jo`:**
- ✅ Directory exists at `~/.hermes/profiles/jo/`
- ✅ Has default subdirectories (skills, cron, sessions, memories, etc.)
- ✅ Has `SOUL.md` — but it's the **generic Hermes default** ("You are 
