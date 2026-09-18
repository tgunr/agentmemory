---
type: Fact
title: # Configuring custom provider at localhost:8001/v1

source: hermes
session_id: 2
description: # Configuring custom provider at localhost:8001/v1

source: hermes
session_id: 20260713_124016_9612b9
resource: hermes://session/20260713_124016_9612b9

# Conversation

- **Session ID:** `20260713_124
resource: agentmemory://memory/mem_msp0cwak_10bb53383b02
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260713_124016_9612b9"]
timestamp: 2026-08-11T18:42:51.636Z
source: agentmemory
strength: 7
---
# Content

# Configuring custom provider at localhost:8001/v1

source: hermes
session_id: 20260713_124016_9612b9
resource: hermes://session/20260713_124016_9612b9

# Conversation

- **Session ID:** `20260713_124016_9612b9`
- **Source:** tui
- **Model:** kilo-auto/balanced
- **Started:** 2026-07-13T17:41:19Z
- **Ended:** 2026-07-13T20:09:04Z
- **Messages:** 34
- **Tokens:** 90 in / 1624 out
- **Est. cost:** $0.0545

---

### 👤 User — 2026-07-13T17:41:19Z

Configure custom provider with base_url http://localhost:8001/v1

### 👤 User — 2026-07-13T17:41:42Z

[System: The active model for this chat has changed to kilo-auto/balanced via provider kilo. From this point forward, use this runtime metadata when answering questions about what model/provider is active.]

### 👤 User — 2026-07-13T17:42:01Z

[System: The active model for this chat has changed to kilo-auto/balanced via provider kilo. From this point forward, use this runtime metadata when answering questions about what model/provider is active.]

### 👤 User — 2026-07-13T17:42:06Z

Configure custom provider with base_url http://localhost:8001/v1

### 🤖 Assistant — 2026-07-13T17:42:11Z

<details><summary>Reasoning</summary>

The user wants to configure a custom provider with a specific base_url. This is about Hermes Agent configuration, so I should load the hermes-agent skill first.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 🤖 Assistant — 2026-07-13T17:42:18Z

<details><summary>Reasoning</summary>

The user wants to configure a custom provider with base_url http://localhost:8001/v1. From the skill, I can see that custom endpoints are configured via `model.base_url` + `model.api_key` in config.yaml. Let me check the current config and set up the custom provider.

I need to ask what model name they want to use with this endpoint, and whether they need an API key. But actually, let me just set the base_url and ask about the model. Let me first check what's currently configured.

</details>

**Tool call: terminal**

```json
{
  "command": "head -20 ~/.hermes/config.yaml"
}
```

### 🤖 Assistant — 2026-07-13T17:42:22Z

<details><summary>Reasoning</summary>

...


</details>

**Tool call: terminal**

```json
{
  "command": "grep -n 'custom_providers\\|base_url\\|provider' ~/.hermes/config.yaml | head -30"
}
```

### 🤖 Assistant — 2026-07-13T17:42:27Z

<details><summary>Reasoning</summary>

The user wants to configure a custom provider with base_url http://localhost:8001/v1. I need to check the current model configuration section and understand how custom providers are configured in Hermes.

From the skill, I can see that custom providers use `model.base_url` + `model.api_key` in config.yaml. But I should check if there's a custom_providers section or if it's just setting the base_url directly.

Let me check the model section of the config more carefully.

</details>

**Tool call: read_file**

```json
{
  "path": "~/.hermes/config.yaml",
  "offset": 65,
  "limit": 110
}
```

### 🤖 Assistant — 2026-07-13T17:42:31Z

<details><summary>Reasoning</summary>

...


</details>

**Tool call: terminal**

```json
{
  "command": "grep -n 'custom_providers\\|^model:' ~/.hermes/config.yaml"
}
```

### 🤖 Assistant — 2026-07-13T17:42:35Z

<details><summary>Reasoning</summary>

No `custom_providers` key exists yet. Let me check the reference for model provider pitfalls to see the exact config format for custom providers.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent",
  "file_path": "references/model-provider-pitfalls.md"
}
```

### 🤖 Assistant — 2026-07-13T17:42:40Z

<details><summary>Reasoning</summary>

...
→ `custom:<name>` for a provider defined in `custom_providers` config — always include the `:<name>` suffix, never pass the bare 'custom'."

So the user wants a custom provider with `base_url: http://localhost:8001/v1`. I need to:
1. Add it to `custom_providers` in config.yaml
2. Set it as the active model provider

Let me check the config structure for `custom_providers`.

</details>

**Tool call: terminal**

```json
{
  "command": "grep -n 'custom_providers' ~/.hermes/config.yaml"
}
```

