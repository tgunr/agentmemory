---
type: Fact
title: # Understand Kanban card behavior on relaunch

source: hermes
session_id: 202610
description: # Understand Kanban card behavior on relaunch

source: hermes
session_id: 20261002_004400_0ab9d9
resource: hermes://session/20261002_004400_0ab9d9

# Conversation

- **Session ID:** `20261002_004400_0
resource: agentmemory://memory/mem_mutjsmnj_122899ea6004
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20261002_004400_0ab9d9"]
timestamp: 2026-10-04T08:17:27.598Z
source: agentmemory
strength: 7
---
# Content

# Understand Kanban card behavior on relaunch

source: hermes
session_id: 20261002_004400_0ab9d9
resource: hermes://session/20261002_004400_0ab9d9

# Conversation

- **Session ID:** `20261002_004400_0ab9d9`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-10-02T05:44:01Z
- **Ended:** 2026-10-03T14:03:48Z
- **Messages:** 104
- **Tokens:** 82335 in / 14183 out

---

### 👤 User — 2026-10-02T05:44:01Z

what is the effect of quiting desktop on kanban cards running? What happens to. them on a new launch?

### 🤖 Assistant — 2026-10-02T05:44:04Z

<details><summary>Reasoning</summary>

The user asks about the effect of quitting Hermes Desktop on Kanban cards that are running. Let me load the kanban skill to answer accurately.

Let me check the skill

</details>

**Tool call: skill_view**

```json
{
  "name": "kanban-worker"
}
```

**Tool call: skill_view**

```json
{
  "name": "kanban"
}
```

### 🤖 Assistant — 2026-10-02T05:44:08Z

<details><summary>Reasoning</summary>

The question: effect of quitting Hermes Desktop on running kanban cards; what happens on relaunch. Need to check the actual dispatcher implementation. Let me look at the code in ~/.hermes/hermes-agent.

Let me search for dispatcher code.

</details>

**Tool call: search_files**

```json
{
  "pattern": "*.py",
  "target": "files",
  "path": "/Users/davec/.hermes/hermes-agent/hermes_cli/kanban",
  "limit": 100
}
```

**Tool call: search_files**

```json
{
  "pattern": "stale|reclaim|orphan|dispatcher.*startup|recover",
  "path": "/Users/davec/.hermes/hermes-agent",
  "output_mode": "files_only",
  "limit": 40
}
```

### 🤖 Assistant — 2026-10-02T05:44:11Z

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/.hermes/hermes-agent && ls hermes_cli/ | grep -i kanban; echo ---; ls hermes/ | grep -i kanban; echo ---; ls tools/ 2>/dev/null | grep -i kanban"
}
```

### 🤖 Assistant — 2026-10-02T05:44:14Z

**Tool call: search_files**

```json
{
  "output_mode": "files_only",
  "path": "/Users/davec/.hermes/hermes-agent/hermes_cli",
  "pattern": "dispatcher|dispatch",
  "file_glob": "*.py",
  "limit": 40
}
```

### 🤖 Assistant — 2026-10-02T05:44:16Z

**Tool call: search_files**

```json
{
  "limit": 60,
  "output_mode": "content",
  "path": "/Users/davec/.hermes/hermes-agent/hermes_cli/kanban_db_dispatch.py",
  "pattern": "def |lease|stale|reclaim|startup|boot"
}
```

### 🤖 Assistant — 2026-10-02T05:44:19Z

<details><summary>Reasoning</summary>

Now check the desktop app side: does desktop launch the dispatcher in-process, or does the gateway run it? And is there startup recovery of running cards?

Let's grep for orphan recovery at startup / "recover_running" or similar

</details>

**Tool call: search_files**

```json
{
  "limit": 40,
  "output_mode": "content",
  "path": "/Users/davec/.hermes/hermes-agent/hermes_cli/kanban_db_dispatch.py",
  "pattern": "def detect_orphan|def run_daemon|def dispatch_once|def reconcile"
}
```

**Tool call: search_files**

```json
{
  "limit": 40,
  "output_mode": "content",
  "path": "/Users/davec/.hermes/hermes-agent/hermes_cli",
  "pattern": "detect_orphan_running|reconcile_startup|startup_recover"
}
```

### 🤖 Assistant — 2026-10-02T05:44:22Z

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/hermes-agent/hermes_cli/kanban_db_dispatch.py",
  "offset": 845,
  "limit": 110
}
```

**Tool call: search_files**

```json
{
  "limit": 30,
  "output_mode": "content",
  "path": "/Users/davec/.hermes/hermes-agent",
  "pattern": "reconcile_orphaned_running"
}
```

### 🤖 Assistant — 2026-10-02T05:44:25Z

<details><summary>Reasoning</summary>

Now the key path: dispatch_once. Let me look at the order of operations in dispatch_once around line 2150-2260 to see what runs on each tick: detect_crashed_workers, release_stale_claims, etc.

Also important: where is run_daemon started from in the desktop app? Is the dispatcher a child of the desktop app? Let me

</details>

**Tool call: read_file**

```json
{
  "limit": 120,
  "offset": 2150,
  "path": "/Users/davec/.hermes/hermes-agent/hermes_cli/kanban_db_dispatch.py"
}
```

### 🤖 Assistant — 2026-10-02T05:44:3
