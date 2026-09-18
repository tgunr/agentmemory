---
type: Fact
title: # Fix Ollama profile with TurboQuant models

source: hermes
session_id: 20260825
description: # Fix Ollama profile with TurboQuant models

source: hermes
session_id: 20260825_005157_4d6f79
resource: hermes://session/20260825_005157_4d6f79

# Conversation

- **Session ID:** `20260825_005157_4d6
resource: agentmemory://memory/mem_mtg12nsv_eed86e52ef40
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260825_005157_4d6f79"]
timestamp: 2026-08-30T16:32:40.356Z
source: agentmemory
strength: 7
---
# Content

# Fix Ollama profile with TurboQuant models

source: hermes
session_id: 20260825_005157_4d6f79
resource: hermes://session/20260825_005157_4d6f79

# Conversation

- **Session ID:** `20260825_005157_4d6f79`
- **Source:** desktop
- **Model:** tencent/hy3:free
- **Started:** 2026-08-25T05:51:57Z
- **Ended:** 2026-08-26T09:19:45Z
- **Messages:** 233
- **Tokens:** 926263 in / 43639 out

---

### 👤 User — 2026-08-25T05:51:57Z

the profile ollama is not working with turboquant models

### 👤 User — 2026-08-25T05:51:57Z

the profile ollama is not working with turboquant models

### 👤 User — 2026-08-25T05:51:57Z

the profile ollama is not working with turboquant models

### 🤖 Assistant — 2026-08-25T05:52:12Z

<details><summary>Reasoning</summary>

The user is reporting that the `ollama` profile is not working with turboquant models. Let me check what I know from memory:

- There's a profile system in Hermes
- There are turboquant models being used with Ollama
- The memory mentions `/tq14` and `/tq27` models
- There's a mention of `ai.hermes.gateway-ollama` plist being ACTIVE for `/tq14` and `/tq27`
- TurboQuant models are served via `turboquant-mlx-work` 

Let me first check the hermes-agent skill for guidance on troubleshooting this kind of issue, then look at the actual config and status.

I need to:
1. Load the hermes-agent skill first since this is about Hermes configuration/troubleshooting
2. Check the current status of the ollama profile
3. Check the turboquant setup
4. Diagnose what's broken

Let me start by loading the hermes-agent skill and checking the profile config.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

**Tool call: terminal**

```json
{
  "command": "ls -la ~/.hermes/profiles/ollama/ && echo '---' && cat ~/.hermes/profiles/ollama/config.yaml 2>/dev/null || cat ~/.hermes/profiles/ollama/config.yml 2>/dev/null || echo 'no config found'",
  "timeout": 30
}
```

**Tool call: terminal**

```json
{
  "command": "launchctl list | grep -i hermes && echo '---' && launchctl list | grep -i turbo && echo '---' && launchctl list | grep -i ollama",
  "timeout": 30
}
```

### 🤖 Assistant — 2026-08-25T05:52:12Z

<details><summary>Reasoning</summary>

The user is reporting that the `ollama` profile is not working with turboquant models. Let me check what I know from memory:

- There's a profile system in Hermes
- There are turboquant models being used with Ollama
- The memory mentions `/tq14` and `/tq27` models
- There's a mention of `ai.hermes.gateway-ollama` plist being ACTIVE for `/tq14` and `/tq27`
- TurboQuant models are served via `turboquant-mlx-work` 

Let me first check the hermes-agent skill for guidance on troubleshooting this kind of issue, then look at the actual config and status.

I need to:
1. Load the hermes-agent skill first since this is about Hermes configuration/troubleshooting
2. Check the current status of the ollama profile
3. Check the turboquant setup
4. Diagnose what's broken

Let me start by loading the hermes-agent skill and checking the profile config.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

**Tool call: terminal**

```json
{
  "command": "ls -la ~/.hermes/profiles/ollama/ && echo '---' && cat ~/.hermes/profiles/ollama/config.yaml 2>/dev/null || cat ~/.hermes/profiles/ollama/config.yml 2>/dev/null || echo 'no config found'",
  "timeout": 30
}
```

**Tool call: terminal**

```json
{
  "command": "launchctl list | grep -i hermes && echo '---' && launchctl list | grep -i turbo && echo '---' && launchctl list | grep -i ollama",
  "timeout": 30
}
```

### 🤖 Assistant — 2026-08-25T05:52:12Z

<details><summary>Reasoning</summary>

The user is reporting that the `ollama` profile is not working with turboquant models. Let me check what I know from memory:

- There's a profile system in Hermes
- There are turboquant models being used with Ollama
- The memory mentions `/tq14` and `/tq27` models
- There's a mention of `ai.hermes.gateway-ollama` plist being ACTIVE for `/tq14` and `/tq27`
- TurboQuant models are served via `turboquant-mlx-work` 

Let me first check the hermes-agent sk
