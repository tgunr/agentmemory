---
type: Fact
title: # Find project folder location

source: hermes
session_id: 20260827_101104_eb361
description: # Find project folder location

source: hermes
session_id: 20260827_101104_eb3618
resource: hermes://session/20260827_101104_eb3618

# Conversation

- **Session ID:** `20260827_101104_eb3618`
- **Sour
resource: agentmemory://memory/mem_mtg12wh8_6ecb1230d589
tags: ["okf", "okf-hermes", "hermes", "/Volumes/projects/Epoxy/Leveler"]
timestamp: 2026-08-30T16:32:51.612Z
source: agentmemory
strength: 7
---
# Content

# Find project folder location

source: hermes
session_id: 20260827_101104_eb3618
resource: hermes://session/20260827_101104_eb3618

# Conversation

- **Session ID:** `20260827_101104_eb3618`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-08-27T15:11:34Z
- **Ended:** 2026-08-28T15:29:38Z
- **Messages:** 32
- **CWD:** `/Volumes/projects/Epoxy/Leveler`
- **Tokens:** 99482 in / 2971 out

---

### 👤 User — 2026-08-27T15:11:34Z

Where is the project folder located?

### 🤖 Assistant — 2026-08-27T15:11:45Z

<details><summary>Reasoning</summary>

The user is asking about the project folder location. I need to determine what project they're referring to. Looking at the conversation context and memory, I can see:

1. From memory: "Mac + Linux/pve.local. Optimizes agent token/cost..."
2. From user profile: "Working on Abacus project at /Volumes/AI/Abacus with abacus.ai account."
3. From the current working directory in the environment: /Users/davec

The user is asking "Where is the project folder located?" - this is likely referring to the Abacus project mentioned in their profile. However, I should verify this by checking the current project context.

Let me check what project is currently active in the Hermes desktop app, and also verify the filesystem to see if there's a project folder.

I should use `project_list` to see what projects are available and which one is active. This will tell me the project folder location.

</details>

**Tool call: project_list**

```json
{}
```

### 🤖 Assistant — 2026-08-27T15:12:06Z

<details><summary>Reasoning</summary>

The user asked where the project folder is located. I checked the project list and the active project is TurboQuant with primary path `/Users/davec/MCP_Local/turboquant-mlx-work`. I'll give a short, direct answer.

</details>

Your active Hermes project is **TurboQuant** at:

`/Users/davec/MCP_Local/turboquant-mlx-work`

### 👤 User — 2026-08-27T15:12:50Z

That is incorrect. I am in the leveler project according to the side panel

### 🤖 Assistant — 2026-08-27T15:13:08Z

<details><summary>Reasoning</summary>

The user is saying they're in a "leveler" project, but my project_list shows the active project is "TurboQuant". Let me check if there's a project for "leveler" that might exist but isn't showing as active, or if the user is referring to something else. Let me search for any leveler-related projects or check the actual file system.

Actually, looking at the project list again, there's no "leveler" project in the list. The user says they're in the "leveler project" according to the side panel. This could mean:
1. There's a discrepancy between what I see and what the user sees
2. The user might have a different project open in their GUI that I can't see
3. Maybe they're referring to a file path that exists somewhere

Let me search for "leveler" in the file system to see if I can find it. I should also check if there are any other project references or if the user might be looking at a different workspace.

I should use terminal or search_files to look for "leveler" directories/files that might be the actual project they're working in.

</details>

**Tool call: terminal**

```json
{
  "command": "find /Users/davec -maxdepth 5 -type d -iname \"*leveler*\" 2>/dev/null | head -20",
  "timeout": 30
}
```

**Tool call: search_files**

```json
{
  "limit": 20,
  "pattern": "*leveler*",
  "target": "files"
}
```

### 🤖 Assistant — 2026-08-27T15:13:56Z

<details><summary>Reasoning</summary>

The find command timed out, and search_files found nothing with "leveler" in the name. Let me try a broader search or check the Hermes project configuration directly. The side panel might be showing something that isn't in the standard project list, or it might be a filesystem view rather than a Hermes project.

Let me check the Hermes projects configuration file to see all defined projects, and also search more broadly for "leveler" in the filesystem.

</details>

**Tool call: terminal**

```json
{
  "command": "find /Users/davec -maxdepth 4 -type d \\( -iname \"*leveler*\" -o -iname \"*level*\" \\) 2>/dev/null 
