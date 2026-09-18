---
type: Fact
title: # Time Machine Samba Backup Error

source: claude
session_id: 32f089a3-3de4-4b3e
description: # Time Machine Samba Backup Error

source: claude
session_id: 32f089a3-3de4-4b3e-96a1-be42acff28b3
resource: claude://conversation/32f089a3-3de4-4b3e-96a1-be42acff28b3

# Conversation

- **Session ID:
resource: agentmemory://memory/mem_mtj6c0ft_8e243607cd10
tags: ["okf", "okf-claude", "claude", "claude://conversation/32f089a3-3de4-4b3e-96a1-be42acff28b3"]
timestamp: 2026-09-01T21:23:13.207Z
source: agentmemory
strength: 7
---
# Content

# Time Machine Samba Backup Error

source: claude
session_id: 32f089a3-3de4-4b3e-96a1-be42acff28b3
resource: claude://conversation/32f089a3-3de4-4b3e-96a1-be42acff28b3

# Conversation

- **Session ID:** `32f089a3-3de4-4b3e-96a1-be42acff28b3`
- **Source:** claude
- **Started:** 2025-08-06T12:00:13Z
- **Messages:** 4
- **Summary:** **Conversation Overview**

The user encountered a Time Machine backup error stating there wasn't enough space on their backup disk when trying to back up to a Samba share, despite having plenty of available space on their server. Claude systematically diagnosed the issue using SSH commands to check server disk space (4.7T available on /tmpool/timemachine), examined the Time Machine sparse bundle configuration, and analyzed the backup destinations. The investigation revealed the user had both local and network Time Machine destinations configured, with the network destination being a properly configured Samba share on their server at pve.root.

The root cause was identified as an Emacs lock file (.#N1.txt) - a symbolic link created when editing files on the network-mounted /Volumes/Work directory. This temporary file was causing Time Machine to fail over the SMB connection since the protocol doesn't handle symbolic links reliably in backup scenarios. Claude removed the problematic lock file and successfully initiated a network backup to destination 855A9641-1F3C-4BCD-B064-1D4989E65098. The user questioned why Time Machine backs up temporary files at all, leading to a detailed explanation of Time Machine's "everything by default" philosophy and its limited built-in exclusions for application-specific temporary files.

Claude provided comprehensive recommendations including configuring Emacs to disable lock files on network volumes, implementing smart exclusion strategies for development files, and suggesting a better workflow architecture where active development happens locally with strategic syncing to network storage for archival and sharing purposes.

**Tool Knowledge**

SSH commands proved essential for diagnosing Time Machine network backup issues. Using `ssh pve.root "df -h"` and `ssh pve.root "ls -la /tmpool/timemachine/"` provided accurate server-side disk space and sparse bundle information that contradicted the misleading Time Machine error message. The `tmutil destinationinfo` and `tmutil status` commands revealed multiple backup destinations and current backup state. When dealing with Samba shares, checking the configuration with `ssh pve.root "grep -A 5 -i timemachine /etc/samba/smb.conf"` showed proper Time Machine optimization settings. The `tmutil startbackup -d [destination-UUID]` command allowed targeting specific backup destinations when multiple were configured. For identifying problematic files, `ls -la` with specific paths revealed symbolic links that Time Machine couldn't handle over SMB, and `find "/Volumes/Work" -name ".#*" -type l` helped locate similar temporary files that could cause future issues.

---

### 👤 User — 2025-08-06T12:00:14Z

On my timemachine backup to a samba share I am getting `“/Volumes/Work/.#N1.txt” could not be backed up because there was not enough space on the backup disk even after older backups were deleted.

Select a larger backup disk or make the backup smaller by excluding files.` There is plenty of space available on the server at `ssh pve.root` and I want to fix this.

---

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
This block is not supported on your curr
