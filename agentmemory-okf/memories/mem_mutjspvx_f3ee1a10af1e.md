---
type: Fact
title: # List default profile projects

source: hermes
session_id: 20261002_115823_a618
description: # List default profile projects

source: hermes
session_id: 20261002_115823_a61847
resource: hermes://session/20261002_115823_a61847

# Conversation

- **Session ID:** `20261002_115823_a61847`
- **Sou
resource: agentmemory://memory/mem_mutjspvx_f3ee1a10af1e
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-10-04T08:17:31.815Z
source: agentmemory
strength: 7
---
# Content

# List default profile projects

source: hermes
session_id: 20261002_115823_a61847
resource: hermes://session/20261002_115823_a61847

# Conversation

- **Session ID:** `20261002_115823_a61847`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-10-02T16:58:55Z
- **Ended:** 2026-10-03T14:03:48Z
- **Messages:** 7
- **CWD:** `/Volumes/davec`
- **Tokens:** 29652 in / 424 out

---

### 👤 User — 2026-10-02T16:58:55Z

show me a list of projects for the default profile

### 🤖 Assistant — 2026-10-02T16:58:59Z

<details><summary>Reasoning</summary>

The user asks: "show me a list of projects for the default profile". Likely they mean kanban projects? Or Hermes desktop projects (desktop_project tool)? Or AgentMemory projects? Hmm.

"projects for the default profile" — the desktop_project tool creates/switches named workspaces. Or maybe Kanban projects. Ambiguous. Let me check what's available quickly.

Maybe the most direct interpretation: list kanban projects. But the kanban tools don't have a "list projects" tool — kanban_list has project filter but not project listing. Actually there's `project` param linking to a project slug. Let me look at the kanban CLI for project listing.

Let me just check the filesystem/CLI.

</details>

**Tool call: terminal**

```json
{
  "command": "hermes kanban --help 2>&1 | head -40; echo \"---\"; hermes project --help 2>&1 | head -40"
}
```

**Tool call: search_files**

```json
{
  "pattern": "*project*",
  "target": "files",
  "path": "/Users/davec/.hermes",
  "limit": 40
}
```

### 🤖 Assistant — 2026-10-02T16:59:07Z

**Tool call: terminal**

```json
{
  "command": "hermes project list 2>&1"
}
```

### 🤖 Assistant — 2026-10-02T16:59:11Z

13 projects in the default profile:

| Project | Folders |
|---|---|
| **website** *(active)* | 3 |
| openwarp | 1 |
| designs | 1 |
| turboquant | 1 |
| leveler | 1 |
| carltoncrafted | 1 |
| grok-archive | 1 |
| dxf | 2 |
| crs-swag | 1 |
| 3d | 1 |
| develop | 7 |
| personal_recipies | 1 |
| personal_banking | 1 |

`hermes project show <name>` for folders/board bindings.
