---
type: Fact
title: # Fix autojump.zsh zsh parse error

source: hermes
session_id: 20261005_010820_5
description: # Fix autojump.zsh zsh parse error

source: hermes
session_id: 20261005_010820_5efcee
resource: hermes://session/20261005_010820_5efcee

# Conversation

- **Session ID:** `20261005_010820_5efcee`
- **
resource: agentmemory://memory/mem_muuz8mz2_5560e4a5e29c
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-10-05T08:17:34.892Z
source: agentmemory
strength: 7
---
# Content

# Fix autojump.zsh zsh parse error

source: hermes
session_id: 20261005_010820_5efcee
resource: hermes://session/20261005_010820_5efcee

# Conversation

- **Session ID:** `20261005_010820_5efcee`
- **Source:** tui
- **Model:** kilo-auto/free
- **Started:** 2026-10-05T06:08:29Z
- **Messages:** 126
- **CWD:** `/Users/davec`
- **Tokens:** 124319 in / 54992 out

---

### 👤 User — 2026-10-05T06:08:29Z

/Users/davec/.local/share/sheldon/repos/github.com/wting/autojump/bin/autojump.zsh:85: parse error near `

### 🤖 Assistant — 2026-10-05T06:08:35Z

<details><summary>Reasoning</summary>

The user's message is an error message from zsh: autojump.zsh:85: parse error near something. This is likely truncated. Let me look at the file.

Let me read the file around line 85.

</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.local/share/sheldon/repos/github.com/wting/autojump/bin/autojump.zsh",
  "offset": 70,
  "limit": 30
}
```

### 🤖 Assistant — 2026-10-05T06:08:39Z

<details><summary>Reasoning</summary>

The reported error: parse error near line 85 in zsh. Hmm, the file itself may be fine when run under zsh. This error typically happens when a zsh file is sourced by bash/sh, or the file has something odd. Actually "parse error near `" with nothing after — maybe line 85 has a weird character. Let me hexdump around that area.

Actually the real cause: this is a sheldon-managed zsh file; if it's being parsed by sh/bash (e.g. .sh source), `[[ ]]` would error but message differs. Let's check bytes at line 85.

Wait — the message says parse error near ` followed by a backtick? "near `" then nothing... Possibly the error message truncated the token. Let me check for non-ASCII / CR characters.

Better: run zsh -n on the file to reproduce.

</details>

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/.local/share/sheldon/repos/github.com/wting/autojump/bin && zsh -n autojump.zsh; echo \"zsh -n exit=$?\"; /bin/sh -n autojump.zsh; echo \"sh -n exit=$?\"; sed -n '85p' autojump.zsh | od -c | head -5; file autojump.zsh"
}
```

### 🤖 Assistant — 2026-10-05T06:08:49Z

<details><summary>Reasoning</summary>

The file is valid zsh (`zsh -n` exit 0). The error is because something is parsing it with sh/bash. autojump's shell integration is zsh-specific (`&!`, `setopt`, `${OSTYPE}`, `[[ ]]`). The error message "parse error near `" is bash-style... actually "parse error near `X'" is zsh. Hmm, zsh says "parse error near `...'". And sh says "syntax error near unexpected token".

So the error is coming from a zsh parse? But zsh -n passes. Unless it's parsed with `zsh -c 'source ...'`? That would be the same. Hmm, but maybe the parsing shell is zsh in a different mode, or it's parsed by something else that emits zsh-style messages.

Wait — the error mentions line 85: `jo() {`. In zsh with `KSH_ARRAYS` or... hmm. Actually in zsh, `jo()` is valid. Unless... `sh` emulation? Let me check whether the whole error is: the shell parsing it is bash. Bash's error format is "line 85: syntax error near unexpected token `jo'". Not matching.

Which shells emit "parse error near `token'"? zsh (default), and... also `busybox sh`? Let me think: the format `zsh: file:85: parse error near ...` — the user's message has no filename prefix and no line prefix format like that. It's the TUI rendering maybe stripped.

Key insight: it's failing at line 85 which is `jo() {`. Why would that be a parse error in zsh? If `jo` ... hmm. Actually! If the parser is in POSIX/sh emulation mode or if a preceding function broke. Let me test more concretely: source the file in a sh-emulated zsh, and also test what happens if a `setopt` / options differ.

Actually more likely: the user has sheldon sourcing it in a context where the file is read by zsh but with `emulate sh`? Or: the preceding content is fine but line 85's error is the *first* error zsh reports after some state.

Let me just test various parsers to reproduce the exact message.

Another strong candidate: this is a *different* copy of the file being parsed — sheldon may have generated an autojump.zsh with a broken header. Let me look at 
