---
type: Fact
title: # CNC Profile Not Changing Working Directory

source: hermes
session_id: 2026061
description: # CNC Profile Not Changing Working Directory

source: hermes
session_id: 20260619_110141_5312bd
resource: hermes://session/20260619_110141_5312bd

# Conversation

- **Session ID:** `20260619_110141_53
resource: agentmemory://memory/mem_mspdv8js_f6adf629d470
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-08-12T01:01:02.324Z
source: agentmemory
strength: 7
---
# Content

# CNC Profile Not Changing Working Directory

source: hermes
session_id: 20260619_110141_5312bd
resource: hermes://session/20260619_110141_5312bd

# Conversation

- **Session ID:** `20260619_110141_5312bd`
- **Source:** tui
- **Model:** kilo-auto/balanced
- **Started:** 2026-06-19T16:01:42Z
- **Ended:** 2026-06-19T16:21:12Z
- **Messages:** 102
- **CWD:** `/Volumes/davec`
- **Tokens:** 258 in / 23510 out
- **Est. cost:** $0.2107

---

### 👤 User — 2026-06-19T16:01:42Z

I clicked on CNC profile but according to the current working directory it's still on the default. It did not switch to the terminal specified in the profile for CNC.

### 🤖 Assistant — 2026-06-19T16:02:30Z

<details><summary>Reasoning</summary>

The user is saying that even though they clicked on the CNC profile in the Hermes GUI, the current working directory is still the default one (their volume mount at /Volumes/davec) rather than whatever the CNC profile specifies.

Looking at my memory, I have:
- "CNC machining profile at ~/.hermes/profiles/cnc/ — a dedicated Hermes profile for CNC work. Uses the cnc wrapper command."

The user expects that when they switch to the CNC profile, the terminal should also switch to a specific working directory defined in that profile.

This is a question about how Hermes profiles work - specifically whether switching profiles in the GUI also changes the terminal's working directory.


I should check the Hermes documentation or the CNC profile configuration to see what working directory it expects and understand how profile switching actually works in the system.

</details>

**Tool call: skill_view**

```json
{
  "role": "hermes-agent"
}
```

**Tool call: terminal**

```json
{
  "command": "pwd"
}
```

**Tool call: read_file**

```json
{
  "role": "~/.hermes/profiles/cnc/config.yaml"
}
```

### 🤖 Assistant — 2026-06-19T16:02:30Z

<details><summary>Reasoning</summary>

Let me look at the CNC profile properly and load the hermes-agent skill to understand how profile switching works.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

**Tool call: skill_view**

```json
{
  "name": "hermes-workspace-context"
}
```

**Tool call: terminal**

```json
{
  "command": "find ~/.hermes/profiles/cnc/ -type f 2>/dev/null"
}
```

### 🤖 Assistant — 2026-06-19T16:02:30Z

<details><summary>Reasoning</summary>

Now let me check the CNC profile's config.yaml to see what `terminal.cwd` is set to.


</details>

**Tool call: read_file**

```json
{
  "path": "~/.hermes/profiles/cnc/config.yaml"
}
```

### 🤖 Assistant — 2026-06-19T16:02:30Z

<details><summary>Reasoning</summary>

Now I understand the situation. The user clicked on the CNC profile in the Hermes Desktop GUI, but the current working directory is still `/Volumes/davec` rather than `/Volumes/projects/cnc` which is what's configured in the CNC profile's `terminal.cwd`.

From the `hermes-workspace-context` skill, I know that:

1. **Profiles are isolated config/state** - each profile has its own config, skills, memory, etc.
2. **`terminal.cwd` in the CNC profile config is `/Volumes/projects/cnc`** (line 129)


3. **The Desktop app uses `--cwd` as launch-time only** - but when switching profiles via GUI, the desktop app inherits its current working directory from the parent process that launched it, not from the profile's configured `terminal.cwd`.

4. **The mismatch occurs because** the desktop was started without `--cwd` from `/Volumes/davec`, so even though the CNC profile correctly sets `terminal.cwd: /Volumes/projects/cnc`, the Desktop is still running with `/Volumes/davec` as its initial working directory. This is a fundamental limitation of how the Desktop app handles profile switches - it doesn't dynamically reload the working directory from profile configs.

5. **To fix this**, the user needs to either quit the Desktop and relaunch it with the correct profile and working directory specified, or I should verify whether the Desktop app actually respects profile-level terminal settings when switching profiles mid-session.

The core issue is that the Desktop app's initial `--cwd` parameter likely overri
