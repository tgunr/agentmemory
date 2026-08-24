---
type: Fact
title: # 01ee7c61f99f

source: hermes
session_id: 01ee7c61f99f
resource: hermes://sessi
description: # 01ee7c61f99f

source: hermes
session_id: 01ee7c61f99f
resource: hermes://session/01ee7c61f99f

# Conversation

- **Session ID:** `01ee7c61f99f`
- **Source:** webui
- **Model:** tencent/hy3:free
- **
resource: agentmemory://memory/mem_mspd38t6_7877fd5d62f8
tags: ["okf", "okf-hermes", "hermes", "hermes://session/01ee7c61f99f"]
timestamp: 2026-08-12T00:39:16.264Z
source: agentmemory
strength: 7
---
# Content

# 01ee7c61f99f

source: hermes
session_id: 01ee7c61f99f
resource: hermes://session/01ee7c61f99f

# Conversation

- **Session ID:** `01ee7c61f99f`
- **Source:** webui
- **Model:** tencent/hy3:free
- **Started:** 2026-07-31T00:47:20Z
- **Messages:** 84
- **Tokens:** 113290 in / 35658 out

---

### 👤 User — 2026-07-31T00:47:20Z

Profiles, projects, workspaces, defaults, global, its all confusing as to how this all works to help me. Give some concrete examples on using Hermes.

### 🤖 Assistant — 2026-07-31T00:47:29Z

<details><summary>Reasoning</summary>

The user is asking about how Hermes works - profiles, projects, workspaces, defaults, global - and wants concrete examples. This is a question about Hermes Agent itself, so I should load the `hermes-agent` skill which is the authoritative reference for configuring/understanding Hermes. Also there are related skills: hermes-workspace-context, hermes-config-audit, hermes-self-hosted, hermes-session-recovery, hermes-webui, hermes-workspace-context. 

The user wants concrete examples on using Hermes. Let me load the most relevant skills. The hermes-agent skill is the umbrella. Also hermes-workspace-context is specifically about workspaces, projects, working directories. Let me load both.

Let me think about what the user is confused about:
- Profiles (active profile: default, other profiles under ~/.hermes/profiles/<name>/)
- Projects
- Workspaces
- Defaults
- Global

I should give concrete examples. Let me load the hermes-agent skill and hermes-workspace-context skill to get accurate info rather than guessing.

Let me do parallel skill_view

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

### 🤖 Assistant — 2026-07-31T00:47:39Z

<details><summary>Reasoning</summary>

The user is confused about profiles, projects, workspaces, defaults, global. They want concrete examples of using Hermes. Let me give them a clear, concrete explanation with examples grounded in their actual setup.

Let me first check their actual environment to give concrete examples based on THEIR setup, not generic. Let me check:
- their profiles
- their config
- their workspaces
- current state

Let me run some commands to ground this in their reality. This makes it concrete and useful rather than abstract.

Let me check:
1. `hermes profile list`
2. `hermes config` (current profile)
3. Their workspace setup

Actually, let me be careful — running `hermes config` might dump secrets? No, it masks them. But it's fine. Let me check profiles and config to give grounded examples.

Let me run these in parallel.

</details>

**Tool call: terminal**

```json
{
  "command": "echo \"=== PROFILES ===\"; hermes profile list 2>/dev/null; echo \"\"; echo \"=== ACTIVE PROFILE ===\"; hermes profile show default 2>/dev/null | head -30; echo \"\"; echo \"=== HERMES_HOME ===\"; echo \"$HERMES_HOME (unset = ~/.hermes)\"; echo \"\"; echo \"=== PROFILE DIRS ON DISK ===\"; ls -1 ~/.hermes/profiles/ 2>/dev/null || echo \"(none)\""
}
```

**Tool call: terminal**

```json
{
  "command": "echo \"=== terminal.cwd / workspace in config ===\"; hermes config 2>/dev/null | grep -iE \"cwd|workspace|profile|default_workspace\" || echo \"(no match)\"; echo \"\"; echo \"=== WebUI workspaces.json ===\"; cat ~/.hermes/webui/workspaces.json 2>/dev/null || echo \"(absent - only Home + default switchable)\"; echo \"\"; echo \"=== projects.db sidebar (default) ===\"; sqlite3 ~/.hermes/projects.db \"SELECT name,path FROM projects;\" 2>/dev/null || echo \"(no default projects.db)\""
}
```

### 🤖 Assistant — 2026-07-31T00:47:57Z

<details><summary>Reasoning</summary>

Now I have real grounding. Let me summarize the actual state:

- Profiles: default (active, running gateway), ai, cc, develop, ollama, personal, pveroot, ranch, shop.
- Active profile: default at /Users/davec/.hermes, model tencent/hy3:free (nous), gateway running, 83 skills.
- WebUI workspaces: Home (/Users/davec) and projects (/Volumes/projects). So in the WebUI workspace switcher
