---
type: Fact
title: # [Note: model was just switched from…

source: hermes
session_id: 20260813_0706
description: # [Note: model was just switched from…

source: hermes
session_id: 20260813_070646_3da15edf
resource: hermes://session/20260813_070646_3da15edf

# Conversation

- **Session ID:** `20260813_070646_3da1
resource: agentmemory://memory/mem_mssoo44e_290a8acba8e3
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260813_070646_3da15edf"]
timestamp: 2026-08-14T08:26:44.231Z
source: agentmemory
strength: 7
---
# Content

# [Note: model was just switched from…

source: hermes
session_id: 20260813_070646_3da15edf
resource: hermes://session/20260813_070646_3da15edf

# Conversation

- **Session ID:** `20260813_070646_3da15edf`
- **Source:** telegram
- **Model:** gemma4:12b-mlx
- **Started:** 2026-08-13T12:06:46Z
- **Ended:** 2026-08-13T19:18:06Z
- **Messages:** 13
- **Tokens:** 170599 in / 1497 out

---

### 👤 User — 2026-08-13T12:08:15Z

what is the difference between the /route and the /classify commands?

### 🤖 Assistant — 2026-08-13T12:14:09Z

<details><summary>Reasoning</summary>

The user is asking for the difference between `/route` and `/classify` commands.
I need to find where these commands are defined or used in the current project context.
The project context includes a set of skills, but I should check if there's any documentation or specific files that define these slash commands.

Looking at the system prompt/context:
- The user mentions `/route` must work in chat UI —- if they fail with argparse help, the dispatch is the bug, not the script (from User Profile).
- There is a `hermes-agent` skill for configuration.

I'll start by searching for these terms in the codebase to identify their functionality.

</details>

**Tool call: search_files**

```json
{
  "pattern": "/route",
  "target": "content"
}
```

### 🤖 Assistant — 2026-08-13T12:15:12Z

The difference between `/route` and `/classify` (as described in current session context and project files) lies in their **scope** and **intended output**:

### 1. `/route` (Instruction & Routing Recommendation)
*   **Purpose:** To provide a full recommendation for the "cheapest" or most efficient execution path based on a specific prompt.
*   **Output:** It returns three distinct pieces of information: 
    *   `TASK_TYPE`
    *   `PROVIDER`
    *   `MODEL`
*   **Actionable Insight:** It is intended as a "preflight" step. It doesn't change the model automatically; it tells you *which* model and provider to use before you proceed with the actual work.

### 2. `/classify` (Task Categorization)
While not appearing in the same exhaustive detail in the recent `router.py` logs, classification refers specifically to identifying which of the "dominant signals" a request belongs to:
*   **Cheap:** Quick triage, summarization, drafting, simple extraction.
*   **Code:** Implementation, debugging, patching, tests, refactor, terminal commands.
*   **Research:** Deep-dive, multi-source analysis, long-context recall, cross-file synthesis.
*   **General:** Anything else.

**In short:** `/classify` tells you **what kind of work** it is (Category), while `/route` tells you **how to execute that specific work** (Task Type + Provider + Model).

### 👤 User — 2026-08-13T18:10:18Z

Tell me about Vista.AI

### 🤖 Assistant — 2026-08-13T18:16:11Z

<details><summary>Reasoning</summary>

"Tell me about Vista.AI"
I have `web_search`, `browser_exec`, etc. I should use `web_search` first to get an overview of what Vista.AI is.

    *   What is it? (Company/Product)
    *   Key features?
    *   Use cases?
    *   Technological basis (AI, Video analysis, etc.)?

</details>

**Tool call: web_search**

```json
{
  "query": "what is Vista.AI and what are its key features"
}
```

### 🤖 Assistant — 2026-08-13T18:16:46Z

Depending on what field you're interested in, "Vista.AI" refers to three very different technologies:

### 1. **Medical Imaging (MRI Automation)**
This is the most prominent commercial software under this name. **Vista AI** provides an FDA-cleared platform specifically for **cardiac MRI**.
*   **What it does:** It uses AI-powered automation to handle complex imaging tasks, essentially allowing technologists with less specialized training to produce high-quality, consistent heart scans. 
*   **Goal:** To make hospital imaging more accessible and efficient by automating the "human" elements of scan acquisition.

### 2. **Generative Video (Google Research)**
In the context of recent AI research (late 2024/2025), **VISTA** (**Video Iterative Self-improvemenT Agent**) is a specialized agent for **text-to-video generation**.
*   **What it does:** It uses a "bl
