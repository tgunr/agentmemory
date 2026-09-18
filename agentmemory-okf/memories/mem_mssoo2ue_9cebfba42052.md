---
type: Fact
title: # Plan fix for `hermes dashboard` problem

source: hermes
session_id: 20260813_0
description: # Plan fix for `hermes dashboard` problem

source: hermes
session_id: 20260813_045428_e116af
resource: hermes://session/20260813_045428_e116af

# Conversation

- **Session ID:** `20260813_045428_e116a
resource: agentmemory://memory/mem_mssoo2ue_9cebfba42052
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-14T08:26:42.572Z
source: agentmemory
strength: 7
---
# Content

# Plan fix for `hermes dashboard` problem

source: hermes
session_id: 20260813_045428_e116af
resource: hermes://session/20260813_045428_e116af

# Conversation

- **Session ID:** `20260813_045428_e116af`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-08-13T09:55:14Z
- **Ended:** 2026-08-13T15:02:49Z
- **Messages:** 68
- **CWD:** `/Users/davec`
- **Tokens:** 203107 in / 34070 out

---

### 👤 User — 2026-08-13T09:55:19Z

try executing `hermes dashboard`, there is a problem, come up with plan to fix

### 🤖 Assistant — 2026-08-13T09:55:48Z

<details><summary>Reasoning</summary>

I'll load the hermes-agent skill and test the dashboard command to see what's happening.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

**Tool call: terminal**

```json
{
  "command": "which hermes; hermes dashboard 2>&1 | head -60; echo \"EXIT=$?\"",
  "timeout": 90
}
```

### 🤖 Assistant — 2026-08-13T09:57:42Z

<details><summary>Reasoning</summary>

The `hermes dashboard` command is timing out after 90 seconds with no output, and I notice the CLI reference doesn't even mention a `dashboard` subcommand. I should check if this command actually exists by running `hermes --help` and verifying the version to understand what's going on.

</details>

**Tool call: terminal**

```json
{
  "command": "hermes --version 2>&1; echo \"---HELP---\"; hermes --help 2>&1 | head -80",
  "timeout": 30
}
```

### 🤖 Assistant — 2026-08-13T09:58:19Z

<details><summary>Reasoning</summary>

The `dashboard` command exists but it hung when I tried to run it, so I need to check its help output and look at the source code to understand what's going on.

</details>

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/.hermes/hermes-agent && hermes dashboard --help 2>&1 | head -40",
  "timeout": 60
}
```

**Tool call: search_files**

```json
{
  "pattern": "dashboard",
  "path": "/Users/davec/.hermes/hermes-agent/hermes_cli",
  "output_mode": "files_only",
  "limit": 30
}
```

### 🤖 Assistant — 2026-08-13T09:58:43Z

<details><summary>Reasoning</summary>

The `--help` flag responds immediately, so the issue is happening during the actual startup process. I should check the `--status` option and run it with verbose logging in the background to pinpoint where it's getting stuck.

</details>

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/.hermes/hermes-agent && timeout 30 hermes dashboard --status 2>&1 | head -30; echo \"EXIT=$?\"; echo \"=== PORT 9119 ===\"; lsof -nP -iTCP:9119 2>/dev/null | head; echo \"=== HERMES WEB PROCS ===\"; ps aux | grep -Ei 'web_server|dashboard|uvicorn' | grep -v grep | head",
  "timeout": 60
}
```

### 🤖 Assistant — 2026-08-13T09:59:43Z

<details><summary>Reasoning</summary>

So the `hermes dashboard` command actually started a server on port 9119 with an active connection from the Neo Hermes desktop app — it didn't hang, it just blocked in the foreground like a normal server would. The output was truncated by the pipe to `head`, and oddly there was no banner printed at all, which is unusual.

Let me test whether the dashboard is actually working by making HTTP requests to it and checking the logs to see what's happening.

</details>

**Tool call: terminal**

```json
{
  "command": "echo \"=== GET / ===\"; curl -s -o /tmp/hermes-dash-root.html -w 'http=%{http_code} bytes=%{size_download} time=%{time_total}\\n' --max-time 15 http://127.0.0.1:9119/ ; head -c 400 /tmp/hermes-dash-root.html; echo; echo \"=== API health/status ===\"; for p in /api/health /api/status /health /api/config /api/profiles; do printf '%-16s ' \"$p\"; curl -s -o /tmp/o.json -w 'http=%{http_code} bytes=%{size_download}\\n' --max-time 10 \"http://127.0.0.1:9119$p\"; done",
  "timeout": 90
}
```

**Tool call: terminal**

```json
{
  "command": "ls -la /Users/davec/.hermes/logs/ 2>/dev/null | head -20; echo \"=== recent web/dashboard logs ===\"; for f in /Users/davec/.hermes/logs/*web*.log /Users/davec/.hermes/logs/*dash*.log /Users/davec/.hermes/logs/*server*.log; do [ -f \"$f\" ] && { echo \"--- $f ---\"; tail -25 \"$f\"; }; done 2>/dev/null",
  "
