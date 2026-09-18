---
type: Fact
title: # What are the invalid characters in macOS for a file name?

source: kilo
sessio
description: # What are the invalid characters in macOS for a file name?

source: kilo
session_id: 019befac-65f8-716c-a6d7-834c757756d7
resource: kilo://task/019befac-65f8-716c-a6d7-834c757756d7

# Conversation

-
resource: agentmemory://memory/mem_mspdxn4a_dbb0309c64a7
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T01:02:54.502Z
source: agentmemory
strength: 7
---
# Content

# What are the invalid characters in macOS for a file name?

source: kilo
session_id: 019befac-65f8-716c-a6d7-834c757756d7
resource: kilo://task/019befac-65f8-716c-a6d7-834c757756d7

# Conversation

- **Task ID:** `019befac-65f8-716c-a6d7-834c757756d7`
- **Source:** kilo
- **Started:** 2026-01-24T11:03:31Z
- **Ended:** 2026-01-24T11:08:47Z
- **Message blocks:** 10
- **Tokens:** 191635 in / 3355 out

---

### 👤 User — 2026-01-24T11:03:31Z

What are the invalid characters in macOS for a file name?

### 🤖 Assistant — 2026-01-24T11:03:37Z

<details><summary>Reasoning</summary>

The user asked: "What are the invalid characters in macOS for a file name?"


## Investigating file naming rules  
- The query asks for invalid characters in macOS file names, requiring a comprehensive answer.

</details>

### 🤖 Assistant — 2026-01-24T11:03:43Z

<details><summary>Reasoning</summary>

The search results provide clear information on invalid characters in macOS file names.


## Reviewing invalid characters  
- Found that macOS file systems (UFS, HFS+, HFSX) have specific restrictions on file names.  
- Identified from sources that only two characters are invalid for these file systems.

</details>

### 🤖 Assistant — 2026-01-24T11:03:50Z

In macOS, file name restrictions are primarily determined by the underlying Unix-based filesystem (APFS on modern systems, HFS+ on older ones). Here's a comprehensive breakdown of invalid characters and other restrictions:

## Invalid Characters at Filesystem Level

The only characters that are **absolutely invalid** and will prevent file creation are:

- **Forward slash (`/`)**: Used as the path separator in Unix-like systems
- **Null byte (`\0`)**: The null character, which terminates strings in C and many programming languages

## Finder UI Restrictions

While the filesystem allows most Unicode characters, Apple's Finder application has additional restrictions for user interface reasons:

- **Colon (`:`)**: Not allowed in Finder because it's used internally as a path separator (legacy from the old Mac OS). If you create a file with a colon via Terminal, Finder will display it as a forward slash in the filename.

## Other Considerations

- **Reserved names**: Files cannot be named `.` (current directory) or `..` (parent directory)
- **Empty names**: File names cannot be empty
- **Length limits**: 
  - HFS+: 255 characters maximum
  - APFS: 255 UTF-8 bytes (may be fewer characters for multi-byte Unicode)
- **Case sensitivity**: APFS is case-sensitive by default, but the system volume is case-insensitive for compatibility

## Characters That May Cause Issues

While technically allowed, these characters can cause problems in various contexts:

- **Control characters** (ASCII 0-31): May cause issues with some applications
- **Angle brackets (`< >`)**: Can be interpreted as redirection in shell commands
- **Pipe (`|`)**: Used for piping in shell commands  
- **Question mark (`?`)**: Wildcard character in shell
- **Asterisk (`*`)**: Wildcard character in shell
- **Quotes**: Single (`'`) and double (`"`) quotes may need escaping in shell commands
- **Backslash (`\`)**: Escape character in shell
- **Dollar sign (`$`)**: Variable expansion in shell
- **Semicolon (`;`)**: Command separator in shell

## Best Practices

For maximum compatibility and to avoid issues:

- Stick to alphanumeric characters, underscores (`_`), hyphens (`-`), and periods (`.`)
- Avoid spaces if possible (use underscores or hyphens instead)
- If spaces are needed, enclose paths in quotes when using in shell commands
- Test file operations with your intended tools/applications

This information is based on macOS filesystem specifications and common compatibility issues across different applications and contexts.

### 🤖 Assistant — 2026-01-24T11:07:25Z

<details><summary>Reasoning</summary>

The user provided feedback on my previous answer. They showed code from ascii_converter.py lines 13-15:


## Reviewing User Feedback  
- The user provided feedback referencing specific lines from ascii_converter.py.  
- They highlighted lines 13-15, showing code related to replacing invalid characters in file names.

</details>

### 🤖 Ass
