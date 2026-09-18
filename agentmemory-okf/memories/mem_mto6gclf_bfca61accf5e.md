---
type: Fact
title: # Explain Kilo auto selection differences

source: hermes
session_id: 20260905_0
description: # Explain Kilo auto selection differences

source: hermes
session_id: 20260905_023800_a0b04b
resource: hermes://session/20260905_023800_a0b04b

# Conversation

- **Session ID:** `20260905_023800_a0b04
resource: agentmemory://memory/mem_mto6gclf_bfca61accf5e
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-09-05T09:25:26.444Z
source: agentmemory
strength: 7
---
# Content

# Explain Kilo auto selection differences

source: hermes
session_id: 20260905_023800_a0b04b
resource: hermes://session/20260905_023800_a0b04b

# Conversation

- **Session ID:** `20260905_023800_a0b04b`
- **Source:** desktop
- **Model:** upstage/solar-pro4:free
- **Started:** 2026-09-05T07:38:00Z
- **Messages:** 59
- **CWD:** `/Volumes/davec`
- **Tokens:** 145543 in / 8179 out
- **Est. cost:** $-18029.0000

---

### 👤 User — 2026-09-05T07:38:00Z

Explain the differences in Kilo auto selection

### 🤖 Assistant — 2026-09-05T07:38:05Z

<details><summary>Reasoning</summary>

The user is asking about "Kilo auto selection" — this likely refers to the Kilo Code extension for VS Code, which is a coding agent. Let me look at the relevant skills to provide accurate information. The available skills mention several Kilo-related ones.

Let me load the relevant skills first.

</details>

**Tool call: skill_view**

```json
{
  "name": "kilo-code-integration"
}
```

**Tool call: skill_view**

```json
{
  "name": "kilo-agentmemory-integration"
}
```

**Tool call: skill_view**

```json
{
  "name": "xcode-agents"
}
```

### 🤖 Assistant — 2026-09-05T07:38:12Z

<details><summary>Reasoning</summary>

The user is asking about "Kilo auto selection" — this likely refers to the model/provider selection behavior in Kilo Code. Let me think about what "auto selection" means in the context of Kilo.

Kilo Code has several auto-selection behaviors:

1. **Model auto-selection** — Kilo automatically selects which model/provider to use based on the task, cost, and availability
2. **MCP server auto-selection** — which tools/MCP servers are automatically enabled
3. **"/auto" slash command** — Kilo's automatic mode

Let me search for more specific information about Kilo's auto selection behavior. The skills I loaded don't directly cover this. Let me check the Kilo Code documentation or configuration.

Actually, I think the user might be asking about different modes of "auto" behavior in Kilo — like the `/auto` mode vs manual mode, or the auto provider selection. Let me look at what Kilo configurations exist on this machine.

</details>

**Tool call: search_files**

```json
{
  "pattern": "auto",
  "path": "/Users/davec/.config/kilo",
  "file_glob": "*.json",
  "output_mode": "content",
  "context": 2
}
```

**Tool call: search_files**

```json
{
  "pattern": "auto.*select|auto.*model|auto.*provider|model.*auto",
  "path": "/Users/davec/.hermes",
  "file_glob": "*.md",
  "output_mode": "content",
  "context": 2
}
```

### 🤖 Assistant — 2026-09-05T07:38:27Z

<details><summary>Reasoning</summary>

The user is asking about "Kilo auto selection" — specifically the differences in how Kilo's auto-model selection works. From the search results, I can see references to `kilo-auto/balanced`, `kilo-auto/small`, `kilo-auto/free`, `kilo-auto/frontier`. Let me look more specifically at what Kilo's auto selection means — the model naming convention like `kilo-auto/balanced`, `kilo-auto/small`, etc.

Let me search for more context about Kilo's auto model selection, and perhaps look at the actual Kilo documentation or skills that mention this.

</details>

**Tool call: search_files**

```json
{
  "pattern": "kilo-auto|auto.select|model.*auto|auto.*model",
  "path": "/Users/davec/.hermes/skills",
  "context": 3,
  "limit": 30
}
```

**Tool call: search_files**

```json
{
  "pattern": "kilo-auto|model.*auto",
  "path": "/Users/davec/.hermes",
  "file_glob": "*.md",
  "context": 3,
  "limit": 30,
  "offset": 50
}
```

### 🤖 Assistant — 2026-09-05T07:38:35Z

<details><summary>Reasoning</summary>

The user is asking about "Kilo auto selection" — specifically the differences in Kilo's auto model selection. Let me look at the Kilo AI provider's model catalog to understand what `kilo-auto/` models mean and how they differ.

From the search results, I can see references to:
- `kilo-auto/free` — free tier
- `kilo-auto/small` — small model
- `kilo-auto/balanced` — balanced model
- `kilo-auto/frontier` — frontier/powerful model

These are dynamic routers at Kilo's API gateway — they route to the best model for the tier rather than a
