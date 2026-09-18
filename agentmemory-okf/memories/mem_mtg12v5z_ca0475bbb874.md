---
type: Fact
title: # List top memory consuming processes

source: hermes
session_id: 20260827_06041
description: # List top memory consuming processes

source: hermes
session_id: 20260827_060410_2dc696
resource: hermes://session/20260827_060410_2dc696

# Conversation

- **Session ID:** `20260827_060410_2dc696`
-
resource: agentmemory://memory/mem_mtg12v5z_ca0475bbb874
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260827_060410_2dc696"]
timestamp: 2026-08-30T16:32:49.889Z
source: agentmemory
strength: 7
---
# Content

# List top memory consuming processes

source: hermes
session_id: 20260827_060410_2dc696
resource: hermes://session/20260827_060410_2dc696

# Conversation

- **Session ID:** `20260827_060410_2dc696`
- **Source:** desktop
- **Model:** upstage/solar-pro4:free
- **Started:** 2026-08-27T11:04:11Z
- **Ended:** 2026-08-27T16:59:44Z
- **Messages:** 8
- **Tokens:** 101665 in / 1121 out

---

### 👤 User — 2026-08-27T11:04:11Z

what are the top processes using memory?

### 👤 User — 2026-08-27T12:11:25Z

[System: The active model for this chat has changed to upstage/solar-pro4:free via provider nous. From this point forward, use this runtime metadata when answering questions about what model/provider is active.]

### 👤 User — 2026-08-27T12:11:36Z

what are the top processes using memory?

### 🤖 Assistant — 2026-08-27T12:11:43Z

<details><summary>Reasoning</summary>

The user wants to know what processes are using the most memory on their system. This is a macOS system (based on the conversation context - they're on mini.local with macOS). I can use the `top` or `ps` commands to find memory usage. Let me use a command that sorts processes by memory usage.

I'll use `ps aux --sort=-%mem | head -20` or similar to get the top memory-consuming processes. On macOS, the flags might be slightly different - let me use `ps aux -m` or `top` command.

Actually, a good approach would be:
- `ps aux -m | head -20` to sort by memory
- Or `top -l 1 -o mem` for a quick snapshot

Let me use `ps aux --sort=-%mem | head -15` which should work on most Unix-like systems, including macOS. Actually, macOS `ps` might not support `--sort`. Let me use `top -l 1 -o mem` instead, which is macOS-specific and gives a sorted snapshot.

Or I could use `ps aux -m | head -20` which sorts by memory on macOS.

Let me just run a command and see.

</details>

**Tool call: terminal**

```json
{
  "command": "ps aux -m | head -20"
}
```

### 🤖 Assistant — 2026-08-27T12:11:54Z

<details><summary>Reasoning</summary>

The user asked for top processes using memory. Let me run a better command that sorts by RSS (resident set size) to show actual memory usage.

</details>

**Tool call: terminal**

```json
{
  "command": "ps -eo pid,ppid,user,rss,vsz,command | awk '{if($1!=\"PID\") print $0}' | sort -k4 -rn | head -25"
}
```

### 🤖 Assistant — 2026-08-27T12:12:38Z

<details><summary>Reasoning</summary>

**Preparing memory profile summary**

I'm going to list the relevant processes with their memory usage in MB instead of raw RSS, and include a total system memory summary.

</details>

Top processes by **RSS (physical memory)** as of now:

| # | PID | USER | RSS (MB) | COMMAND |
|---|-----|------|----------|---------|
| 1 | 80586 | davec | 143 | Hermes Helper (Renderer) — Chrome renderer for the Hermes desktop app |
| 2 | 453 | _mds_stores | 90 | Spotlight/metadata store daemon |
| 3 | 81021 | davec | 87 | hermes serve (Python — the Hermes server) |
| 4 | 81354 | davec | 82 | fileproviderd (macOS File Provider framework) |
| 5 | 62099 | root | 70 | ReportCrashService (Apple crash reporter) |
| 6 | 50694 | davec | 70 | hermes serve (isolated — another Python Hermes server instance) |
| 7 | 40455 | davec | 55 | iTerm2 |
| 8 | 89376 | davec | 50 | Finder |
| 9 | 82687 | davec | 47 | Neo (browser) renderer helper |
| 10 | 80517 | davec | 40 | Hermes desktop app |
| 11 | 399 | _driverkit | 37 | DriverKit AppleBCMWLAN (Wi-Fi driver) |
| 12 | 1292 | davec | 29 | hermes-webui server (Python) |
| 13 | 93052 | davec | 25 | mediaanalysisd (media analysis daemon) |
| 14 | 41641 | davec | 23 | tui_gateway.entry (TUI gateway) |
| 15 | 82649 | davec | 22 | Neo browser app |
| 16 | 31753 | davec | 20 | tui_gateway.entry (the agent gateway — ~540MB per your memory, but RSS is ~20MB here; most is likely swap/shared) |
| 17 | 4174 | davec | 18 | tui_gateway.entry (condensed) |
| 18 | 90341 | davec | 16 | tui_gateway.entry (another worker) |
| 19 | 16578 | davec | 16 | mcp-atlassian (Python MCP server) |
| 20 | 16686 | davec | 16 | hermes_cli gateway run (supervisor) |

**Notes:**
- The TUI gateway (`tui_gateway.entry`, PID 31753) shows only ~
