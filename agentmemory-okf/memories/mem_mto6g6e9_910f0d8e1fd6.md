---
type: Fact
title: # Set up global rules for agent

source: hermes
session_id: 20260902_071201_524e
description: # Set up global rules for agent

source: hermes
session_id: 20260902_071201_524efa
resource: hermes://session/20260902_071201_524efa

# Conversation

- **Session ID:** `20260902_071201_524efa`
- **Sou
resource: agentmemory://memory/mem_mto6g6e9_910f0d8e1fd6
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-05T09:25:18.368Z
source: agentmemory
strength: 7
---
# Content

# Set up global rules for agent

source: hermes
session_id: 20260902_071201_524efa
resource: hermes://session/20260902_071201_524efa

# Conversation

- **Session ID:** `20260902_071201_524efa`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-09-02T12:13:44Z
- **Ended:** 2026-09-04T12:09:22Z
- **Messages:** 46
- **CWD:** `/Users/davec`
- **Tokens:** 155500 in / 15159 out
- **Est. cost:** $-119618.0000

---

### 👤 User — 2026-09-02T12:13:44Z

Explain to me how you use global rules. For example I was in my ~/.hermes/hermes-agent folder and you thought I was in my home folder? I asked you to commit files to a local branch, and you went and created a new local_changes branch when I wanted you to use the local branch. How do I set up rules for you to know what to do?

### 🤖 Assistant — 2026-09-02T12:14:08Z

<details><summary>Reasoning</summary>

The user is asking about how I use "global rules" — they mention ~/.hermes/hermes-agent folder, and confusion about working directory, and a git branch naming misunderstanding ("local branch" vs creating a new "local_changes" branch). They want to know how to set up rules so I know what to do.

First, skills: the hermes-agent skill is relevant (configuring Hermes itself — AGENTS.md, rules). Also maybe agent-context-migration skill? The question is about how to set up global rules/instructions for the agent. The hermes-agent skill should be loaded since this is about configuring Hermes Agent itself.

Let me load the hermes-agent skill and check what config files exist — AGENTS.md locations, SOUL.md, etc. Let me also check ~/.hermes for config structure to give accurate advice.

I should explain:
1. How I actually determine working directory — the terminal backend is SSH, cwd is /Users/davec (the session's working dir), and I don't automatically know what folder the user's terminal is in. That's the key insight: I don't see their shell's cwd. My terminal tool has its own cwd state.
2. The branch naming: "local branch" was ambiguous — I interpreted "local branch" as "a branch called local_changes" maybe, or "create a new local branch". Rules could disambiguate.
3. How to set up rules: AGENTS.md (project context files, loaded at conversation start), memory (persistent), skills, config.yaml system prompt additions.

Let me check the actual environment to give grounded answers: look at ~/.hermes structure, AGENTS.md files, etc.

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
  "command": "ls ~/.hermes/ 2>/dev/null; echo ---; ls ~/.hermes/AGENTS.md ~/.hermes/SOUL.md 2>/dev/null; echo ---; find ~/.hermes -maxdepth 2 -name 'AGENTS.md' -o -maxdepth 2 -name 'config.yaml' 2>/dev/null | head -20"
}
```

### 🤖 Assistant — 2026-09-02T12:14:24Z

<details><summary>Reasoning</summary>

Let me understand the user's question. They want to understand:

1. How "global rules" work — how Hermes uses AGENTS.md files
2. Why in a previous session the agent thought they were in home folder when they were in ~/.hermes/hermes-agent
3. Why when they asked to commit to a "local branch" the agent created a new `local_changes` branch instead of using an existing `local` branch
4. How to set up rules for the agent

Let me look at some key files to explain concretely:
- ~/.hermes/AGENTS.md — wait, that doesn't exist. The find showed only ~/.hermes/hermes-agent/AGENTS.md and ~/.hermes/SOUL.md
- Also there's a "Project Context" in my system prompt that shows an AGENTS.md from the current project context — interesting. That AGENTS.md content is generic (nanocoder-generated) — appears to be the one injected.

Let me check the config for how AGENTS.md is discovered — there's likely a hierarchy: global AGENTS.md at ~/.hermes/AGENTS.md or maybe project AGENTS.md from cwd. Let me look at docs / code to be accurate.

Let me check:
1. ~/.hermes/hermes-agent/AGENTS.md content
2. ~/.hermes/SOUL.md
3. Current working directory behavior — terminal cwd
4. How the working directory / project root gets set for the session (the system prompt says "Working directory: /Users/davec" — home
