---
type: Fact
title: # how to rsync and delete files on dest that are not in source

source: kilo
ses
description: # how to rsync and delete files on dest that are not in source

source: kilo
session_id: 019c1d27-1788-73bf-ba47-08fbbee53cdc
resource: kilo://task/019c1d27-1788-73bf-ba47-08fbbee53cdc

# Conversation
resource: agentmemory://memory/mem_mspe1vaa_2f4182f9f72f
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T01:06:11.686Z
source: agentmemory
strength: 7
---
# Content

# how to rsync and delete files on dest that are not in source

source: kilo
session_id: 019c1d27-1788-73bf-ba47-08fbbee53cdc
resource: kilo://task/019c1d27-1788-73bf-ba47-08fbbee53cdc

# Conversation

- **Task ID:** `019c1d27-1788-73bf-ba47-08fbbee53cdc`
- **Source:** kilo
- **Started:** 2026-02-02T07:00:27Z
- **Ended:** 2026-02-02T07:03:20Z
- **Message blocks:** 7
- **Tokens:** 120129 in / 769 out

---

### 👤 User — 2026-02-02T07:00:27Z

how to rsync and delete files on dest that are not in source

### 🤖 Assistant — 2026-02-02T07:00:32Z

<details><summary>Reasoning</summary>

The user is asking how to use rsync to synchronize files from source to destination, deleting files in the destination that don't exist in the source. This is a common rsync use case.

The basic command for this is:
```bash
rsync -av --delete source/ destination/
```

Let me provide a clear answer with the key flag and explanation.

</details>

### 👤 User — 2026-02-02T07:00:42Z

To sync files from source to destination and delete files in destination that don't exist in source, use the `--delete` flag:

```bash
rsync -av --delete /path/to/source/ /path/to/destination/
```

**Key points:**
- The trailing slash on source (`source/`) means "copy contents of source" rather than the source directory itself
- `-a` (archive) preserves permissions, timestamps, symlinks, etc.
- `-v` (verbose) shows what's being deleted/synced
- `--delete` removes files in destination that aren't in source

**Dry run first (recommended):**
```bash
rsync -av --delete --dry-run /path/to/source/ /path/to/destination/
```

This shows what would be deleted without making changes. Remove `--dry-run` to actually execute.

### 🤖 Assistant — 2026-02-02T07:00:52Z

<details><summary>Reasoning</summary>

The user asked a question about how to use rsync to sync files and delete files on destination that don't exist in source. I provided the answer but forgot to use a tool. Since this is a simple question and answer, I should use attempt_completion to provide the answer.

</details>

### 🤖 Assistant — 2026-02-02T07:00:54Z

To sync files from source to destination and delete files in destination that don't exist in source, use the `--delete` flag:

```bash
rsync -av --delete /path/to/source/ /path/to/destination/
```

**Key points:**
- The trailing slash on source (`source/`) means "copy contents of source" rather than the source directory itself
- `-a` (archive) preserves permissions, timestamps, symlinks, etc.
- `-v` (verbose) shows what's being deleted/synced
- `--delete` removes files in destination that aren't in source

**Dry run first (recommended):**
```bash
rsync -av --delete --dry-run /path/to/source/ /path/to/destination/
```

This shows what would be deleted without making changes. Remove `--dry-run` to actually execute.

### 🤖 Assistant — 2026-02-02T07:03:15Z

<details><summary>Reasoning</summary>

The user wants to see only files that are added or deleted (not folder scans) in the dry run. The `-v` (verbose) flag shows all the folder scanning output. To reduce verbosity and only show changes, use:
- `-q` (quiet) or remove `-v`
- Or use `--itemize-changes` (`-i`) which shows only what changes are being made

The `-i` flag provides itemized output showing only the changes (what's being added, deleted, or modified) without listing every folder scanned.

</details>

### 🤖 Assistant — 2026-02-02T07:03:18Z

Use the `-i` (itemize-changes) flag instead of `-v` to show only file changes, not folder scans:

```bash
rsync -ai --delete --dry-run /path/to/source/ /path/to/destination/
```

**Output symbols:**
- `*` - file is being deleted
- `<` - file is being transferred (updated)
- `>` - file is being created in destination

Or if you want even quieter output:

```bash
rsync -a --delete --dry-run /path/to/source/ /path/to/destination/
```

This shows only what will be deleted (no verbose output at all).
