---
type: Fact
title: # scour the web looking for info about running…

source: hermes
session_id: 2026
description: # scour the web looking for info about running…

source: hermes
session_id: 20260824_221611_992a29
resource: hermes://session/20260824_221611_992a29

# Conversation

- **Session ID:** `20260824_221611
resource: agentmemory://memory/mem_mtg12n0x_f8053b6fd24f
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260824_221611_992a29"]
timestamp: 2026-08-30T16:32:39.357Z
source: agentmemory
strength: 7
---
# Content

# scour the web looking for info about running…

source: hermes
session_id: 20260824_221611_992a29
resource: hermes://session/20260824_221611_992a29

# Conversation

- **Session ID:** `20260824_221611_992a29`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-08-25T03:16:11Z
- **Ended:** 2026-08-25T04:56:19Z
- **Messages:** 14
- **Tokens:** 66863 in / 2106 out

---

### 👤 User — 2026-08-25T03:16:11Z

scour the web looking for info about running Hermes on local models on a mac mini 32GB

### 🤖 Assistant — 2026-08-25T03:16:20Z

<details><summary>Reasoning</summary>

The user wants to run Hermes on local models on a Mac mini 32GB. Let me search for relevant information about this. I should look for:

1. Hermes Agent documentation about local models
2. Mac mini 32GB setup
3. Ollama integration
4. Model recommendations for 32GB RAM
5. Configuration steps

Let me start by searching the web and also checking the Hermes docs.

</details>

**Tool call: web_search**

```json
{
  "limit": 10,
  "query": "Hermes Agent local models Mac mini 32GB setup Ollama"
}
```

**Tool call: web_search**

```json
{
  "limit": 10,
  "query": "Hermes Agent local LLM macOS 32GB RAM configuration"
}
```

**Tool call: web_search**

```json
{
  "limit": 10,
  "query": "Hermes Agent ollama provider mac mini M-series 32GB"
}
```

### 🤖 Assistant — 2026-08-25T03:16:29Z

<details><summary>Reasoning</summary>

I have good search results. Let me now read the most relevant pages to get detailed info about running Hermes on local models on a Mac mini 32GB. I should read:
1. The official Hermes local Ollama setup guide
2. The official local LLMs on Mac guide
3. The uxdev.org Mac mini guide
4. The hermes-agent.ai features page

Let me fetch these pages.

</details>

**Tool call: web_extract**

```json
{
  "urls": [
    "https://hermes-agent.nousresearch.com/docs/guides/local-ollama-setup",
    "https://hermes-agent.nousresearch.com/docs/guides/local-llm-on-mac",
    "https://uxdev.org/blog/self-hosting-hermes-ai-agent-on-a-mac-mini/",
    "https://hermes-agent.ai/features/local-llm-support"
  ]
}
```

### 🤖 Assistant — 2026-08-25T03:16:42Z

<details><summary>Reasoning</summary>

I have enough info from the snippets already. I’m pulling together a focused 32GB Mac mini summary: recommended models, whether CPU-only is viable, expected throughput, setup options, and the key gotchas like 64K+ context and timeout tuning.

</details>

Here’s the consolidated picture from the docs and recent community guides:

**Mac mini 32GB: realistic fit**
- This is right on the edge of “comfortable local agent use.”
- Usable today with a 9B–14B tool-capable model; 27B–32B is possible but slower, especially on CPU.
- The main tension is model size + KV cache, not just raw weights.

**Recommended models for 32GB**
- **9B–14B range** is the practical sweet spot for reliable tool calls with room to breathe.
- **27B–32B range** can work, but expect longer prefill and tighter memory; choose smaller quantizations if you go this route.
- Tool-use capability matters more than raw benchmark size for agentic work.

**CPU vs GPU**
- CPU-only works on modern Apple Silicon, but long tool loops and long-context prefill can be slow.
- Metal offload helps; native local runtimes like Ollama, llama.cpp, or MLX-backed options are the usual paths.

**Context window gotcha**
- Hermes needs at least **64K context** for proper tool/memory behavior.
- Ollama’s default context is often much lower; many local-model failures come from context that’s too small, not the model itself.

**Setup paths**
- **Easiest:** `ollama launch hermes`, which handles provider wiring and endpoint config.
- **Manual:** point Hermes at a local OpenAI-compatible endpoint and set the model explicitly.
- **Alternative runtimes:** LM Studio, llama.cpp, MLX/omlx all work if they expose a `/v1/chat/completions` endpoint.

**Tuning for speed on constrained hardware**
- Keep the model loaded to avoid reloads.
- Widen Hermes’ local inference timeout rather than assuming it hung.
- Trim unnecessary tool surfaces if prefill is dominating latency.

**Best advice for 32GB**
-
