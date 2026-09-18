---
type: Fact
title: # Assess ollama 8B 14B performance impact

source: hermes
session_id: 20260827_0
description: # Assess ollama 8B 14B performance impact

source: hermes
session_id: 20260827_085705_bbafaa
resource: hermes://session/20260827_085705_bbafaa

# Conversation

- **Session ID:** `20260827_085705_bbafa
resource: agentmemory://memory/mem_mtg12w8h_6a8064bbaf7f
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:32:51.268Z
source: agentmemory
strength: 7
---
# Content

# Assess ollama 8B 14B performance impact

source: hermes
session_id: 20260827_085705_bbafaa
resource: hermes://session/20260827_085705_bbafaa

# Conversation

- **Session ID:** `20260827_085705_bbafaa`
- **Source:** desktop
- **Model:** tencent/hy3:free
- **Started:** 2026-08-27T13:57:05Z
- **Ended:** 2026-08-28T08:02:38Z
- **Messages:** 145
- **CWD:** `/Users/davec`
- **Tokens:** 150818 in / 66585 out

---

### 👤 User — 2026-08-27T13:57:05Z

Turboquant seems to be problematic, if I switch back to ollama for local models what is the performance impact of running with a 8B and 14B equivalent model?

### 👤 User — 2026-08-27T13:57:05Z

Turboquant seems to be problematic, if I switch back to ollama for local models what is the performance impact of running with a 8B and 14B equivalent model?

### 🤖 Assistant — 2026-08-27T13:57:22Z

<details><summary>Reasoning</summary>

The user is asking about performance impact of switching from TurboQuant to Ollama with 8B and 14B equivalent models. Let me think about this.

This is a question about local LLM performance on their hardware. They have:
- mini.local with 32GB RAM
- Ollama runs independently via :11434
- TQ models: /tq08, /tq14, /tq27

The question is about performance impact of running Ollama with 8B and 14B equivalent models vs TurboQuant. I should give actual measured data if possible.

Let me think about what I know from memory. There are skills: `turboquant-mlx-run`, `turboquant-mlx-serving`, `local-llm-benchmark`, `apple-silicon-llm-benchmarking`, `local-llm-inference-benchmark`, `ollama-management`, `ollama-provider-troubleshooting`.

The user wants to know performance impact. I should actually benchmark this rather than guess. But the question is comparative. Let me think about what real measurements would look like.

Actually, let me consider the honest approach here. The user is asking a question that requires actual measurement. TurboQuant (TQ) is a quantized MLX model that runs faster with lower memory. Ollama runs llama.cpp-style models.

I have skills for benchmarking. Let me check the situation first. The user wants to understand: if they switch from TQ to Ollama, what's the performance hit with 8B and 14B models?

I should:
1. Check current state - what's running (Ollama? TQ? what VRAM/RAM?)
2. Benchmark both if possible, or give measured numbers

But this could be a long task. Let me think about what's actually feasible. Let me first understand the environment. Let me load relevant skills and check the current state.

Actually, the most honest and useful thing: the user is asking theoretically/conceptually but with a bent toward "what performance impact". I could either (a) give known architectural differences with real numbers from benchmarks, or (b) actually run benchmarks.

Given the "Finishing the job" rule and the memory note that this user "expects MEASURED savings (real tool counts), not hand-waved", I think I should actually measure. But benchmarking both an 8B and 14B model on Ollama AND having TQ equivalents available is a lot.

Let me first check what's actually available. Let me look at:
- Current memory usage
- What TQ models exist
- What Ollama models exist

Let me start by gathering real data. I'll load the benchmarking skills and check the system state in parallel.

Let me think about which skills to load. The relevant ones:
- `turboquant-mlx-serving` - to understand TQ serving
- `local-llm-inference-benchmark` - benchmark local LLMs
- `ollama-management` - managing Ollama

Let me also check current system state with terminal commands (memory, running processes).

Actually, I need to be careful. Let me recall the memory: TQ models /tq08, /tq14, /tq27. Ollama serves via :11434. The switch logic: /tq08|/tq14|/tq27 calls tear_down_ollama() to free Ollama's RAM for TQ model. /tq-stop unloads TQ and leaves Ollama up.

So the relationship: TQ models need the RAM that Ollama would otherwise use. With 32GB, the 27B won't fit alongside Ollama. For 8B and 14B, the question is whether you can run them on Ollama and what throughput you get.

Performance impact of Ollama 8B/14B vs TQ 8B/14B:
- TQ is ML
