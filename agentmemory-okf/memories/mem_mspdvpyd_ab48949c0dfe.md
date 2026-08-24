---
type: Fact
title: # Uninstalling npm opencode for Homebrew

source: hermes
session_id: 20260720_12
description: # Uninstalling npm opencode for Homebrew

source: hermes
session_id: 20260720_122144_17470d
resource: hermes://session/20260720_122144_17470d

# Conversation

- **Session ID:** `20260720_122144_17470d
resource: agentmemory://memory/mem_mspdvpyd_ab48949c0dfe
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:01:24.871Z
source: agentmemory
strength: 7
---
# Content

# Uninstalling npm opencode for Homebrew

source: hermes
session_id: 20260720_122144_17470d
resource: hermes://session/20260720_122144_17470d

# Conversation

- **Session ID:** `20260720_122144_17470d`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-07-20T17:21:45Z
- **Messages:** 12
- **CWD:** `/Users/davec`
- **Tokens:** 23352 in / 4218 out

---

### 👤 User — 2026-07-20T17:21:45Z

Sometime in the past I installed opencode and now wish to uninstall it and use the homebrew version. The problem is I don't know how I installed it in the first place as I dont see it in /Volumes/AI

### 🤖 Assistant — 2026-07-20T17:21:53Z

<details><summary>Reasoning</summary>

The user wants to uninstall a previously installed "opencode" and switch to the homebrew version. They don't see it in /Volumes/AI. Let me investigate how opencode was installed.

Let me start by checking common installation locations:
1. Check `which opencode` - to see where the binary is
2. Check `brew list` for opencode
3. Check npm/global installs
4. Check if it's a go install
5. Check common paths like /usr/local/bin, ~/bin, ~/.local/bin

Let me do several independent checks in parallel.

</details>

**Tool call: terminal**

```json
{
  "command": "echo \"=== which opencode ===\"; which -a opencode 2>/dev/null; echo \"=== type opencode ===\"; type opencode 2>/dev/null; echo \"=== alias/function check ===\"; alias opencode 2>/dev/null; echo \"=== ls /usr/local/bin ===\"; ls -la /usr/local/bin/ 2>/dev/null | grep -i opencode; echo \"=== ls /opt/homebrew/bin ===\"; ls -la /opt/homebrew/bin/ 2>/dev/null | grep -i opencode"
}
```

**Tool call: terminal**

```json
{
  "command": "echo \"=== brew list ===\"; brew list 2>/dev/null | grep -i opencode; echo \"=== brew formulae ===\"; brew formulae 2>/dev/null | grep -i opencode; echo \"=== brew cask ===\"; brew list --cask 2>/dev/null | grep -i opencode; echo \"=== npm global ===\"; npm ls -g 2>/dev/null | grep -i opencode; echo \"=== cargo ===\"; ls ~/.cargo/bin/ 2>/dev/null | grep -i opencode; echo \"=== go bin ===\"; ls ~/go/bin/ 2>/dev/null | grep -i opencode"
}
```

### 🤖 Assistant — 2026-07-20T17:22:10Z

<details><summary>Reasoning</summary>

So we have a few things going on:

1. `/Users/davec/.local/bin/opencode` - a local install (probably from `curl ... | install` script or a binary download)
2. `/opt/homebrew/bin/opencode` - symlink to `../Cellar/opencode/1.18.0/bin/opencode` - this is the Homebrew version (1.18.0)

Also `npm ls -g` shows `opencode-ai@1.18.3` - that's a global npm package.

Wait, there's also a possibility that the `opencode` at `/Users/davec/.local/bin/opencode` is actually pointing to the npm global one, or it's a separate binary.

The user wants to:
- Uninstall the "sometime in the past I installed opencode" version (which is NOT the homebrew one)
- Use the homebrew version

Let me figure out what the `.local/bin/opencode` is. Since `which -a opencode` shows `.local/bin/opencode` FIRST (before `/opt/homebrew/bin/opencode`), the PATH has `.local/bin` before `/opt/homebrew/bin`. So the user is currently using the `.local/bin/opencode` version, not the homebrew one.

Wait, but there's also `opencode-ai@1.18.3` npm global. The npm global binary would be at `~/node_modules/.bin/opencode` or `$(npm prefix -g)/bin/opencode`. Let me check if that's where `.local/bin/opencode` comes from, or if the npm global install put a binary elsewhere.

Let me investigate:
- What is `/Users/davec/.local/bin/opencode`? Is it a script, binary, symlink?
- Is the npm global `opencode-ai` related?
- What does the homebrew one version say?

The user said "I don't see it in /Volumes/AI" - so they thought they installed it there but it's not there. It's actually in `~/.local/bin` and via npm global.

Let me dig deeper. The key question: what's the "past install" that's shadowing homebrew? It's `.local/bin/opencode`. Let me inspect it and the npm global.

Let me check:
1. `file ~/.local/bin/opencode`
2. `head` of it if it's a script
3. `npm prefix -g` and where npm global bin is
4. whether `.local/bin/opencode` is the npm one or something else
5. ver
