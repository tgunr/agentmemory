---
type: Fact
title: # macMLX: Native macOS LLM Toolchain

source: grok
session_id: 2db63253-e9a5-47c
description: # macMLX: Native macOS LLM Toolchain

source: grok
session_id: 2db63253-e9a5-47c0-895c-c743f9e0828f
resource: grok://conversation/2db63253-e9a5-47c0-895c-c743f9e0828f

# Conversation

- **Session ID:*
resource: agentmemory://memory/mem_mtj6e0ug_9cbfa0c9be81
tags: ["okf", "okf-grok", "grok", "grok://conversation/2db63253-e9a5-47c0-895c-c743f9e0828f"]
timestamp: 2026-09-01T21:24:47.067Z
source: agentmemory
strength: 7
---
# Content

# macMLX: Native macOS LLM Toolchain

source: grok
session_id: 2db63253-e9a5-47c0-895c-c743f9e0828f
resource: grok://conversation/2db63253-e9a5-47c0-895c-c743f9e0828f

# Conversation

- **Session ID:** `2db63253-e9a5-47c0-895c-c743f9e0828f`
- **Source:** grok
- **Model:** grok-3
- **Started:** 2026-08-17T22:18:06Z
- **Messages:** 2

---

### 👤 User — 2026-08-17T22:18:22Z

macMLX

---

### 🤖 Assistant — 2026-08-17T22:18:22Z

**macMLX** is a native macOS application and toolchain for running local large language models (LLMs) and vision-language models (VLMs) on Apple Silicon, powered by Apple’s MLX framework.<grok:render card_id="ad6a7c" card_type="citation_card" type="render_inline_citation"><argument name="citation_id">0</argument></grok:render>

### Key features
- **Fully native Swift implementation**: The inference engine runs in-process in Swift (using Apple’s MLX Swift), with no Python runtime required by default. Everything stays in a single ~50 MB app bundle.
- **Three interfaces sharing one core**:
  - **SwiftUI app** — polished native GUI for chat (streaming Markdown, reasoning blocks, image attachments, conversation history, model parameters).
  - **CLI** (`macmlx`) — pull/run/serve models, inspect status, etc.
  - **API** — OpenAI-compatible (`/v1/chat/completions`), Anthropic Messages, Ollama, MCP, embeddings, and rerank endpoints. Always-on when a model is loaded.
- **Local-first & private**: 100% on-device by default, no cloud, no telemetry. Models stay on your Mac.
- **Requirements**: macOS 14+ (Sonoma or later) and Apple Silicon (M1–M4 series).
- **Current version** (as of mid-2026): v0.8.0.

### Notable capabilities (v0.8)
- Language models + support for multiple VLM families.
- Prompt caching (RAM + SSD tiered cache with longest-common-prefix reuse), model pooling, LoRA adapters.
- Continuous batching, speculative decoding.
- Pure-Swift port of architectures such as DeepSeek V3.2.
- Built-in Hugging Face browser for downloading/resuming/updating MLX models (with mirrors).
- Live Activity panel showing GPU, memory bandwidth, thermal/power metrics and inference bottleneck analysis.
- Benchmarking tools for tokens/s, time-to-first-token, etc.

### Installation
Download the DMG from the [GitHub releases](https://github.com/magicnight/mac-mlx/releases). Because it may not be notarized yet, you may need to clear Gatekeeper quarantine on first launch (`xattr -cr /Applications/macMLX.app`).

Official site: [https://macmlx.app/](https://macmlx.app/)  
Source: [https://github.com/magicnight/mac-mlx](https://github.com/magicnight/mac-mlx) (Apache 2.0).

It positions itself as a more thoroughly native alternative to tools like LM Studio or Ollama on Mac—especially by keeping the entire inference stack in Swift rather than wrapping a Python backend.

---
