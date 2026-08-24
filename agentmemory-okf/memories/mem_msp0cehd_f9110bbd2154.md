---
type: Fact
title: # Install Hermes Agent on Linux

source: hermes
session_id: 20260614_101723_c427
description: # Install Hermes Agent on Linux

source: hermes
session_id: 20260614_101723_c42778
resource: hermes://session/20260614_101723_c42778

# Conversation

- **Session ID:** `20260614_101723_c42778`
- **Sou
resource: agentmemory://memory/mem_msp0cehd_f9110bbd2154
tags: ["okf", "okf-hermes", "hermes", "/Volumes/AI/Servers/MCP"]
timestamp: 2026-08-11T18:42:28.557Z
source: agentmemory
strength: 7
---
# Content

# Install Hermes Agent on Linux

source: hermes
session_id: 20260614_101723_c42778
resource: hermes://session/20260614_101723_c42778

# Conversation

- **Session ID:** `20260614_101723_c42778`
- **Source:** cli
- **Model:** phi3:mini
- **Started:** 2026-06-14T15:22:20Z
- **Ended:** 2026-06-14T16:57:51Z
- **Messages:** 8
- **CWD:** `/Volumes/AI/Servers/MCP`
- **Tokens:** 78814 in / 1796 out

---

### 👤 User — 2026-06-14T15:22:20Z

[Note: model was just switched from nous-hermes2 to phi3:mini via ollama-launch. Adjust your self-identification accordingly.]

how to install hermes on linux?

### 👤 User — 2026-06-14T15:24:59Z

[Note: model was just switched from qwen2.5-coder:1.5b to gpt-oss:latest via ollama-launch. Adjust your self-identification accordingly.]

how to install hermes on linux?

### 👤 User — 2026-06-14T15:34:42Z

how to install hermes on linux?

### 🤖 Assistant — 2026-06-14T15:37:53Z

<details><summary>Reasoning</summary>

We need to respond to user's request: "how to install hermes on linux?" They mention notes about model changes, but irrelevant for installing Hermes.

We have skills including "hermes-agent" which contains instructions/configurations. We should load that skill to get guidance. Let's fetch it.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 🤖 Assistant — 2026-06-14T15:37:54Z

<details><summary>Reasoning</summary>

User asked: multiple times how to install Hermes on Linux. They had notes about switching model. We loaded hermes-agent skill which has instructions how to install.

We should produce answer succinctly. Provide steps: pre-requisites (curl, etc.), run install script, maybe apt-get for dependencies? Provide command and explanation. No markdown per style? The user uses CLI; we can give plain text. Should mention Linux specific environment. Also maybe mention that Hermes works on any OS and include note about python version. Provide steps:

1. Ensure Python >=3.9.
2. Install with curl script.
3. optionally set config.
4. Verify by running hermes etc.

Also mention if they have root, use apt for dependencies: git, ffmpeg? Not needed maybe. The install script will handle pip installs.

Should not use markdown blocks ideally; just plain text lines.

Let's respond concisely.

</details>

**Installing Hermes Agent on Linux**

1. **Prerequisites**
   ```
   # Must have Python 3.9+ and a recent build‑essential set
   sudo apt update
   sudo apt install -y python3 python3-pip git curl
   ```

2. **Run the installation script**  
   The official installer pulls the latest release, installs it under `~/.hermes`, and adds a convenient shell alias.

   ```bash
   curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
   ```

   *The script does:*
   - Downloads the latest package tarball from GitHub.
   - Extracts it to `$HOME/.hermes`.
   - Adds `~/.hermes/bin` to your PATH (if not already).

3. **Verify the install**

   ```bash
   hermes --version          # should show “Hermes x.x.x”
   hermes hello               # simple chat test
   ```

   If you get a “command not found” error, ensure `~/.hermes/bin` is in your `PATH`:

   ```bash
   export PATH="$HOME/.hermes/bin:$PATH"
   ```

4. **Optional: run the setup wizard**

   ```
   hermes setup          # interactive config – provider selection, model picker, etc.
   ```

5. **Post‑install notes**

   * Python virtual environment not needed; Hermes manages its own deps in `~/.hermes/venv`.
   * The first time you run it will create a default `config.yaml` and `.env`. Edit these if you need custom provider URLs or API keys.
   * The installer installs the CLI tool **without** needing system‑wide packages beyond Python, curl, git.

That’s all—Hermes should now be runnable on your Linux machine. Happy coding!

### 👤 User — 2026-06-14T15:50:51Z

i have hermes installed on linux server, can I use its hermes dashboard from my mac?

### 🤖 Assistant — 2026-06-14T15:54:23Z

<details><summary>Reasoning</summary>

User asks: use Hermes dashboard from Mac to control server installation. Need explain how to connect remotely; talk about gateway/w
