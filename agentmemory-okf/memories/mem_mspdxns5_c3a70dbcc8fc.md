---
type: Fact
title: # unison stuck at [server: remote+] send [find-res] '\000\000\000\000\000\000\00
description: # unison stuck at [server: remote+] send [find-res] '\000\000\000\000\000\000\000u

source: kilo
session_id: 019bf012-31b2-7699-b250-fe6478117c1b
resource: kilo://task/019bf012-31b2-7699-b250-fe647811
resource: agentmemory://memory/mem_mspdxns5_c3a70dbcc8fc
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T01:02:55.361Z
source: agentmemory
strength: 7
---
# Content

# unison stuck at [server: remote+] send [find-res] '\000\000\000\000\000\000\000u

source: kilo
session_id: 019bf012-31b2-7699-b250-fe6478117c1b
resource: kilo://task/019bf012-31b2-7699-b250-fe6478117c1b

# Conversation

- **Task ID:** `019bf012-31b2-7699-b250-fe6478117c1b`
- **Source:** kilo
- **Started:** 2026-01-24T12:54:42Z
- **Ended:** 2026-01-24T12:55:17Z
- **Message blocks:** 8
- **Tokens:** 319639 in / 2356 out

---

### 👤 User — 2026-01-24T12:54:42Z

unison stuck at [server: remote+] send [find-res] '\000\000\000\000\000\000\000u\001\002...' 125 bytes
[server: remote+] send [rsp] '\000\000\000\000\000\000\000\001\000' 9 bytes
[server: remote_emit+] dump: \011\000\000\000\030\012\000\000\000}rsp\000\000\000\000\000\000\000\001\000\133\000\000\000\022find-res\000\000\000\000\000\000\000u\001\002\001\011Laser/Pages\000\001\002\002\001\237\000\000\000\001\bA\218[\240\188[\161U\001\001\001D\000\002\001\192\000\000\000\001\bA\218\\\215{\149\128\178\001\001\001D\000\001\nLaser/zips\000\001\002\002\001\237\000\000\000\001\bA\218[\240\188[\161U\001\001\001D\000\002\001\192\000\000\000\001\bA\218\\\215{\149\128\178\001\001\001D\000

### 🤖 Assistant — 2026-01-24T12:54:46Z

<details><summary>Reasoning</summary>

The user is reporting an issue with Unison being stuck. The message shows:


## Investigating user issue
- The user reported Unison getting stuck during operation, displaying a specific message.

</details>

### 🤖 Assistant — 2026-01-24T12:54:56Z

<details><summary>Reasoning</summary>

The memory search returned no results, so no previous memories about this issue.


</details>

### 🤖 Assistant — 2026-01-24T12:54:57Z

**Tool call: readFile**

```json
{
  "path": ".unison/unison.log",
  "isOutsideWorkspace": false,
  "content": "/Users/davec/.unison/unison.log",
  "reason": ""
}
```

### 🤖 Assistant — 2026-01-24T12:55:04Z

<details><summary>Reasoning</summary>

The log shows that Unison is syncing between local `/Users/davec/icloud/3cl/design` and remote `ssh://pve.local//beta/3cl/design`.


## Observing sync behavior
- Unison is syncing files between `/Users/davec/icloud/3cl/design` locally and `ssh://pve.local//beta/3cl/design` remotely.
- The log indicates multiple attempts to initiate the synchronization process.

</details>

### 🤖 Assistant — 2026-01-24T12:55:07Z

**Tool call: readFile**

```json
{
  "path": ".unison/design.prf",
  "isOutsideWorkspace": false,
  "content": "/Users/davec/.unison/design.prf",
  "reason": ""
}
```

### 🤖 Assistant — 2026-01-24T12:55:11Z

<details><summary>Reasoning</summary>

Now I can see the configuration. The profile is set to sync only specific paths:


## Examining Sync Configuration
- The profile is configured to sync only specific paths: `Laser/zips` and `Laser/Pages`.

</details>

### 🤖 Assistant — 2026-01-24T12:55:16Z

Based on the Unison log and configuration, your sync is hanging during the file discovery phase when scanning the `Laser/Pages` and `Laser/zips` directories. This is a large sync (172GB from remote to local) with many files, which commonly causes hangs.

## Root Cause Analysis

The issue appears to be related to:

1. **Large directory structures**: The `Laser` directory contains thousands of files across many subdirectories
2. **Network/SSH timeouts**: The connection may be timing out during the intensive file scanning phase
3. **Memory pressure**: Unison may be running out of memory processing the file lists

## Immediate Solutions

### 1. **Kill the current Unison process**
```bash
# Find and kill any running unison processes
ps aux | grep unison
kill -9 <process_id>
```

### 2. **Add timeout and retry settings to your profile**

Edit `.unison/design.prf` and add these settings:

```
# Increase SSH connection timeout
servercmdtimeout = 300

# Add retry settings
retry = 3
retrydelay = 10

# Reduce memory usage
maxthreads = 1

# Add connection keepalive
sshargs = -o ServerAliveInterval=60 -o ServerAliveCountMax=3
```

### 3. **Sync in smaller batches**

Temporarily modify your profile to sync one directory at a time:

```
# Comment out one path to sync the other first
path = Laser/zips
# path = Laser/Pages
```

### 4. **Check SSH connection stability**

Test your S
