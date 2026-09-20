---
type: Fact
title: # Keep hermes-agent local branch merged with upstream main

source: hermes
sessi
description: # Keep hermes-agent local branch merged with upstream main

source: hermes
session_id: 20260916_081331_29202a
resource: hermes://session/20260916_081331_29202a

# Conversation

- **Session ID:** `2026
resource: agentmemory://memory/mem_mu848ijf_147eadf5b019
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/.hermes/hermes-agent"]
timestamp: 2026-09-19T08:18:45.171Z
source: agentmemory
strength: 7
---
# Content

# Keep hermes-agent local branch merged with upstream main

source: hermes
session_id: 20260916_081331_29202a
resource: hermes://session/20260916_081331_29202a

# Conversation

- **Session ID:** `20260916_081331_29202a`
- **Source:** tui
- **Model:** kilo-auto/free
- **Started:** 2026-09-16T13:14:32Z
- **Ended:** 2026-09-18T06:35:58Z
- **Messages:** 7
- **CWD:** `/Users/davec/.hermes/hermes-agent`
- **Tokens:** 65044 in / 1097 out

---

### 👤 User — 2026-09-16T13:14:35Z

how do i keep my hermes-agent local branch merged with upstream main?

### 🤖 Assistant — 2026-09-16T13:14:50Z

<details><summary>Reasoning</summary>

The user is asking about keeping their hermes-agent local branch merged with upstream main. Let me check the kanban context first as per the operational rules, then provide a direct answer since this is a workflow question.

Actually, let me just check the kanban task first since the operational rules say to call kanban_show() first.

</details>

**Tool call: kanban_show**

```json
{}
```

### 🤖 Assistant — 2026-09-16T13:14:55Z

<details><summary>Reasoning</summary>

No active kanban task. This is a straightforward workflow question. Let me check the current git state and answer the user's question about keeping their local branch merged with upstream main.

Based on the AGENTS.md, I know:
- The user works in /Users/davec/.hermes/hermes-agent
- Git work targets the branch literally named `local`
- The repo has `main → tg/main`

Let me give a practical workflow answer. But first let me check the actual git state to be accurate.

</details>

**Tool call: terminal**

```json
{
  "command": "git -C /Users/davec/.hermes/hermes-agent remote -v && git -C /Users/davec/.hermes/hermes-agent branch --show-current && git -C /Users/davec/.hermes/hermes-agent status --short | head -20"
}
```

### 🤖 Assistant — 2026-09-16T13:15:43Z

<details><summary>Reasoning</summary>

So the current branch is `main`, and the remotes are `origin` (NousResearch) and `tg` (tgunr). 

The user wants to keep their local branch merged with upstream main. The best approach is to regularly rebase or merge upstream changes. Let me give a practical workflow.

Actually, the user said "my hermes-agent local branch" — and based on the memory, git work in ~/.hermes/hermes-agent targets the branch literally named `local`. So the user has a `local` branch they work on.

Let me give a clean workflow: regularly pull from upstream, either via merge or rebase. Let me also check if there's a `local` branch.

Actually, the AGENTS.md says "Git work in ~/.hermes/hermes-agent targets the branch literally named `local` — commit there, never create new branches for routine commits." So the workflow should keep `local` synced with upstream `main`.

The best practice for keeping a local branch merged with upstream main:
1. Fetch from upstream
2. Either rebase your local branch onto main, or merge main into your local branch

Let me give the user a clean answer with commands.

</details>

You've got two remotes set up:
- `origin` → NousResearch/hermes-agent (upstream `main`)
- `tg` → tgunr/hermes-agent (your fork's `main`)

And you commit to a branch literally named `local` (per your git convention). Here's the recommended workflow to keep `local` synced with upstream `main`.

## Recommended: rebase `local` onto upstream `main`

Rebasing keeps history linear — when you eventually push back to your fork, no merge bubbles.

```bash
cd ~/.hermes/hermes/agent   # or wherever you're working
git fetch origin            # grab upstream main
git checkout local          # your working branch
git rebase origin/main      # replay your local commits on top of fresh main
```

If rebase hits conflicts, resolve them, then `git rebase --continue`.

## Alternate: merge upstream `main` into `local`

If you prefer a non-rewritten history (safer if `local` is shared):

```bash
git fetch origin
git checkout local
git merge origin/main       # a merge commit keeps your local history intact
```

## One-liner wrapper (rebase flavor)

I'd suggest dropping this in your `~/.zshrc` as a function:

```bash
sync-hermes-main() {
  git -C "$HERMES_AGENT_REPO" f
