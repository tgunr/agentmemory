---
type: Fact
title: # List ollama models convertible to llama.cpp

source: hermes
session_id: 202608
description: # List ollama models convertible to llama.cpp

source: hermes
session_id: 20260813_141232_58beae
resource: hermes://session/20260813_141232_58beae

# Conversation

- **Session ID:** `20260813_141232_5
resource: agentmemory://memory/mem_mtg126d0_d5168cde03ec
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:32:17.737Z
source: agentmemory
strength: 7
---
# Content

# List ollama models convertible to llama.cpp

source: hermes
session_id: 20260813_141232_58beae
resource: hermes://session/20260813_141232_58beae

# Conversation

- **Session ID:** `20260813_141232_58beae`
- **Source:** desktop
- **Model:** tencent/hy3:free
- **Started:** 2026-08-13T19:12:32Z
- **Ended:** 2026-08-24T22:20:25Z
- **Messages:** 17
- **CWD:** `/Users/davec`
- **Tokens:** 60197 in / 7665 out

---

### 👤 User — 2026-08-13T19:12:36Z

which ollama models can be converted for use in llama.cpp?

### 🤖 Assistant — 2026-08-13T19:13:00Z

<details><summary>Reasoning</summary>

The user is asking which Ollama models can be converted for use in llama.cpp. This is a technical question. Let me think about what I know.

Actually, this is a somewhat nuanced question. Ollama and llama.cpp are related but distinct projects. Let me think carefully.

Ollama models are stored in a specific format. llama.cpp can load GGUF files. Ollama's model files are essentially GGUF files (Ollama uses GGUF format internally, or rather, it uses its own blob format in the modelfile but the weights are GGUF-compatible).

Actually, let me think about this more carefully. The question "which Ollama models can be converted for use in llama.cpp" - this is interesting because:

1. Ollama uses GGUF format for the actual model weights (since Ollama 0.1.x it moved to GGUF, replacing the older GGML format).
2. The models are stored in `~/.ollama/models/blobs/` as blobs.
3. You can extract the GGUF blob and use it directly in llama.cpp.

So actually, most modern Ollama models ARE GGUF files and can be used directly with llama.cpp without conversion. The "conversion" is really just extraction/rename.

But there are some nuances:
- Older models (GGML format, pre-0.1.29) would need conversion via `llama.cpp/convert.py` or `tools/gguf-convert.sh`.
- Models that are GGUF can be directly used.

Let me provide accurate technical information. I should probably verify some details via web search since this is a specific technical question and I want to be accurate. The user said "Provide detailed, accurate technical information."

Actually, the question is somewhat about the relationship between the two. Let me think about whether I should search. Since the user wants accurate technical info, and this is a factual/technical domain that could have changed, a quick web search would help confirm. But I also have substantial knowledge here.

Let me consider: the key technical points are:

1. **Ollama stores models as GGUF** - The blobs in `~/.ollama/models/blobs/` are GGUF files (for models created with newer Ollama versions). You can find the model's manifest, identify which blob is the weights file (it's the large one, the one referenced as the "model" layer), and rename it to `.gguf`. Then it can be loaded by llama.cpp (or any GGUF-compatible tool like llama.cpp, LM Studio, KoboldCpp, etc.).

2. **"Conversion" terminology** - The real conversion question is about architecture compatibility. llama.cpp supports a wide range of architectures: Llama, Mistral, Mixtral, Qwen, Gemma, Phi, Falcon, etc. Any Ollama model whose architecture is supported by llama.cpp can be used. The architecture support is the limiting factor, not the format.

3. **Tools:**
   - `ollama show --modelfile` to find the FROM line which shows the blob.
   - Extract the blob.
   - Or use `llama.cpp` programs like `llama-gguf-split`, etc.

4. **The GGUF spec** - GGUF is the unified format.

5. **Quantization** - You can re-quantize with `llama-quantize`.

Let me also address: can you convert *any* model? Models from safetensors (PyTorch) need `convert_hf_to_gguf.py` (in `llama.cpp/convert_hf_to_gguf.py`). Ollama models that are already GGUF don't need this.

Also there's a tool `llama-export` / or the conversion is essentially: Ollama models → extract GGUF → use directly.

There's also the consideration: some Ollama models use MoE (mixtral, qwen2-57b-a14b, etc.), and llama.cpp supports those.

Let me be precise and accurate. I think I should do a quick web search to confirm the current state of the relationship and any tools, because Ollama and llam
