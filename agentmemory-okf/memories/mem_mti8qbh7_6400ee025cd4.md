---
type: Fact
title: # Unison Sync Issue

source: abacus
session_id: 10897fd69a
resource: abacus://co
description: # Unison Sync Issue

source: abacus
session_id: 10897fd69a
resource: abacus://conversation/10897fd69a

# Conversation

- **Session ID:** `10897fd69a`
- **Source:** abacus.ai
- **Project:** AI Vault
- 
resource: agentmemory://memory/mem_mti8qbh7_6400ee025cd4
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/10897fd69a"]
timestamp: 2026-09-01T05:42:33.764Z
source: agentmemory
strength: 7
---
# Content

# Unison Sync Issue

source: abacus
session_id: 10897fd69a
resource: abacus://conversation/10897fd69a

# Conversation

- **Session ID:** `10897fd69a`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-01-28T13:44:27+00:00
- **Messages:** 26

---

### 👤 User

unison has been running for three days syncing a very large folder and now hanging at `[update] Setting archive for //Mini.local//Users/davec/Library/Mobile Documents/com~apple~CloudDocs/3CL/design/Laser` what should I do?

---

### 🤖 Assistant

This looks like Unison is stuck while trying to update the archive metadata for a specific path. Here are some steps to try:

1. **Force quit Unison** - Stop the current process (Ctrl+C or force quit). The archive should be in a consistent state even if interrupted during metadata updates.

2. **Check disk space** - Verify you have sufficient free space on both sides of the sync, especially on the Mini.local machine. Archive updates can fail silently if disk space is low.

3. **Verify the path exists** - Make sure the directory at `//Mini.local//Users/davec/Library/Mobile Documents/com~apple~CloudDocs/3CL/design/Laser` actually exists and is accessible. iCloud CloudDocs paths can sometimes be problematic.

4. **Clear the archive** - If the above doesn't help, you can delete the Unison archive files and restart:
   - Find your Unison archive directory (typically `~/.unison/` on macOS)
   - Back it up first, then delete the `.unisonarchive` files related to this sync
   - Run Unison again - it will rebuild the

archive (slower first run, but may resolve the hang)

5. **Check for permission issues** - Ensure the user running Unison has read/write permissions to both the source and destination, especially for the CloudDocs folder which can have restrictive permissions.

6. **Try with verbose logging** - Run Unison with `-logfile` and `-debug all` flags to see exactly where it's hanging:
   ```
   unison -logfile /tmp/unison.log -debug all <your-profile>
   ```

7. **Update Unison** - If you're on an older version, try updating to the latest version as there may be bug fixes for archive handling.

The CloudDocs path is particularly tricky since iCloud can lock files or have sync conflicts. That might be the root cause here.

---

### 👤 User

How can I tell when that last message occurred? Maybe I should wait longer? It chugged along for three days on thousands of files.

---

### 🤖 Assistant

Good question. You can check when that message was logged by:

1. **Look at the terminal output timestamp** - If your terminal shows timestamps, check when that line appeared.

2. **Check the log file** - If you ran Unison with `-logfile`, check the modification time of that log file:
   ```
   ls -l /tmp/unison.log
   stat /tmp/unison.log
   ```
   The timestamp will tell you when it last wrote to the log.

3. **Use `lsof` to see if Unison is still active** - This will show if the process is actually doing anything:
   ```
   lsof -p <unison-pid>
   ```
   If file handles are changing, it's still working. If they're static, it's hung.

4. **Monitor system activity** - Check Activity Monitor (macOS) to see if Unison is using CPU/disk I/O. If it's at 0% CPU and 0% disk activity for several minutes, it's likely hung.

Given that it chugged along for three days on thousands of files, **waiting a bit longer might be reasonable** - but only if you see signs of activity (CPU usage, disk I/O, or log file updates).

If the log hasn't been updated in 30+ minutes and there's no system activity, it's probably stuck.

The CloudDocs folder is known to be slow and problematic with Unison, so a multi-day sync isn't unusual. But if there's genuinely no activity, force quitting and trying the archive rebuild approach is your best bet.

---

### 👤 User

$ pstree -sp 38035
-+= 38035 davec /Applications/Unison.app/Contents/MacOS/Unison -debug verbose laser
 \--= 38046 davec ssh -l davec pve.local -e none unison -server __new-rpc-mode

---

### 🤖 Assistant

Good diagnostic! The process tree shows Unison is still running and ha
