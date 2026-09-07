---
type: Fact
title: # A cron task shows:

source: hermes
session_id: 20260905_041404_21d523
resource
description: # A cron task shows:

source: hermes
session_id: 20260905_041404_21d523
resource: hermes://session/20260905_041404_21d523

# Conversation

- **Session ID:** `20260905_041404_21d523`
- **Source:** desk
resource: agentmemory://memory/mem_mtpjh6gn_9945f2849e15
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-09-06T08:17:46.382Z
source: agentmemory
strength: 7
---
# Content

# A cron task shows:

source: hermes
session_id: 20260905_041404_21d523
resource: hermes://session/20260905_041404_21d523

# Conversation

- **Session ID:** `20260905_041404_21d523`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-09-05T09:14:58Z
- **Messages:** 16
- **CWD:** `/Volumes/davec`
- **Tokens:** 64371 in / 1850 out

---

### 👤 User — 2026-09-05T09:14:58Z

A cron task shows:
The calendar lookup is also failing because /usr/bin/calendar isn't a personal calendar reader

How to correct this?

### 🤖 Assistant — 2026-09-05T09:15:16Z

<details><summary>Reasoning</summary>

The user is asking about a cron task error related to `/usr/bin/calendar` not being a personal calendar reader. This seems to be a system-level issue on macOS where the traditional `calendar` command isn't available or isn't what they need. Let me check if there are relevant skills for this - the `hermes-cron-troubleshooting` skill seems most relevant here.

Let me load that skill first to see what guidance it provides.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-cron-troubleshooting"
}
```

### 🤖 Assistant — 2026-09-05T09:15:22Z

<details><summary>Reasoning</summary>

The skill didn't cover the calendar path issue directly, so I'll make a quick inference: `/usr/bin/calendar` is typically a system calendar program, not a personal calendar reader. I'll check the Hermes cron job output file and inspect the project/cron context to see what calendar integration is actually expected. First, I need to find the job ID and its latest output markdown.

</details>

**Tool call: terminal**

```json
{
  "command": "cronjob list 2>/dev/null || hermes cron list 2>/dev/null"
}
```

**Tool call: search_files**

```json
{
  "path": "/Users/davec/.hermes/cron",
  "pattern": "calendar",
  "output_mode": "files_only"
}
```

### 🤖 Assistant — 2026-09-05T09:15:37Z

<details><summary>Reasoning</summary>

The cron list doesn’t show an obvious “calendar” job. The next place to look is the actual output or job definition files in `~/.hermes/cron/`, rather than relying on the truncated summary. I’ll inspect `jobs.json` for a calendar-related job and, if needed, read the most recent cron output for the exact `/usr/bin/calendar` failure.

</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/cron/jobs.json"
}
```

**Tool call: terminal**

```json
{
  "command": "ls -t /Users/davec/.hermes/cron/output/*/*.md 2>/dev/null | head -20"
}
```

### 🤖 Assistant — 2026-09-05T09:15:50Z

<details><summary>Reasoning</summary>

The user is asking about a cron task that shows an error: "The calendar lookup is also failing because /usr/bin/calendar isn't a personal calendar reader". However, looking at the cron job list and jobs.json, I don't see any job that explicitly references this error. The jobs I see are:

1. Daily Unfinished-Session Audit - ok
2. agentmemory-okf-mirror - error about model context window
3. hermes-conversations-okf-mirror - error about model context window
4. nightly-okf-index - error about model context window
5. Morning briefing - error about inference config drift
6. Important-mail monitor - error about cannot import name 'ledger_transaction'
7. Evening wind-down - error about model context window
8. Workday start reminder - ok
9. Kilo usage meter - ok

None of these show the "/usr/bin/calendar isn't a personal calendar reader" error. 

I need to look for this error in the recent cron output files, or ask the user which job is showing this error. Let me check some of the recent output files, particularly for the jobs that involve calendar lookups: Morning briefing, Evening wind-down, Workday start reminder, and Important-mail monitor.

Actually, looking at the prompts:
- Morning briefing: "today's calendar events, the local weather..."
- Evening wind-down: "tomorrow's calendar..."
- Workday start reminder: "today's calendar..."
- Important-mail monitor: mail related, not calendar

But none of these show the /usr/bin/calendar error in their last_error. This suggests the error might be in a more recent run output file, or 
