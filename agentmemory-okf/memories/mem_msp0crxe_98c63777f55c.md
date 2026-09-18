---
type: Fact
title: # Jo profile Ollama connection issue

source: hermes
session_id: 20260707_112844
description: # Jo profile Ollama connection issue

source: hermes
session_id: 20260707_112844_9da40f
resource: hermes://session/20260707_112844_9da40f

# Conversation

- **Session ID:** `20260707_112844_9da40f`
- 
resource: agentmemory://memory/mem_msp0crxe_98c63777f55c
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/Factor"]
timestamp: 2026-08-11T18:42:45.979Z
source: agentmemory
strength: 7
---
# Content

# Jo profile Ollama connection issue

source: hermes
session_id: 20260707_112844_9da40f
resource: hermes://session/20260707_112844_9da40f

# Conversation

- **Session ID:** `20260707_112844_9da40f`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-07-07T16:29:11Z
- **Ended:** 2026-07-07T17:12:08Z
- **Messages:** 146
- **CWD:** `/Users/davec/Factor`
- **Tokens:** 1352771 in / 12706 out
- **Est. cost:** $0.9087

---

### 👤 User — 2026-07-07T16:29:13Z

the jo profile is having trouble connecting to its ollama model, please investigate

### 🤖 Assistant — 2026-07-07T16:31:46Z

<details><summary>Reasoning</summary>

Let me investigate the Ollama connection issue for the 'jo' profile. I'll check the profile configuration and test Ollama connectivity.

</details>

**Tool call: browser_navigate**

```json
{
  "url": "file:///Users/davec/.hermes/profiles/jo/"
}
```

**Tool call: terminal**

```json
{
  "command": "cat ~/.hermes/profiles/jo/config.yaml 2>/dev/null || echo \"No config.yaml found\""
}
```

### 🤖 Assistant — 2026-07-07T16:31:46Z

<details><summary>Reasoning</summary>

I see the issue. The jo profile has:
- `model.default: HammerAI/mn-mag-mell-r1:12b-q4_K_M`
- `model.provider: openrouter`

But Ollama is configured as `providers.ollama-launch` with `api: http://127.0.0.1:11434/v1`. The model is set to use the `openrouter` provider, not the local Ollama provider. Also, Ollama plugin (`ollama-cloud-provider`) is disabled.

Let me check if Ollama is running and what models are available.

</details>

**Tool call: terminal**

```json
{
  "command": "curl -s http://127.0.0.1:11434/api/tags 2>&1 | head -100; echo \"---EXIT:$?\""
}
```

**Tool call: skill_view**

```json
{
  "name": "ollama-provider-troubleshooting"
}
```

### 🤖 Assistant — 2026-07-07T16:31:46Z

<details><summary>Reasoning</summary>


Now I understand the issue. Looking at the config and the troubleshooting guide:

1. The jo profile has `model.provider: openrouter` but wants to use Ollama
2. The Ollama provider is configured as `ollama-launch` (not `ollama`)
3. The model is `HammerAI/mn-mag-mell-r1:12b-q4_K_M` which has a colon in the name

The key issues from the troubleshooting guide:
1. Model catalog normalization (`model_catalog.enabled: true` by default) converts `:` to `/` which breaks Ollama model names
2. The model is set to use `openrouter` provider instead of `ollama-launch`

Let me check if there are any logs that might show the actual error, and then I'll fix the configuration.

</details>

**Tool call: terminal**

```json
{
  "command": "ls -la ~/.hermes/profiles/jo/logs/ 2>/dev/null | head -20; echo \"---\"; tail -50 ~/.hermes/logs/*.log 2>/dev/null | grep -i \"ollama\\|error\\|model\" | head -30"
}
```

### 🤖 Assistant — 2026-07-07T16:31:46Z

<details><summary>Reasoning</summary>


Now I can see the actual error. The log shows:
1. The profile is trying to use `HammerAI/mn-mag-mell-r1:12b-q4_K_M` via the `openrouter` provider
2. OpenRouter returns HTTP 400: "HammerAI/mn-mag-mell-r1:12b-q4_K_M is not a valid model ID"

The issue is clear:
1. The jo profile has `model.provider: openrouter` but the model `HammerAI/mn-mag-mell-r1:12b-q4_K_M` is an Ollama model, not an OpenRouter model
2. The model catalog normalization is converting the colon to slash, but the model isn't available on OpenRouter anyway

The fix should be:
1. Change the provider to `ollama-launch` (the Ollama provider configured in the profile)
2. Disable model catalog normalization to prevent `:` → `/` conversion
3. Optionally, use a different model that's known to work well with Hermes (like `qwen3:1.7b` or `llama3.2:3b`)

Let me fix the configuration.

</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/profiles/jo/config.yaml"
}
```

### 🤖 Assistant — 2026-07-07T16:31:46Z

<details><summary>Reasoning</summary>


I can see the issue clearly now. The config shows:
- `model.provider: openrouter` - but the model is an Ollama model
- `model.default: HammerAI/mn-mag-mell-r1:12b-q4_K_M` - this is an Ollama model with a colon

I need to fix the configuration. Let me apply the fixes 
