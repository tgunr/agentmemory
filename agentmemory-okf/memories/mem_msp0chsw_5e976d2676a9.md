---
type: Fact
title: # Merging local branch into Hermes-agent fork after updates

source: hermes
sess
description: # Merging local branch into Hermes-agent fork after updates

source: hermes
session_id: 20260616_112627_d294af
resource: hermes://session/20260616_112627_d294af

# Conversation

- **Session ID:** `202
resource: agentmemory://memory/mem_msp0chsw_5e976d2676a9
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260616_112627_d294af"]
timestamp: 2026-08-11T18:42:32.859Z
source: agentmemory
strength: 7
---
# Content

# Merging local branch into Hermes-agent fork after updates

source: hermes
session_id: 20260616_112627_d294af
resource: hermes://session/20260616_112627_d294af

# Conversation

- **Session ID:** `20260616_112627_d294af`
- **Source:** tui
- **Model:** kilo-auto/balanced
- **Started:** 2026-06-16T16:28:18Z
- **Ended:** 2026-06-16T19:26:29Z
- **Messages:** 4
- **Tokens:** 13959 in / 1895 out
- **Est. cost:** $0.0177

---

### 👤 User — 2026-06-16T16:28:18Z

how do use hermes with my fork of the hermes-agent repo when dealing with updates? I typicall have my code in a `local` branch and after a update would like my changes merged in.

### 🤖 Assistant — 2026-06-16T16:28:56Z

<details><summary>Reasoning</summary>

The user is asking about how to use Hermes with their fork of the `hermes-agent` repository, specifically regarding how to handle updates. They typically have their code in a `local` branch and want to merge updates into it.

Let's load the `hermes-agent` skill to see if there's specific guidance on managing a fork, handling updates, and merging changes from upstream.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 🤖 Assistant — 2026-06-16T16:28:56Z

<details><summary>Reasoning</summary>

The user is asking how to handle updates to a fork of the `hermes-agent` repo, specifically how to merge upstream changes into their `local` branch.

This is a standard Git workflow for a fork:
1. Add the upstream remote (the original `hermes-agent` repo) if not already done.
2. Fetch updates from the upstream remote.
3. Checkout the `local` branch.
4. Merge or rebase the upstream changes (e.g., `main` or `master` branch) into the `local` branch.

Let's check if there is a specific skill or reference about managing a local fork or repo updates for Hermes. I see `references/config-management.md` in the linked files, let's check that. Actually, standard Git is fine, but I should also mention Hermes-specific things if relevant (like preserving `~/.hermes` config, or the fact that `~/.hermes/hermes-agent/` is the source code directory if installed via git).

Wait, the user says "how do use hermes with my fork of the hermes-agent repo when dealing with updates? I typicall have my code in a `local` branch and after a update would like my changes merged in."

So the workflow is:
1. Navigate to the repo directory (usually `~/.hermes/hermes-agent/` if cloned there, or wherever they cloned it).
2. Check current branch: `git status` or `git branch`.
3. Fetch upstream: `git fetch upstream` (assuming `upstream` points to `NousResearch/hermes-agent`).
4. Checkout local branch: `git checkout local`
5. Merge upstream main: `git merge upstream/main` (or `rebase upstream/main`).
6. Resolve any conflicts if they exist.
7. Test the setup (e.g., `hermes doctor` or running Hermes).

Let's provide a clear, step-by-step guide for this Git workflow, tailored to a Hermes fork.

Also, I should mention:
- Setting up the `upstream` remote if they haven't already.
- Using `git rebase` vs `git merge` (rebase is usually cleaner for a local branch that tracks upstream).
- How to verify Hermes is working after the update (`hermes doctor` or `hermes --version`).
- Note about the `.hermes` directory: The user's config, skills, and sessions are in `~/.hermes/` (outside the git repo), so updating the repo code won't overwrite their personal configuration, which is good.

Let's write out the steps clearly.

Step 1: Ensure you have the upstream remote configured.
```bash
git remote -v
# If you don't see 'upstream', add it:
git remote add upstream https://github.com/NousResearch/hermes-agent.git
```

Step 2: Fetch the latest changes from upstream.
```bash
git fetch upstream
```

Step 3: Checkout your local branch.
```bash
git checkout local
```

Step 4: Integrate the upstream changes.
You have two options:
- **Merge** (safer, preserves history exactly as it happened):
  ```bash
  git merge upstream/main
  ```
- **Rebase** (cleaner history, applies your local commits on top of upstream):
  ```bash
  git rebase upstream/main
  ```
  *(If you choose rebase and hit conflicts, resolve them, then `git reba
