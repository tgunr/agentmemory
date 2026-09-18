---
type: Fact
title: # Fix repeating ollama shell startup messages

source: hermes
session_id: 202608
description: # Fix repeating ollama shell startup messages

source: hermes
session_id: 20260830_134705_605a0b
resource: hermes://session/20260830_134705_605a0b

# Conversation

- **Session ID:** `20260830_134705_6
resource: agentmemory://memory/mem_mto6g38u_cec4a82d5c35
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-05T09:25:14.334Z
source: agentmemory
strength: 7
---
# Content

# Fix repeating ollama shell startup messages

source: hermes
session_id: 20260830_134705_605a0b
resource: hermes://session/20260830_134705_605a0b

# Conversation

- **Session ID:** `20260830_134705_605a0b`
- **Source:** tui
- **Model:** kilo-auto/free
- **Started:** 2026-08-30T18:49:07Z
- **Ended:** 2026-09-03T14:34:13Z
- **Messages:** 28
- **CWD:** `/Users/davec`
- **Tokens:** 118882 in / 2671 out

---

### 👤 User — 2026-08-30T18:49:07Z

When I tart a new shell I get repeating message about ollama, need to fic this

### 🤖 Assistant — 2026-08-30T18:49:14Z

<details><summary>Reasoning</summary>

The user is reporting that when they start a new shell, they get a repeating message about ollama and want to fix it.

Let me first check their shell configuration files to see what's causing this. Common places are:
- ~/.bashrc
- ~/.bash_profile
- ~/.zshrc
- ~/.zprofile
- ~/.profile

And also check if there's something in /etc/profile or /etc/bashrc that might be outputting ollama messages.

Let me read these files to find the source.

</details>

**Tool call: read_file**

```json
{
  "path": "~/.bashrc"
}
```

**Tool call: read_file**

```json
{
  "path": "~/.bash_profile"
}
```

**Tool call: read_file**

```json
{
  "path": "~/.zshrc"
}
```

**Tool call: read_file**

```json
{
  "path": "~/.zprofile"
}
```

### 🤖 Assistant — 2026-08-30T18:49:43Z

<details><summary>Reasoning</summary>

I see the shell configs. I notice:
- `.zshrc` sources `$HOME/.startup/zsh/init.zsh`
- `.bash_profile` sources `$HOME/.bashrc` which likely sources startup scripts too
- There's also `$HOME/.local/share/../bin/env` sourced in `.bash_profile`

The repeating Ollama message is likely coming from one of those sourced startup scripts. Let me search for "ollama" in the shell config and startup directories.

</details>

**Tool call: search_files**

```json
{
  "path": "/Users/davec",
  "pattern": "ollama",
  "output_mode": "content",
  "limit": 20
}
```

### 🤖 Assistant — 2026-08-30T18:50:00Z

<details><summary>Reasoning</summary>

The user is getting a repeating message about Ollama when they start a new shell. I need to find where this message is coming from. The search above shows lots of references to ollama in session history and skills, but I need to find the actual shell startup files that print something.

Let me search more specifically for "ollama" in common shell startup/config locations. I should look in:
- ~/.bashrc
- ~/.bash_profile
- ~/.zshrc
- ~/.zprofile
- ~/.profile
- ~/.config files
- /etc/profile
- /etc/zshrc

From the files I already read:
- ~/.bashrc is empty
- ~/.bash_profile sources ~/.bashrc and has lots of stuff, but I didn't see any obvious ollama echo
- ~/.zshrc is long and I only read the first 500 lines. It might have something at the end.
- ~/.zprofile just has the hermes PATH stuff.

Let me check the rest of .zshrc and also search more broadly. Also, the user said "repeating message" - this could be from a precmd or PROMPT_COMMAND that runs on every prompt, not just shell startup.

Let me also check for any shell function or alias that might print on every command.

</details>

**Tool call: read_file**

```json
{
  "offset": 501,
  "path": "~/.zshrc"
}
```

**Tool call: search_files**

```json
{
  "limit": 20,
  "output_mode": "content",
  "path": "/Users/davec",
  "pattern": "ollama"
}
```

### 🤖 Assistant — 2026-08-30T18:50:35Z

<details><summary>Reasoning</summary>

The `.zshrc` itself doesn't contain the word "ollama", but it does source startup files that likely do. The search results so far are mostly history/session docs, not startup files. I should look at `~/.startup/zsh/init.zsh` and maybe `~/.startup` scripts, since `.zshrc` sources `init.zsh`. I'll also check `/opt/homebrew/etc/profile.d/` for anything related to ollama.

</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.startup/zsh/init.zsh"
}
```

**Tool call: search_files**

```json
{
  "limit": 20,
  "output_mode": "content",
  "path": "/opt/homebrew/etc/profile.d",
  "pattern": "ollama"
}
```

### 🤖 Assistant — 2026-08-30T18:50:53Z

<details><summary>Reasoning</summary>

I need to con
