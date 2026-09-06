---
type: Fact
title: # Configure Open-Notebook with Ollama

source: abacus
session_id: 8cf02d536
reso
description: # Configure Open-Notebook with Ollama

source: abacus
session_id: 8cf02d536
resource: abacus://conversation/8cf02d536

# Conversation

- **Session ID:** `8cf02d536`
- **Source:** abacus.ai
- **Project
resource: agentmemory://memory/mem_mti8sjay_b31b3f8ed062
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/8cf02d536"]
timestamp: 2026-09-01T05:44:17.133Z
source: agentmemory
strength: 7
---
# Content

# Configure Open-Notebook with Ollama

source: abacus
session_id: 8cf02d536
resource: abacus://conversation/8cf02d536

# Conversation

- **Session ID:** `8cf02d536`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2025-12-30T13:50:33+00:00
- **Messages:** 8

---

### 👤 User

How configure open-notebook for use will ollama including embedding, TTS, STT

---

### 🤖 Assistant

Here’s a concise, practical setup guide to use **Open Notebook** with **Ollama** for:

- chat / LLM inference  
- **embeddings**  
- **TTS (text to speech)**  
- **STT (speech to text)**  

I’ll assume you’re on macOS/Linux or WSL and comfortable with a terminal. If any part should be Windows‑only or more step‑by‑step, tell me your OS and I’ll tailor it.

---

### 1. Prerequisites

#### 1.1 Install & run Ollama

1. Install from [https://ollama.com](https://ollama.com).
2. After install, start the server:
   ```bash
   ollama serve
   ```
3. Pull the models you want:

   - General LLM:
     ```bash
     ollama pull llama3.1
     ```
   - Embeddings:
     ```bash
     ollama pull nomic-embed-text
     ```
   - (Optional) A TTS/STT‑helper model if you use an LLM for those tasks.

Ollama by default exposes an HTTP API at `http://localhost:11434`.

---

### 2. Configure Open Notebook to use Ollama as LLM

The specifics depend on the Open Notebook version, but generally:

1. Open the **settings / config** in Open

Notebook:
   - Either a `settings.json`, `.env`, or a UI settings page.
2. Locate the **LLM / Provider** section and choose something like:
   - Provider: `Custom` or `Ollama`
   - API base / URL: `http://localhost:11434`
3. Set a default model, for example:

   ```jsonc
   // Example-style config snippet (adjust to your app format)
   {
     "llm": {
       "provider": "ollama",
       "base_url": "http://localhost:11434",
       "model": "llama3.1",
       "temperature": 0.3,
       "max_tokens": 2048
     }
   }
   ```

4. Restart Open Notebook (if required) so it reloads the config.

If you show me your current config file or a screenshot of the settings UI, I can give you exact fields to fill.

---

### 3. Configure Open Notebook embedding with Ollama

Ollama exposes embeddings via:

```http
POST /api/embeddings
{
  "model": "nomic-embed-text",
  "prompt": "your text"
}
```

In Open Notebook’s config, find the **Embeddings / Vector store** section and set it to use your Ollama embedding model.

Example

configuration idea:

```jsonc
{
  "embeddings": {
    "provider": "ollama",
    "base_url": "http://localhost:11434",
    "model": "nomic-embed-text",
    "dimensions": 768   // match the embedding model you use
  },
  "vector_store": {
    "type": "local",    // or 'sqlite', 'chroma', etc. depending on Open Notebook
    "path": "./data/vectors"
  }
}
```

Then:

- Re‑index / re‑ingest documents in Open Notebook so it generates embeddings via Ollama.
- Test semantic search or RAG features and watch Ollama’s logs to confirm `/api/embeddings` is being hit.

---

### 4. TTS (Text‑to‑Speech)

Ollama itself does **not** provide native audio synthesis; you typically:

- Use Ollama as the **brain** (LLM), and  
- Use a separate **TTS engine** for actual audio.

Common open options:

- **Coqui TTS**, Piper, or **local Whisper TTS forks**
- System TTS (e.g., `say` on macOS) via command line
- A dedicated TTS service with an HTTP API

#### 4.1 Option A – Use Open Notebook’s built‑in TTS integration (if

available)

Some builds of Open Notebook support:

- “Use system TTS” or
- A configurable TTS endpoint.

Check settings for “Text to Speech” or “Voice output”. Possible patterns:

```jsonc
{
  "tts": {
    "enabled": true,
    "provider": "system" // or "custom"
    // if custom:
    // "endpoint": "http://localhost:5002/tts"
  }
}
```

Then:

- Install and run your TTS server (e.g., Coqui TTS at `http://localhost:5002`).
- Configure endpoint + voice in Open Notebook.

#### 4.2 Option B – Use a local TTS script + hotkey

If Open Notebook doesn’t have direct TTS settings:

1. Create a small script that:
   - Reads text (stdin or argument
