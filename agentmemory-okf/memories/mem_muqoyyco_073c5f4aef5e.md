---
type: Fact
title: # Update Hermes config and skill guidance

source: hermes
session_id: 20261002_0
description: # Update Hermes config and skill guidance

source: hermes
session_id: 20261002_023757_bc54f9
resource: hermes://session/20261002_023757_bc54f9

# Conversation

- **Session ID:** `20261002_023757_bc54f
resource: agentmemory://memory/mem_muqoyyco_073c5f4aef5e
tags: ["okf", "okf-hermes", "hermes", "/"]
timestamp: 2026-10-02T08:19:02.236Z
source: agentmemory
strength: 7
---
# Content

# Update Hermes config and skill guidance

source: hermes
session_id: 20261002_023757_bc54f9
resource: hermes://session/20261002_023757_bc54f9

# Conversation

- **Session ID:** `20261002_023757_bc54f9`
- **Source:** oneshot
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-02T07:37:58Z
- **Ended:** 2026-10-02T07:38:22Z
- **Messages:** 6
- **CWD:** `/`
- **Tokens:** 18805 in / 953 out

---

### 👤 User — 2026-10-02T07:37:57Z

Write a single concise git commit message (one line, ≤72 chars) summarizing these changes.
Use conventional-commits style if it fits (e.g. "chore:", "fix:", "feat:"). Be specific, not generic.

Repository: .hermes
Files changed:
- config.yaml
- skills/autonomous-ai-agents/classify/SKILL.md
- skills/autonomous-ai-agents/hermes-config-audit/SKILL.md
- skills/devops/kanban-orchestrator/SKILL.md
- skills/devops/kanban-worker/SKILL.md
- skills/software-development/hermes-desktop/SKILL.md
- skills/software-development/hermes-desktop/references/profile-rail-pulse.md

Diff stat:


Diff (truncated):


Reply with ONLY the commit message line, nothing else.

### 🤖 Assistant — 2026-10-02T07:38:05Z

<details><summary>Reasoning</summary>

The user wants a commit message for changes in .hermes repo. The diff is truncated/empty, so I need to look at the actual changes to write something specific. Files changed: config.yaml, several SKILL.md files (classify, hermes-config-audit, kanban-orchestrator, kanban-worker, hermes-desktop), and a new reference file profile-rail-pulse.md.

Let me check the actual diff to be specific.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes && git status --short && git diff --stat && git diff | head -300"
}
```

### 🤖 Assistant — 2026-10-02T07:38:12Z

<details><summary>Reasoning</summary>

The diff is empty for the staged changes? Let me look. `git status --short` shows `M ` (staged) for config.yaml and the SKILL.md files. `git diff` (unstaged) shows only hermes-agent submodule change. So the actual changes are staged. I need `git diff --cached` to see them.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes && git diff --cached --stat && git diff --cached | head -400"
}
```

### 🤖 Assistant — 2026-10-02T07:38:22Z

<details><summary>Reasoning</summary>

Let me look at what the changes actually are. The staged diff includes:

1. config.yaml: max_turns 150→60, compression.threshold 1.5→0.5, kanban failure_limit 2→1, added max_in_progress: 1, added kanban toolset, web-search-plus, removed many MCP servers (Homebrew, brave-search, cloudflare, context7, desktop-commander, git, macos-community, sequential-thinking), removed several cli toolsets (image_gen, todo, tts, video, video_gen, x_search), added token-audit quick command.

2. Skills: classify SKILL.md (python3 → /usr/bin/python3 note), hermes-config-audit (added token-spend diagnosis + token_audit script docs), kanban-orchestrator (acceptance criteria, blocked-card triage), kanban-worker (commit before close), hermes-desktop (profile panel docs).

The dominant theme: token overhead reduction — cutting MCP servers/toolsets, capping turns, fixing compression threshold — plus documenting token-audit. This matches the user's memory: "Optimizes agent token/cost: wants prompt-driven reconfig (model + MCP toggle) to shrink tool surface."

A concise conventional commit ≤72 chars. Something like:

"chore(config): cut token overhead — drop unused MCP servers, cap turns"

Count: let me count. "chore(config): cut token overhead — drop unused MCP servers, cap turns" = "chore(config): " 15 + "cut token overhead — drop unused MCP servers, cap turns" ... let's count total: c-h-o-r-e-(-c-o-n-f-i-g-)-: = 14 chars + space = 15. "cut token overhead" = 18 → 33. " — " = 3 → 36. "drop unused MCP servers" = 23 → 59. ", cap turns" = 11 → 70. 70 chars ≤ 72.

Maybe mention the skills docs too. But one line, ≤72. Also there's the token-audit quick command and skill docs. Perhaps "fix config knobs + document token audit". Alternative:

"chore(config): trim token overhead (MCP, toolsets, turns) + token-audit skill docs" — too long probably. Count: that's ~82
