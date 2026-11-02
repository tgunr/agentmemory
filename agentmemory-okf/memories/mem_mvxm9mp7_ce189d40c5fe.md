---
type: Fact
title: # Switch hermes compression to kilo provider model

source: hermes
session_id: l
description: # Switch hermes compression to kilo provider model

source: hermes
session_id: local-57a4506dc22c36b8867a1f3f0ee739a6c759b503e78178bd1ed01c6192ad7d30
resource: hermes://session/local-57a4506dc22c36b88
resource: agentmemory://memory/mem_mvxm9mp7_ce189d40c5fe
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/.hermes/hermes-agent"]
timestamp: 2026-11-01T09:17:26.977Z
source: agentmemory
strength: 7
---
# Content

# Switch hermes compression to kilo provider model

source: hermes
session_id: local-57a4506dc22c36b8867a1f3f0ee739a6c759b503e78178bd1ed01c6192ad7d30
resource: hermes://session/local-57a4506dc22c36b8867a1f3f0ee739a6c759b503e78178bd1ed01c6192ad7d30

# Conversation

- **Session ID:** `local-57a4506dc22c36b8867a1f3f0ee739a6c759b503e78178bd1ed01c6192ad7d30`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-31T09:50:36Z
- **Ended:** 2026-10-31T09:56:39Z
- **Messages:** 40
- **CWD:** `/Users/davec/.hermes/hermes-agent`
- **Tokens:** 59078 in / 6878 out
- **Est. cost:** $-26230.0000

---

### 👤 User — 2026-10-31T09:51:24Z

change the hermes compression model to use an appropriate kilo provider model

### 🤖 Assistant — 2026-10-31T09:51:34Z

<details><summary>Reasoning</summary>

The user wants to change the Hermes compression model to use an appropriate Kilo provider model. Let me look at config.

Let me check the current config and the model selection skill maybe. Let me batch reads.

</details>

**Tool call: terminal**

```json
{
  "command": "grep -n -i -A15 \"compress\" /Users/davec/.hermes/config.yaml | head -80"
}
```

**Tool call: terminal**

```json
{
  "command": "grep -n -i -B2 -A20 \"kilo\" /Users/davec/.hermes/config.yaml | head -120"
}
```

### 🤖 Assistant — 2026-10-31T09:51:39Z

<details><summary>Reasoning</summary>

Compression is currently kilo-auto/efficient with kilocode provider. The user wants "an appropriate kilo provider model" — meaning the compression model should be an actual Kilo (kilo.ai) model rather than kilo-auto router? Hmm. "kilo provider" — the model-switch / model-selection-routing skill likely lists kilo models. Let me load the relevant skill and check available kilocode models.

The user says "change the hermes compression model to use an appropriate kilo provider model". Currently it IS kilocode provider with kilo-auto/efficient. Maybe "appropriate" means a free/dedicated model like kilo/z-ai/glm-5 or kilo-auto/free? Actually kilo provider models look like `kilo/model` format? In this config the model names are like `poolside/laguna-s-2.1:free` with provider kilocode. Hmm, so kilocode provider serves kilo's own models.

Let me check the skill model-selection-routing and what models kilocode offers.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && ls ~/.hermes/cache/scratch 2>/dev/null | head; grep -rn \"kilo\" ~/.hermes/config.yaml | grep -i \"model:\" | head -30"
}
```

**Tool call: skill_view**

```json
{
  "name": "model-selection-routing"
}
```

### 🤖 Assistant — 2026-10-31T09:51:59Z

<details><summary>Reasoning</summary>

The compression model is already `kilo-auto/efficient` with provider `kilocode`. The user says "use an appropriate kilo provider model" — perhaps they mean a specific Kilo model rather than the auto-router. Hmm, ambiguous. But "kilo provider model" could mean the model id should be a Kilo model, i.e. `kilo/...`? Actually in Kilo Code, models are like `kilo/kilo-auto/free`? Hmm.

Let me check what kilocode provider model list is available. There may be a models catalog in hermes-agent. Let's check `hermes models` or the provider catalog.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && grep -rn \"kilo-auto\" --include=*.py -l | head -20; echo ---; grep -rn \"kilo\" model_catalog* 2>/dev/null | head"
}
```

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && cat ~/.hermes/config.yaml | sed -n '1,50p'"
}
```

### 🤖 Assistant — 2026-10-31T09:52:18Z

<details><summary>Reasoning</summary>

Current is already kilocode + kilo-auto/efficient. What could "appropriate kilo provider model" mean? Possibly the user observed compression failing (e.g. auto router not returning valid results) and wants a specific, concrete kilo model. Let me check the actual available kilocode models via the models list endpoint, and check hermes_cli/models_pricing.py for kilo entries.

Also check whether kmodel switching to e.g. `kilo-auto/free` (free tier) would be cheaper. But the intent: "change the hermes compression model to use an appropriate kilo provider model". Maybe compression currently set to a non-kilo mod
