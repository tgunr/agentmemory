---
type: Fact
title: # @/mimic  explain what this script does and how to use it

source: kilo
session
description: # @/mimic  explain what this script does and how to use it

source: kilo
session_id: b07f28b6-b39b-42d7-a425-b1802684df8d
resource: kilo://task/b07f28b6-b39b-42d7-a425-b1802684df8d

# Conversation

- 
resource: agentmemory://memory/mem_mspcpgxh_643c77a9c7ec
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T00:28:33.560Z
source: agentmemory
strength: 7
---
# Content

# @/mimic  explain what this script does and how to use it

source: kilo
session_id: b07f28b6-b39b-42d7-a425-b1802684df8d
resource: kilo://task/b07f28b6-b39b-42d7-a425-b1802684df8d

# Conversation

- **Task ID:** `b07f28b6-b39b-42d7-a425-b1802684df8d`
- **Source:** kilo
- **Started:** 2026-01-08T17:55:01Z
- **Ended:** 2026-01-08T17:55:37Z
- **Message blocks:** 5
- **Tokens:** 29331 in / 1898 out

---

### 👤 User — 2026-01-08T17:55:01Z

@/mimic  explain what this script does and how to use it

### 🤖 Assistant — 2026-01-08T17:55:04Z

<details><summary>Reasoning</summary>

The user is asking me to explain what the `mimic` script does and how to use it. Let me analyze the script:

1. **Purpose**: This is a bash script that allows executing commands across multiple remote hosts simultaneously via SSH. It essentially "mimics" file operations across multiple machines.

2. **Key components**:
   - Configuration file: `~/.mimic/remotes` - stores the list of remote hosts
   - Log file: `~/Library/Logs/mimic.log` - logs executed commands
   - Debug mode: `-t` flag to test without executing
   - New remotes: `-n` flag to recreate the remotes list
   - Show remotes: `-s` flag to display current remotes list

3. **Available commands** (via symlinks or renaming):
   - `mmv` - move files on all remotes
   - `mrm` - remove files on all remotes
   - `mcp` - copy files on all remotes
   - `mchmod` - change permissions on all remotes
   - `mchown` - change ownership on all remotes
   - `mchgrp` - change group on all remotes
   - `mrmdir` - remove directories on all remotes
   - `mls` - list files on all remotes

4. **How it works**:
   - Reads hosts from `~/.mimic/remotes`
   - When invoked as one of the command variants (mmv, mrm, etc.), it executes that command on all remote hosts via SSH
   - Logs successful commands to `~/Library/Logs/mimic.log`
   - Logs errors with timestamps

5. **Setup**: 
   - Create symlinks to the script with names like mmv, mrm, mcp, etc.
   - On first run, it prompts for remote hostnames/IPs
   - Requires SSH access to configured hosts
   
I'll break down the documentation with precision, focusing on the script's core functionality and usage. The script provides a powerful mechanism for simultaneous remote file management across multiple hosts through SSH. Its design allows streamlined batch operations, enabling sysadmins to execute file-related tasks efficiently across an infrastructure.

</details>

### 👤 User — 2026-01-08T17:55:11Z

# Mimic Script Documentation

## Overview

[`mimic`](mimic) is a bash script that executes commands across multiple remote hosts simultaneously via SSH. It essentially "mimics" file operations (move, copy, remove, etc.) across all configured machines at once.

## Configuration

| Setting | Location |
|---------|----------|
| Remote hosts list | `~/.mimic/remotes` |
| Command log | `~/Library/Logs/mimic.log` |

## Command-Line Options

| Option | Description |
|--------|-------------|
| `-h` | Display help message |
| `-t` | Test mode - shows commands without executing |
| `-n` | Create new remotes list (prompts for hosts again) |
| `-s` | Show current remote hosts list |

## Available Commands

The script uses the script name to determine which command to execute. Create symlinks or rename the script:

| Command | Action |
|---------|--------|
| `mmv` | Execute `mv` on all remotes |
| `mrm` | Execute `rm` on all remotes |
| `mcp` | Execute `cp` on all remotes |
| `mchmod` | Execute `chmod` on all remotes |
| `mchown` | Execute `chown` on all remotes |
| `mchgrp` | Execute `chgrp` on all remotes |
| `mrmdir` | Execute `rmdir` on all remotes |
| `mls` | Execute `ls` on all remotes |

## Setup

```bash
# Make the script executable
chmod +x mimic

# Create symlinks for commands
ln -s mimic mmv
ln -s mimic mrm
ln -s mimic mcp
ln -s mimic mchmod
ln -s mimic mchown
ln -s mimic mchgrp
ln -s mimic mrmdir
ln -s mimic mls
```

## Usage Examples

```bash
# First run: prompts for remote hosts
./mimic

# Show configured remotes
./mimic -s

# Create new remotes list
./mimic -n

# Test mode - see what would be executed
./mimic -t

# Remove a file from all remotes
mrm /tmp/old-fil
