---
type: Fact
title: # How can I add a folder to a VS Code workspace using CLI?

source: kilo
session
description: # How can I add a folder to a VS Code workspace using CLI?

source: kilo
session_id: 019c23a4-7130-73ed-968a-86441053a97d
resource: kilo://task/019c23a4-7130-73ed-968a-86441053a97d

# Conversation

- 
resource: agentmemory://memory/mem_mspdxr65_0e99dd8e388f
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T01:02:59.755Z
source: agentmemory
strength: 7
---
# Content

# How can I add a folder to a VS Code workspace using CLI?

source: kilo
session_id: 019c23a4-7130-73ed-968a-86441053a97d
resource: kilo://task/019c23a4-7130-73ed-968a-86441053a97d

# Conversation

- **Task ID:** `019c23a4-7130-73ed-968a-86441053a97d`
- **Source:** kilo
- **Started:** 2026-02-03T13:15:05Z
- **Ended:** 2026-02-03T13:15:13Z
- **Message blocks:** 3
- **Tokens:** 38069 in / 227 out

---

### 👤 User — 2026-02-03T13:15:05Z

How can I add a folder to a VS Code workspace using CLI?

### 🤖 Assistant — 2026-02-03T13:15:09Z

<details><summary>Reasoning</summary>

The user is asking how to add a folder to a VS Code workspace using CLI. This is a straightforward question about VS Code's command line interface.

I can answer this directly from my knowledge - VS Code has a `--add` flag that allows adding folders to a workspace when opening it.

Let me provide a clear answer with the command syntax.

</details>

### 🤖 Assistant — 2026-02-03T13:15:13Z

To add a folder to a VS Code workspace using CLI, use the `--add` flag with the folder path:

```bash
code --add /path/to/folder
```

This opens VS Code with the current workspace and adds the specified folder to it. If VS Code isn't already running, it will start with the workspace.

**Example:**
```bash
code --add ~/projects/my-new-folder
```

**Alternative approach** - you can also open multiple folders directly:

```bash
code /path/to/existing-workspace.code-workspace /path/to/new-folder
```

**Note:** The folder must exist before adding it to the workspace.
