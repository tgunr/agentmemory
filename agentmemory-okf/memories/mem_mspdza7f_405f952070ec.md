---
type: Fact
title: # Restoring Missing Shell Command

source: hermes
session_id: 20260619_113357_10
description: # Restoring Missing Shell Command

source: hermes
session_id: 20260619_113357_10a14b
resource: hermes://session/20260619_113357_10a14b

# Conversation

- **Session ID:** `20260619_113357_10a14b`
- **S
resource: agentmemory://memory/mem_mspdza7f_405f952070ec
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260619_113357_10a14b"]
timestamp: 2026-08-12T01:04:11.063Z
source: agentmemory
strength: 7
---
# Content

# Restoring Missing Shell Command

source: hermes
session_id: 20260619_113357_10a14b
resource: hermes://session/20260619_113357_10a14b

# Conversation

- **Session ID:** `20260619_113357_10a14b`
- **Source:** tui
- **Model:** kilo-auto/balanced
- **Started:** 2026-06-19T16:34:39Z
- **Ended:** 2026-06-19T16:39:19Z
- **Messages:** 69
- **Tokens:** 114 in / 7608 out
- **Est. cost:** $0.2107

---

### 👤 User — 2026-06-19T16:34:40Z

what happened to my /shell command, it is missin

### 🤖 Assistant — 2026-06-19T16:38:50Z

<details><summary>Reasoning</summary>

The user is asking about a `/shell` command that seems to be missing. This is about Hermes Agent configuration, so I should load the `hermes-agent` skill first to understand the `/shell` command and how it should be configured.


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
  "command": "grepc -i 'shell' ~/.hermes/config.yaml 2>/dev/null || echo \"No match\""
}
```

### 🤖 Assistant — 2026-06-19T16:38:50Z

<details><summary>Reasoning</summary>

The user is asking about their `/shell` command being missing. Let me check the reference file for the shell command and also look at what's happening with their command registry.

From the skill content, `/shell` is listed as a slash command:
```
/shell <command>     Execute shell command directly (CLI only)
```

The skill references `references/shell-command.md` for implementation details. Let me check that reference and also look at the actual command implementation to diagnose why it might be missing for the user.

Let me look at the reference file and check the actual Hermes commands registry to see if `/shell` is still registered.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent",
  "file_path": "references/shell-command.md"
}
```

**Tool call: terminal**

```json
{
  "command": "grep -n -i \"shell\" ~/.hermes/hermes-agent/hermes_cli/commands.py | head -60"
}
```

### 🤖 Assistant — 2026-06-19T16:38:50Z

<details><summary>Reasoning</summary>

Interesting. The grep for "shell" in commands.py returned no output, but the reference file says it should be at line 209 in commands.py. Let me check more carefully - maybe the file has changed recently, or the grep pattern didn't match. Let me look at the actual commands.py file and also check cli.py for the shell command handler.


</details>

**Tool call: terminal**

```json
{
  "command": "grep -n -i \"shell\" ~/.hermes/hermes-agent/hermes_cli/commands.py; echo \"---EXIT:$?\""
}
```

**Tool call: terminal**

```json
{
  "command": "grep -n -i \"shell\" ~/.hermes/hermes-agent/cli.py | head -40; echo \"---EXIT:$?\""
}
```

### 🤖 Assistant — 2026-06-19T16:38:50Z

<details><summary>Reasoning</summary>

The grep of `commands.py` returned no output (exit code 1 means no match found), and in `cli.py` there's no reference to a "shell" command handler specifically. Let me check more closely - the reference says the command was at line ~7652-7684 of cli.py and line 209 of commands.py. Let me look at what's actually in commands.py around the command registry.

</details>

**Tool call: terminal**

```json
{
  "command": "wc -l ~/.hermes/hermes-agent/hermes_cli/commands.py; echo \"---\""
}
```

**Tool call: terminal**

```json
{
  "command": "grep -n \"CommandDef\" ~/.hermes/hermes-agent/hermes_cli/commands.py | head -80"
}
```

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && git log --oneline -20 --all -- hermes_cli/commands.py 2>/dev/null | head -20"
}
```

### 🤖 Assistant — 2026-06-19T16:38:50Z

<details><summary>Reasoning</summary>

Now I can see the picture clearly. The git log shows:
1. A commit was made in `cab55c2b8`: `feat(cli): add /shell command for direct shell execution (CLI-only)`
2. After that, the command was removed in a subsequent commit (the commit hash `b48b31203` might be it, but that says something about keystroke loop). 

Looking at the current commands.py, there is NO `shell` CommandDef entry. And there's no `shell` handling in cli.py.

So the `/shell` command was added in commit `cab55c2
