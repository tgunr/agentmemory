---
type: Fact
title: # Fix rsync getcwd No such file directory error

source: hermes
session_id: loca
description: # Fix rsync getcwd No such file directory error

source: hermes
session_id: local-b3f25736880fe12eed8793c5108df67ddb0f407727a3ac2577f36c27e8a2f707
resource: hermes://session/local-b3f25736880fe12eed87
resource: agentmemory://memory/mem_mwah9b4z_865caf92b57b
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-11-10T09:18:14.267Z
source: agentmemory
strength: 7
---
# Content

# Fix rsync getcwd No such file directory error

source: hermes
session_id: local-b3f25736880fe12eed8793c5108df67ddb0f407727a3ac2577f36c27e8a2f707
resource: hermes://session/local-b3f25736880fe12eed8793c5108df67ddb0f407727a3ac2577f36c27e8a2f707

# Conversation

- **Session ID:** `local-b3f25736880fe12eed8793c5108df67ddb0f407727a3ac2577f36c27e8a2f707`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-08T17:21:42Z
- **Ended:** 2026-11-10T02:33:48Z
- **Messages:** 162
- **CWD:** `/Volumes/davec`
- **Tokens:** 144740 in / 51409 out
- **Est. cost:** $-82743.0000

---

### 👤 User — 2026-11-08T17:21:43Z

why this error?
rsyncf -auvn /Volumes/design/Separators/ /Volumes/design/SEPERATORLER/
shell-init: error retrieving current directory: getcwd: cannot access parent directories: No such file or directory
/opt/homebrew/bin/rsync --filter='dir-merge .rsync-filter'  --exclude-from=/Users/davec/.config/rsync/rsync.excludes -auvn /Volumes/design/Separators/ /Volumes/design/SEPERATORLER/
rsync: [Receiver] getcwd(): No such file or directory (2)
rsync error: errors selecting input/output files, dirs (code 3) at util1.c(1226) [Receiver=3.5.0]

### 🤖 Assistant — 2026-11-08T17:21:47Z

<details><summary>Reasoning</summary>

The error: the shell's current working directory no longer exists. The cwd is /Volumes/davec — a SAMBA mount? Actually /Volumes/davec is the cwd. If the volume got unmounted or the current directory was deleted, getcwd fails.

Note: rsync with -n (dry run) doesn't create directories, so it wouldn't need cwd... but rsync's Receiver does getcwd() at startup regardless. So the root cause is the cwd of the shell is a directory that no longer exists (unmounted volume or deleted dir).

Fix: cd to a valid directory (e.g. cd ~) before running.

Let me verify quickly: check if /Volumes/davec exists and if design is mounted.

I can run a terminal command. Let's batch: pwd output fails... check mounts, existence of paths.

Also note rsyncf is presumably an alias/function wrapping rsync. The "shell-init: error" is emitted by bash before running.

Let me check.

</details>

**Tool call: terminal**

```json
{
  "command": "ls -ld /Volumes/davec /Volumes/design 2>&1; echo \"---\"; (cd /Volumes/davec 2>&1 | head -3); echo \"---\"; mount | grep -Ei 'design|davec' "
}
```

### 🤖 Assistant — 2026-11-08T17:24:17Z

<details><summary>Reasoning</summary>

So /Volumes/davec exists now. But my shell's cwd is /Volumes/davec — and `cd /Volumes/davec` in a subshell succeeded (no output means ok). Hmm, but the terminal tool ran fine, so my cwd exists now.

The user's error occurred in their own tab (interactive tab). The likely cause: their shell's cwd was a directory that no longer exists — e.g. they were in a directory inside a mount that got remounted/unmounted, or the SAMBA mount dropped and remounted (cwd inode stale). With smbfs, if the share is remounted, existing shells hold a stale vnode → getcwd fails.

Also `shell-init:` prefix indicates the shell startup (bash) inside a subshell couldn't getcwd — meaning the cwd was already gone at the time.

The key point: rsync's receiver calls getcwd() and dies. Fix: `cd ~` (or cd /) in that shell, then rerun.

Also caution: rsyncf -n dry-run doesn't create dest, so SEPERATORLER missing is fine.

I'll give the answer concisely, and offer to run the dry run from a valid cwd. Actually I can just run it to prove.

Let's run the dry run to show what it'd do (dry-run safe).

</details>

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec && rsync --filter='dir-merge .rsync-filter' --exclude-from=/Users/davec/.config/rsync/rsync.excludes -auvn /Volumes/design/Separators/ /Volumes/design/SEPERATORLER/ 2>&1 | head -20; echo \"EXIT=$?\""
}
```

### 🤖 Assistant — 2026-11-08T17:27:38Z

<details><summary>Reasoning</summary>

Confirmed: the rsync command itself works fine once cwd exists. So the error is purely a dead cwd.

Explain: "shell-init: error retrieving current directory: getcwd" — the shell's cwd no longer exists (SAMBA share remounted/reconnected, or dir deleted/renamed). rsync's receiver always calls getcwd() during startup → code 3.

Also later "file has vanished" due to encoding mangling on SMB names (NFD/NF
