---
type: Fact
title: # Investigate pid 1996 high cpu usage

source: hermes
session_id: 20260816_05310
description: # Investigate pid 1996 high cpu usage

source: hermes
session_id: 20260816_053105_12a4ee
resource: hermes://session/20260816_053105_12a4ee

# Conversation

- **Session ID:** `20260816_053105_12a4ee`
-
resource: agentmemory://memory/mem_mtg12bkn_c718a66894ee
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:32:24.518Z
source: agentmemory
strength: 7
---
# Content

# Investigate pid 1996 high cpu usage

source: hermes
session_id: 20260816_053105_12a4ee
resource: hermes://session/20260816_053105_12a4ee

# Conversation

- **Session ID:** `20260816_053105_12a4ee`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-08-16T10:43:07Z
- **Ended:** 2026-08-24T22:20:25Z
- **Messages:** 32
- **CWD:** `/Users/davec`
- **Tokens:** 57407 in / 6751 out

---

### 👤 User — 2026-08-16T10:43:07Z

why is pid 1996 using so much cpu?

### 🤖 Assistant — 2026-08-16T10:43:14Z

<details><summary>Reasoning</summary>

The user is asking why a specific process (pid 1996) is using so much CPU. I'm running in an ssh terminal backend on a Darwin (macOS) system as user davec. Let me investigate this process.

Let me check the process. I'll use terminal commands to inspect pid 1996

</details>

**Tool call: terminal**

```json
{
  "command": "ps -o pid,ppid,%cpu,%mem,user,command -p 1996 2>/dev/null; echo \"----\"; ps auxw -p 1996 2>/dev/null"
}
```

### 🤖 Assistant — 2026-08-16T10:46:49Z

<details><summary>Reasoning</summary>

The command timed out because `ps auxw` enumerated ALL processes (the machine is loaded with many processes, and there were tons of find processes etc.). But I got useful info on the target pid 1996.

Let me look at the key data for pid 1996:
- PID 1996, PPID 1, %CPU 9.1, %MEM 7.3, user davec
- COMMAND: `/System/Library/ExtensionKit/Extensions/LoginItems.appex/Contents/MacOS/LoginItems -BSServiceDomains {...} -LaunchArguments ...`
- STAT: `TNs` — interesting! The `T` in STAT means "stopped" (traced/suspended), `N` = low priority (nice), `s` = session leader. Wait, `T` means stopped (by SIGSTOP or being debugged). Actually `T` = stopped, usually by a job control signal (Ctrl+Z) or being traced. And it's been running 647:34 CPU time.
- RSS 2441168 KB = ~2.4 GB resident memory. That's a HUGE memory footprint for a LoginItems extension. That's the 7.3% MEM.

So pid 1996 is the system `LoginItems` extension host process. It's using 9.1% CPU and 7.3% memory (2.4 GB RSS). The state `TNs` — `T` stopped. Hmm, but it's showing 9.1% CPU which is odd for a stopped process... Actually `%CPU` is averaged over the process lifetime or since start. Let me get a cleaner read.

Actually, the question is "why is pid 1996 using so much cpu?" I should give a focused answer. Let me gather more targeted info rather than dumping the whole process table (which caused the timeout).

Let me get:
1. The actual command of pid 1996 (already have it).
2. What it's doing — sample the process with `sample` or check `top` for it, or look at the threads.
3. The `TNs` state — T = stopped. That's weird. Let me check why it's stopped. Actually maybe the STAT T is transient. Let me re-run ps just for that pid quickly.

Let me run a focused set of commands:
- `ps -o pid,ppid,state,%cpu,%mem,rss,etime,command -p 1996` (fast, single pid)
- `sample 1996 1 -mayDie` to see what threads are doing (might need sudo; it's user davec's process so sample should work without sudo for own process). Actually sample of own process works.
- Check `lsof -p 1996` maybe too much.

Actually since this is an ExtensionKit LoginItems host, the high CPU + 2.4GB memory suggests it's the Login Items extension manager. LoginItems runs extensions that are set to launch at login. A 2.4GB footprint is unusual — it could be a runaway login item (e.g., something with a memory leak). But the CPU at 9.1% is moderate.

Wait — but is 9.1% actually "so much"? On a 32GB machine with many processes, 9.1% CPU isn't crazy. But the user perceives it as high. The more notable thing is 7.3% MEM = 2.4 GB RAM, which is a lot for LoginItems.

Let me get a quick focused read on the process and sample it. Let me also try to find what login items are loaded, and whether there's a thread spinning.

Let me run targeted commands. I'll avoid ps auxw (which timed out due to huge process count — there are many `find` processes running wild, suggesting something is spawning find loops). Actually interesting: there are several long-running `find` processes (pid 39734 find /Volumes/davec, pid 85992 find / -name okf_m
