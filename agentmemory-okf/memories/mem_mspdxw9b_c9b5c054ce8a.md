---
type: Fact
title: # how do i open a vscode workspace from cli

source: kilo
session_id: 019c5c00-f
description: # how do i open a vscode workspace from cli

source: kilo
session_id: 019c5c00-f862-75c9-ad93-84749267be94
resource: kilo://task/019c5c00-f862-75c9-ad93-84749267be94

# Conversation

- **Task ID:** `0
resource: agentmemory://memory/mem_mspdxw9b_c9b5c054ce8a
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T01:03:06.347Z
source: agentmemory
strength: 7
---
# Content

# how do i open a vscode workspace from cli

source: kilo
session_id: 019c5c00-f862-75c9-ad93-84749267be94
resource: kilo://task/019c5c00-f862-75c9-ad93-84749267be94

# Conversation

- **Task ID:** `019c5c00-f862-75c9-ad93-84749267be94`
- **Source:** kilo
- **Started:** 2026-02-14T11:54:53Z
- **Ended:** 2026-02-14T11:55:07Z
- **Message blocks:** 3
- **Tokens:** 41347 in / 225 out

---

### 👤 User — 2026-02-14T11:54:53Z

how do i open a vscode workspace from cli

### 🤖 Assistant — 2026-02-14T11:54:59Z

<details><summary>Reasoning</summary>

The user is asking how to open a VSCode workspace from the command line. This is a straightforward question about VSCode CLI usage.

</details>

### 🤖 Assistant — 2026-02-14T11:55:07Z

To open a VSCode workspace from the CLI, use the `code` command:

**Open a folder as workspace:**
```bash
code /path/to/folder
```

**Open a specific workspace file (.code-workspace):**
```bash
code /path/to/project.code-workspace
```

**Open current directory:**
```bash
code .
```

**Common options:**
- `code -n /path` - Open in new window
- `code -r /path` - Open in current window (reuse)
- `code --add /path` - Add folder to current workspace

If the `code` command isn't found, you may need to install the shell command:
1. Open VSCode
2. Press `Cmd+Shift+P` to open Command Palette
3. Type "Shell Command: Install 'code' command in PATH"
4. Select it to install
