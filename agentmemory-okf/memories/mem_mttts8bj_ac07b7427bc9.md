---
type: Fact
title: # Llama model storage location

source: hermes
session_id: 20260908_080657_4397c
description: # Llama model storage location

source: hermes
session_id: 20260908_080657_4397c7
resource: hermes://session/20260908_080657_4397c7

# Conversation

- **Session ID:** `20260908_080657_4397c7`
- **Sour
resource: agentmemory://memory/mem_mttts8bj_ac07b7427bc9
tags: ["okf", "okf-hermes", "hermes", "/Volumes/alpha/sources"]
timestamp: 2026-09-09T08:17:22.839Z
source: agentmemory
strength: 7
---
# Content

# Llama model storage location

source: hermes
session_id: 20260908_080657_4397c7
resource: hermes://session/20260908_080657_4397c7

# Conversation

- **Session ID:** `20260908_080657_4397c7`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-09-08T13:07:43Z
- **Ended:** 2026-09-08T15:04:41Z
- **Messages:** 30
- **CWD:** `/Volumes/alpha/sources`
- **Tokens:** 87162 in / 5676 out
- **Est. cost:** $-51015.0000

---

### 👤 User — 2026-09-08T13:07:43Z

where does llama store its models?

### 🤖 Assistant — 2026-09-08T13:08:00Z

<details><summary>Reasoning</summary>

Simple question. Ollama stores models in ~/.ollama/models typically. Could check quickly, but answer is known. On macOS: ~/.ollama/models (manifests + blobs). Also llama.cpp doesn't store models itself. Give brief answer; maybe verify on this machine.

</details>

Ollama keeps its models in `~/.ollama/models/` — specifically:

- `~/.ollama/models/manifests/` — model metadata (registry tags)
- `~/.ollama/models/blobs/` — the actual GGUF weights (content-addressed `sha256-*` files)

Want me to list what's actually on mini right now (`ls -lh ~/.ollama/models/blobs`)?

Note: if you meant raw **llama.cpp**, it doesn't manage a store — you point it at a GGUF file path yourself (yours lives wherever you downloaded it, e.g. on pve.local).

### 👤 User — 2026-09-08T13:09:12Z

if i execute "llama cli -hf ggml-org/Qwen3.5-0.8B-GGUF" where does the model get stored?

### 🤖 Assistant — 2026-09-08T13:09:34Z

<details><summary>Reasoning</summary>

User asks about llama-cli (llama.cpp) with -hf flag downloading from Hugging Face. Where does it store? Default: HF cache — ~/.cache/huggingface/hub on Linux, or LLAMA_CACHE env var. Actually llama.cpp uses HF hub cache: $HF_HOME or ~/.cache/huggingface. On macOS same. Newer llama.cpp respects LLAMA_CACHE? I believe llama.cpp uses the HF cache dir via hf_hub_download semantics: $HF_HUB_CACHE or $HF_HOME/hub or ~/.cache/huggingface/hub.

The model name "Qwen3.5-0.8B" — may not exist, but that's user's question. I can answer directly, maybe check quickly. No need for tools, but could verify with docs. I'm fairly confident: llama.cpp's -hf downloads into the Hugging Face cache: ~/.cache/huggingface/hub (or $HF_HOME/hub, or $HF_HUB_CACHE). I could quickly check the llama.cpp docs to confirm. Let me just answer; maybe a quick web check for LLAMA_CACHE. llama.cpp does support LLAMA_CACHE env var? There was a PR adding `--cache-dir` / LLAMA_CACHE? Hmm. Actually I recall llama.cpp added LLAMA_CACHE env var support for the default cache location. To be safe, do a quick search.

</details>

**Tool call: web_search**

```json
{
  "query": "llama.cpp llama-cli -hf download cache location LLAMA_CACHE huggingface"
}
```

### 🤖 Assistant — 2026-09-08T13:09:49Z

It goes into the **Hugging Face Hub cache**, not an llama.cpp-specific folder:

- Default: `~/.cache/huggingface/hub/` (on macOS also `~/.cache/huggingface/hub` — same path)
- Override with env var: `LLAMA_CACHE=/path/to/dir` (or `HF_HUB_CACHE`)

So your command would store it under something like:

```
~/.cache/huggingface/hub/models--ggml-org--Qwen3.5-0.8B-GGUF/
```

Two notes on that command:

1. The binary is `llama-cli` (with a dash), not `llama cli`.
2. `ggml-org/Qwen3.5-0.8B-GGUF` doesn't exist — did you mean `Qwen/Qwen3-0.6B-GGUF`? There's no official "Qwen3.5-0.8B" that I know of. If you give me the exact repo, I can run it on mini and show you the real path it lands in.

### 👤 User — 2026-09-08T13:14:45Z

which env to use to move the models to ../../AI/models

### 🤖 Assistant — 2026-09-08T13:14:59Z

<details><summary>Reasoning</summary>

Relative path ../../AI/models — presumably /Volumes/AI/models. Set LLAMA_CACHE.

</details>

Use `LLAMA_CACHE`:

```sh
export LLAMA_CACHE=/Volumes/AI/models
```

Two caveats:

1. **Use an absolute path** — `../../AI/models` only resolves relative to wherever you happen to be when you run `llama-cli`, so models would land in different places depending on your cwd. I assume you mean `/Volumes/AI/models` (your local APFS AI volume).

2. Make it persistent — add to your `
