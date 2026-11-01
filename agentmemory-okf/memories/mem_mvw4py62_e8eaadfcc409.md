---
type: Fact
title: # Kill all Hermes processes

source: hermes
session_id: 20261030_004614_797bda
r
description: # Kill all Hermes processes

source: hermes
session_id: 20261030_004614_797bda
resource: hermes://session/20261030_004614_797bda

# Conversation

- **Session ID:** `20261030_004614_797bda`
- **Source:
resource: agentmemory://memory/mem_mvw4py62_e8eaadfcc409
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/Desktop"]
timestamp: 2026-10-31T08:18:29.150Z
source: agentmemory
strength: 7
---
# Content

# Kill all Hermes processes

source: hermes
session_id: 20261030_004614_797bda
resource: hermes://session/20261030_004614_797bda

# Conversation

- **Session ID:** `20261030_004614_797bda`
- **Source:** desktop
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-30T05:46:14Z
- **Ended:** 2026-10-30T15:47:01Z
- **Messages:** 18
- **CWD:** `/Users/davec/Desktop`
- **Tokens:** 75160 in / 5455 out
- **Est. cost:** $-62182.0000

---

### 👤 User — 2026-10-30T05:46:14Z

how to  kill all hermes processes

### 🤖 Assistant — 2026-10-30T05:46:24Z

<details><summary>Reasoning</summary>

The user asks how to kill all hermes processes. Given memory: gateway on mini (~540MB) — DO NOT kill; restart via launchctl. Also warning about `pkill -f` loops killing SSH.

Let me give a concise answer. Maybe check what's running to be helpful. But answer should be brief. Let me check processes quickly to give accurate commands (pgrep -fl hermes) — but careful: this is the agent runtime itself; running pgrep is safe.

Note the runtime is on mini.local per memory, but cwd is Desktop on pro? Memory says viewer=pro.local (GUI); agent runtime on mini.local. Actually the current host: macOS, cwd /Users/davec/Desktop. Hmm.

Let me just run pgrep -fl hermes to list, and note gateway guidance.

</details>

**Tool call: terminal**

```json
{
  "command": "pgrep -fl -i hermes | head -40; echo \"---\"; launchctl list | grep -i hermes"
}
```

### 🤖 Assistant — 2026-10-30T05:46:33Z

<details><summary>Reasoning</summary>

Give the answer concisely with tiers. Note: killing gateway breaks the session (agent runs through gateway). Warn: never `pkill -f hermes` — it self-matches (the agent's own python argv contains 'hermes') and kills your session/SSH.

Provide commands:
1. Quit the desktop app: `osascript -e 'quit app "Hermes"'` or Kill PIDs of Hermes.app only.
2. Gateway (launchd-managed): `launchctl kickstart -k gui/$(id -u)/ai.hermes.gateway` to restart, or `launchctl bootout`... memory says job label ai.hermes.gateway exists. To stop: `launchctl bootout gui/$(id -u)/ai.hermes.gateway` (may fail if gui domain absent → use user/$(id -u)).
3. WebUI: ai.hermes.webui.
4. Everything except gateway: pkill -f patterns.

Safest approach: list PIDs then kill by exact PID. Provide a script that excludes self.

Let me craft a compact answer with an escape-hatch one-liner that kills all hermes python/desktop processes but skips own PID and gateway.

I'll keep it tight.

</details>

**Don't run `pkill -f hermes`** — the agent's own python argv contains "hermes", so it kills the session (and can kill an SSH shell). Kill by exact PID or via launchd.

Current state on this box:

| What | PID / job |
|---|---|
| Desktop app (4 procs) | 63455 + Helpers 65306, 65307 |
| Gateway (launchd) | `ai.hermes.gateway` |
| WebUI (launchd) | `ai.hermes.webui` (93246) |
| Skill watchers | 65294, 65305 + KiloUsageBar 65293 |

Tiers, least destructive first:

```bash
# 1. Just the desktop app (keeps gateway/webui alive)
osascript -e 'quit app "Hermes"'      # graceful
kill 63455 65306 65307               # if it won't quit

# 2. launchd services — proper stop (won't auto-respawn)
launchctl bootout gui/$(id -u)/ai.hermes.webui
launchctl bootout gui/$(id -u)/ai.hermes.gateway   # restarts: launchctl kickstart -k gui/$(id -u)/ai.hermes.gateway
#   if "gui domain not found" (headless / no console login):
launchctl bootout user/$(id -u)/ai.hermes.gateway

# 3. Skill watchers / helper scripts
kill 65293 65294 65305

# 4. Nuclear: every hermes proc EXCEPT the one running this
ps -Ao pid,command | grep -i hermes | grep -v -e grep -e " ai\.hermes\." \
  | awk -v me=$$ '{print $1}' | grep -vx "$$" | xargs -n1 kill
```

Notes: killing the gateway ends this chat session (agent runtime lives in it) — prefer `kickstart -k` to restart it in place. Don't touch `ai.hermes.webui-watchdog` unless you mean to stop the WebUI permanently; it'll respawn things.

Want me to actually stop just the desktop app, or the full stack?

### 👤 User — 2026-10-30T05:47:36Z

stop full stack

### 🤖 Assistant — 2026-10-30T05:47:42Z

<details><summary>Reasonin
