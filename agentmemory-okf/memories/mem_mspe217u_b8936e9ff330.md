---
type: Fact
title: # ❯ hello    ⎿  ⧉ Selected 1 lines from ../AI/litellm/config.yaml in Visual Stud
description: # ❯ hello    ⎿  ⧉ Selected 1 lines from ../AI/litellm/config.yaml in Visual Studio

source: kilo
session_id: 019c4819-13d1-76cf-9cb9-d7dd9aebcfc6
resource: kilo://task/019c4819-13d1-76cf-9cb9-d7dd9aeb
resource: agentmemory://memory/mem_mspe217u_b8936e9ff330
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T01:06:19.367Z
source: agentmemory
strength: 7
---
# Content

# ❯ hello    ⎿  ⧉ Selected 1 lines from ../AI/litellm/config.yaml in Visual Studio

source: kilo
session_id: 019c4819-13d1-76cf-9cb9-d7dd9aebcfc6
resource: kilo://task/019c4819-13d1-76cf-9cb9-d7dd9aebcfc6

# Conversation

- **Task ID:** `019c4819-13d1-76cf-9cb9-d7dd9aebcfc6`
- **Source:** kilo
- **Started:** 2026-02-10T15:08:49Z
- **Ended:** 2026-02-11T13:43:35Z
- **Message blocks:** 206
- **Tokens:** 7732649 in / 27414 out

---

### 👤 User — 2026-02-10T15:08:49Z

❯ hello 
  ⎿  ⧉ Selected 1 lines from ../AI/litellm/config.yaml in Visual Studio Code
  ⎿  API Error: 400 {"error":{"message":"400: {'error': 'anthropic_messages: Invalid model name passed in model=--model. Call `/v1/models` to view available models for 
     your key.'}","type":"None","param":"None","code":"400"}}

### 🤖 Assistant — 2026-02-10T15:08:55Z

<details><summary>Reasoning</summary>

The user is reporting an API error with LiteLLM. The error message shows:

```
API Error: 400 {"error":{"message":"400: {'error': 'anthropic_messages: Invalid model name passed in model=--model. Call `/v1/models` to view available models for your key.'}","type":"None","param":"None","code":"400"}}
```

This indicates that an invalid model name was passed (specifically `--model` which looks like a command-line flag rather than an actual model name). The user has the file `../AI/litellm/config.yaml` open in Visual Studio Code.

Let me read the config.yaml file to see what's causing this issue - likely there's a model configuration that's incorrectly set.

</details>

### 🤖 Assistant — 2026-02-10T15:08:58Z

**Tool call: readFile**

```json
{
  "path": "/Users/davec/AI/litellm/config.yaml",
  "isOutsideWorkspace": true,
  "content": "/Users/davec/AI/litellm/config.yaml",
  "reason": ""
}
```

### 🤖 Assistant — 2026-02-10T15:09:05Z

<details><summary>Reasoning</summary>

Looking at the config file and the error message, the error says:

```
API Error: 400 {"error":{"message":"400: {'error': 'anthropic_messages: Invalid model name passed in model=--model. Call `/v1/models` to view available models for your key.'}","type":"None","param":"None","code":"400"}}
```

The key issue is `model=--model` which indicates that somewhere the model parameter is being passed as `--model` (a command-line flag) instead of an actual model name. 

This suggests that Claude Code or another client is trying to make a request with `--model` as the model name. This could be happening because:

1. The LiteLLM proxy is receiving a request where the model name wasn't properly parsed or mapped
2. Claude Code might be passing `--model` as an argument somewhere

Let me check the docker-compose.yml and the environment configuration to understand how Claude Code is configured to connect to LiteLLM.

Looking at the config.yaml, the model mappings look correct. The issue is likely that Claude Code is being configured with `--model` as the model name instead of one of the mapped model names like `claude-sonnet-4-20250519`.

I should check the Claude Code configuration files to see how the model is being specified.

</details>

### 👤 User — 2026-02-10T15:09:10Z

The error shows `model=--model` being passed, which indicates Claude Code is using `--model` as the model name instead of one of the configured model names. Let me check the Claude Code setup script and environment:


### 🤖 Assistant — 2026-02-10T15:09:10Z

**Tool call: readFile**

```json
{
  "batchFiles": [
    {
      "path": "/Users/davec/AI/litellm/claude-code-setup.sh",
      "lineSnippet": "",
      "isOutsideWorkspace": true,
      "key": "/Users/davec/AI/litellm/claude-code-setup.sh",
      "content": "/Users/davec/AI/litellm/claude-code-setup.sh"
    },
    {
      "path": "/Users/davec/AI/litellm/.env",
      "lineSnippet": "",
      "isOutsideWorkspace": true,
      "key": "/Users/davec/AI/litellm/.env",
      "content": "/Users/davec/AI/litellm/.env"
    }
  ]
}
```

### 🤖 Assistant — 2026-02-10T15:09:17Z

<details><summary>Reasoning</summary>

The issue is clear now. The error `model=--model` means Claude Code is being invoked with `--model` as a command-line argument, but that argument value is being passed through to the LiteLLM proxy instead of 
