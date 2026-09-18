---
type: Fact
title: # Using Claude with Local Models

source: abacus
session_id: ce3996619
resource:
description: # Using Claude with Local Models

source: abacus
session_id: ce3996619
resource: abacus://conversation/ce3996619

# Conversation

- **Session ID:** `ce3996619`
- **Source:** abacus.ai
- **Project:** A
resource: agentmemory://memory/mem_mti8t4ry_96f85e3135e8
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/ce3996619"]
timestamp: 2026-09-01T05:44:45.059Z
source: agentmemory
strength: 7
---
# Content

# Using Claude with Local Models

source: abacus
session_id: ce3996619
resource: abacus://conversation/ce3996619

# Conversation

- **Session ID:** `ce3996619`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-02-10T22:27:15+00:00
- **Messages:** 2

---

### 👤 User

How to use Claude with local models via lmstudio or ollama

---

### 🤖 Assistant

To use Claude (specifically the **Claude Code** CLI tool) with local models via LM Studio or Ollama, you can leverage the tool's support for custom API endpoints. This allows you to run Claude's agentic coding features—like editing files and running terminal commands—using local hardware instead of Anthropic's cloud servers.

### Prerequisites
First, ensure you have the Claude Code CLI installed on your machine.
*   **macOS/Linux/WSL**: `curl -fsSL https://claude.ai/install.sh | bash`
*   **Windows PowerShell**: `irm https://claude.ai/install.ps1 | iex`

### Option 1: Using Ollama
Ollama provides a streamlined way to launch Claude Code with local models using a single command.

1.  **Install Ollama**: Download it from [ollama.com](https://ollama.com).
2.  **Pull a Coding Model**: It is recommended to use models with strong tool-calling abilities and large context windows, such as `qwen3-coder`.
    ```bash
    ollama pull qwen3-coder
    ```
3.  **Launch Claude Code**: Use the `ollama launch` command which

automatically configures the necessary environment variables for you.
    ```bash
    ollama launch claude --model qwen3-coder
    ```
    Alternatively, you can manually set the environment variables:
    ```bash
    export ANTHROPIC_BASE_URL=http://localhost:11434
    export ANTHROPIC_AUTH_TOKEN=ollama
    claude --model qwen3-coder
    ```

For more details, see the [Ollama Claude Code Integration](https://docs.ollama.com/integrations/claude-code) and the [Ollama Blog](https://ollama.com/blog/claude).

### Option 2: Using LM Studio
LM Studio is ideal if you prefer a GUI or are running on Apple Silicon with MLX models.

1.  **Install LM Studio**: Download version 0.4.1 or later from [lmstudio.ai](https://lmstudio.ai/download).
2.  **Load a Model**: Search for and load a coding-specific model (e.g., `gpt-oss-20b` or `qwen3-coder`). Ensure the context length is set to at least 32K.
3.  **Start the Local Server**: Go to the "Local Server" tab and click "Start Server" (default port is 1234).
4.  **Configure

Environment Variables**:
    ```bash
    export ANTHROPIC_BASE_URL=http://localhost:1234
    export ANTHROPIC_AUTH_TOKEN=lmstudio
    ```
5.  **Run Claude Code**:
    ```bash
    claude --model <your-model-identifier>
    ```

Detailed instructions can be found in the [LM Studio Documentation](https://lmstudio.ai/docs/integrations/claude-code) and their [Blog Post](https://lmstudio.ai/blog/claudecode).

### Key Tips for Local Usage
*   **Context Window**: Claude Code is context-heavy. Ensure your local model is configured with a large context window (e.g., `num_ctx=65536` in Ollama) to avoid errors during long coding sessions.
*   **Privacy**: To ensure no data leaves your machine, you can set `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1` to block telemetry.
*   **Model Selection**: Models like `qwen3-coder` or `gpt-oss-20b` generally perform better for agentic tasks than general-purpose small models.

For further troubleshooting and advanced setup, refer to the [Claude Code Setup

Guide](https://code.claude.com/docs/en/setup).

---
