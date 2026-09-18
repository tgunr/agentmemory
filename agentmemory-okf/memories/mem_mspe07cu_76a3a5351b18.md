---
type: Fact
title: # 85016383fe9f

source: hermes
session_id: 85016383fe9f
resource: hermes://sessi
description: # 85016383fe9f

source: hermes
session_id: 85016383fe9f
resource: hermes://session/85016383fe9f

# Conversation

- **Session ID:** `85016383fe9f`
- **Source:** webui
- **Model:** tencent/hy3:free
- **
resource: agentmemory://memory/mem_mspe07cu_76a3a5351b18
tags: ["okf", "okf-hermes", "hermes", "hermes://session/85016383fe9f"]
timestamp: 2026-08-12T01:04:54.030Z
source: agentmemory
strength: 7
---
# Content

# 85016383fe9f

source: hermes
session_id: 85016383fe9f
resource: hermes://session/85016383fe9f

# Conversation

- **Session ID:** `85016383fe9f`
- **Source:** webui
- **Model:** tencent/hy3:free
- **Started:** 2026-07-30T23:13:31Z
- **Messages:** 150
- **Tokens:** 150817 in / 33098 out

---

### 👤 User — 2026-07-30T23:13:31Z

where are the projects in hermes dashboard

### 🤖 Assistant — 2026-07-30T23:13:45Z

<details><summary>Reasoning</summary>

The user is asking where the projects are in the Hermes dashboard. Let me think about this.

The user wants to know where the projects are shown in the Hermes dashboard/WebUI. This relates to the hermes-workspace-context skill perhaps, or project-workspace-setup skill.

Let me check memory: there's a note about "hermes-workspace-context: updated projects-sidebar reference — projects.db is per-profile (not global), added cross-profile disappearance + orphaned-subfolder pitfalls, noted sidebar cache requires full restart after DB edits."

So there's a projects sidebar. The user wants to know where to find projects in the Hermes dashboard.

This is a question about Hermes itself. Let me load the relevant skill - hermes-workspace-context or hermes-webui. Actually, this is about the dashboard UI. Let me think about what the user is actually asking.

"where are the projects in hermes dashboard" - they want to know where to find/view projects in the Hermes WebUI dashboard.

Let me load the hermes-workspace-context skill since it deals with projects sidebar. Also hermes-webui might help. Let me load these skills to give an accurate answer.

Actually, the question is fairly simple - where are projects in the dashboard. Let me load the workspace-context skill which discusses projects.db and the

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-workspace-context"
}
```

### 🤖 Assistant — 2026-07-30T23:13:55Z

<details><summary>Reasoning</summary>

The user asks "where are the projects in hermes dashboard". This is about the Hermes Desktop dashboard's Projects sidebar. The skill references `references/projects-sidebar-and-consolidation.md`. Let me read that to give an accurate answer. Also I should check the actual projects.db files. Let me read the reference and check the filesystem.

Let me give a concise but accurate answer. The user wants to know where projects in the Hermes dashboard come from / where they're stored. Based on the skill:
- The sidebar is backed by per-profile `projects.db` files at `~/.hermes/profiles/<name>/projects.db` (and possibly global `~/.hermes/projects.db`).
- The sidebar auto-associates sessions by cwd.
- There's the `explicit_cwd` trap.

Let me read the reference to give a precise answer

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-workspace-context",
  "file_path": "references/projects-sidebar-and-consolidation.md"
}
```

### 🤖 Assistant — 2026-07-30T23:14:05Z

<details><summary>Reasoning</summary>

Now I understand. The user asks "where are the projects in hermes dashboard" — they want to know where the projects are stored / how to find them. Let me give a clear answer. The projects sidebar in the Desktop/WebUI dashboard is backed by per-profile `projects.db` files. Let me actually inspect to confirm what's on their system.

Actually, the user is asking a positional question — "where are the projects" — probably meaning where in the UI/dashboard, or where are they stored on disk. Let me answer both: in the Desktop/WebUI sidebar (Projects section) and on disk location. But let me verify the actual state on their machine to be accurate. Let me check for projects.db files.

Let me run a quick check

</details>

**Tool call: terminal**

```json
{
  "command": "echo \"=== per-profile projects.db ===\" && find ~/.hermes -name projects.db -size +0c 2>/dev/null; echo \"=== global ===\" && ls -la ~/.hermes/projects.db 2>/dev/null || echo \"(no global projects.db)\"; echo \"=== profiles with state.db ===\" && ls ~/.hermes/profiles/*/state.db 2>/dev/null"
}
```

### 🤖 Assistant — 2026-07-30T23:14:16Z

<details><summary>Reasonin
