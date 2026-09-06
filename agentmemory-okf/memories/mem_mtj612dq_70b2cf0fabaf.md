---
type: Fact
title: # Determine `ssh pve.local` local LLM model

source: hermes
session_id: 20260830
description: # Determine `ssh pve.local` local LLM model

source: hermes
session_id: 20260830_122233_0a645a
resource: hermes://session/20260830_122233_0a645a

# Conversation

- **Session ID:** `20260830_122233_0a6
resource: agentmemory://memory/mem_mtj612dq_70b2cf0fabaf
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-09-01T21:14:42.518Z
source: agentmemory
strength: 7
---
# Content

# Determine `ssh pve.local` local LLM model

source: hermes
session_id: 20260830_122233_0a645a
resource: hermes://session/20260830_122233_0a645a

# Conversation

- **Session ID:** `20260830_122233_0a645a`
- **Source:** desktop
- **Model:** tencent/hy3:free
- **Started:** 2026-08-30T17:22:33Z
- **Messages:** 1816
- **CWD:** `/Volumes/davec`
- **Tokens:** 489349 in / 80220 out

---

### 👤 User — 2026-08-30T17:22:34Z

Look at `ssh pve.local` hardware and determine which LLM model could be run locally.

### 👤 User — 2026-08-30T17:22:34Z

Look at `ssh pve.local` hardware and determine which LLM model could be run locally.

### 🤖 Assistant — 2026-08-30T17:22:40Z

<details><summary>Reasoning</summary>

The user wants me to look at the hardware on pve.local via SSH and determine which LLM models could be run locally. Let me SSH into pve.local and check the hardware specs.

Let me check memory: "Mac + Linux/pve.local. ... davec key-auth". So I can SSH into pve.local. Let me run hardware detection commands.

Let me batch independent commands to gather CPU, RAM, GPU info

</details>

**Tool call: terminal**

```json
{
  "command": "ssh pve.local 'echo \"=== HOST ===\"; uname -a; echo \"=== CPU ===\"; nproc; lscpu 2>/dev/null | grep -E \"Model name|Socket|Core|Thread|CPU max\" ; echo \"=== MEM ===\"; free -h; echo \"=== GPU ===\"; lspci 2>/dev/null | grep -iE \"VGA|3D|display\" ; echo \"=== NVIDIA ===\"; nvidia-smi 2>/dev/null || echo \"no nvidia-smi\"; echo \"=== DISK ===\"; df -h / 2>/dev/null | tail -2'"
}
```

### 🤖 Assistant — 2026-08-30T17:22:40Z

<details><summary>Reasoning</summary>

The user wants me to look at the hardware on pve.local via SSH and determine which LLM models could be run locally. Let me SSH into pve.local and check the hardware specs.

Let me check memory: "Mac + Linux/pve.local. ... davec key-auth". So I can SSH into pve.local. Let me run hardware detection commands.

Let me batch independent commands to gather CPU, RAM, GPU info

</details>

**Tool call: terminal**

```json
{
  "command": "ssh pve.local 'echo \"=== HOST ===\"; uname -a; echo \"=== CPU ===\"; nproc; lscpu 2>/dev/null | grep -E \"Model name|Socket|Core|Thread|CPU max\" ; echo \"=== MEM ===\"; free -h; echo \"=== GPU ===\"; lspci 2>/dev/null | grep -iE \"VGA|3D|display\" ; echo \"=== NVIDIA ===\"; nvidia-smi 2>/dev/null || echo \"no nvidia-smi\"; echo \"=== DISK ===\"; df -h / 2>/dev/null | tail -2'"
}
```

### 🤖 Assistant — 2026-08-30T17:22:58Z

<details><summary>Reasoning</summary>

Let me analyze the hardware:

- **CPU**: 2× Intel Xeon E5-2683 v3 @ 2.00GHz, 14 cores/socket, 2 threads/core = 56 logical CPUs. These are Haswell-era (2014) server CPUs. No AVX-512. They support AVX2.
- **RAM**: 204 GB total, 96 GB available. Huge amount of RAM.
- **GPU**: AMD Radeon 540/550X (Lexa, entry-level Polaris, ~1-2GB VRAM), and ASPEED (BMC display). No NVIDIA GPU. The Radeon 540/550X has only ~2GB VRAM — basically useless for GPU LLM inference. Also ROCm support for Lexa is limited/none.
- **Disk**: 1.3 TB free.

So no usable GPU. CPU is Haswell (AVX2, no AVX-512). With 96 GB available RAM and 204 GB total, CPU-based inference (llama.cpp, GPTQ, GGUF) is the path. 

Key constraints for CPU inference:
- RAM is the binding constraint. Models in GGUF q4 (4-bit) need ~0.55 bytes/param. 
- 7B q4 ~ 4-5 GB → trivial
- 13B q4 ~ 8 GB
- 30B/34B q4 ~ 17-20 GB
- 70B q4 ~ 40 GB → fits in 96 GB available
- 70B q5/q6 ~ 50-60 GB → still fits
- 70B q8 ~ 75 GB → fits in total 204 but available is 96, so borderline if other workloads
- 120B+ q4 ~ 65 GB but slow
- 180B q4 ~ 100+ GB → exceeds available
- 405B q4 → no way

But CPU inference on Haswell Xeons is SLOW. 56 threads but per-thread performance is low (~2-3 GHz Haswell). Token throughput for 70B could be ~3-8 tok/s. Still usable for non-interactive.

Also worth noting: no AVX-512 means llama.cpp won't use the AVX-512 kernels, but it has AVX2 kernels. Fine.

Let me check if there's a GPU driver for the Radeon. Lexa/RX 550 — ROCm doesn't support it well. Not worth it. Could mention Vulkan via the AMD GPU using llama.cpp Vulkan backend, but 2GB VRAM is too small.

Le
