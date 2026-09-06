---
type: Fact
title: # Expanding Zsh History Limit

source: claude
session_id: 5c5a2025-4ba6-4587-bb6
description: # Expanding Zsh History Limit

source: claude
session_id: 5c5a2025-4ba6-4587-bb67-2a1dd0c30566
resource: claude://conversation/5c5a2025-4ba6-4587-bb67-2a1dd0c30566

# Conversation

- **Session ID:** `
resource: agentmemory://memory/mem_mti60cq6_fd413ae879f0
tags: ["okf", "okf-claude", "claude", "claude://conversation/5c5a2025-4ba6-4587-bb67-2a1dd0c30566"]
timestamp: 2026-09-01T04:26:23.130Z
source: agentmemory
strength: 7
---
# Content

# Expanding Zsh History Limit

source: claude
session_id: 5c5a2025-4ba6-4587-bb67-2a1dd0c30566
resource: claude://conversation/5c5a2025-4ba6-4587-bb67-2a1dd0c30566

# Conversation

- **Session ID:** `5c5a2025-4ba6-4587-bb67-2a1dd0c30566`
- **Source:** claude
- **Started:** 2025-07-14T22:06:49Z
- **Messages:** 2
- **Summary:** **Conversation Overview**

The user requested help changing their zsh shell history configuration to store 20,000 lines instead of the default amount. Claude provided step-by-step instructions for modifying the `.zshrc` configuration file, explaining that two variables needed to be set: `HISTSIZE=20000` for in-memory history during the current session and `SAVEHIST=20000` for commands saved to the history file. The solution involved editing the `.zshrc` file with a text editor, adding the configuration lines, and reloading the configuration with `source ~/.zshrc`. Claude also provided additional optional history management settings like `HIST_IGNORE_DUPS`, `HIST_IGNORE_ALL_DUPS`, `HIST_SAVE_NO_DUPS`, `HIST_IGNORE_SPACE`, and `SHARE_HISTORY` to enhance the user's shell experience by preventing duplicate entries and enabling history sharing between terminal sessions. The conversation focused entirely on zsh shell configuration and terminal customization.

---

### 👤 User — 2025-07-14T22:06:51Z

change my zsh history to be 20000 lines

---

### 🤖 Assistant — 2025-07-14T22:06:59Z

You can change your zsh history size to 20,000 lines by setting the `HISTSIZE` and `SAVEHIST` variables in your `.zshrc` file.

Here's how to do it:

1. Open your `.zshrc` file in a text editor:
```bash
nano ~/.zshrc
```

2. Add or modify these lines:
```bash
HISTSIZE=20000
SAVEHIST=20000
```

3. Save the file and reload your configuration:
```bash
source ~/.zshrc
```

**What these variables do:**
- `HISTSIZE` - Controls how many commands are kept in memory during your current session
- `SAVEHIST` - Controls how many commands are saved to the history file (`~/.zsh_history`)

You might also want to add these useful history options to your `.zshrc`:
```bash
setopt HIST_IGNORE_DUPS        # Don't save duplicate commands
setopt HIST_IGNORE_ALL_DUPS    # Remove older duplicates
setopt HIST_SAVE_NO_DUPS       # Don't save duplicates to file
setopt HIST_IGNORE_SPACE       # Don't save commands starting with space
setopt SHARE_HISTORY           # Share history between sessions
```

The changes will take effect in new terminal sessions, or immediately if you run `source ~/.zshrc`.

---
