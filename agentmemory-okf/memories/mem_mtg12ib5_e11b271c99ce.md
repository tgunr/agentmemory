---
type: Fact
title: # Compare macMLX with turboquant #3

source: hermes
session_id: 20260823_051732_
description: # Compare macMLX with turboquant #3

source: hermes
session_id: 20260823_051732_4b5c12
resource: hermes://session/20260823_051732_4b5c12

# Conversation

- **Session ID:** `20260823_051732_4b5c12`
- *
resource: agentmemory://memory/mem_mtg12ib5_e11b271c99ce
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:32:33.243Z
source: agentmemory
strength: 7
---
# Content

# Compare macMLX with turboquant #3

source: hermes
session_id: 20260823_051732_4b5c12
resource: hermes://session/20260823_051732_4b5c12

# Conversation

- **Session ID:** `20260823_051732_4b5c12`
- **Source:** desktop
- **Model:** tencent/hy3:free
- **Started:** 2026-08-23T10:17:32Z
- **Ended:** 2026-08-24T22:20:25Z
- **Messages:** 619
- **CWD:** `/Users/davec`
- **Tokens:** 589858 in / 117532 out

---

### 👤 User — 2026-08-23T10:00:18Z

comapre macMLX with turboquant

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

### 🤖 Assistant — 2026-08-23T10:00:28Z

<details><summary>Reasoning</summary>

The user wants me to compare MacMLX with TurboQuant. Let me think about what these are.

MacMLX likely refers to MLX - Apple's machine learning framework for Apple Silicon. TurboQuant is presumably something mentioned in my memory — there's a skill `turboquant-mlx-run`. Let me check that skill and do a proper comparison.

Let me load the turboquant-mlx-run skill and also do some web research to compare MLX (Apple's framework) with TurboQuant (TurboQuant-MLX).

Let me gather information. I should use the skill and web

</details>

I'll pull up the TurboQuant-MLX skill and research both to give you a grounded comparison.
Good — I've got the TurboQuant-MLX skill (verified on this machine) plus current MLX/MLX-LM info. First, a framing note so we're comparing the right things:

**"macMLX" ≈ Apple's MLX framework + MLX-LM** (the standard, dead-simple way to run LLMs on a Mac). **TurboQuant-MLX is not a competitor to MLX — it's a quantization toolkit that runs *on top of* MLX.** So this is really "base MLX-LM vs. MLX-LM + TurboQuant weight/KV-cache compression." TurboQuant even depends on `mlx-lm` (its convert/serve paths need it). Let me know if you meant something else by "macMLX."

## Head-to-head

| Dimension | MLX / MLX-LM (base) | TurboQuant-MLX (on top of MLX) |
|---|---|---|
| **What it is** | Array framework (Apple) + `mlx-lm` for load/run/quant/finetune | Google's TurboQuant (arXiv:2504.19874) ported to MLX — distorts optimally at low bit rates |
| **Setup friction** | `pip install mlx-lm` → `mlx_lm.server`. Done. | Clone repo, venv, `convert` step, plus several verified gotchas (moved-venv shebangs, incomplete HF snapshot, `datasets`/hf_hub version conflicts, `--streaming` for OOM) |
| **Weight quant** | Standard 4/8-bit (and 3-bit) built in | Adds sub-2-bit **ternary (1.58-bit) MoE experts**, QJL, affine quant; distortion-rate-optimal |
| **KV-cache quant** | Basic (`--kv-bits`, usually 4-bit) | **Headline feature** — 1–3 bit KV with mixed K8/V3 + fp16 sink, "near-zero quality loss"; this is the real differentiator for long context |
| **Memory** | Honest, conservative | Claims ~5× KV-cache savings (e.g. 31B @128K: 13.3→4.9 GB KV). Weight quant also tighter |
| **Quality (perplexity)** | 4-bit ≈ TurboQuant 4-bit | Verified on 1B (WikiText-2): fp16 16.16, **TQ4 19.77 (+22%)**, TQ4+QJL 18.28 (+13%), **TQ3 43.39 (+168%)** → 4-bit sweet spot, 3-bit too lossy |
| **Speed** | Native Metal, fast | Custom fused Metal kernels: ~4.6× compression at ~98% of fp16 decode speed; this box measured 0.5B @44.7 tok/s, 14B @5.5 tok/s |
| **Model/arch support** | Thousands of HF models | qwen2/2.5/3/3.5-MoE, gpt_oss, kimi-k3, nemotron-3, llama, mistral — **not** DeepSeek-Coder/CodeLlama/Stable-Code |
| **Distributed (multi-Mac)** | ✅ WWDC26: `mlx.launch` + JACCL over Thunde
