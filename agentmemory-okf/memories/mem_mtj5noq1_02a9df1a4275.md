---
type: Fact
title: # Ollama model tool issue

source: chatgpt
session_id: 689efa17-0d3c-832c-8098-2
description: # Ollama model tool issue

source: chatgpt
session_id: 689efa17-0d3c-832c-8098-211db4f1121b
resource: chatgpt://conversation/689efa17-0d3c-832c-8098-211db4f1121b

# Conversation

- **Session ID:** `68
resource: agentmemory://memory/mem_mtj5noq1_02a9df1a4275
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/689efa17-0d3c-832c-8098-211db4f1121b"]
timestamp: 2026-09-01T21:04:18.317Z
source: agentmemory
strength: 7
---
# Content

# Ollama model tool issue

source: chatgpt
session_id: 689efa17-0d3c-832c-8098-211db4f1121b
resource: chatgpt://conversation/689efa17-0d3c-832c-8098-211db4f1121b

# Conversation

- **Session ID:** `689efa17-0d3c-832c-8098-211db4f1121b`
- **Source:** chatgpt (OpenAI)
- **Started:** 2025-08-15T09:12:56.312291+00:00
- **Messages:** 2

---

### 👤 User

I keep getting "registry.ollama.ai/library/qwen3-coder:latest does not support tools" using ollama as an agent when I have used qwen3-coder:latest before with no problem

---

### 🤖 Assistant

# Summary
- You’re getting: **`qwen3-coder:latest does not support tools`** when using Ollama’s *agent* (function-calling/tools).
- Symptom class: **model capability / version mismatch** (likely server too old or the `latest` tag now points to a non‑tool variant).
- You previously used it successfully → something **changed**: either your **Ollama server version** (server lacks tool support) or the **`latest` tag** now resolves to a build without tools.

# Environment Snapshot (needed)
Please run these (copy/paste) and share outputs—this is the smallest set to pinpoint root cause:
```bash
# 1) Client & server versions (warns on mismatch)
ollama --version

# 2) Confirm which model "latest" actually points to
ollama show qwen3-coder:latest | sed -n '1,120p'

# 3) List installed models (helps spot multiple qwen variants)
ollama list

# 4) Minimal repro: ask model to use tools once
curl -s http://localhost:11434/api/chat -d '{
  "model": "qwen3-coder:latest",
  "messages": [{"role":"user","content":"ping"}],
  "tools": [{"type":"function","function":{"name":"noop","parameters":{"type":"object","properties":{}}}}]
}' | jq -r '.message?.content,.error'
```

# MRE
- If the last command prints an error like **“does not support tools”**, the server thinks this **specific model build** cannot use tools.

# Hypotheses & Tests
- **H1 (Most likely): Server too old for tools.**  
  - *Check:* `ollama --version` shows **server 0.9.x** with a newer CLI.  
  - *Result:* Tools fail on models that require newer runtimes.
- **H2:** The **`latest` tag moved** to a Qwen build without tools.  
  - *Check:* `ollama show qwen3-coder:latest` → look for fields indicating **tool/function calling** or notes in the modelfile/template; compare with another known tool-capable model.
- **H3:** Your agent wrapper **always sends `tools`**, even when the model doesn’t advertise tools.  
  - *Check:* Try a known tool-capable model:  
    ```bash
    curl -s http://localhost:11434/api/chat -d '{
      "model": "llama3.1:latest",
      "messages": [{"role":"user","content":"2+2?"}],
      "tools": [{"type":"function","function":{"name":"noop","parameters":{"type":"object","properties":{}}}}]
    }' | jq -r '.message?.content,.error'
    ```
    - If this **works**, your agent path is fine; the issue is **specific to `qwen3-coder:latest`**.

# Root Cause (probable)
**Your Ollama server is older (e.g., 0.9.x) or `qwen3-coder:latest` now resolves to a variant that doesn’t advertise tool support.**  
Evidence to confirm: version output and `ollama show` for that tag.

# Fix (Patch)
Pick the smallest change that fits your case:

**Option A — Update Ollama server (if versions mismatch / server < current):**
```bash
# macOS (Homebrew)
brew update && brew upgrade ollama
brew services restart ollama
ollama --version
```
- Expect client/server to match (e.g., **0.11.x**). Retest your agent.

**Option B — Pin a tool-capable model explicitly:**
- Try a known tool-capable baseline to verify your agent path:
  ```bash
  ollama pull llama3.1:latest
  ```
  If that works with tools, pull a Qwen that supports tools (examples that commonly do):
  ```bash
  ollama pull qwen2.5-coder:latest
  # or (if available in your registry)
  ollama pull qwen3.5-coder:latest
  ```
- Then run your agent against that **pinned tag** (avoid `latest` drift).

**Option C — Don’t send tools when the model can’t use them (fallback):**
- If your framework allows, conditionally include `tools` only when the model supports them. Quick detection:
  - Run a small **capability probe** once (the MRE curl). If it errors, disable tools for 
