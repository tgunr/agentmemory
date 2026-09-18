---
type: Fact
title: # how do i use -prune in find

source: kilo
session_id: 5746027f-940b-44ee-8ceb-
description: # how do i use -prune in find

source: kilo
session_id: 5746027f-940b-44ee-8ceb-b9c2a3f37743
resource: kilo://task/5746027f-940b-44ee-8ceb-b9c2a3f37743

# Conversation

- **Task ID:** `5746027f-940b-4
resource: agentmemory://memory/mem_mspe2nmf_5703cadb65a4
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T01:06:48.414Z
source: agentmemory
strength: 7
---
# Content

# how do i use -prune in find

source: kilo
session_id: 5746027f-940b-44ee-8ceb-b9c2a3f37743
resource: kilo://task/5746027f-940b-44ee-8ceb-b9c2a3f37743

# Conversation

- **Task ID:** `5746027f-940b-44ee-8ceb-b9c2a3f37743`
- **Source:** kilo
- **Started:** 2026-01-08T16:32:29Z
- **Ended:** 2026-01-08T16:32:47Z
- **Message blocks:** 4
- **Tokens:** 41100 in / 651 out

---

### 👤 User — 2026-01-08T16:32:29Z

how do i use -prune in find

### 🤖 Assistant — 2026-01-08T16:32:37Z

<details><summary>Reasoning</summary>

The user is asking how to use `-prune` in the `find` command. This is a general question about a Unix/Linux command, not a debugging task. However, I'm in debug mode, so I should adapt my approach.

Let me think about this question. The `-prune` option in `find` is used to exclude directories from the search. Common use cases include:

1. Excluding certain directories from search results
2. Limiting the depth of search in specific branches
3. Finding files while skipping .git, node_modules, or other large directories

Key points about `-prune`:
- It returns true and prevents descent into the matched directory
- It must be used with `-o` (OR) to avoid matching the directory itself
- Commonly used with `-type d` to exclude directories

Let me provide a helpful answer with practical examples.

</details>

### 👤 User — 2026-01-08T16:32:40Z

The `-prune` option in `find` excludes directories from the search. Here are the key patterns:

## Basic Syntax

```bash
find path -prune -o -print
```

## Common Use Cases

**Exclude specific directories:**
```bash
# Exclude .git and node_modules from search
find . \( -type d -name ".git" -o -name "node_modules" \) -prune -o -type f -print
```

**Find files but not in certain directories:**
```bash
find . -type f ! -path "*/.git/*" ! -path "*/node_modules/*"
```

**Find only in top-level (limit depth):**
```bash
find . -maxdepth 2 -type f
```

## Key Rules

1. `-prune` **always returns true** for the matched directory
2. Use `-o` (OR) to continue searching after excluding directories
3. Always add `-print` after `-o` to show results

## Example: Find all `.py` files excluding `.venv` directory

```bash
find . -type d -name ".venv" -prune -o -name "*.py" -print
```

The `-prune` prevents `find` from descending into directories that match the condition, which is useful for skipping large directories like `.git`, `node_modules`, `.venv`, or `__pycache__`.


### 🤖 Assistant — 2026-01-08T16:32:45Z

The `-prune` option in `find` excludes directories from the search. Key pattern:

```bash
find . \( -type d -name "DIR_TO_SKIP" \) -prune -o -TYPE -NAME -print
```

**Common examples:**
- Exclude `.git` and `node_modules`: `find . \( -type d -name ".git" -o -name "node_modules" \) -prune -o -print`
- Find Python files excluding `.venv`: `find . -type d -name ".venv" -prune -o -name "*.py" -print`

Remember: `-prune` returns true for the matched directory, so use `-o` to continue searching other paths.
