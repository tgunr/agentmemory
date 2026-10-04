---
type: Fact
title: # Fix _refresh_scan_feedback demoting user-confirmed tags to unvetted (loses con
description: # Fix _refresh_scan_feedback demoting user-confirmed tags to unvetted (loses confirmation after a…

source: hermes
session_id: 20261002_003846_0e64e1
resource: hermes://session/20261002_003846_0e64e1

resource: agentmemory://memory/mem_muqoytbv_2e66593a3ca8
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20261002_003846_0e64e1"]
timestamp: 2026-10-02T08:18:55.733Z
source: agentmemory
strength: 7
---
# Content

# Fix _refresh_scan_feedback demoting user-confirmed tags to unvetted (loses confirmation after a…

source: hermes
session_id: 20261002_003846_0e64e1
resource: hermes://session/20261002_003846_0e64e1

# Conversation

- **Session ID:** `20261002_003846_0e64e1`
- **Source:** kanban
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-02T05:38:50Z
- **Ended:** 2026-10-02T06:00:56Z
- **Messages:** 211
- **Tokens:** 294225 in / 60666 out

---

### 👤 User — 2026-10-02T05:38:49Z

work kanban task t_9d07b2ef

### 👤 User — 2026-10-02T05:38:49Z

work kanban task t_9d07b2ef

### 🤖 Assistant — 2026-10-02T05:38:56Z

<details><summary>Reasoning</summary>

Let me start by orienting on the kanban task as required by the protocol.

</details>

**Tool call: kanban_show**

```json
{}
```

### 🤖 Assistant — 2026-10-02T05:38:56Z

<details><summary>Reasoning</summary>

Let me start by orienting on the kanban task as required by the protocol.

</details>

**Tool call: kanban_show**

```json
{}
```

### 🤖 Assistant — 2026-10-02T05:39:00Z

<details><summary>Reasoning</summary>

Let me understand the task:

- Fix `_refresh_scan_feedback` in imgtagplus/app.py:70-82
- The repo is at ~/Desktop/DXF/imgtagplus-fork (based on parent task context), branch `feature/classification`, base commit 44d8d12.
- Required changes:
  1. `_refresh_scan_feedback` must not rewrite axes whose existing `user_tags[axis]` record has `confirmed_by: "user"` or which are covered by `user_overrides[axis]` — leave those records (and their `set_at_utc`) untouched.
  2. Do not stamp resolved axes that come purely from `derived_tags` (no human action) into `user_tags`.
  3. Keep deletions sticky and overrides/confirmations outrank fresh derived guesses.
  4. Add regression tests (a), (b), (c).

Let me start by finding the repo. The workspace is /Users/davec/.hermes/kanban/workspaces/t_9d07b2ef (scratch). The repo per parent task: ~/Desktop/DXF/imgtagplus-fork.

Let me look at the code first.

</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/Desktop/DXF/imgtagplus-fork/imgtagplus/app.py"
}
```

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/Desktop/DXF/imgtagplus-fork && git status && git log --oneline -3 && git branch --show-current"
}
```

### 🤖 Assistant — 2026-10-02T05:39:04Z

<details><summary>Reasoning</summary>

Now let me look at `apply_feedback_at_scan` in tags.py and `_save_tag_state` in server.py to understand the feedback artifact generation and precedence logic.

</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/Desktop/DXF/imgtagplus-fork/imgtagplus/tags.py"
}
```

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/Desktop/DXF/imgtagplus-fork && ls imgtagplus tests && grep -n \"_save_tag_state\\|user_confirmed_axes\\|_refresh_scan_feedback\" imgtagplus/server.py | head -40"
}
```

### 🤖 Assistant — 2026-10-02T05:39:04Z

<details><summary>Reasoning</summary>

Now let me look at `apply_feedback_at_scan` in tags.py and `_save_tag_state` in server.py to understand the feedback artifact generation and precedence logic.

</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/Desktop/DXF/imgtagplus-fork/imgtagplus/tags.py"
}
```

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/Desktop/DXF/imgtagplus-fork && ls imgtagplus tests && grep -n \"_save_tag_state\\|user_confirmed_axes\\|_refresh_scan_feedback\" imgtagplus/server.py | head -40"
}
```

### 🤖 Assistant — 2026-10-02T05:39:08Z

<details><summary>Reasoning</summary>

Now let me look at `_save_tag_state` in server.py and the relevant endpoint code to fully understand the flow.

</details>

**Tool call: read_file**

```json
{
  "limit": 130,
  "offset": 330,
  "path": "/Users/davec/Desktop/DXF/imgtagplus-fork/imgtagplus/server.py"
}
```

### 🤖 Assistant — 2026-10-02T05:39:08Z

<details><summary>Reasoning</summary>

Now let me look at `_save_tag_state` in server.py and the relevant endpoint code to fully understand the flow.

</details>

**Tool call: read_file**

```json
{
  "limit": 130,
  "offset": 330,
  "path": "/Users/davec/Desktop/DXF/imgtagplus-fork/imgtagplus/server.py"
}
```

### 🤖 Assistant — 2026-10-02T
