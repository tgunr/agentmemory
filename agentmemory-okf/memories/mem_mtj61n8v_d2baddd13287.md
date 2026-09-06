---
type: Fact
title: # Time Machine Samba Backup Error

source: hermes
session_id: claude__32f089a3-3
description: # Time Machine Samba Backup Error

source: hermes
session_id: claude__32f089a3-3de4-4b3e-96a1-be42acff28b3
resource: hermes://session/claude__32f089a3-3de4-4b3e-96a1-be42acff28b3

# Conversation

- **
resource: agentmemory://memory/mem_mtj61n8v_d2baddd13287
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:15:09.522Z
source: agentmemory
strength: 7
---
# Content

# Time Machine Samba Backup Error

source: hermes
session_id: claude__32f089a3-3de4-4b3e-96a1-be42acff28b3
resource: hermes://session/claude__32f089a3-3de4-4b3e-96a1-be42acff28b3

# Conversation

- **Session ID:** `claude__32f089a3-3de4-4b3e-96a1-be42acff28b3`
- **Source:** claude
- **Model:** None
- **Started:** 2025-08-06T12:00:13Z
- **Ended:** 2025-08-06T12:11:50Z
- **Messages:** 4
- **CWD:** `/Users/davec`

---

### 👤 User — 2025-08-06T12:00:14Z

On my timemachine backup to a samba share I am getting `“/Volumes/Work/.#N1.txt” could not be backed up because there was not enough space on the backup disk even after older backups were deleted.

Select a larger backup disk or make the backup smaller by excluding files.` There is plenty of space available on the server at `ssh pve.root` and I want to fix this.

### 🤖 Assistant — 2025-08-06T12:05:40Z

This is a common Time Machine issue when backing up to Samba/SMB shares. The error about "not enough space" is often misleading - it's usually not actually about disk space but rather about Time Machine's sparse bundle format or network connectivity issues.

Let me help you troubleshoot this systematically:
```
This block is not supported on your current device yet.
```

Great! I can see your server has plenty of space. The Time Machine backup location is at `/tmpool/timemachine` with 4.7T available. Now let's check the Time Machine backup more closely:
```
This block is not supported on your current device yet.
```

Now let's check the sparse bundle details:
```
This block is not supported on your current device yet.
```

Let's check the Info.plist to see the sparse bundle configuration:
```
This block is not supported on your current device yet.
```

Now let's check how much space is actually used by the bands in the sparse bundle:
```
This block is not supported on your current device yet.
```

Let's also check the current mount status on your Mac to see how the backup volume is mounted:
```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```

Let me try a different approach to check the mount status:
```
This block is not supported on your current device yet.
```

Perfect! Now I can see the issue. You have `/Volumes/Work` mounted which is part of your external drive setup, and there are also Time Machine local snapshots. Let's check the Time Machine configuration:
```
This block is not supported on your current device yet.
```

I see you have two Time Machine destinations:
1. A network destination (SMB to your server)
2. A local destination on `/Volumes/Time Machine`

Now let's check the Time Machine status:
```
This block is not supported on your current device yet.
```

Based on my analysis, here's what's happening and how to fix it:

## Problem Analysis

The issue isn't actually about server disk space (you have plenty: 4.7T available). The problem is likely one of the following:

1. **Sparse Bundle Size Limit**: Your sparse bundle is configured for 16TB total (`<integer>16000000000000</integer>` bytes), but Time Machine may be having issues with band allocation or mounting.

2. **Samba/SMB Protocol Issues**: Network Time Machine backups over SMB can sometimes have issues with file locking, especially with dot files like `.#N1.txt`.

3. **Local vs Network Backup Conflict**: You have both local and network Time Machine destinations, which can sometimes cause conflicts.

## Solutions to Try

### Option 1: Fix the Network Backup Issues (Recommended)

First, let's try to fix the network backup by temporarily disabling the local backup and focusing on the network one:
```
This block is not supported on your current device yet.
```

Let me check if we can unmount the sparse bundle and remount it:
```
This block is not supported on your current device yet.
```

Now, here's what I recommend you do to fix this:

## Step-by-Step Fix

### 1. **Stop Current Backup and Clean Up**
```bash
# Stop any running backup
tmutil stopbackup

# Remove the local Time Machine destination temporarily 
# (you'll need to do this in System Preferences > Time Machine)
```

### 2. **Check and Fix Sparse Bundle 
