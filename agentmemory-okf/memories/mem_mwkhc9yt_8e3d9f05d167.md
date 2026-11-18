---
type: Fact
title: # Fix pnpm not found for dist:mac

source: hermes
session_id: local-d8990a682912
description: # Fix pnpm not found for dist:mac

source: hermes
session_id: local-d8990a682912bc769e4607cb9d9345167e788d3b6f7b6fe407e0640a823d637a
resource: hermes://session/local-d8990a682912bc769e4607cb9d9345167e
resource: agentmemory://memory/mem_mwkhc9yt_8e3d9f05d167
tags: ["okf", "okf-hermes", "hermes", "/Volumes/projects/Ideas"]
timestamp: 2026-11-17T09:18:14.499Z
source: agentmemory
strength: 7
---
# Content

# Fix pnpm not found for dist:mac

source: hermes
session_id: local-d8990a682912bc769e4607cb9d9345167e788d3b6f7b6fe407e0640a823d637a
resource: hermes://session/local-d8990a682912bc769e4607cb9d9345167e788d3b6f7b6fe407e0640a823d637a

# Conversation

- **Session ID:** `local-d8990a682912bc769e4607cb9d9345167e788d3b6f7b6fe407e0640a823d637a`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-16T14:13:38Z
- **Ended:** 2026-11-16T15:54:20Z
- **Messages:** 76
- **CWD:** `/Volumes/projects/Ideas`
- **Tokens:** 54513 in / 10512 out

---

### 👤 User — 2026-11-16T14:13:42Z

cd ~/.hermes/hermes-agent/apps/desktop && npm run dist:mac
sh: pnpm: command not found

### 🤖 Assistant — 2026-11-16T14:13:51Z

<details><summary>Reasoning</summary>

The user ran a command and got "sh: pnpm: command not found". They want help fixing. Let me check the package.json scripts and whether pnpm is installed.

Let me investigate.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent/apps/desktop && grep -n '\"dist:mac\"\\|\"pack\"\\|\"scripts\"' package.json | head -20; echo ---; which pnpm npm node corepack; echo ---; node -v; npm -v"
}
```

**Tool call: search_files**

```json
{
  "pattern": "pnpm",
  "path": "/Users/davec/.hermes/hermes-agent/apps/desktop/package.json",
  "output_mode": "content"
}
```

### 🤖 Assistant — 2026-11-16T14:13:59Z

<details><summary>Reasoning</summary>

pnpm exists at /Users/davec/.hermes/tools/pnpm-12.15.0-darwin-arm64/pnpm but not on PATH. Let's check PATH and whether it's a wrapper dir. Simplest: install pnpm via corepack or symlink into ~/.hermes/node/bin.

Note: pnpm 12.15.0 seems odd — pnpm versions are like 9.x/10.x. Actually pnpm latest is 10.x. "12.15.0" might be a renamed binary... Let me check what it is.

Also the scripts use `pnpm run build && pnpm run builder`. npm run dist:mac invokes sh, which needs pnpm on PATH.

Options: symlink pnpm into ~/.hermes/node/bin (which is on PATH). Check that directory is on PATH.

</details>

**Tool call: terminal**

```json
{
  "command": "echo \"PATH=$PATH\"; echo ---; ls -l /Users/davec/.hermes/tools/pnpm-12.15.0-darwin-arm64/ | head; echo ---; /Users/davec/.hermes/tools/pnpm-12.15.0-darwin-arm64/pnpm --version 2>&1 | tail -3; echo ---; ls ~/.hermes/node/bin"
}
```

### 🤖 Assistant — 2026-11-16T14:14:05Z

<details><summary>Reasoning</summary>

pnpm IS on PATH: /Users/davec/.hermes/tools/pnpm-12.15.0-darwin-arm64. But that's in *this* agent's PATH, which is set by the Hermes runtime, not the user's shell. The user ran the command in their own terminal — their shell PATH lacks pnpm.

Wait, the user's message: "cd ~/.hermes/hermes-agent/apps/desktop && npm run dist:mac" then "sh: pnpm: command not found". That's likely from their terminal (or the Hermes terminal?). Actually this could be them running it in the desktop app's terminal pane. Honestly, easiest: check their shell rc files for pnpm path and add it.

But wait — "npm run dist:mac" runs sh -c which inherits PATH. If pnpm is on PATH in this agent env, it should work. So the user's environment differs. Let me test running the build here to see if it works.

Actually — careful. This agent runtime cwd is /Volumes/projects/Ideas. The user asked about the failure. Let me just try running it and see whether it works from the agent env. First check that node_modules exist at repo root, etc.

Let me check where their shell PATH lacks pnpm: grep in ~/.zshrc, ~/.zprofile.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && grep -rn \"pnpm\" ~/.zshrc ~/.zprofile ~/.zshenv ~/.profile 2>/dev/null; echo \"--- login-shell PATH:\"; zsh -lic 'which pnpm; echo $PATH' 2>&1 | tail -5; echo \"--- repo install:\"; ls -d node_modules apps/desktop/node_modules 2>&1 | head"
}
```

### 🤖 Assistant — 2026-11-16T14:14:17Z

<details><summary>Reasoning</summary>

Confirmed: interactive/login shell has no pnpm on PATH. Fix: symlink pnpm into a directory already on their PATH, e.g. ~/bin or ~/.local/bin. Both are on PATH. ~/bin exists.

Do it non-destructively: symlink /Users/davec/bin/pnpm -> tools path. But note the version 12.15.0 — pnpm latest real versions... whatever, it reports 12
