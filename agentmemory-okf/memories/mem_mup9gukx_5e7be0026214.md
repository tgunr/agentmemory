---
type: Fact
title: # Fix Hermes update reporting errors

source: hermes
session_id: 20260930_053127
description: # Fix Hermes update reporting errors

source: hermes
session_id: 20260930_053127_999441
resource: hermes://session/20260930_053127_999441

# Conversation

- **Session ID:** `20260930_053127_999441`
- 
resource: agentmemory://memory/mem_mup9gukx_5e7be0026214
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-10-01T08:17:17.070Z
source: agentmemory
strength: 7
---
# Content

# Fix Hermes update reporting errors

source: hermes
session_id: 20260930_053127_999441
resource: hermes://session/20260930_053127_999441

# Conversation

- **Session ID:** `20260930_053127_999441`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-09-30T10:31:58Z
- **Ended:** 2026-09-30T10:59:26Z
- **Messages:** 78
- **CWD:** `/Users/davec`
- **Tokens:** 358857 in / 16597 out
- **Est. cost:** $-220284.0000

---

### 👤 User — 2026-09-30T10:31:58Z

hermes update reporting errors

### 🤖 Assistant — 2026-09-30T10:32:06Z

<details><summary>Reasoning</summary>

The user says "hermes update reporting errors". This is about Hermes Agent itself — the hermes-agent skill is relevant here. Let me load it before troubleshooting.

Memory says: hermes-agent (~/.hermes/hermes-agent) = submodule worktree; checkout usually `main`. Patch stack with personal commits; rebase autoStash. Update errors could be git pull/rebase issues or pre-commit hooks.

Let me load the skill first, then investigate.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 🤖 Assistant — 2026-09-30T10:32:11Z

<details><summary>Reasoning</summary>

The user says "hermes update reporting errors". Let me run `hermes update` to see the actual errors. But first, context: hermes-agent is installed at ~/.hermes/hermes-agent as a git submodule worktree, local main tracks tg/main. The update command probably does a git pull + pip install or something. Let me run it and see the output.

</details>

**Tool call: terminal**

```json
{
  "command": "hermes update 2>&1",
  "timeout": 300
}
```

### 🤖 Assistant — 2026-09-30T10:32:51Z

<details><summary>Reasoning</summary>

The update mostly succeeded (git fetch, stash, restore, TUI build, web UI build), but the desktop packaged app build failed due to a syntax error in `src/i18n/en.ts` around line 3356 — `modelAssignment: {` missing initializer in const declaration. This looks like a merge conflict artifact from the stash restore! The local changes were stashed and restored on top of the updated codebase, and the restore likely created a conflict or the local en.ts has a conflict marker / incomplete merge.

Let me check the state of the file and git status.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && git status --short | head -30 && echo \"---STASH---\" && git stash list | head -5",
  "timeout": 30
}
```

### 🤖 Assistant — 2026-09-30T10:32:55Z

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && git diff --stat && echo \"===i18n/en.ts diff===\" && git diff apps/desktop/src/i18n/en.ts | head -60",
  "timeout": 30
}
```

### 🤖 Assistant — 2026-09-30T10:33:01Z

<details><summary>Reasoning</summary>

Now I see the problem. The stashed local changes were restored on top of the updated codebase, but the upstream code changed around that region. The stash was made against an older version where `status` and `remoteOverride` were nested inside some parent block (indented with 4 spaces under something like `sidebar:` or similar). After the merge, the structure changed — the stash application mangled the nesting:

The restored diff shows:
- Removed the nested `status:` block from its old location (indented under some parent)
- Added a top-level `status:` block and `projectSwitcher:` block
- But then `remoteOverride:` block's opening got broken — look at the diff: `remoteOverride: {` is now at 2-space indent but its contents (`menuItem: ...`) remain at 6-space indent, and the closing braces are now mismatched.

The error in the build: `en.ts:3356:3 Missing initializer in const declaration` at `modelAssignment: {` and `Unexpected token` at `count: count => ...`.

The user's local changes were: adding a project dropdown switcher (project-dropdown-switcher.tsx is untracked new file), statusbar items hook change, i18n strings for projectSwitcher, toggleProject.

This looks like the user's own WIP work from a previous session (the "project-dropdown-switcher" feature). The stash pop merged it onto the new upstream code, but the upstream code restructured (probably
