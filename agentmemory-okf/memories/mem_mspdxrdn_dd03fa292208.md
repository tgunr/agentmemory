---
type: Fact
title: # ❯ My timemachine backup is reporting full, how do i prune out the folders I ha
description: # ❯ My timemachine backup is reporting full, how do i prune out the folders I have

source: kilo
session_id: 019c23b5-0f76-735a-90d2-7d560c8a2cf4
resource: kilo://task/019c23b5-0f76-735a-90d2-7d560c8a
resource: agentmemory://memory/mem_mspdxrdn_dd03fa292208
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T01:03:00.022Z
source: agentmemory
strength: 7
---
# Content

# ❯ My timemachine backup is reporting full, how do i prune out the folders I have

source: kilo
session_id: 019c23b5-0f76-735a-90d2-7d560c8a2cf4
resource: kilo://task/019c23b5-0f76-735a-90d2-7d560c8a2cf4

# Conversation

- **Task ID:** `019c23b5-0f76-735a-90d2-7d560c8a2cf4`
- **Source:** kilo
- **Started:** 2026-02-03T13:33:14Z
- **Ended:** 2026-02-03T15:47:03Z
- **Message blocks:** 6
- **Tokens:** 117356 in / 1203 out

---

### 👤 User — 2026-02-03T13:33:14Z

❯ My timemachine backup is reporting full, how do i prune out the folders I have specified in the preference panel?                                                     
  ⎿ API Error: 400 {"error":{"message":"litellm.BadRequestError: OpenAIException - Error code: 400 - {'error': 'Error rendering prompt with jinja template: \"Only user 
    and assistant roles are supported!\".\\n\\nThis is usually an issue with the model\\'s prompt template. If you are using a popular model, you can try to search the 
    model under lmstudio-community, which will have fixed prompt templates. If you cannot find one, you are welcome to post this issue to our discord or issue tracker  
    on GitHub. Alternatively, if you know how to write jinja templates, you can override the prompt template in My Models > model settings > Prompt Template.'}.        
    Received Model Group=mistral-7b-instruct-v0.3\nAvailable Model Group Fallbacks=None","type":null,"param":null,"code":"400"}}

### 🤖 Assistant — 2026-02-03T13:33:19Z

<details><summary>Reasoning</summary>

The user is asking about how to prune Time Machine backups that are full, specifically mentioning folders they've specified in the preference panel. However, there's also an API error shown in the task, but this seems to be related to the litellm project context (which is a different topic - about AI models).

The user's actual question is about macOS Time Machine backup management. Let me provide a helpful answer about managing Time Machine backups.

Time Machine doesn't have a built-in way to exclude specific old backups - it manages them automatically. However, there are a few approaches:

1. Use `tmutil` to manage backups
2. Delete specific old backups using Finder or terminal
3. Configure exclusions before they happen

Let me provide a clear answer.

</details>

### 👤 User — 2026-02-03T13:33:22Z

To prune Time Machine backups of specific folders you've excluded in preferences, you'll need to use Terminal commands. Time Machine doesn't automatically remove old backups of excluded items - you need to do this manually.

## Method 1: Using tmutil (Recommended)

```bash
# List all backups
tmutil listbackups

# Delete a specific backup (replace date)
sudo tmutil delete /Volumes/Time\ Machine/Backups.backupdb/yourmac/YYYY-MM-DD-HHMMSS
```

## Method 2: Delete Old Backups of Excluded Folders

```bash
# Navigate to backup location
cd /Volumes/Time\ Machine/Backups.backupdb/yourmac

# Find backups containing a specific folder
find . -name "FolderName" -type d

# Delete old backups of excluded folders manually
sudo rm -rf /Volumes/Time\ Machine/Backups.backupdb/yourmac/YYYY-MM-DD-HHMMSS/Backups.backupdb/yourmac/FolderToRemove
```

## Method 3: Prune Old Backups Automatically

```bash
# Keep only backups from the last 30 days
tmutil thinlocalsnapshots / 1000000000 4
```

## Important Notes

- **tmutil requires root privileges** - you'll need admin access
- **Be careful with `rm -rf`** - double-check paths before deleting
- **Time Machine may recreate excluded folder backups** if the folder is still present on your system
- The "full" warning often means the backup drive is genuinely full - consider a larger drive

Would you like me to help you script this for your specific setup?

### 🤖 Assistant — 2026-02-03T13:33:36Z

<details><summary>Reasoning</summary>

The user is asking about pruning Time Machine backups for folders they've specified in the preference panel. This is a macOS system administration question. Let me use the macos-server MCP tool to help them with this task.

I should use the systemInfo tool to check the system state first, then provide guidance on pruning Time Machine backups.

</details>

### 🤖 Assistant — 2026-02-03T15:46:53
