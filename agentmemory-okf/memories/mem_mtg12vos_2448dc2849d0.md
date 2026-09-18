---
type: Fact
title: # Address hermes update warnings

source: hermes
session_id: 20260827_081823_a58
description: # Address hermes update warnings

source: hermes
session_id: 20260827_081823_a583e8
resource: hermes://session/20260827_081823_a583e8

# Conversation

- **Session ID:** `20260827_081823_a583e8`
- **So
resource: agentmemory://memory/mem_mtg12vos_2448dc2849d0
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:32:50.554Z
source: agentmemory
strength: 7
---
# Content

# Address hermes update warnings

source: hermes
session_id: 20260827_081823_a583e8
resource: hermes://session/20260827_081823_a583e8

# Conversation

- **Session ID:** `20260827_081823_a583e8`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-08-27T13:19:05Z
- **Ended:** 2026-08-28T08:02:38Z
- **Messages:** 120
- **CWD:** `/Users/davec`
- **Tokens:** 120603 in / 33409 out

---

### 👤 User — 2026-08-27T13:19:05Z

during hermes update i see several warnings, should they be addressed?

### 👤 User — 2026-08-27T13:19:05Z

during hermes update i see several warnings, should they be addressed?

### 🤖 Assistant — 2026-08-27T13:19:15Z

<details><summary>Reasoning</summary>

The user is asking about warnings they saw during a `hermes update`. Let me investigate. The update workflow involves a git repo at ~/.hermes/hermes-agent. Let me check the state.

Let me first look at what warnings might be present. I should run the update again or check the git status. But the user said "during hermes update i see several warnings" - I should look at what those warnings are. I don't have them in front of me. Let me check the hermes-agent repo state and maybe run update to see warnings.

Let me load the hermes-agent skill first since it's about configuring Hermes Agent itself, and check the repo state.

Actually, the task is about troubleshooting hermes update warnings. The hermes-agent skill is relevant. Let me load it and also check the repo.

Let me run some independent commands: load skill, check git status of the hermes-agent repo, and check the branch state

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && echo \"=== git status ===\" && git status && echo \"=== branch ===\" && git branch -vv && echo \"=== last update log ===\" && git log --oneline -5 && echo \"=== remotes ===\" && git remote -v"
}
```

### 🤖 Assistant — 2026-08-27T13:19:15Z

<details><summary>Reasoning</summary>

The user is asking about warnings they saw during a `hermes update`. Let me investigate. The update workflow involves a git repo at ~/.hermes/hermes-agent. Let me check the state.

Let me first look at what warnings might be present. I should run the update again or check the git status. But the user said "during hermes update i see several warnings" - I should look at what those warnings are. I don't have them in front of me. Let me check the hermes-agent repo state and maybe run update to see warnings.

Let me load the hermes-agent skill first since it's about configuring Hermes Agent itself, and check the repo state.

Actually, the task is about troubleshooting hermes update warnings. The hermes-agent skill is relevant. Let me load it and also check the repo.

Let me run some independent commands: load skill, check git status of the hermes-agent repo, and check the branch state

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && echo \"=== git status ===\" && git status && echo \"=== branch ===\" && git branch -vv && echo \"=== last update log ===\" && git log --oneline -5 && echo \"=== remotes ===\" && git remote -v"
}
```

### 🤖 Assistant — 2026-08-27T13:19:32Z

<details><summary>Reasoning</summary>

The user sees warnings during `hermes update`. I need to find out what those warnings actually are. There's no log of the update in the terminal output. Let me think about where `hermes update` writes its output.

The user ran `hermes update` and saw warnings. I should capture the actual warnings. The best approach: re-run `hermes update` (or `hermes update --check` / dry-run) to capture the warnings, OR look at logs.

Actually, re-running `hermes update` might actually perform an update. But the memory says `updates.parked_branch_strategy: update_in_place` keeps `hermes update` doing a safe merge. The user is on `tg-main` branch. Re-running `hermes update` could be risky (it might merge). Let me be careful.

Let me look at what `hermes update` does and where it log
