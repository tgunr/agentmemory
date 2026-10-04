---
type: Fact
title: # Enable shell command execution with #2

source: hermes
session_id: 20260929_14
description: # Enable shell command execution with #2

source: hermes
session_id: 20260929_145353_9affb2
resource: hermes://session/20260929_145353_9affb2

# Conversation

- **Session ID:** `20260929_145353_9affb2
resource: agentmemory://memory/mem_muqoya13_7c550c1bb7d1
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-10-02T08:18:30.713Z
source: agentmemory
strength: 7
---
# Content

# Enable shell command execution with #2

source: hermes
session_id: 20260929_145353_9affb2
resource: hermes://session/20260929_145353_9affb2

# Conversation

- **Session ID:** `20260929_145353_9affb2`
- **Source:** desktop
- **Model:** kilo-auto/efficient
- **Started:** 2026-09-29T19:53:53Z
- **Ended:** 2026-10-01T12:27:36Z
- **Messages:** 71
- **CWD:** `/Volumes/davec`

---

### 👤 User — 2026-09-29T18:06:14Z

There is a session discussing a shell command which discovered the use of ! character to issue shell commands directly to the shell. However, it is disabled for desktop and dashboard but I want it enabled so I can quickly issue a shell command. I am not concerend abot security iddues as I am the only person ever using these systems.

### 🤖 Assistant — 2026-09-29T18:07:11Z

<details><summary>Reasoning</summary>

The skill file doesn't have bang-shell info. Let me check the hermes-agent source code directly. The bang shell is in hermes_cli/bang_shell.py per my memory. Let me look at the config to see what gates it.

</details>

The skill doesn't cover it. Let me look at the source directly.

### 🤖 Assistant — 2026-09-29T18:07:30Z

<details><summary>Reasoning</summary>

I found `bang_shell.py`. The key is `bang_shell_enabled()`:

```python
def bang_shell_enabled() -> bool:
    """True only for interactive local CLI sessions.

    Gateway, API, and cron sessions never reach the composer and their users already have a shell;
    running arbitrary commands for them would be a remote-execution surface with no approving human
    at the keyboard.
    """
    try:
        from utils import env_var_enabled
    except Exception:  # pragma: no cover - utils is always importable in-tree
        def env_var_enabled(name, default=""):  # type: ignore[misc]
            return str(os.getenv(name, default)).strip().lower() in {"1", "true", "yes", "on"}

    return not (env_var_enabled("HERMES_GATEWAY_SESSION") or env_var_enabled("HERMES_CRON_SESSION")
                or (os.getenv("HERMES_SESSION_PLATFORM") or "").strip())
```

So bang commands are enabled only when NOT gateway session, NOT cron session, and NOT having HERMES_SESSION_PLATFORM set. Desktop sessions likely set HERMES_SESSION_PLATFORM (e.g. "desktop") — that's why it's disabled there.

The user wants to enable it for desktop and dashboard. There's no config option for this — it's hardcoded as an env check. Let me check where the composer handles bang commands to understand how it's wired (which entry point checks is_bang_command / bang_shell_enabled). Let me search for usages.

Also, this is the user's own fork/checkout: `~/.hermes/hermes-agent` is a submodule worktree, checkout usually `main`... wait, memory says: "hermes-agent (~/.hermes/hermes-agent) = submodule worktree; checkout usually `main` (tracks tg/main → origin-block pre-commit hook does NOT fire; commits OK). `local`=stale personal fork." Hmm — but user profile says "Git work in ~/.hermes/hermes-agent targets the branch literally named `local` — commit there, never create new branches for routine commits." These conflict slightly; the memory entry about submodule worktree says checkout usually `main`. Let me check git status first.

The user wants a code change: enable bang shell on desktop/dashboard platforms. Since they're the only user and security is not a concern.

Options:
1. Modify `bang_shell_enabled()` to also return True when `HERMES_SESSION_PLATFORM` is desktop (and whatever dashboard uses), or add an env/config override like `HERMES_BANG_SHELL=1` to force-enable.

But wait — where is bang handling actually invoked from? The desktop app drives the TUI gateway (JSON-RPC) — the composer is in the desktop app / TUI. The `bang_shell_enabled()` check may be in the CLI REPL only, or maybe also in the TUI. Let me find call sites of `is_bang_command` / `bang_shell_enabled`.

Let me search.

</details>

Found it — `hermes_cli/bang_shell.py::bang_shell_enabled()` disables it whenever `HERMES_SESSION_PLATFORM` is set (desktop/dashboard sessions set that). Let me find where it's actually wired into the composer to see which surfaces call it.

### 🤖 Ass
