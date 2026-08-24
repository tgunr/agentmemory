---
type: Fact
title: # 20260803_130506_6b6b66

source: hermes
session_id: 20260803_130506_6b6b66
reso
description: # 20260803_130506_6b6b66

source: hermes
session_id: 20260803_130506_6b6b66
resource: hermes://session/20260803_130506_6b6b66

# Conversation

- **Session ID:** `20260803_130506_6b6b66`
- **Source:** 
resource: agentmemory://memory/mem_mspe03ap_dca65c13b8e8
tags: ["okf", "okf-hermes", "hermes", "/Volumes/AI"]
timestamp: 2026-08-12T01:04:48.772Z
source: agentmemory
strength: 7
---
# Content

# 20260803_130506_6b6b66

source: hermes
session_id: 20260803_130506_6b6b66
resource: hermes://session/20260803_130506_6b6b66

# Conversation

- **Session ID:** `20260803_130506_6b6b66`
- **Source:** desktop
- **Model:** kilo-auto/efficient
- **Started:** 2026-08-03T18:05:06Z
- **Messages:** 2
- **CWD:** `/Volumes/AI`
- **Tokens:** 6 in / 590 out
- **Est. cost:** $0.0149

---

### 👤 User — 2026-08-03T18:05:07Z

How do i change the model in llama server?

### 🤖 Assistant — 2026-08-03T18:06:11Z

<details><summary>Reasoning</summary>

The user is asking about changing the model in llama server. This likely refers to llama.cpp's server mode (llama-server). Let me check if there's a relevant skill first - I see "mlops-tools" which mentions llama.cpp, and "local-model-providers" for local inference servers. Let me also check the ollama skills since they might be related.

Actually, this is a straightforward question about llama.cpp's server. The answer is simple: you change the model by restarting the server with a different `-m` (model) flag pointing to a different GGUF file. Let me give a direct answer.

Let me check if there's a relevant skill first.

</details>

Changing the model in `llama-server` (from llama.cpp) is straightforward — you restart the server with a different model file:

```bash
# Stop the current server (Ctrl+C or kill the process), then:
./llama-server -m /path/to/your/new-model.gguf [other options]
```

### Common flags you'll want alongside `-m`:

| Flag | Purpose | Example |
|------|---------|---------|
| `-m` | Path to the GGUF model file | `-m models/llama-3.1-8b-q4.gguf` |
| `--host` | Bind address | `--host 0.0.0.0` |
| `--port` | Port number | `--port 8080` |
| `-c` | Context size | `-c 8192` |
| `-ngl` | GPU layers to offload | `-ngl 99` (all layers to GPU) |
| `--threads` | CPU threads | `--threads 8` |

### Example:

```bash
# Switch from an 8B model to a 70B model
./llama-server -m ~/models/llama-3.1-70b-q4_k_m.gguf -c 4096 -ngl 35 --port 8080
```

### Quick tips:
- **No hot-swap** — the model is loaded at startup, so you must restart to change it.
- **GGUF format only** — llama-server uses GGUF files (not safetensors or PyTorch).
- **Check available models** — if you're using Ollama, the models are stored under `~/.ollama/models/` but in a different layout. For llama.cpp directly, you download GGUF files from Hugging Face (look for `*.gguf`).

Is there a specific setup you're working with — like a particular model you want to switch to, or are you running it alongside Ollama?
