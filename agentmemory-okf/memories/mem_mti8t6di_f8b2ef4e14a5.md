---
type: Fact
title: # Emacs AI Integration

source: abacus
session_id: d3bc4dbfb
resource: abacus://
description: # Emacs AI Integration

source: abacus
session_id: d3bc4dbfb
resource: abacus://conversation/d3bc4dbfb

# Conversation

- **Session ID:** `d3bc4dbfb`
- **Source:** abacus.ai
- **Project:** AI Vault
- 
resource: agentmemory://memory/mem_mti8t6di_f8b2ef4e14a5
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/d3bc4dbfb"]
timestamp: 2026-09-01T05:44:47.122Z
source: agentmemory
strength: 7
---
# Content

# Emacs AI Integration

source: abacus
session_id: d3bc4dbfb
resource: abacus://conversation/d3bc4dbfb

# Conversation

- **Session ID:** `d3bc4dbfb`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-03-02T17:02:06+00:00
- **Messages:** 2

---

### 👤 User

How does emacs integrate with AI as and editor and IDE?

---

### 🤖 Assistant

Emacs integrates with AI by leveraging its extensible architecture to bridge the gap between the editor and external Large Language Models (LLMs). Unlike "black-box" IDEs, Emacs allows users to choose between deep terminal-based integration, inline completion, or structured chat interfaces.

As of 2026, the integration generally falls into three categories:

### 1. Deep Pair Programming (Aider & Claude Code)
The most powerful way Emacs functions as an AI IDE is through tools that can actually "see" and "edit" your files.
* **Aidermacs (formerly aider.el):** This is a popular integration for [Aider](https://github.com/MatthewZMD/aidermacs), a command-line tool that allows an AI to edit code across multiple files. It provides a [Magit](https://magit.vc/)-like transient menu to add files to context, ask for refactors, or generate unit tests. It supports "Architect Mode," where one model (like Claude 3.5 Sonnet) reasons about the architecture while another (like DeepSeek) handles the code generation

[MatthewZMD/aidermacs](https://github.com/MatthewZMD/aidermacs).
* **Claude-code-ide.el:** A newer, native integration for the Claude Code CLI. It uses the **Model Context Protocol (MCP)** to create a bidirectional bridge. This allows Claude to not just edit text, but actually use Emacs features like **LSP** (for code navigation), **Tree-sitter** (for AST analysis), and **Flycheck** (to see and fix compiler errors) [manzaltu/claude-code-ide.el](https://github.com/manzaltu/claude-code-ide.el).

### 2. Inline Completion (Copilot & Codeium)
For developers who want "Ghost Text" style completions similar to VS Code:
* **Copilot.el:** Provides GitHub Copilot integration. It offers real-time code suggestions as you type and can be configured to work in both code buffers and documentation modes like `org-mode` [r/emacs](https://www.reddit.com/r/emacs/comments/1gj4b7c/discussion_ai_assisted_programming_in_emacs/).
* **Codeium:** Offers a free-tier alternative with a dedicated Emacs package that provides multiline

completions and understands over 70 languages [SourceForge](https://sourceforge.net/software/ai-coding-assistants/integrates-with-emacs/).

### 3. Structured Chat and General Assistance
If you prefer a chat-based workflow for explaining code or brainstorming:
* **gptel:** A widely used, "no-frills" LLM client for Emacs. It allows you to chat with various backends (OpenAI, Anthropic, local models via Ollama) directly in a dedicated buffer or by sending a region of text to the AI.
* **Ellama:** Focuses on local LLM integration, allowing users to maintain privacy by running models on their own hardware while still getting IDE-like features like code explanation and translation [MatthewZMD/aidermacs](https://github.com/MatthewZMD/aidermacs).

### Key Advantages of Emacs AI Integration
* **Context Awareness:** Through MCP and custom Elisp, AI tools in Emacs can access your project structure, open buffers, and even your `grep` or `ripgrep` results.
* **Interactive Diffs:** Many Emacs AI packages use `ediff` (the

built-in visual diff tool), allowing you to manually accept, reject, or modify AI-suggested changes before they are committed to your file [manzaltu/claude-code-ide.el](https://github.com/manzaltu/claude-code-ide.el).
* **Extensibility:** You can write small Elisp snippets to pipe any text—from a compiler error to a git log—directly into an AI prompt.

---
