---
type: Fact
title: # Explain the use of /Users/davec/usr/bin/underscore_cleanup.sh

source: kilo
se
description: # Explain the use of /Users/davec/usr/bin/underscore_cleanup.sh

source: kilo
session_id: 9f4a35f6-b23a-4ca1-9053-907418d85fd9
resource: kilo://task/9f4a35f6-b23a-4ca1-9053-907418d85fd9

# Conversatio
resource: agentmemory://memory/mem_mspcpe8i_f619b369c9bb
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T00:28:30.076Z
source: agentmemory
strength: 7
---
# Content

# Explain the use of /Users/davec/usr/bin/underscore_cleanup.sh

source: kilo
session_id: 9f4a35f6-b23a-4ca1-9053-907418d85fd9
resource: kilo://task/9f4a35f6-b23a-4ca1-9053-907418d85fd9

# Conversation

- **Task ID:** `9f4a35f6-b23a-4ca1-9053-907418d85fd9`
- **Source:** kilo
- **Started:** 2026-01-08T11:44:47Z
- **Ended:** 2026-01-08T11:51:15Z
- **Message blocks:** 32
- **Tokens:** 496161 in / 5910 out

---

### 👤 User — 2026-01-08T11:44:47Z

Explain the use of /Users/davec/usr/bin/underscore_cleanup.sh

### 🤖 Assistant — 2026-01-08T11:44:51Z

<details><summary>Reasoning</summary>

The user is asking me to explain the use of `/Users/davec/usr/bin/underscore_cleanup.sh`. I need to read the contents of this file first to understand what it does.

</details>

### 🤖 Assistant — 2026-01-08T11:44:51Z

**Tool call: readFile**

```json
{
  "path": "usr/bin/underscore_cleanup.sh",
  "isOutsideWorkspace": false,
  "content": "/Users/davec/usr/bin/underscore_cleanup.sh",
  "reason": ""
}
```

### 🤖 Assistant — 2026-01-08T11:44:55Z

<details><summary>Reasoning</summary>

The user wants me to explain the use of the underscore_cleanup.sh script. I now have the full content of the file, so I can provide a comprehensive explanation of what it does and how to use it.

This is a documentation task, so I should focus on clarity, proper formatting, and comprehensive examples as specified in my mode instructions.

</details>

### 👤 User — 2026-01-08T11:44:57Z

## Overview of [`underscore_cleanup.sh`](usr/bin/underscore_cleanup.sh:1)

The [`underscore_cleanup.sh`](usr/bin/underscore_cleanup.sh:1) script is a **duplicate detection and cleanup utility** designed to handle a common file management issue: when iCloud or other sync services create duplicate files/folders where one version uses underscores (`_`) and another uses spaces in the filename.

## Purpose

This script identifies pairs of items (files and directories) that exist in two forms:
- `Some_Item_Name/` (underscores)
- `Some Item Name/` (spaces)

It compares the underscore version against the space version, and if they are exact duplicates, it removes the underscore version—keeping the cleaner space-version intact.

## Key Features

| Feature | Description |
|---------|-------------|
| **Dry-Run by Default** | Reports what would be deleted without actually deleting |
| **Multiple Comparison Modes** | Choose between speed and accuracy |
| **Recursive Processing** | Scans entire directory tree |
| **Report Generation** | Saves results to `underscore_cleanup_report.txt` |

## Usage

```bash
# Dry-run mode (default) - shows what would be removed
./underscore_cleanup.sh /path/to/folder

# Execute mode - actually remove duplicates
./underscore_cleanup.sh --execute /path/to/folder

# Use different comparison modes
./underscore_cleanup.sh --execute --mode checksum /path/to/folder
./underscore_cleanup.sh --execute --mode metadata /path/to/folder
./underscore_cleanup.sh --execute --mode size /path/to/folder
```

## Comparison Modes

| Mode | Accuracy | Speed | Use Case |
|------|----------|-------|----------|
| `metadata` (default) | High | Fast | **Recommended** - compares file size + modification time without downloading |
| `checksum` | Highest | Slow | Full SHA-256 checksum comparison (requires full file access) |
| `size` | Low | Fastest | File size only - quick but may have false positives |
| `count` | Lowest | Fastest | File count only - directory-level comparison |
| `structure` | Medium | Fast | Compare directory structure only |
| `tree` | Medium | Fast | Hash of filenames + sizes |
| `rsync` | High | Fast | Use rsync's built-in comparison |

## Workflow

1. **Scans** the target directory for items containing underscores
2. **Finds** the corresponding space-version (e.g., `My_Folder` → `My Folder`)
3. **Syncs** content from underscore folder to space folder first (ensures space folder has all content)
4. **Compares** the two versions using the selected mode
5. **Removes** the underscore version only if they are exact matches
6. **Reports** results to `underscore_cleanup_report.txt`

## Safety Features

- **Dry-run default**: Run without `--execute` to preview changes
- 
