---
type: Fact
title: # Installing Hermes on Linux

source: hermes
session_id: 20260614_102059_7a51de

description: # Installing Hermes on Linux

source: hermes
session_id: 20260614_102059_7a51de
resource: hermes://session/20260614_102059_7a51de

# Conversation

- **Session ID:** `20260614_102059_7a51de`
- **Source
resource: agentmemory://memory/mem_mspdv1en_462c58389d5f
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-08-12T01:00:53.060Z
source: agentmemory
strength: 7
---
# Content

# Installing Hermes on Linux

source: hermes
session_id: 20260614_102059_7a51de
resource: hermes://session/20260614_102059_7a51de

# Conversation

- **Session ID:** `20260614_102059_7a51de`
- **Source:** tui
- **Model:** qwen2.5-coder:7b-instruct-q4_K_S
- **Started:** 2026-06-14T15:21:00Z
- **Ended:** 2026-06-14T17:39:52Z
- **Messages:** 6
- **CWD:** `/Volumes/davec`
- **Tokens:** 68052 in / 515 out

---

### 👤 User — 2026-06-14T15:21:00Z

How do I install Hermes on Linux?

### 🤖 Assistant — 2026-06-14T15:22:09Z

{"name":"hermes setup tools", "parameters":{}}

### 👤 User — 2026-06-14T15:34:18Z

How do I install Hermes on Linux?

### 🤖 Assistant — 2026-06-14T15:34:47Z

<details><summary>Reasoning</summary>


The user is asking how to install Hermes on Linux. Let me load the hermes-agent skill which contains information about configuring, extending, or contributing to Hermes Agent, including installation instructions.


</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 🤖 Assistant — 2026-06-14T15:34:47Z

<details><summary>Reasoning</summary>


The skill has been loaded. Now I can see that Hermes Agent provides a quick start for Linux installation. Let me also check if there are any Linux-specific notes in the documentation. The skill mentions:

```
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
```

This is the main installation command. Let me provide a comprehensive answer about installing Hermes on Linux, including the basic install command and any additional considerations.


</details>

Here's how to install Hermes Agent on Linux:

## Quick Install

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
```

This installs Hermes to `~/.hermes/` and sets up your shell profile.

## After Installation

```bash
# Restart your terminal or source the profile
source ~/.bashrc  # or ~/.zshrc

# Check installation
hermes doctor

# Choose a model/provider
hermes model

# Interactive chat
hermes

# Or quick query
hermes chat -q "your question here"
```

## Linux-Specific Notes

Once installed, Hermes works the same on Linux as other platforms. The CLI uses `prompt_toolkit` for the interactive interface.

**For background services (gateway):**
```bash
# If you want the messaging gateway running as a background service
systemctl --user enable --now hermes-gateway
```

**Troubleshooting:**
- Run `hermes doctor` to check dependencies and config
- If tools don't appear, run `hermes tools` to enable them
- Check `~/.hermes/config.yaml` for configuration
- API keys go in `~/.hermes/.env`

The install script sets up:
- Hermes binary in your PATH (`~/.local/bin/hermes`)
- Default config at `~/.hermes/config.yaml`
- Environment file at `~/.hermes/.env` for secrets

Would you like help with any specific part of the setup, like configuring a model provider or enabling tools?
