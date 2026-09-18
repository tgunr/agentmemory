---
type: Fact
title: # Resilvering in Progress.

source: chatgpt
session_id: 5981db86-416b-4144-a2e8-
description: # Resilvering in Progress.

source: chatgpt
session_id: 5981db86-416b-4144-a2e8-08febedde863
resource: chatgpt://conversation/5981db86-416b-4144-a2e8-08febedde863

# Conversation

- **Session ID:** `5
resource: agentmemory://memory/mem_mtj5nzne_08bf2237f791
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/5981db86-416b-4144-a2e8-08febedde863"]
timestamp: 2026-09-01T21:04:32.480Z
source: agentmemory
strength: 7
---
# Content

# Resilvering in Progress.

source: chatgpt
session_id: 5981db86-416b-4144-a2e8-08febedde863
resource: chatgpt://conversation/5981db86-416b-4144-a2e8-08febedde863

# Conversation

- **Session ID:** `5981db86-416b-4144-a2e8-08febedde863`
- **Source:** chatgpt (OpenAI)
- **Started:** 2023-06-17T14:58:43.687909+00:00
- **Messages:** 20

---

### 👤 User

root@pve ~ # zpool status tmpool
  pool: tmpool
 state: DEGRADED
status: One or more devices is currently being resilvered.  The pool will
	continue to function, possibly in a degraded state.
action: Wait for the resilver to complete.
  scan: resilver in progress since Fri Jun 16 15:02:01 2023
	198G scanned at 3.85M/s, 135G issued at 2.63M/s, 859G total
	72K resilvered, 15.76% done, no estimated completion time
config:

	NAME                     STATE     READ WRITE CKSUM
	tmpool                   DEGRADED     0     0     0
	  mirror-0               ONLINE       0     0     0
	    sdd                  ONLINE       0     0     0
	    sde                  ONLINE       0     0     0
	  mirror-1               DEGRADED   133     0     0
	    sdf                  DEGRADED    68     0 1.47K  too many errors
	    7761642338160422666  FAULTED      0     0     0  was /dev/sdn1
errors: List of errors unavailable: pool I/O is currently suspended

---

### 🤖 Assistant

The output of the `zpool status` command provides important information about the status of your ZFS pool.

Here's a breakdown of your pool's status:

- Pool Name: `tmpool`
- State: `DEGRADED` - This means that the pool has experienced a failure of one or more devices, but is still functional.

The message "One or more devices is currently being resilvered. The pool will continue to function, possibly in a degraded state." suggests that there is currently a resilvering process going on. Resilvering is a process where ZFS is trying to repair an error, often by rebuilding data that was on a failed disk onto a replacement disk. This can be a time-consuming process, particularly for large amounts of data.

The "scan" line provides details about the ongoing resilvering process. It has been going on since June 16, 2023. So far, 198G has been scanned and 135G has been issued for resilvering from a total of 859G. The process is 15.76% complete, but there is currently no estimated completion time.

In the configuration part of the output, it shows that your pool consists of two mirrors. `mirror-0`, composed of `sdd` and `sde` drives, is in an online state, which means it's operating normally. However, `mirror-1`, composed of `sdf` and `7761642338160422666`, is in a degraded state.

Within `mirror-1`, the `sdf` drive is also degraded due to too many errors, and the drive `7761642338160422666` (which was `/dev/sdn1`) is in a faulted state, meaning it has failed.

Finally, the "errors" line indicates that the list of errors is currently unavailable because pool I/O is suspended. This is likely due to the ongoing resilvering process.

Given this status, the recommended action is to wait for the resilvering to complete. However, keep in mind that the 'sdf' drive in the `mirror-1` appears to have too many errors and might need to be replaced, and the drive that was `/dev/sdn1` is already faulted and likely needs replacement as well. You may want to prepare for these replacements if you haven't already done so.

---

### 👤 User

I cannot export that pool, zpool export tmpool just hangs

---

### 🤖 Assistant

The `zpool export` command is used to gracefully remove a ZFS pool from the system. However, if the pool is currently busy (such as undergoing a resilver operation or if there are active I/O operations), the export operation can hang or take longer than usual.

Given the output of `zpool status`, your pool is currently in the process of resilvering, which is likely the reason why the export operation is hanging.

There are a few options you can consider:

1. **Wait for the resilvering operation to complete:** This is the safest option as it allows the ongoing data recovery to complete. However, this might not be ideal if the resilvering process is taking a long time and you urgently need to export the
