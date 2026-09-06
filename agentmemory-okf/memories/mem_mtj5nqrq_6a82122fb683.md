---
type: Fact
title: # Ollama model capabilities

source: chatgpt
session_id: 68a05116-1f94-8330-a5eb
description: # Ollama model capabilities

source: chatgpt
session_id: 68a05116-1f94-8330-a5eb-4c13a9d3cd04
resource: chatgpt://conversation/68a05116-1f94-8330-a5eb-4c13a9d3cd04

# Conversation

- **Session ID:** `
resource: agentmemory://memory/mem_mtj5nqrq_6a82122fb683
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/68a05116-1f94-8330-a5eb-4c13a9d3cd04"]
timestamp: 2026-09-01T21:04:20.962Z
source: agentmemory
strength: 7
---
# Content

# Ollama model capabilities

source: chatgpt
session_id: 68a05116-1f94-8330-a5eb-4c13a9d3cd04
resource: chatgpt://conversation/68a05116-1f94-8330-a5eb-4c13a9d3cd04

# Conversation

- **Session ID:** `68a05116-1f94-8330-a5eb-4c13a9d3cd04`
- **Source:** chatgpt (OpenAI)
- **Started:** 2025-08-16T09:36:49.860551+00:00
- **Messages:** 14

---

### 👤 User

Explain what the capabilities are in a Olamma model and what does each one mean?

---

### 🤖 Assistant

Got it — you’re asking about **Ollama models** (not Olamma — looks like a small typo 😊).  
In Ollama, when you run `ollama list` or `ollama show <model>`, you’ll often see metadata that includes **capabilities**. These tell you what the model is designed to do or what it supports.

Here are the common **capabilities** you’ll see and what they mean:

---

### 🔹 Common Ollama Model Capabilities

1. **`chat`**  
   - The model supports multi-turn chat-style interactions.  
   - It’s optimized for remembering prior turns in a conversation and responding in a natural, contextual way.

2. **`completion`**  
   - The model can perform raw text completions.  
   - Useful when you don’t need chat context (e.g., code autocompletion, finishing a sentence, text expansion).

3. **`embedding`**  
   - The model can generate **vector embeddings** from text.  
   - These embeddings are numerical representations of text that are used in **semantic search, retrieval-augmented generation (RAG), and clustering**.

4. **`tool` / `function calling`** *(only on some models)*  
   - The model can call external functions/tools when asked.  
   - This is similar to OpenAI’s function calling, letting the LLM structure outputs in JSON for calling APIs.

5. **`vision`** *(if supported by that model)*  
   - The model can process **images as input** along with text.  
   - You’ll see this in multimodal models like LLaVA, which can answer questions about pictures.

6. **`audio`** *(rare, but starting to appear)*  
   - The model can handle audio input/output.  
   - Typically experimental and only for speech-to-text or voice response capable models.

---

### Example:  
If you run:

```bash
ollama show mistral
```

You might see:

```
capabilities:
  - chat
  - completion
```

This means **Mistral** is good for chat and completion but **not embeddings or vision**.

If you check something like **nomic-embed-text**:

```
capabilities:
  - embedding
```

That means it’s **only for embeddings**, not conversation.

---

👉 Would you like me to run through the **default models Ollama ships with** (like `llama2`, `mistral`, `codellama`, `nomic-embed-text`) and explain the capabilities of each in detail? That way you’ll have a quick reference for when to use which.

---

### 👤 User

In Continue for VS Code, what are the recommended settings for Chat, Autocomplete, Edit, Apply, and Embed for ollama models?

---

### 🤖 Assistant

Here’s a clear breakdown of **recommended settings in Continue for VS Code when using Ollama models**, covering the roles of **chat**, **autocomplete**, **edit/apply**, and **embed**:

---

##  Recommended Continue Configuration with Ollama

According to the official Continue documentation, a typical `config.yaml` or equivalent JSON config for integrating Ollama models with Continue might look like this:

```yaml
models:
  - name: mistral
    provider: ollama
    apiBase: http://localhost:11434
    model: mistral
    roles:
      - chat
      - edit
      - apply
  - name: Qwen2.5-Coder 1.5B
    provider: ollama
    apiBase: http://localhost:11434
    model: qwen2.5-coder:1.5b-base
    roles:
      - autocomplete
  - name: Nomic Embed
    provider: ollama
    apiBase: http://localhost:11434
    model: nomic-embed-text:latest
    roles:
      - embed
```

- **Chat**, **Edit**, **Apply**: Best handled by a general-purpose model like **Mistral** citeturn0search5.
- **Autocomplete**: Dedicated code-completion model like **Qwen2.5-Coder 1.5B** citeturn0search5.
- **Embed** (for things like codebase semantic search): **nomic-embed-text** model citeturn0search5.

---

##  Alternative Setup: Qwen3 (Multi-Role) + Embedding

Another popular configuration u
