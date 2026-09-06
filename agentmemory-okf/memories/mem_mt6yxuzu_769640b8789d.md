---
type: Fact
title: # Compare macMLX with turboquant #2

source: hermes
session_id: 20260823_050402_
description: # Compare macMLX with turboquant #2

source: hermes
session_id: 20260823_050402_cca4b5
resource: hermes://session/20260823_050402_cca4b5

# Conversation

- **Session ID:** `20260823_050402_cca4b5`
- *
resource: agentmemory://memory/mem_mt6yxuzu_769640b8789d
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-24T08:23:01.585Z
source: agentmemory
strength: 7
---
# Content

# Compare macMLX with turboquant #2

source: hermes
session_id: 20260823_050402_cca4b5
resource: hermes://session/20260823_050402_cca4b5

# Conversation

- **Session ID:** `20260823_050402_cca4b5`
- **Source:** desktop
- **Model:** tencent/hy3:free
- **Started:** 2026-08-23T10:04:02Z
- **Messages:** 32
- **CWD:** `/Users/davec`
- **Tokens:** 51507 in / 14178 out

---

### 👤 User — 2026-08-23T10:00:18Z

comapre macMLX with turboquant

### 🤖 Assistant — 2026-08-23T10:00:28Z

<details><summary>Reasoning</summary>

The user wants me to compare MacMLX with TurboQuant. Let me think about what these are.

MacMLX likely refers to MLX - Apple's machine learning framework for Apple Silicon. TurboQuant is presumably something mentioned in my memory — there's a skill `turboquant-mlx-run`. Let me check that skill and do a proper comparison.

Let me load the turboquant-mlx-run skill and also do some web research to compare MLX (Apple's framework) with TurboQuant (TurboQuant-MLX).

Let me gather information. I should use the skill and web

</details>

I'll pull up the TurboQuant-MLX skill and research both to give you a grounded comparison.

### 🤖 Assistant — 2026-08-23T10:01:02Z

<details><summary>Reasoning</summary>

The user wants a comparison between "macMLX" (which I interpret as MLX — Apple's machine learning framework on Mac) and TurboQuant (specifically TurboQuant-MLX). Let me clarify what they're asking. "macMLX" likely refers to MLX running on Mac — the base framework. TurboQuant-MLX is a quantization layer built ON TOP of MLX. So the comparison is really: base MLX (with mlx-lm) vs TurboQuant-MLX (which adds aggressive weight + KV cache quantization on top of MLX).

Let me give a clear, grounded comparison. I have solid info from:
1. The turboquant-mlx-run skill (detailed, verified on this machine)
2. The web searches about MLX and TurboQuant-MLX

Let me structure this well. The key relationship: MLX is the foundation (array framework + MLX-LM for model loading/inference). TurboQuant-MLX is a quantization method/package built on MLX that compresses weights and KV cache beyond what MLX-LM's standard quant does.

Key points to compare:
- **What they are / relationship**: MLX is the framework; TurboQuant-MLX is a quantization toolkit that runs ON MLX. They're not competitors — TurboQuant sits on top of MLX.
- **Weight quantization**: MLX-LM supports standard 4/8-bit quant (and 3-bit). TurboQuant adds Google's distortion-rate optimal quantization, including sub-2-bit ternary (1.58-bit) experts, QJL, affine quant, MoE support.
- **KV cache quantization**: This is TurboQuant's headline feature — MLX-LM has basic KV quant (e.g., 4-bit, via --kv-bits), but TurboQuant pushes to 1-3 bit KV with mixed K8/V3 + fp16 sink, near-zero quality loss.
- **Memory**: TurboQuant claims ~5x less memory for 32B models. Skill notes: 14B @ 4-bit ~7.4GB, 32B Won't fit on 32GB Mac even with TurboQuant? Actually the skill says Qwen2.5-Coder-32B is "Too big for 32 GB" — so TurboQuant helps but doesn't magically make 32B fit on 32GB. Let me be careful. The towardsai article said "Run 32B Models on Your Mac With 5x Less Memory" — that's KV cache mainly.
- **Quality/perplexity tradeoff**: From the skill's eval: fp16=16.16, TQ4=19.77 (+22%), TQ3=43.39 (+168%). So 4-bit is sweet spot, 3-bit too lossy. MLX-LM's standard 4-bit quant is comparable.
- **Speed**: TurboQuant claims 98% of FP16 decode speed at 4.6x compression with custom Metal kernels. Skill measured ~44.7 tok/s on 0.5B, ~5.5 tok/s on 14B.
- **Ease of use**: MLX-LM is dead simple — `pip install mlx-lm`, `mlx_lm.server`. TurboQuant needs convert step, venv gotchas, HF snapshot fixes. More setup friction.
- **Supported architectures**: TurboQuant supports qwen2/2.5/3/3.5-MoE, gpt_oss, kimi-k3, nemotron-3, llama, mistral — NOT DeepSeek-Coder/CodeLlama/Stable-Code. MLX-LM supports thousands of HF models.
- **Distributed**: MLX (WWDC26) added multi-Mac distributed inference via mlx.launch + JACCL over Thunderbolt. TurboQuant is single-node primarily.
- **Use case**: If you want simplest path to run models and have RAM headroom, base MLX-LM. If y
