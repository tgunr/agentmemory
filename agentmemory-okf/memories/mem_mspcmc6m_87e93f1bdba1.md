---
type: Fact
title: # Hy3 vs Step 3.7 Flash Model Comparison

source: hermes
session_id: 20260721_06
description: # Hy3 vs Step 3.7 Flash Model Comparison

source: hermes
session_id: 20260721_061426_310d95
resource: hermes://session/20260721_061426_310d95

# Conversation

- **Session ID:** `20260721_061426_310d95
resource: agentmemory://memory/mem_mspcmc6m_87e93f1bdba1
tags: ["okf", "okf-hermes", "hermes", "/Volumes/AI/agentmemory"]
timestamp: 2026-08-12T00:26:07.518Z
source: agentmemory
strength: 7
---
# Content

# Hy3 vs Step 3.7 Flash Model Comparison

source: hermes
session_id: 20260721_061426_310d95
resource: hermes://session/20260721_061426_310d95

# Conversation

- **Session ID:** `20260721_061426_310d95`
- **Source:** tui
- **Model:** stepfun/step-3.7-flash:free
- **Started:** 2026-07-21T11:14:27Z
- **Messages:** 8
- **CWD:** `/Volumes/AI/agentmemory`
- **Tokens:** 24488 in / 778 out

---

### 👤 User — 2026-07-21T11:14:27Z

compare Hy3 model with Step 3.7 Flash

### 🤖 Assistant — 2026-07-21T11:14:33Z

<details><summary>Reasoning</summary>

The user wants to compare two AI models: Hy3 (likely referring to a specific model) and Step 3.7 Flash (which appears to be the model currently being used based on the system context). Let me search for information about these models online.

I should do parallel web searches to gather information about:
1. The current Step model (Step 3.7 Flash)
2. Hy3 model

Let me search for both to provide a comprehensive comparison.

</details>

**Tool call: web_search**

```json
{
  "query": "Step 3.7 Flash model benchmarking reasoning features"
}
```

**Tool call: web_search**

```json
{
  "query": "Hy3 model AI capabilities features"
}
```

### 🤖 Assistant — 2026-07-21T11:14:38Z

<details><summary>Reasoning</summary>

I found information about Step 3.7 Flash, but the search for "Hy3 model" returned a 429 error. Let me try a different search query for Hy3. It might be a specific model name that needs different search terms.

</details>

**Tool call: web_search**

```json
{
  "query": "\"Hy3\" AI model benchmark"
}
```

**Tool call: web_search**

```json
{
  "query": "Hy3 LLM release capabilities"
}
```

### 🤖 Assistant — 2026-07-21T11:14:51Z

<details><summary>Reasoning</summary>

I have enough public info to compare Hy3 vs Step 3.7 Flash without further fragile searching. I’ll note what’s documented, mark uncertainty where Hy3 details are still sparse, and avoid reasoning beyond the retrieved summaries.

</details>

Here’s a comparison based on the currently available public info.

**Model family and scale**
- **Hy3**: Tencent Hunyuan **295B** total-parameter Mixture-of-Experts model with **21B active** parameters, using 192 experts and top-8 routing.
- **Step 3.7 Flash**: StepFun **198B** MoE model optimized as a high-efficiency flash model.

**Core strengths**
- **Hy3**: Targeted at **reasoning and agentic workflows**, with strong claimed performance on challenging STEM/benchmark tasks and developer-facing evaluations.
- **Step 3.7 Flash**: Targeted at **coding agents, search workflows, and real-world tool use**, with emphasis on search planning, evidence filtering, and information synthesis.

**Benchmarks and claims**
- **Hy3**: Claims to score **41 on the Artificial Analysis Intelligence Index**, with reported strength in STEM/olympiad-style tasks and a blind 270-expert evaluation vs GLM-5.1.
- **Step 3.7 Flash**: Claims **top-tier visual grounding and retrieval-augmented reasoning**, plus very high Python/coding benchmark results such as **V* (Python) 95.3**.

**Pricing and accessibility**
- **Hy3**: Listed around **$0.063 / $0.21 per million input/output tokens** on OpenRouter; a free variant also exists.
- **Step 3.7 Flash**: Listed around **$0.20 / $1.15 per million input/output tokens** on OpenRouter.

**Key similarity**
- Both are **large MoE models positioned for agent use**, not just chat.

**Key difference**
- **Hy3** reads more like a general reasoning/agent model.
- **Step 3.7 Flash** reads more like an agent/search/coding-optimized model with explicit visual grounding.

**Important caveat**
- Public benchmark claims vary by vendor and independent verifier.
- I don’t have enough concrete Hy3 technical detail yet to fully compare architecture, training scale, or agent-tool integration specifics beyond the summaries above.

If you want, I can next pull the StepFun and Tencent pages directly for a side-by-side feature/benchmark table.
