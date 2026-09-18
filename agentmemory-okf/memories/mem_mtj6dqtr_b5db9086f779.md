---
type: Fact
title: # Ollama Model Performance for Shell Commands

source: claude
session_id: f66b39
description: # Ollama Model Performance for Shell Commands

source: claude
session_id: f66b39b8-4039-4bdf-8b1f-7a1db3a702fb
resource: claude://conversation/f66b39b8-4039-4bdf-8b1f-7a1db3a702fb

# Conversation

- *
resource: agentmemory://memory/mem_mtj6dqtr_b5db9086f779
tags: ["okf", "okf-claude", "claude", "claude://conversation/f66b39b8-4039-4bdf-8b1f-7a1db3a702fb"]
timestamp: 2026-09-01T21:24:34.081Z
source: agentmemory
strength: 7
---
# Content

# Ollama Model Performance for Shell Commands

source: claude
session_id: f66b39b8-4039-4bdf-8b1f-7a1db3a702fb
resource: claude://conversation/f66b39b8-4039-4bdf-8b1f-7a1db3a702fb

# Conversation

- **Session ID:** `f66b39b8-4039-4bdf-8b1f-7a1db3a702fb`
- **Source:** claude
- **Started:** 2025-06-23T14:18:36Z
- **Messages:** 3

---

### 👤 User — 2025-06-23T14:18:37Z

Help me test the response time and correctness of each ollama model suitable for coding, programming, debugging, shell commands by using `find /home/davec -type l ! -exec test -e {} \; -ls but skip over Documents path` as a prompt. Create a table containing the name of model, its size, response time and result text.

---

### 👤 User — 2025-06-23T14:45:39Z

Help me test the response time and correctness of each ollama model suitable for coding, programming, debugging, shell commands by using `find /home/davec -type l ! -exec test -e {} \; -ls but skip over Documents path` as a prompt. Create a table containing the name of model, its size, response time and result text.

---

### 🤖 Assistant — 2025-06-23T14:55:09Z

The user wants me to help test multiple Ollama models for coding/programming tasks using a specific command as a test prompt. They want a table showing model name, size, response time, and result text.

The test command is: `find /home/davec -type l ! -exec test -e {} \; -ls but skip over Documents path`

This is a find command that:
- Searches in /home/davec 
- Looks for symbolic links (-type l)
- Uses ! -exec test -e {} \; to find broken symlinks (links that don't point to existing files)
- Uses -ls to list details
- But they want to skip over Documents path

First, I need to understand what Ollama models are available and suitable for coding. I should use the desktop commander tools to:
1. Check what Ollama models are installed
2. Test each model with the given prompt
3. Measure response times
4. Collect the results in a table

Let me start by checking what Ollama models are available.I'll help you test Ollama models for coding tasks using that find command. Let me start by checking what Ollama models you have available and then test each one.
```
This block is not supported on your current device yet.
```

Great! I can see a lot of models available. For coding/programming tasks, I should focus on models that are specifically designed for code or are known to be good at programming. Let me identify the most relevant ones:

1. **Code-specific models:**
   - starcoder2:latest (1.7 GB)
   - starcoder2:15b-instruct-v0.1-q4_K_S (9.2 GB)
   - stable-code:3b-code-q4_0 (1.6 GB)
   - qwen2.5-coder:latest (4.7 GB)
   - qwen2.5-coder:7b-instruct-q4_K_S (4.5 GB)
   - qwen2.5-coder:1.5b-base (986 MB)
   - hhao/qwen2.5-coder-tools:latest (4.7 GB)
   - hhao/qwen2.5-coder-tools:1.5b (1.6 GB)
   - hhao/qwen2.5-coder-tools:0.5b (994 MB)
   - hhao/qwen2.5-coder-tools:3b (1.9 GB)
   - codellama:latest (3.8 GB)
   - codellama:7b-instruct (3.8 GB)
   - codellama:13b-instruct-q4_K_S (7.4 GB)
   - codeqwen:latest (4.2 GB)
   - codegemma:latest (5.0 GB)
   - yi-coder:latest (5.0 GB)

2. **General models that are good at coding:**
   - deepseek-r1:14b (9.0 GB)
   - deepseek-r1:32b (19 GB)
   - qwq:latest (19 GB)
   - llama3.3:latest (42 GB)
   - phi4:latest (9.1 GB)

I'll strategically choose models that provide a comprehensive range of capabilities. My selection will include compact and larger models to test performance across different sizes and computational requirements.

1. qwen2.5-coder-tools:0.5b (994 MB) - smallest coding model
2. qwen2.5-coder-tools:1.6b (1.6 GB) - small coding model
3. stable-code:3b-code-q4_0 (1.6 GB) - small general coding
4. starcoder2:latest (1.7 GB) - popular coding model
5. qwen2.5-coder:latest (4.7 GB) - medium coding model
6. codellama:7b-instruct (3.8 GB) - popular coding model
7. yi-coder:latest (5.0 GB) - medium coding model
8. deepseek-r1:14b (9.0 GB) - larger general model good at reasoning
9. phi4:latest (9.1 GB) - newer general model
10. starcoder2:15b-instruct-v0.1-q4_K_S (9.2 GB) - larger coding model

I'll evaluate these models on a bash command task involving symbolic link detection, which requires precise par
