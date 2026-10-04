---
type: Fact
title: # KanBan example and triage explanation

source: hermes
session_id: 20261002_011
description: # KanBan example and triage explanation

source: hermes
session_id: 20261002_011838_908e51
resource: hermes://session/20261002_011838_908e51

# Conversation

- **Session ID:** `20261002_011838_908e51`
resource: agentmemory://memory/mem_muqoyuem_c6bd8d9a22f0
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20261002_011838_908e51"]
timestamp: 2026-10-02T08:18:57.123Z
source: agentmemory
strength: 7
---
# Content

# KanBan example and triage explanation

source: hermes
session_id: 20261002_011838_908e51
resource: hermes://session/20261002_011838_908e51

# Conversation

- **Session ID:** `20261002_011838_908e51`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-10-02T06:18:38Z
- **Messages:** 60
- **Tokens:** 50262 in / 8099 out

---

### 👤 User — 2026-10-02T06:18:38Z

Show me an example of proper use of KanBan. Give a detailed explanation of the triage prompt.

### 🤖 Assistant — 2026-10-02T06:18:42Z

<details><summary>Reasoning</summary>

The user wants an example of proper KanBan use and a detailed explanation of "the triage prompt." There's a `kanban` skill available under `rare`. Let me load it. Also possibly the `agent-behavior` / parked-mode? No, this is a real instruction.

Let me load the kanbanskill.

</details>

**Tool call: skill_view**

```json
{
  "name": "kanban"
}
```

### 🤖 Assistant — 2026-10-02T06:18:44Z

<details><summary>Reasoning</summary>

Let me read the references to give a detailed answer about the triage prompt. Let me check the orchestrator reference.

</details>

**Tool call: skill_view**

```json
{
  "name": "kanban",
  "file_path": "references/kanban-orchestrator.md"
}
```

### 🤖 Assistant — 2026-10-02T06:18:48Z

<details><summary>Reasoning</summary>

The user asks about "the triage prompt". Let me look — is there a triage prompt mentioned anywhere? The skill mentions KANBAN_GUIDANCE system-prompt block. Maybe "triage prompt" refers to something else. Let me search the skill references and maybe hermes docs for "triage".

Also load worker reference. And search for "triage" in the kanban skill dir.

Note: the user asked to "Show me an example of proper use of KanBan. Give a detailed explanation of the triage prompt." Let me check the worker reference and grep for triage.

Also I should consider that "triage prompt" might be in hermes docs. Let me batch: read worker reference, grep triage in skills dir, and grep triage in hermes install dir.

</details>

**Tool call: skill_view**

```json
{
  "file_path": "references/kanban-worker.md",
  "name": "kanban"
}
```

### 🤖 Assistant — 2026-10-02T06:18:51Z

<details><summary>Reasoning</summary>

Now, the user asked about "the triage prompt". Hmm — the skill doesn't mention a "triage prompt" explicitly. Maybe there's a triage concept in the kanban guidance. Let me check the subagent-driven-development reference, and also check if there's a "triage" prompt anywhere in the skill or in the Hermes codebase. The user asked for "a detailed explanation of the triage prompt" — I should be honest if I can't find one.

Let me search.

</details>

**Tool call: skill_view**

```json
{
  "file_path": "references/subagent-driven-development.md",
  "name": "kanban"
}
```

### 🤖 Assistant — 2026-10-02T06:18:54Z

<details><summary>Reasoning</summary>

Now let me check what "triage prompt" means. The skill mentions KANBAN_GUIDANCE system prompt block injected into kanban processes. The user asks about "the triage prompt" — likely the KANBAN_GUIDANCE block. Let me search for it in the hermes install.

Let me look for KANBAN_GUIDANCE inthe hermes source.

</details>

**Tool call: search_files**

```json
{
  "pattern": "KANBAN_GUIDANCE",
  "path": "/Users/davec",
  "output_mode": "files_only",
  "limit": 20
}
```

**Tool call: search_files**

```json
{
  "pattern": "kanban",
  "target": "files",
  "path": "/Users/davec/.hermes",
  "limit": 30
}
```

### 🤖 Assistant — 2026-10-02T06:19:25Z

<details><summary>Reasoning</summary>

Let me look for the KANBAN_GUIDANCE in the Hermes install (source). Let me find hermes package.

</details>

**Tool call: terminal**

```json
{
  "command": "python3 -c \"import hermes, os; print(os.path.dirname(hermes.__file__))\" 2>/dev/null || which hermes; ls ~/.hermes/"
}
```

### 🤖 Assistant — 2026-10-02T06:19:27Z

**Tool call: search_files**

```json
{
  "limit": 20,
  "output_mode": "files_only",
  "path": "/Users/davec/.hermes/hermes-agent",
  "pattern": "KANBAN_GUIDANCE|kanban_create|auto-injected"
}
```

### 🤖 Assistant — 2026-10-02T06:19:30Z

**Tool call: search_files**

``
