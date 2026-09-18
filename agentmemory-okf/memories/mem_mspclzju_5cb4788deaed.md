---
type: Fact
title: # Discarding previous PR

source: hermes
session_id: 20260704_113619_24eb8b
reso
description: # Discarding previous PR

source: hermes
session_id: 20260704_113619_24eb8b
resource: hermes://session/20260704_113619_24eb8b

# Conversation

- **Session ID:** `20260704_113619_24eb8b`
- **Source:** 
resource: agentmemory://memory/mem_mspclzju_5cb4788deaed
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T00:25:51.147Z
source: agentmemory
strength: 7
---
# Content

# Discarding previous PR

source: hermes
session_id: 20260704_113619_24eb8b
resource: hermes://session/20260704_113619_24eb8b

# Conversation

- **Session ID:** `20260704_113619_24eb8b`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-07-04T16:36:19Z
- **Ended:** 2026-07-06T17:47:23Z
- **Messages:** 918
- **CWD:** `/Users/davec`
- **Tokens:** 588617 in / 51444 out
- **Est. cost:** $1.0448

---

### 👤 User — 2026-07-04T16:36:20Z

so i cd into ~/projects/UV/Love\ State and run `hermes desktop` but it looks like I am still in default profile, the files browser shows my home folder.

### 👤 User — 2026-07-04T16:36:20Z

so i cd into ~/projects/UV/Love\ State and run `hermes desktop` but it looks like I am still in default profile, the files browser shows my home folder.

### 🤖 Assistant — 2026-07-04T16:36:30Z

<details><summary>Reasoning</summary>

Let me think about this. The user wants to run `hermes desktop` from a specific project directory and have the file browser show that directory. Let me recall what I know:

1. The `hermes-workspace-context` skill is relevant here - it's about managing project roots and working directories.
2. From memory, I know there's a `project_create` tool and `project_switch` tool for desktop Projects.
3. The user is saying they `cd` into the directory and run `hermes desktop`, but the file browser still shows their home folder.

Let me load the hermes-workspace-context skill to understand how this should work.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-workspace-context"
}
```

### 🤖 Assistant — 2026-07-04T16:36:30Z

<details><summary>Reasoning</summary>

Let me think about this. The user wants to run `hermes desktop` from a specific project directory and have the file browser show that directory. Let me recall what I know:

1. The `hermes-workspace-context` skill is relevant here - it's about managing project roots and working directories.
2. From memory, I know there's a `project_create` tool and `project_switch` tool for desktop Projects.
3. The user is saying they `cd` into the directory and run `hermes desktop`, but the file browser still shows their home folder.

Let me load the hermes-workspace-context skill to understand how this should work.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-workspace-context"
}
```

### 🤖 Assistant — 2026-07-04T16:36:40Z

<details><summary>Reasoning</summary>


I found the relevant skill! The user is hitting a known bug documented in the skill. Let me look at the "Desktop GUI Profile Bug" pitfall:

> **Desktop GUI Profile Bug:** `hermes -p <profile> desktop` (or `<profile> desktop`) does NOT propagate the profile to the backend serve process. The Desktop GUI (Electron) spawns `hermes_cli.main serve` without `--profile` or `HERMES_PROFILE`, so it always serves the `default` profile regardless of the launch wrapper. Verified 2026-07-04: PID 2848 launched with `-p ai` but PID 11815 (the serve) has no HERMES_PROFILE. All sessions opened in the Desktop GUI are in the `default` profile. Workaround: use `<profile> chat` (TUI) or `<profile> dashboard` for non-default profiles. The Desktop GUI is effectively single-profile only until this is fixed upstream.

And there's also this about the CWD issue:

> **`hermes desktop --cwd` is launch-time only.** It sets the initial project directory for Desktop chat sessions. It does **not** change the CWD of an already-running Desktop app/session.

So the user has two issues:
1. They're trying to use `hermes desktop` with a profile (`-p <profile>`) but the Desktop GUI doesn't propagate the profile to the backend
2. They may have already had Desktop running, and `--cwd` doesn't affect a running Desktop app

Let me check what profiles are available and help them work around this. The skill says to use `<profile> chat` (TUI) or `<profile> dashboard` for non-default profiles.

Actually, wait - the user said they "cd into ~/projects/UV/Love\ State and run `hermes desktop`" - they're in a specific directory. But the Desktop GUI always serves default profile regardless of what profile they spec
