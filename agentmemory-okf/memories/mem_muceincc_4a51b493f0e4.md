---
type: Fact
title: # Fix /classify prompt argument error

source: hermes
session_id: 20260918_06280
description: # Fix /classify prompt argument error

source: hermes
session_id: 20260918_062807_fd8fc1
resource: hermes://session/20260918_062807_fd8fc1

# Conversation

- **Session ID:** `20260918_062807_fd8fc1`
-
resource: agentmemory://memory/mem_muceincc_4a51b493f0e4
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260918_062807_fd8fc1"]
timestamp: 2026-09-22T08:17:38.874Z
source: agentmemory
strength: 7
---
# Content

# Fix /classify prompt argument error

source: hermes
session_id: 20260918_062807_fd8fc1
resource: hermes://session/20260918_062807_fd8fc1

# Conversation

- **Session ID:** `20260918_062807_fd8fc1`
- **Source:** desktop
- **Model:** kilo-auto/efficient
- **Started:** 2026-09-18T11:28:07Z
- **Ended:** 2026-09-21T08:48:11Z
- **Messages:** 320
- **Tokens:** 602462 in / 33222 out
- **Est. cost:** $-388449.0000

---

### 👤 User — 2026-09-18T11:28:08Z

the "/classify" is reporting:
/classify·error: No prompt argument. In an agent session this falls back to the last user message; from CLI, pass a prompt: classify.py "your text".

### 👤 User — 2026-09-18T11:34:26Z

[System: The active model for this chat has changed to kilo-auto/efficient via provider kilocode. From this point forward, use this runtime metadata when answering questions about what model/provider is active.]

### 👤 User — 2026-09-18T11:34:26Z

the "/classify" is reporting:
/classify·error: No prompt argument. In an agent session this falls back to the last user message; from CLI, pass a prompt: classify.py "your text".

### 🤖 Assistant — 2026-09-18T11:34:40Z

<details><summary>Reasoning</summary>

The user is reporting that `/classify` is erroring with: "/classify·error: No prompt argument. In an agent session this falls back to the last user message; from CLI, pass a prompt: classify.py 'your text'."

So the `/classify` quick command is failing. From memory: "Dispatcher expands only `$1`/`$@`. `/session-transfer <id> <profile> [project]`. `/apply` = optimize.py --apply-last (applies last /optimize suggestion); `/apply-show` = --last (safe). Add via `hermes config set quick_commands.<n>.*` (patch tool refuses config.yaml)."

Also there's a skill `hermes-slash-command-dispatch: Fix Hermes slash commands: empty-arg dispatch bugs AND co...` — this is directly relevant. I MUST load it with skill_view before acting.

Also `classify` skill exists: `classify: Classify a prompt with the on-device FM and suggest which...` — that's the underlying skill.

Let me load both skills first.

The error message says "No prompt argument. In an agent session this falls back to the last user message; from CLI, pass a prompt: classify.py 'your text'." So the classify.py script is being invoked without an argument. The user typed `/classify` presumably with a prompt, e.g. `/classify some text`, and the dispatcher didn't expand `$1` to the argument... From memory: "Dispatcher expands only `$1`/`$@`" — meaning if the command template used `$ARGUMENTS` or something else, it wouldn't expand. Or maybe the script itself is supposed to fall back to the last user message but the "last user message" logic failed.

Let me load the skills and investigate the config.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-slash-command-dispatch"
}
```

**Tool call: skill_view**

```json
{
  "name": "classify"
}
```

### 🤖 Assistant — 2026-09-18T11:34:40Z

<details><summary>Reasoning</summary>

The user is reporting that `/classify` is erroring with: "/classify·error: No prompt argument. In an agent session this falls back to the last user message; from CLI, pass a prompt: classify.py 'your text'."

So the `/classify` quick command is failing. From memory: "Dispatcher expands only `$1`/`$@`. `/session-transfer <id> <profile> [project]`. `/apply` = optimize.py --apply-last (applies last /optimize suggestion); `/apply-show` = --last (safe). Add via `hermes config set quick_commands.<n>.*` (patch tool refuses config.yaml)."

Also there's a skill `hermes-slash-command-dispatch: Fix Hermes slash commands: empty-arg dispatch bugs AND co...` — this is directly relevant. I MUST load it with skill_view before acting.

Also `classify` skill exists: `classify: Classify a prompt with the on-device FM and suggest which...` — that's the underlying skill.

Let me load both skills first.

The error message says "No prompt argument. In an agent session this falls back to the last user message; from CLI, pass a prompt: classify.py 'your text'." So the classify.py script is being invoked without an argument. The user typed `/classify` presumably wi
