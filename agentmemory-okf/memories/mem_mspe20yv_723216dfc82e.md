---
type: Fact
title: # Look up methods to use litellm with ollama for claude code and configure whate
description: # Look up methods to use litellm with ollama for claude code and configure whateve

source: kilo
session_id: 019c4362-50ca-7279-8d1b-333661bd24b1
resource: kilo://task/019c4362-50ca-7279-8d1b-333661bd
resource: agentmemory://memory/mem_mspe20yv_723216dfc82e
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T01:06:19.070Z
source: agentmemory
strength: 7
---
# Content

# Look up methods to use litellm with ollama for claude code and configure whateve

source: kilo
session_id: 019c4362-50ca-7279-8d1b-333661bd24b1
resource: kilo://task/019c4362-50ca-7279-8d1b-333661bd24b1

# Conversation

- **Task ID:** `019c4362-50ca-7279-8d1b-333661bd24b1`
- **Source:** kilo
- **Started:** 2026-02-09T17:10:42Z
- **Ended:** 2026-02-10T15:08:13Z
- **Message blocks:** 148
- **Tokens:** 5367690 in / 18779 out

---

### 👤 User — 2026-02-09T17:10:42Z

Look up methods to use litellm with ollama for claude code and configure whatever files need to be configured.

### 🤖 Assistant — 2026-02-09T17:10:47Z

<details><summary>Reasoning</summary>

The user wants to look up methods to use litellm with ollama for claude code and configure the necessary files. I can see from the environment details that there's already a config.yaml file at ../AI/litellm/config.yaml which suggests some configuration may already exist.

Let me first look up the documentation for using litellm with ollama to understand the proper configuration method.

</details>

### 👤 User — 2026-02-09T17:10:49Z

I'll look up the documentation for using litellm with ollama to understand the proper configuration method.


### 🤖 Assistant — 2026-02-09T17:11:53Z

<details><summary>Reasoning</summary>

Good, I found the litellm library. Let me query the documentation for specific information about configuring litellm with ollama.

</details>

### 🤖 Assistant — 2026-02-09T17:18:30Z

<details><summary>Reasoning</summary>

The user wants to use litellm with ollama for claude code. I need to also look up how to configure ollama specifically with litellm. Let me get more details on that.

</details>

### 🤖 Assistant — 2026-02-09T17:18:52Z

<details><summary>Reasoning</summary>

Now I have the information needed. Let me check the existing config.yaml file to see what's already configured, then update it to include ollama models alongside the claude models.

</details>

### 👤 User — 2026-02-09T17:18:53Z

Let me check the existing config.yaml file to see what's already configured:


### 🤖 Assistant — 2026-02-09T17:18:53Z

**Tool call: readFile**

```json
{
  "path": "/Users/davec/AI/litellm/config.yaml",
  "isOutsideWorkspace": true,
  "content": "/Users/davec/AI/litellm/config.yaml",
  "reason": ""
}
```

### 🤖 Assistant — 2026-02-09T17:19:00Z

<details><summary>Reasoning</summary>

The config.yaml already has some ollama models configured. The user wants to use litellm with ollama for claude code. I can see there's already some configuration for claude code models (claude-haiku-4-5-20251001 and claude-haiku-4-5-ollama).

However, the configuration needs some improvements based on the documentation I found:

1. The ollama models should use `ollama_chat/` prefix for chat models
2. Need to add a master_key for authentication
3. The claude code configuration needs proper environment variables set

Let me update the config.yaml to be more complete and proper for using with claude code and ollama. I'll also need to add the environment variables setup.

Looking at the config:
- Line 44-48: `claude-haiku-4-5-ollama` uses `ollama//llama3.1` which is incorrect (double slash)
- The models should use `ollama_chat/` prefix for proper chat handling
- Need to add master_key for security

Let me update the config.yaml with proper ollama configuration and claude code integration.

</details>

### 👤 User — 2026-02-09T17:19:05Z

I can see the existing config has some ollama models, but there are issues. Based on the documentation, I'll update the config.yaml with proper ollama configuration for claude code integration:


### 🤖 Assistant — 2026-02-09T17:19:25Z

**Tool call: appliedDiff**

```json
{
  "path": "/Users/davec/AI/litellm/config.yaml",
  "diff": "@@ -1,15 +1,17 @@\n model_list:\n+  # Ollama models with proper chat prefix\n   - model_name: qwen3-coder\n     litellm_params:\n-      model: ollama/qwen3:1.7b\n-      api_base: http://localhost:11434/v1\n-      api_key: lmstudio\n+      model: ollama_chat/qwen3:1.7b\n+      api_base: http://localhost:11434\n \n-  - model_name: \"llama3.1\"             \n+  - model_name: \"llama3.1\"\n     litellm_params:\n-      model: \"ollama/llama3.
