---
type: Fact
title: # Fix zsh command not found complete

source: hermes
session_id: 20260905_103439
description: # Fix zsh command not found complete

source: hermes
session_id: 20260905_103439_8dd70a
resource: hermes://session/20260905_103439_8dd70a

# Conversation

- **Session ID:** `20260905_103439_8dd70a`
- 
resource: agentmemory://memory/mem_mtqyx8l8_6dd6e345ab25
tags: ["okf", "okf-hermes", "hermes", "/Volumes/design"]
timestamp: 2026-09-07T08:17:55.964Z
source: agentmemory
strength: 7
---
# Content

# Fix zsh command not found complete

source: hermes
session_id: 20260905_103439_8dd70a
resource: hermes://session/20260905_103439_8dd70a

# Conversation

- **Session ID:** `20260905_103439_8dd70a`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-09-05T16:15:49Z
- **Ended:** 2026-09-06T11:00:57Z
- **Messages:** 12
- **CWD:** `/Volumes/design`
- **Tokens:** 35188 in / 1233 out
- **Est. cost:** $-21647.0000

---

### 👤 User — 2026-09-05T16:15:55Z

[System: The active model for this chat has changed to kilo-auto/efficient via provider kilocode. From this point forward, use this runtime metadata when answering questions about what model/provider is active.]

### 👤 User — 2026-09-05T16:15:56Z

/Users/davec/.startup/zsh/darwin/init.zsh:160: command not found: complete

### 🤖 Assistant — 2026-09-05T16:16:07Z

<details><summary>Reasoning</summary>

The user pasted an error message: `/Users/davec/.startup/zsh/darwin/init.zsh:160: command not found: complete`

This is a shell init error — `complete` is a bash builtin, not available in zsh (zsh uses `compdef` / `compsys`). Line 160 of their zsh init file is calling `complete` (probably for some CLI completion like `complete -C ... terraform` or similar).

Memory mentions dotfile-management skill: "Manage symlinked dotfiles: ~/.startup/ is a git repo with..." — this is relevant. Let me load that skill and look at the file.

</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.startup/zsh/darwin/init.zsh"
}
```

**Tool call: skill_view**

```json
{
  "name": "dotfile-management"
}
```

### 🤖 Assistant — 2026-09-05T16:16:22Z

<details><summary>Reasoning</summary>

The issue is at line 160: `complete -F _m2n_complete mount2native m2n` — this is a bash completion command, not zsh. In zsh, completions use `compdef` / `_describe` / `_arguments` etc. Also lines 156-159 use `COMPREPLY`, `compgen`, `COMP_WORDS`, `COMP_CWORD` which are all bash-isms.

I need to rewrite the completion to use zsh's `compctl` or the newer `compdef`/`_arguments` system.

The simplest fix for zsh is to use `compdef` with a completion function, or use `compctl`.

Let me rewrite lines 156-160 with proper zsh completion. Since this file is `init.zsh` (zsh config), the bash completion is wrong.

The simplest zsh approach is `compdef`:

```zsh
_m2n_complete() {
  local opts="/Volumes/davec /Volumes/alpha /Volumes/beta /Volumes/3cl /Volumes/design /Volumes/zips /Volumes/www /Volumes/mcp /Volumes/projects beta-clones TimeMachine"
  _arguments '*:mount:(${=opts})'
}
compdef _m2n_complete mount2native m2n
```

Actually, `_arguments '*:mount:(${=opts})'` with the `=` modifier splits the string into words. This is the correct zsh way.

Let me use the zsh completion. The file is a zsh init file, so zsh completions are appropriate.

Let me patch lines 156-160.

</details>

**Tool call: patch**

```json
{
  "path": "/Users/davec/.startup/zsh/darwin/init.zsh",
  "old_string": "_m2n_complete() {\n  local opts=\"/Volumes/davec /Volumes/alpha /Volumes/beta /Volumes/3cl /Volumes/design /Volumes/zips /Volumes/www /Volumes/mcp /Volumes/projects beta-clones TimeMachine\"\n  COMPREPLY=( $(compgen -W \"$opts\" -- \"${COMP_WORDS[COMP_CWORD]}\") )\n}\ncomplete -F _m2n_complete mount2native m2n",
  "new_string": "_m2n_complete() {\n  local opts=(/Volumes/davec /Volumes/alpha /Volumes/beta /Volumes/3cl /Volumes/design /Volumes/zips /Volumes/www /Volumes/mcp /Volumes/projects beta-clones TimeMachine)\n  _describe 'mount' opts\n}\ncompdef _m2n_complete mount2native m2n"
}
```

### 🤖 Assistant — 2026-09-05T16:16:37Z

**Tool call: terminal**

```json
{
  "command": "zsh -n /Users/davec/.startup/zsh/darwin/init.zsh && echo \"syntax OK\""
}
```

### 🤖 Assistant — 2026-09-05T16:16:45Z

**Tool call: terminal**

```json
{
  "command": "cd ~/.startup && git add -A && git commit -m \"fix zsh completion: replace bash complete/compgen with compdef\" -q && echo committed"
}
```

### 🤖 Assistant — 2026-09-05T16:16:54Z

Fixed. Line 160 used bash's `complete` builtin with `compgen`/`COMPREPLY`/`COMP_WORDS` — none of which exist in zsh. Replaced with native zs
