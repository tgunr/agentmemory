---
type: Fact
title: # List current projects in profile

source: hermes
session_id: 20261006_033134_c
description: # List current projects in profile

source: hermes
session_id: 20261006_033134_c51687
resource: hermes://session/20261006_033134_c51687

# Conversation

- **Session ID:** `20261006_033134_c51687`
- **
resource: agentmemory://memory/mem_mvdjzgk6_9be41baa3dbe
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-10-18T08:18:09.683Z
source: agentmemory
strength: 7
---
# Content

# List current projects in profile

source: hermes
session_id: 20261006_033134_c51687
resource: hermes://session/20261006_033134_c51687

# Conversation

- **Session ID:** `20261006_033134_c51687`
- **Source:** desktop
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-06T08:31:34Z
- **Ended:** 2026-10-08T22:31:29Z
- **Messages:** 175
- **CWD:** `/Users/davec`
- **Tokens:** 682467 in / 55731 out
- **Est. cost:** $-501203.0000

---

### 👤 User — 2026-10-06T08:31:34Z

List the current projects in this profile

### 👤 User — 2026-10-06T08:31:34Z

List the current projects in this profile

### 🤖 Assistant — 2026-10-06T08:31:41Z

<details><summary>Reasoning</summary>

The user asks: "List the current projects in this profile"

There's a skill "desktop_project: Create or switch desktop Projects (named workspaces)." — this is relevant. I should load it to understand what "projects" means in this context. Also maybe "project-workspace-setup" or "hermes-workspace-context" skills. The most relevant one is probably "desktop_project" (project tools). Let me load the skill to see how projects are managed, then list them.

Let me use skill_view on desktop_project. Possibly it's a deferred tool (project tools: desktop_project). Let me check the skill first.

</details>

**Tool call: skill_view**

```json
{
  "name": "desktop_project"
}
```

### 🤖 Assistant — 2026-10-06T08:31:41Z

<details><summary>Reasoning</summary>

The user asks: "List the current projects in this profile"

There's a skill "desktop_project: Create or switch desktop Projects (named workspaces)." — this is relevant. I should load it to understand what "projects" means in this context. Also maybe "project-workspace-setup" or "hermes-workspace-context" skills. The most relevant one is probably "desktop_project" (project tools). Let me load the skill to see how projects are managed, then list them.

Let me use skill_view on desktop_project. Possibly it's a deferred tool (project tools: desktop_project). Let me check the skill first.

</details>

**Tool call: skill_view**

```json
{
  "name": "desktop_project"
}
```

### 🤖 Assistant — 2026-10-06T08:31:45Z

**Tool call: tool_search**

```json
{
  "queries": [
    "desktop project list projects"
  ]
}
```

### 🤖 Assistant — 2026-10-06T08:31:48Z

**Tool call: tool_call**

```json
{
  "calls": [
    {
      "name": "desktop_project",
      "arguments": {
        "action": "list"
      }
    }
  ]
}
```

### 🤖 Assistant — 2026-10-06T08:31:54Z

<details><summary>Reasoning</summary>

List the projects with the active one marked. Keep concise.

</details>

15 projects; this chat is in **Home** (active).

| Name | Path |
|---|---|
| Home ✅ *(active)* | /Users/davec |
| WebSite | /Volumes/www |
| OpenWarp | ~/Work/openwarp |
| designs | ~/Work/designs |
| TurboQuant | ~/MCP_Local/turboquant-mlx-work |
| Leveler | /Volumes/projects/Epoxy/projects/self-leveling-bed |
| CarltonCrafted | /Volumes/projects/CarltonCrafted |
| grok_archive | ~/data/grok-archive |
| DXF | ~/Work/spotlights/DXF |
| CRS Swag | /Volumes/www/html/crs |
| 3D | /Volumes/projects/3D/Multiboard |
| Develop | ~/projects/Develop |
| personal_recipies | ~/Documents/Recipes |
| personal_banking | ~/Documents/Finance/USAA |
| Hermes | ~/.hermes |

### 👤 User — 2026-10-06T08:37:02Z

create a new project imgtagplsu using folder ~/Desktop/DXF/imgtagplus

### 🤖 Assistant — 2026-10-06T08:37:10Z

**Tool call: tool_call**

```json
{
  "calls": [
    {
      "name": "desktop_project",
      "arguments": {
        "action": "create",
        "path": "/Users/davec/Desktop/DXF/imgtagplus"
      }
    }
  ]
}
```

### 🤖 Assistant — 2026-10-06T08:37:13Z

**Tool call: tool_call**

```json
{
  "calls": [
    {
      "name": "desktop_project",
      "arguments": {
        "action": "create",
        "name": "imgtagplsu",
        "path": "/Users/davec/Desktop/DXF/imgtagplus"
      }
    }
  ]
}
```

### 🤖 Assistant — 2026-10-06T08:37:18Z

<details><summary>Reasoning</summary>

Created. The user wrote "imgtagplsu" (with the "su" order) — I followed exactly. The folder path was imgtagplus. Should I flag the possible typo? Th
