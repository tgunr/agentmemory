---
type: Fact
title: # Set hermes to always use --tui

source: hermes
session_id: 20260902_080058_723
description: # Set hermes to always use --tui

source: hermes
session_id: 20260902_080058_7236d7
resource: hermes://session/20260902_080058_7236d7

# Conversation

- **Session ID:** `20260902_080058_7236d7`
- **So
resource: agentmemory://memory/mem_mto6g7er_eadd67089f27
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/.hermes/hermes-agent"]
timestamp: 2026-09-05T09:25:19.739Z
source: agentmemory
strength: 7
---
# Content

# Set hermes to always use --tui

source: hermes
session_id: 20260902_080058_7236d7
resource: hermes://session/20260902_080058_7236d7

# Conversation

- **Session ID:** `20260902_080058_7236d7`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-09-02T13:01:35Z
- **Ended:** 2026-09-04T12:09:22Z
- **Messages:** 10
- **CWD:** `/Users/davec/.hermes/hermes-agent`
- **Tokens:** 68061 in / 809 out
- **Est. cost:** $-41303.0000

---

### 👤 User — 2026-09-02T13:01:35Z

how to set hermes to always use --tui

### 🤖 Assistant — 2026-09-02T13:01:51Z

<details><summary>Reasoning</summary>

User wants Hermes to always use --tui. Load the hermes-agent skill? The skill list says to load relevant skills. hermes-agent skill: "Configure, extend, or contribute to Hermes Agent." Relevant. Let me load it, and also check config for a tui default setting.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

**Tool call: search_files**

```json
{
  "file_glob": "hermes_cli/*.py",
  "limit": 30,
  "path": "/Users/davec/.hermes/hermes-agent",
  "pattern": "tui"
}
```

### 🤖 Assistant — 2026-09-02T13:02:09Z

<details><summary>Reasoning</summary>

The user wants to know how to set Hermes to always use `--tui`. Let me look at how the TUI is launched. The TUI is a separate entrypoint `hermes --tui`. Let me check the CLI main.py and how the alias/wrapper works, and whether there's a config option for default UI mode.

Let me search the codebase for how --tui works and whether there's a config setting like `display` or a default frontend mode.

</details>

**Tool call: search_files**

```json
{
  "pattern": "--tui",
  "path": "/Users/davec/.hermes/hermes-agent/hermes_cli",
  "output_mode": "content"
}
```

**Tool call: search_files**

```json
{
  "pattern": "tui",
  "path": "/Users/davec/.hermes/hermes-agent/hermes_cli/main.py",
  "output_mode": "content"
}
```

### 🤖 Assistant — 2026-09-02T13:02:21Z

<details><summary>Reasoning</summary>

There's a `display.interface` config setting that can be `tui` or `cli`. Let me check the config default and how it's resolved.

</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/hermes-agent/hermes_cli/main.py",
  "offset": 300,
  "limit": 100
}
```

### 🤖 Assistant — 2026-09-02T13:02:34Z

<details><summary>Reasoning</summary>

The answer is clear. The config key is `display.interface: tui`. Let me give the user the concise answer.

</details>

The answer is `display.interface`. Set it to `tui`:

```bash
hermes config set display.interface tui
```

That makes `hermes` boot the TUI by default. Precedence is:

1. `--cli` always forces the classic REPL
2. `--tui` / `HERMES_TUI=1` forces TUI
3. `display.interface: tui` is the configured default

Note: the config default only takes effect on an **interactive terminal** (stdin/stdout are TTYs) — headless spawns like cron, kanban workers, or piped `hermes chat -q` fall back to the non-TUI path regardless, so those keep working.

To use the TUI on a one-off basis without changing config: `hermes --tui`.
