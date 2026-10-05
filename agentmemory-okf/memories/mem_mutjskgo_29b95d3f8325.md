---
type: Fact
title: # Consequences of changing Canva task models

source: hermes
session_id: 2026100
description: # Consequences of changing Canva task models

source: hermes
session_id: 20261001_120542_df63e6
resource: hermes://session/20261001_120542_df63e6

# Conversation

- **Session ID:** `20261001_120542_df
resource: agentmemory://memory/mem_mutjskgo_29b95d3f8325
tags: ["okf", "okf-hermes", "hermes", "/Volumes/www"]
timestamp: 2026-10-04T08:17:24.749Z
source: agentmemory
strength: 7
---
# Content

# Consequences of changing Canva task models

source: hermes
session_id: 20261001_120542_df63e6
resource: hermes://session/20261001_120542_df63e6

# Conversation

- **Session ID:** `20261001_120542_df63e6`
- **Source:** desktop
- **Model:** free-mix
- **Started:** 2026-10-01T18:44:48Z
- **Ended:** 2026-10-03T12:56:22Z
- **Messages:** 24
- **CWD:** `/Volumes/www`
- **Tokens:** 49841 in / 10851 out

---

### 👤 User — 2026-10-01T18:44:48Z

what are the consequences of changing the model in a Canva task? Like going from a default model to a free model or vice versa

### 🤖 Assistant — 2026-10-01T18:45:19Z

Your request was not processed. Send it again if you still want me to carry it out.

### 👤 User — 2026-10-01T18:45:26Z

what are the consequences of changing the model in a Canva task? Like going from a default model to a free model or vice versa

### 🤖 Assistant — 2026-10-01T18:45:52Z

Your request was not processed. Send it again if you still want me to carry it out.

### 👤 User — 2026-10-01T18:45:54Z

what are the consequences of changing the model in a Kanban task? Like going from a default model to a free model or vice versa

### 🤖 Assistant — 2026-10-01T18:46:16Z

<details><summary>Reasoning</summary>

The user asks about Hermes Kanban tasks — the model pin on kanban_create (model + provider params). I should check the actual skill/docs for what the model field does. Let me load kanban-worker / kanban skill quickly.

Let me look at hermes-agent docs or the skill.

</details>

**Tool call: skill_view**

```json
{
  "name": "kanban-worker"
}
```

**Tool call: search_files**

```json
{
  "pattern": "model",
  "path": "/Users/davec/.hermes/hermes-agent/hermes_cli/kanban",
  "output_mode": "files_only",
  "limit": 30
}
```

### 🤖 Assistant — 2026-10-01T18:46:20Z

<details><summary>Reasoning</summary>

The references are all generic/AI-model-wrong. I should answer about Hermes Kanban's `model`/`provider` pin on a card. Let me check the actual code to be accurate.

Let me find the kanbancode.

</details>

**Tool call: search_files**

```json
{
  "pattern": "**/kanban/**/*.py",
  "target": "files",
  "path": "/Users/davec/.hermes/hermes-agent",
  "limit": 40
}
```

**Tool call: search_files**

```json
{
  "limit": 40,
  "output_mode": "files_only",
  "path": "/Users/davec/.hermes/hermes-agent",
  "pattern": "task\\.model|model_override|pinned_model"
}
```

### 🤖 Assistant — 2026-10-01T18:46:25Z

<details><summary>Reasoning</summary>

The references are all generic/hallucinated about SaaS kanban. The real answer is about Hermes Kanban's per-task model/provider override. Let me look at the actual dispatch code.

</details>

**Tool call: search_files**

```json
{
  "limit": 60,
  "output_mode": "content",
  "context": 4,
  "path": "/Users/davec/.hermes/hermes-agent/hermes_cli/kanban_db_dispatch.py",
  "pattern": "task\\.model|task\\[.model.\\]|\\bmodel\\b.*provider"
}
```

**Tool call: search_files**

```json
{
  "limit": 40,
  "output_mode": "content",
  "context": 3,
  "path": "/Users/davec/.hermes/hermes-agent/tools/kanban_tools.py",
  "pattern": "model"
}
```

### 🤖 Assistant — 2026-10-01T18:46:28Z

<details><summary>Reasoning</summary>

All three references assumed a generic SaaS kanban board (Trello/Asana tiers) — wrong domain. This is Hermes Kanban, where `model`/`provider` is a per-card override dispatched via `hermes -m <model>`. Let me finish reading the actual code to give a grounded answer.

Let me look at the dispatch code around line 2796, and how model_override is set/edited, and what happens on retry/re-dispatch.

Let me do a couple oftargeted reads.

</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/hermes-agent/hermes_cli/kanban_db_dispatch.py",
  "offset": 2760,
  "limit": 70
}
```

**Tool call: search_files**

```json
{
  "context": 3,
  "limit": 40,
  "output_mode": "content",
  "path": "/Users/davec/.hermes/hermes-agent/hermes_cli/kanban.py",
  "pattern": "model_override|--model"
}
```

### 🤖 Assistant — 2026-10-01T18:46:45Z

<details><summary>Reasoning</summary>

All three references guessed at SaaS tiers / generic LLM swaps. 
