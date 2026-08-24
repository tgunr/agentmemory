---
type: Fact
title: # Model used for compress command

source: hermes
session_id: 20260724_050915_cc
description: # Model used for compress command

source: hermes
session_id: 20260724_050915_ccfc28
resource: hermes://session/20260724_050915_ccfc28

# Conversation

- **Session ID:** `20260724_050915_ccfc28`
- **S
resource: agentmemory://memory/mem_mspdvutz_1416a1421606
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:01:31.190Z
source: agentmemory
strength: 7
---
# Content

# Model used for compress command

source: hermes
session_id: 20260724_050915_ccfc28
resource: hermes://session/20260724_050915_ccfc28

# Conversation

- **Session ID:** `20260724_050915_ccfc28`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-07-24T10:09:15Z
- **Messages:** 9
- **CWD:** `/Users/davec`
- **Tokens:** 56004 in / 1346 out

---

### 👤 User — 2026-07-24T10:09:16Z

what model is being used for `/compress'?

### 🤖 Assistant — 2026-07-24T10:09:21Z

<details><summary>Reasoning</summary>

The user is asking about what model is being used for `/compress`. This seems to be a Hermes Agent specific command. Let me check the hermes-agent skill or documentation to understand `/compress`.

Let me think. `/compress` is likely a context compression command in Hermes. I should look at the hermes-agent skill or docs. Let me load the skill.

Actually, let me think about what I know. The `/compress` command in Hermes probably uses a specific model for summarization/compression. I should check the hermes-agent skill documentation.

Let me load the hermes-agent

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 🤖 Assistant — 2026-07-24T10:09:33Z

<details><summary>Reasoning</summary>

The user is asking about what model is used for `/compress`. This is the context compression feature. The skill mentions compression config in the compression section, but doesn't specify the model. There's an "auxiliary" model concept mentioned:

"### Auxiliary models not working
If `auxiliary` tasks (vision, compression, session_search) fail silently, the `auto` provider can't find a backend. Either set `OPENROUTER_API_KEY` or `GOOGLE_API_KEY`, or explicitly configure each auxiliary task's provider:
```bash
hermes config set auxiliary.vision.provider <your_provider>
hermes config set auxiliary.vision.model <model_name>
```"

So compression is an auxiliary task. Let me check the config. The `/compress` command manually compresses context. Let me look at the actual configuration.

Let me check the config.yaml and also the relevant source code. Let me look at the compression configuration. The user wants to know what model is being used for `/compress`.

Let me check the config and possibly the source code for how compression picks a model.

Let me check the config first

</details>

**Tool call: terminal**

```json
{
  "command": "cat ~/.hermes/config.yaml 2>/dev/null | sed -n '1,200p' | grep -iA8 -B2 'compression\\|auxiliary' ; echo \"---CONFIG END---\""
}
```

**Tool call: search_files**

```json
{
  "pattern": "compression|auxiliary\\.compression|compress",
  "path": "~/.hermes",
  "file_glob": "config.yaml",
  "output_mode": "content",
  "context": 3
}
```

### 🤖 Assistant — 2026-07-24T10:09:40Z

<details><summary>Reasoning</summary>

Let me look at the compression block more fully. Let me read the relevant lines of config.yaml

</details>

**Tool call: read_file**

```json
{
  "path": "~/.hermes/config.yaml",
  "offset": 258,
  "limit": 12
}
```

### 🤖 Assistant — 2026-07-24T10:09:53Z

<details><summary>Reasoning</summary>

The compression config block:
- provider: apple-fm
- model: system
- base_url: http://localhost:8001/v1

So `/compress` (manual) and automatic compression both use the compression auxiliary model configured under `compression:`. In this case, the provider is `apple-fm` with model `system`, hitting a local endpoint at http://localhost:8001/v1.

What does `model: system` mean? Likely the Apple Foundation Models "system" model — Apple's on-device foundation model. apple-fm provider uses Apple's local foundation models (like the one in Apple Intelligence). "system" is probably the default on-device model.

Let me confirm what apple-fm is. The provider apple-fm — this is Apple Foundation Models, an on-device local provider. `model: system` refers to the system foundation model on Apple Silicon.

So the answer: `/compress` uses the compression auxiliary model, which is configured as provider `apple-fm`, model `system` (Apple's on-device Foundation Model), pointed at a local server at http://localhost:8001/v1.

Let m
