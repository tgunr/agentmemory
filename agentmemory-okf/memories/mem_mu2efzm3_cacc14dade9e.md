---
type: Fact
title: # Fix state.db WAL inode conflict on pve.local

source: hermes
session_id: 20260
description: # Fix state.db WAL inode conflict on pve.local

source: hermes
session_id: 20260914_123113_811454
resource: hermes://session/20260914_123113_811454

# Conversation

- **Session ID:** `20260914_123113_
resource: agentmemory://memory/mem_mu2efzm3_cacc14dade9e
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-09-15T08:17:53.036Z
source: agentmemory
strength: 7
---
# Content

# Fix state.db WAL inode conflict on pve.local

source: hermes
session_id: 20260914_123113_811454
resource: hermes://session/20260914_123113_811454

# Conversation

- **Session ID:** `20260914_123113_811454`
- **Source:** desktop
- **Model:** stepfun/step-3.7-flash:free
- **Started:** 2026-09-14T17:31:14Z
- **Messages:** 83
- **CWD:** `/Volumes/davec`
- **Tokens:** 182924 in / 12204 out

---

### 👤 User — 2026-09-14T17:31:15Z

On pve.local I getting this error:
state.db unavailable: FATAL: a live process holds a deleted state.db-wal or state.db-shm inode while the path names a different (or missing) generation. Refusing to open or write so a second WAL cannot be minted. Stop the gateway, dashboard, and cron writers that hold the deleted sidecar, then reopen. Do not delete the WAL yourself. database.journal_mode: delete is operator containment, not a new default.

Please help correct

### 🤖 Assistant — 2026-09-14T17:31:40Z

<details><summary>Reasoning</summary>

The user is getting a SQLite error on pve.local about a deleted WAL/SHM file being held by a live process. This is the classic SQLite "deleted WAL" issue. I need to:

1. Check what's running on pve.local
2. Find the Hermes gateway process (and maybe dashboard/cron writers) that's holding the deleted state.db-wal/shm
3. Stop the gateway/dashboard/cron writers
4. Reopen/restart them cleanly

Since this is on pve.local (the SSH backend), I need to use terminal commands. Let me start by investigating the running processes and finding what's holding the deleted SQLite files.

First, I should check the Hermes config to understand the setup, then look at running processes, and identify what needs to be restarted.

Let me start with process listing and finding SQLite/state.db references.

</details>

**Tool call: terminal**

```json
{
  "command": "ssh pve.local 'ps aux | grep -iE \"hermes|gateway|dashboard|cron|sqlite\" | grep -v grep'",
  "timeout": 30
}
```

**Tool call: terminal**

```json
{
  "command": "ssh pve.local 'sudo lsof +L1 2>/dev/null | grep -iE \"state\\.db|hermes\" | head -50'",
  "timeout": 30
}
```

**Tool call: terminal**

```json
{
  "command": "ssh pve.local 'find / -name \"state.db*\" 2>/dev/null | head -20'",
  "timeout": 30
}
```

### 🤖 Assistant — 2026-09-14T17:32:31Z

<details><summary>Reasoning</summary>

The find command timed out, which suggests a large filesystem. Let me focus on the Hermes-related directories and find state.db. From the process list, I can see Hermes desktop app running and hermes serve processes. The error mentions gateway, dashboard, and cron writers. Let me search more specifically for state.db in Hermes directories.

</details>

**Tool call: terminal**

```json
{
  "command": "ssh pve.local 'find /home/davec/.hermes -name \"state.db*\" -o -name \"*.db-wal\" -o -name \"*.db-shm\" 2>/dev/null | head -50'",
  "timeout": 30
}
```

**Tool call: terminal**

```json
{
  "command": "ssh pve.local 'sudo lsof +L1 2>/dev/null | grep -E \"state\\.db|\\.db-wal|\\.db-shm\" | head -50'",
  "timeout": 30
}
```

### 🤖 Assistant — 2026-09-14T17:33:05Z

<details><summary>Reasoning</summary>

Found it. PID 3279131 is holding deleted `state.db-wal` and `state.db-shm` inodes. That process is `/home/davec/.hermes/hermes-agent/venv/bin/python -m hermes_cli.main serve --host 127.0.0.1 --port 0`. 

The fix per the error message: stop the gateway, dashboard, and cron writers, then reopen. PID 3279131 is the gateway process. Let me stop it cleanly, then restart. Also check the dashboard (PID 3266870) and the other gateway (PID 806820, 758101). Actually let me stop the problematic gateway first.

I should not delete the WAL files. I need to stop the process that holds them, then the file system will clean up naturally since they're already deleted and just held open by the process.

Plan:
1. Stop PID 3279131 (gateway holding deleted WAL/SHM)
2. Stop the other gateway and dashboard to be safe
3. Restart them cleanly

Actually, per user's memory: gateway should NOT be killed directly. They said "DO NOT kill" and "restart via launchctl". But wait — that was for mini.local. This is pve.local. And the iss
